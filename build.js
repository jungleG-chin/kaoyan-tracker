/**
 * 构建脚本：扫描 data_src/*.md → 生成 data/data.js
 * 用法：node build.js
 * 运行后，双击 kaoyan_db.html 即可直接使用（无需 HTTP 服务器）
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'data_src');
const DST = path.join(__dirname, 'data');

// ========== YAML frontmatter 解析（无依赖） ==========
function parseFrontmatter(raw) {
  // 兼容 \n 和 \r\n 换行
  const m = raw.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]*/);
  if (!m) return { data: {}, content: raw };
  const fm = m[1];
  const content = raw.slice(m[0].length);
  const data = {};
  // 简单 YAML 解析（支持 string/number/boolean/list）
  const lines = fm.split(/\r?\n/);
  let currentKey = null;
  let inList = false;
  let listItems = [];
  for (const line of lines) {
    // list item
    if (line.match(/^\s*-\s+/)) {
      inList = true;
      const val = line.replace(/^\s*-\s+/, '').trim().replace(/^['"]|['"]$/g, '');
      listItems.push(val);
      continue;
    }
    // finish previous list
    if (inList && currentKey) {
      data[currentKey] = listItems;
      listItems = [];
      inList = false;
    }
    // key: value（[^:]+ 支持中文字段名）
    const kv = line.match(/^([^:\s]+)\s*:\s*(.+)$/);
    if (kv) {
      currentKey = kv[1].trim();
      let val = kv[2].trim().replace(/^['"]|['"]$/g, '');
      if (val === 'true') val = true;
      else if (val === 'false') val = false;
      else if (/^-?\d+(\.\d+)?$/.test(val)) val = Number(val);
      data[currentKey] = val;
    }
  }
  if (inList && currentKey) data[currentKey] = listItems;
  return { data, content };
}

// ========== 截取内容片段（支持 `- **标签**：内容` 格式）==========
function pick(lines, label) {
  for (const l of lines) {
    const m = l.match(new RegExp(`^\\s*[-*]\\s*\\*\\*${label}\\*\\*[：:]\\s*(.+)`));
    if (m) return m[1].trim();
  }
  return '';
}

// ========== 1. 解析学科 syllabus ==========
function parseSyllabus() {
  const result = {};
  const files = fs.readdirSync(SRC).filter(f => f.endsWith('.md') && f !== 'progress.md');
  for (const f of files) {
    const raw = fs.readFileSync(path.join(SRC, f), 'utf-8');
    const { data, content } = parseFrontmatter(raw);
    if (data.type !== 'syllabus') continue;
    const chapters = [];
    for (const line of content.split(/\r?\n/)) {
      const m = line.match(/^##\s+(.+)/);
      if (m) chapters.push(m[1].trim());
    }
    if (chapters.length > 0) {
      result[String(data.subject)] = { name: String(data.subject), chapters };
    }
  }
  return result;
}

// ========== 2. 解析日志 ==========
function parseLogs() {
  const logDir = path.join(SRC, '复习日志');
  if (!fs.existsSync(logDir)) return [];
  const files = fs.readdirSync(logDir).filter(f => f.endsWith('.md'));
  const logs = [];

  for (const f of files) {
    const raw = fs.readFileSync(path.join(logDir, f), 'utf-8');
    const { data, content } = parseFrontmatter(raw);
    if (data.type !== 'log') continue;

    // 过滤掉空日志（0题）
    if (!content || content.trim() === '') {
      console.log(`  ⚠ 跳过空日志: ${f}`);
      continue;
    }

    const questions = [];
    // 按 ## 标题分割题目块（兼容 \r\n 和 \n）
    const blocks = content.split(/\r?\n(?=## )/);
    for (const block of blocks) {
      const headMatch = block.match(/^##\s+(.+?)\s*\[(.+?)\s*·\s*(\d+)\/(\d+)\]/);
      if (!headMatch) continue;
      const headInfo = headMatch[1].trim();  // e.g. "Q1 · 408 · OS 运行模式"
      const status = headMatch[2].trim();
      const score = parseInt(headMatch[3]);
      const max = parseInt(headMatch[4]);

      // 解析 headInfo
      const parts = headInfo.split('·').map(s => s.trim());
      const qid = parts[0] || '?';
      const subject = parts[1] || '';
      const topic = parts.slice(2).join(' · ') || '';

      const lines = block.split(/\r?\n/);
      const question = pick(lines, '题目');
      const userAnswer = pick(lines, '你的回答');
      const chapter = pick(lines, '章节');
      const keyAnswer = pick(lines, '标准答案');
      const missing = pick(lines, '缺漏');
      const thinking = pick(lines, '思路');
      const isWrongStr = pick(lines, '错误');
      const isWrong = isWrongStr === '是';
      const typeStr = pick(lines, '类型');
      // 推断类型：显式标注 > ID 前缀推断
      let knowledgeType = typeStr || '';
      if (!knowledgeType) {
        if (qid.startsWith('Q')) knowledgeType = '错题';
        else if (qid.startsWith('K') || qid.startsWith('INSIGHT')) knowledgeType = '总结';
        else if (isWrong) knowledgeType = '错题';
        else if (status === 'pass') knowledgeType = '总结';
        else knowledgeType = '错题';
      }

      questions.push({
        id: qid,
        subject,
        chapter,
        topic,
        question,
        userAnswer,
        score,
        max,
        status,
        isWrong,
        knowledgeType,
        missing: missing || '',
        keyAnswer: keyAnswer || '',
        thinking: thinking || ''
      });
    }

    if (questions.length > 0) {
      logs.push({
        date: data.date,
        title: data.title || '无标题',
        summary: data.summary || '',
        questions
      });
    }
  }

  // 按日期排序
  logs.sort((a, b) => a.date.localeCompare(b.date));
  return logs;
}

// ========== 3. 解析进度 ==========
function parseProgress() {
  const fpath = path.join(SRC, 'progress.md');
  if (!fs.existsSync(fpath)) return { math: 0, eng: 0, pol: 0, cs: 0 };
  const raw = fs.readFileSync(fpath, 'utf-8');
  const { data } = parseFrontmatter(raw);
  const result = { math: 0, eng: 0, pol: 0, cs: 0 };
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/\|\s*(数学|英语|政治|408)\s*\|\s*(\d+)%\s*\|/);
    if (m) {
      const key = { '数学': 'math', '英语': 'eng', '政治': 'pol', '408': 'cs' }[m[1]];
      if (key) result[key] = parseInt(m[2]);
    }
  }
  result.updated = data.updated || '';
  return result;
}

// ========== 速记卡（硬编码，稳定不变） ==========
const MEMO_CARDS = [
  {
    tag: "1^∞ 型", title: "1^∞ 型极限三件套",
    steps: [
      "判型：lim f(x)^g(x)，f → 1, g → ∞",
      "取对数：ln y = g · ln f",
      "等价无穷小：f → 1 时，ln f ~ f - 1",
      "ln y ~ g · (f - 1)",
      "原极限 = e^[lim g(f-1)]"
    ],
    example: "例：lim (1+sin 2x²)^(1/x⁴) = e^[lim (1/x⁴)·2x²] = e^∞ = +∞",
    tip: "关键：用 g·(f-1) 替代 g·ln f，否则会漏算"
  },
  {
    tag: "泰勒", title: "4 个泰勒模板（必背）",
    formulas: [
      "e^x = 1 + x + x²/2! + x³/3! + ...",
      "1/(1+u) = 1 - u + u² - u³ + ...",
      "sin u = u - u³/3! + u⁵/5! - ...",
      "ln(1+u) = u - u²/2 + u³/3 - ..."
    ],
    tip: "sin/ln 只展奇次或正负交替；1/(1+u) 用几何级数；展到 n 阶 → 取前 n+1 项"
  },
  {
    tag: "取舍", title: "等价 vs 夹逼 vs 洛必达",
    table: [
      ["单一因式相乘/相除", "等价无穷小", "题 23、34"],
      ["差的极限（求主导项）", "取主项 + 等价", "题 32"],
      ["n 项求和/求积", "夹逼 或 定积分定义", "题 25、38"],
      ["0/0 或 ∞/∞ 通用", "洛必达（最笨但通用）", "兜底"]
    ],
    tip: "口诀：'单用等，多用夹，差取主，洛兜底'"
  },
  {
    tag: "408", title: "进程/线程共享 vs 私有",
    table: [
      ["共享", "堆 / 代码段 / 数据段 / 文件描述符 / 全局变量"],
      ["私有", "栈 / 寄存器 / PC / 线程局部存储"]
    ],
    tip: "进程是资源分配单位；线程是 CPU 调度单位"
  },
  {
    tag: "408", title: "Peterson vs TSL",
    table: [
      ["Peterson", "软件算法，单核可用，忙等 + 礼让"],
      ["TSL", "硬件原子指令，多核可用，忙等但无饥饿"]
    ],
    tip: "两者都忙等！TSL 优势是'硬件原子 + 可用于多核'，不是'不忙等'"
  },
  {
    tag: "408", title: "进程切换触发条件",
    table: [
      ["会触发", "时间片用完 / 阻塞 I/O / 高优先级就绪 / 进程退出"],
      ["不触发", "纯计算型系统调用 / 中断处理结束（仅恢复现场）"]
    ],
    tip: "'中断处理结束一定切换'是错的——只是恢复现场"
  },
  {
    tag: "Σ公式", title: "求和公式（凑定积分必备）",
    formulas: [
      "Σk (k=1..n) = n(n+1)/2",
      "Σk² (k=1..n) = n(n+1)(2n+1)/6",
      "Σk³ (k=1..n) = [n(n+1)/2]²"
    ],
    tip: "n 项求和极限 → 提 1/n → Σ(k/n)^m → ∫₀¹ x^m dx = 1/(m+1)"
  }
];

// ========== 主流程 ==========
console.log('📦 构建 data/data.js ...\n');

const syllabus = parseSyllabus();
console.log(`  📚 学科: ${Object.keys(syllabus).length} 门`);

const logs = parseLogs();
console.log(`  📝 日志: ${logs.length} 条`);

const progress = parseProgress();
console.log(`  📊 进度: math=${progress.math}% eng=${progress.eng}% pol=${progress.pol}% cs=${progress.cs}%`);

// 生成 data.js
const appData = {
  syllabus,
  logs: { list: logs },
  progress,
  memoCards: MEMO_CARDS
};

// 确保 data/ 目录存在
if (!fs.existsSync(DST)) fs.mkdirSync(DST, { recursive: true });

const jsContent = `// 自动生成于 ${new Date().toISOString().slice(0, 19)}
// 由 build.js 扫描 data_src/*.md 生成
// 请勿手动编辑此文件！修改 MD 源文件后运行 node build.js 重新生成
const APP_DATA = ${JSON.stringify(appData, null, 2)};
`;

fs.writeFileSync(path.join(DST, 'data.js'), jsContent, 'utf-8');
console.log(`\n✅ 构建完成！data/data.js 已生成 (${(jsContent.length / 1024).toFixed(1)} KB)`);

// 同时将数据内联到 kaoyan_db.html 中（无需外部文件加载）
const htmlPath = path.join(__dirname, 'kaoyan_db.html');
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf-8');
  
  const marker = '<!-- ===== 核心：数据已内联（无需外部文件，双击即用） ===== -->';
  
  if (html.includes(marker)) {
    // 找到标记后的 <script> 标签
    const markerPos = html.indexOf(marker);
    const scriptPos = html.indexOf('<script>', markerPos);
    const syllabusPos = html.indexOf('const SYLLABUS = (APP_DATA', scriptPos);
    
    if (scriptPos !== -1 && syllabusPos !== -1) {
      // 保留标记和 <script> 标签，替换中间的数据内容
      const before = html.slice(0, scriptPos + '<script>'.length);
      const after = html.slice(syllabusPos);
      const newBlock = before + '\n// 数据由 build.js 从 MD 源文件生成，如需更新请运行 node build.js\n' + jsContent + '\n' + after;
      fs.writeFileSync(htmlPath, newBlock, 'utf-8');
      console.log(`✅ kaoyan_db.html 已更新（数据内联，无需外部文件）`);
    }
  }
}

console.log('   现在可以直接双击 kaoyan_db.html 查看（无需 HTTP 服务器）');
