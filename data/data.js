// 自动生成于 2026-07-03T03:50:14
// 由 build.js 扫描 data_src/*.md 生成
// 请勿手动编辑此文件！修改 MD 源文件后运行 node build.js 重新生成
const APP_DATA = {
  "syllabus": {
    "408": {
      "name": "408",
      "chapters": [
        "【DS】一、线性表",
        "【DS】二、栈、队列和数组",
        "【DS】三、串",
        "【DS】四、树与二叉树",
        "【DS】五、图",
        "【DS】六、查找",
        "【DS】七、排序",
        "【CO】一、计算机系统概述",
        "【CO】二、数据的表示和运算",
        "【CO】三、存储系统",
        "【CO】四、指令系统",
        "【CO】五、中央处理器",
        "【CO】六、总线",
        "【CO】七、输入/输出系统",
        "【OS】一、操作系统概述与运行环境",
        "【OS】二、进程管理",
        "【OS】三、内存管理",
        "【OS】四、文件管理",
        "【OS】五、输入/输出管理",
        "【CN】一、计算机网络体系结构",
        "【CN】二、物理层",
        "【CN】三、数据链路层",
        "【CN】四、网络层",
        "【CN】五、传输层",
        "【CN】六、应用层"
      ]
    },
    "政治": {
      "name": "政治",
      "chapters": [
        "一、马原（马克思主义基本原理）",
        "二、毛中特（毛泽东思想和中国特色社会主义理论体系概论）",
        "三、史纲（中国近现代史纲要）",
        "四、思修法基（思想道德与法治）",
        "五、形势与政策以及当代世界经济与政治"
      ]
    },
    "数学二": {
      "name": "数学二",
      "chapters": [
        "一、函数、极限、连续",
        "二、一元函数微分学",
        "三、一元函数积分学",
        "四、多元函数微分学",
        "五、多元函数积分学",
        "六、常微分方程",
        "七、线性代数（行列式）",
        "八、线性代数（矩阵）",
        "九、线性代数（向量）",
        "十、线性代数（方程组）",
        "十一、线性代数（特征值与二次型）"
      ]
    },
    "英语二": {
      "name": "英语二",
      "chapters": [
        "一、阅读理解",
        "二、新题型",
        "三、完形填空",
        "四、翻译（英译汉）",
        "五、应用文写作",
        "六、图表/图画作文",
        "七、词汇与语法基础"
      ]
    }
  },
  "logs": {
    "list": [
      {
        "date": "2026-06-14",
        "title": "9 题弱项分析（数学极限章节）",
        "summary": "5 张速记卡 + 6 大弱项归类",
        "questions": [
          {
            "id": "Q18",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "分段函数 + 间断点",
            "question": "间断点 4 类判据",
            "userAnswer": "不会系统分类",
            "score": 3,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "不会系统分类 4 类间断点",
            "keyAnswer": "✓ 间断点 4 类判据：",
            "thinking": ""
          },
          {
            "id": "Q23",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "1^∞ 型 + 泰勒联用",
            "question": "1^∞ 型极限 + 泰勒展开",
            "userAnswer": "写了 sin 展开但漏 ln y = g·(f-1)",
            "score": 4,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "卡在 g·(f-1) 这一步",
            "keyAnswer": "1^∞ 三步法：",
            "thinking": ""
          },
          {
            "id": "Q25",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "夹逼放缩过宽",
            "question": "夹逼放缩过宽导致无法夹住",
            "userAnswer": "夹逼放缩过宽，右侧比真实量大很多",
            "score": 3,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "放缩的'度'控制不住",
            "keyAnswer": "夹逼放缩的'度'：",
            "thinking": ""
          },
          {
            "id": "Q27",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "分式泰勒展开 + 待定系数",
            "question": "泰勒展开 (1+ax)/(1+bx) 并待定系数",
            "userAnswer": "(1+ax)/(1+bx) 展错",
            "score": 4,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "1/(1+bx) 几何级数展错",
            "keyAnswer": "(1+ax)/(1+bx) = (1+ax)·(1-bx+b²x²-b³x³+...)",
            "thinking": ""
          },
          {
            "id": "Q32",
            "subject": "数学二",
            "chapter": "",
            "topic": "x^x 型极限 + 差",
            "question": "lim x→0⁺ [x^x - (sin x)^x] / [x² ln(1+x)]",
            "userAnswer": "写不下去，不知道拆主导项",
            "score": 2,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "差的主导项识别",
            "keyAnswer": "x^x = e^(x ln x) ≈ 1 + x ln x",
            "thinking": ""
          },
          {
            "id": "Q34",
            "subject": "数学二",
            "chapter": "",
            "topic": "积分上限函数",
            "question": "lim x→+∞ ∫₁ˣ [t²(e^(1/t)-1) - t]dt / [x² ln(1+1/x)]",
            "userAnswer": "未动笔",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "积分上限函数求导 + 变上限代换",
            "keyAnswer": "分子：t²(e^(1/t)-1) - t ≈ t²·(1/t) - t = 0（等价无穷小）",
            "thinking": ""
          },
          {
            "id": "Q(2)",
            "subject": "数学二",
            "chapter": "",
            "topic": "嵌套极限 1^∞ 变体",
            "question": "lim x→+∞ (x^(1/x) - 1)^(1/ln x)",
            "userAnswer": "尝试 e^x 代换，方向跑偏",
            "score": 2,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "未识别 1^∞ 型",
            "keyAnswer": "底 A = x^(1/x) - 1 → 1⁺，指数 B = 1/ln x → 0",
            "thinking": ""
          },
          {
            "id": "Q(4)",
            "subject": "数学二",
            "chapter": "",
            "topic": "1^∞ 型 (tan^n)",
            "question": "lim n→∞ tan^n(π/4 + 2/n)",
            "userAnswer": "未动笔",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "1^∞ 标准处理",
            "keyAnswer": "tan(π/4 + 2/n) → 1，n→∞，是 1^∞",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-17",
        "title": "8 题提问（408 OS + 数学夹逼）",
        "summary": "408 5 题 + 数学 3 题，2 高危 + 4 中危",
        "questions": [
          {
            "id": "Q1",
            "subject": "408",
            "chapter": "【OS】一、操作系统概述与运行环境",
            "topic": "OS 运行模式",
            "question": "操作系统运行环境里，CPU 有哪两种运行模式？它们的核心区别是什么？",
            "userAnswer": "用户态和内核态两种模式。内核态是对所有指令有完全的权限，用户态则对某些指令有权限。这就是确保操作系统的安全。",
            "score": 8,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "错题",
            "missing": "",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          },
          {
            "id": "Q2",
            "subject": "408",
            "chapter": "【OS】二、进程管理",
            "topic": "进程 vs 线程",
            "question": "进程和线程最本质的区别是什么？一个进程里的多个线程是否共享堆栈？",
            "userAnswer": "进程是资源分配的基本单位，线程是调度的基本单位。进程里的堆栈应该是可以修改的，那我认为多个线程应该是可以共享堆栈的。",
            "score": 5,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "线程共享的是堆（heap），不共享栈（stack）。栈是线程私有的。",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          },
          {
            "id": "Q3",
            "subject": "408",
            "chapter": "【OS】二、进程管理",
            "topic": "Peterson 算法",
            "question": "Peterson 算法解决的是几个进程的互斥问题？它用了哪两个共享变量？",
            "userAnswer": "Peterson 算法是解决两个进程互斥问题，通过 turn 也就是轮到谁进。另一个变量应该是 flag。就是相当于两个人进门的时候互相客套一下。",
            "score": 7,
            "max": 10,
            "status": "warn",
            "isWrong": false,
            "knowledgeType": "错题",
            "missing": "turn 变量的'谦让'语义没讲清楚。",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          },
          {
            "id": "Q4",
            "subject": "408",
            "chapter": "【OS】二、进程管理",
            "topic": "TSL 指令",
            "question": "TSL 指令的原子性是怎么保证的？它和 Peterson 算法相比，最大的优势是什么？",
            "userAnswer": "原子性是通过这个进程进来之后先读取也就是 test 一下锁。如果不等于 0 就等待直到锁等于 0 再进去。优势应该是忙着等待吧。",
            "score": 5,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "TSL 也是忙等，'不忙等'不是优势。真正优势：硬件原子性，可在多 CPU 上正确工作。",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          },
          {
            "id": "Q5",
            "subject": "408",
            "chapter": "【OS】二、进程管理",
            "topic": "进程切换",
            "question": "以下关于进程切换的说法，哪项错误？ A. 需要保存 PCB B. 一定发生在内核态 C. 线程切换开销比进程切换小 D. 中断处理结束后一定会触发进程切换",
            "userAnswer": "A 应该也是对的 B 应该也是对的 C 我不太确定 D 应该不对",
            "score": 5,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "C 是对的（同一进程内线程共享页表），D 是错的（中断处理后可能切回原进程）。",
            "keyAnswer": "✓ 标准答案：D 错误。",
            "thinking": ""
          },
          {
            "id": "Q6",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "夹逼定理使用条件",
            "question": "夹逼定理的两个使用前提是什么？",
            "userAnswer": "前提是他大于和小于的那两个数的极限必须相等，还有一个我不记得了，难道是连续吗？",
            "score": 4,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "缺核心条件'小 ≤ 目标 ≤ 大'（夹在中间）；不要求连续。",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          },
          {
            "id": "Q7",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "定积分定义识别",
            "question": "做 lim(n→∞) (1/n) Σ(k=1 to n) sin(kπ/n) 这道题，你会用夹逼还是定积分定义？",
            "userAnswer": "我会用定积分定义，因为有一个可爱因子，然后很明确 X 是从 0 到 1……啊不是从 0 到 π。",
            "score": 7,
            "max": 10,
            "status": "warn",
            "isWrong": false,
            "knowledgeType": "错题",
            "missing": "没说清楚定积分定义的判据：'Σ f(xk)·Δx' 形式 + Δx→0 + xk 走遍 [a,b]。",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          },
          {
            "id": "Q8",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "n项求和 + 高次量级",
            "question": "lim(n→∞) Σ(k=1 to n) k²/√(n⁶+k²)，用夹逼怎么处理放缩上界？",
            "userAnswer": "完全不知道怎么没头绪。",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "会写：k²/√(n⁶+k²) ≤ k²/√(n⁶) = k²/n³；Σ 上界 = (1/n³)·Σk² = (1/n³)·n(n+1)(2n+1)/6 → 0。",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-17",
        "title": "英语阅读 1 篇（2012 Text 3）",
        "summary": "5 题对 2 题，3 题全栽在观点辨析、动作目的、句意推断",
        "questions": [
          {
            "id": "Q32",
            "subject": "英语二",
            "chapter": "一、阅读理解",
            "topic": "观点辨析",
            "question": "2012 Text 3 Q32: Those who are against gene patents believe that?",
            "userAnswer": "D. courts should restrict access to genetic tests",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "把'专利垄断限制了基因检测'这一现象当成反对者主张，实际反对者主张是'基因是自然产物，不应被专利'",
            "keyAnswer": "正确答案 B. only man-made products are patentable。反对者认为基因是自然产物，只有人造物才该被授予专利。",
            "thinking": ""
          },
          {
            "id": "Q33",
            "subject": "英语二",
            "chapter": "一、阅读理解",
            "topic": "动作目的辨析",
            "question": "2012 Text 3 Q33: According to Hans Sauer, companies are eager to win patents for?",
            "userAnswer": "B. discovering gene interactions",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "把'研究过程'（how genes interact）当成了'专利目标'（connecting the dots = disease correlations）",
            "keyAnswer": "正确答案 A. establishing disease correlations。原文说公司在研究基因如何相互作用，寻找疾病关联，而想拿专利的是'把这些关联点连起来'",
            "thinking": ""
          },
          {
            "id": "Q34",
            "subject": "英语二",
            "chapter": "一、阅读理解",
            "topic": "句意推断",
            "question": "2012 Text 3 Q34: By saying 'Each meeting was packed' the author means that?",
            "userAnswer": "D. lawyers were keen to attend conventions",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "停留在字面'律师参会积极'，没有理解深层含义'基因专利话题备受关注'",
            "keyAnswer": "正确答案 C. gene patenting was a great concern。'座无虚席'指会议爆满，反映基因专利问题是热点。",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-18",
        "title": "知识点记录：函数可导",
        "summary": "可导的充要条件、充分/必要条件、考试套路、易错点",
        "questions": [
          {
            "id": "K1",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "可导的充要条件",
            "question": "函数 f(x) 在 x₀ 处可导的充要条件是什么？",
            "userAnswer": "左导数 = 右导数（且都是有限值）",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "充要条件：f'₋(x₀) = f'₊(x₀) 且都是有限值。",
            "thinking": ""
          },
          {
            "id": "K2",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "可导的必要条件",
            "question": "f(x) 在 x₀ 可导，能推出什么？",
            "userAnswer": "能推出 f(x) 在 x₀ 连续",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "可导 ⇒ 连续（必要条件）。",
            "thinking": ""
          },
          {
            "id": "K3",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "可导的充分条件",
            "question": "列举能推出 f(x) 在 x₀ 可导的充分条件",
            "userAnswer": "① 初等函数在定义区间内处处可导；② 分段函数在分段点左导=右导则可导；③ 导函数极限存在则可导",
            "score": 7,
            "max": 10,
            "status": "warn",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "漏了'导函数极限定理'的完整叙述。",
            "keyAnswer": "充分条件（能推出可导）：",
            "thinking": ""
          },
          {
            "id": "K4",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "连续 vs 可导",
            "question": "连续是可导的什么条件？举一个连续但不可导的经典反例。",
            "userAnswer": "连续是可导的必要非充分条件。反例是 f(x)=|x| 在 x=0",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "连续 ⇏ 可导（必要非充分）。",
            "thinking": ""
          },
          {
            "id": "K5",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "分段函数求导",
            "question": "分段函数在分段点怎么求导数？非分段点呢？",
            "userAnswer": "分段点在分段点要用定义求左右导数；非分段点直接用求导公式",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "分段函数求导规则：",
            "thinking": ""
          },
          {
            "id": "K6",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "导函数极限定理",
            "question": "导函数极限定理的内容是什么？为什么 f 在 x₀ 连续这个条件不能少？",
            "userAnswer": "若 lim_{x→x₀} f'(x) 存在，且 f 在 x₀ 连续，则 f'(x₀) 存在且等于该极限。连续条件不能少因为...（不太确定）",
            "score": 6,
            "max": 10,
            "status": "warn",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "缺反例：若不连续，导函数极限存在但函数在该点不可导。",
            "keyAnswer": "导函数极限定理：",
            "thinking": ""
          },
          {
            "id": "K7",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "含绝对值函数可导性",
            "question": "f(x) = |g(x)| 在什么条件下在 x₀ 不可导？怎么快速判断？",
            "userAnswer": "g(x₀)=0 且 g'(x₀)≠0 时不可导（尖点）",
            "score": 8,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "补充：若 g(x₀)=0 且 g'(x₀)=0，则 f(x)=|g(x)| 在 x₀ 可导（且导数为0）",
            "keyAnswer": "f(x) = |g(x)| 在 x₀ 的可导性：",
            "thinking": ""
          },
          {
            "id": "K8",
            "subject": "数学二",
            "chapter": "一、函数、极限、连续",
            "topic": "考试高频套路总结",
            "question": "关于可导性，考研数学选择题/填空题的高频考点有哪些？",
            "userAnswer": "① 分段函数分段点用定义；② 含绝对值找尖点；③ 导函数极限定理；④ 连续不可导反例",
            "score": 9,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "补充：⑤ 抽象函数用导数定义凑已知极限",
            "keyAnswer": "考研高频考点：",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-18",
        "title": "一元函数微分错题（高数研选题 第2章）",
        "summary": "2 题做错：Q5 幂指极限 + 导数定义；Q7 含绝对值函数不可导点",
        "questions": [
          {
            "id": "高数研选题_第2章_Q5",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "幂指极限 + 导数定义",
            "question": "高数研选题 第2章 第5题：已知 f(x) 在 x=0 处连续，且 lim_{x→0}[f(x)+e^x]^{1/x}=2，则 f'(0) 等于？",
            "userAnswer": "完全不会，没头绪",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "不会识别幂指型极限 + 反推 f(0) + 凑导数定义。",
            "keyAnswer": "答案：D. ln2 - 1。",
            "thinking": ""
          },
          {
            "id": "高数研选题_第2章_Q7",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "含绝对值函数不可导点",
            "question": "高数研选题 第2章 第7题：函数 f(x)=|x-x²|(e^x-1)+sin|x-2| 不可导点的个数为？",
            "userAnswer": "B. 1个",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "对 |x-x²|(e^x-1) 在 x=0 处的'磨平'现象判断失误。",
            "keyAnswer": "答案：C. 2 个。",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-19",
        "title": "顿悟笔记：含绝对值函数可导性判断",
        "summary": "核心结论：绝对值外的系数在零点也为零时，可能把尖角磨平使该点可导",
        "questions": [
          {
            "id": "INSIGHT_01",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "含绝对值函数可导性：零点系数磨平尖角",
            "question": "严选题第2章第7题的顿悟：f(x)=|g(x)|·h(x)，当 g(x₀)=0 且 h(x₀)=0 时，h(x) 的零因子可能把尖角'磨平'，使得该点可导。",
            "userAnswer": "核心结论：当绝对值外面的系数在零点处也为零并且能把尖角磨平时，该点是一定可导的",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 顿悟正确！",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-19",
        "title": "一元函数微分错题（高数研选题 第2章）Q8-Q14",
        "summary": "5 题做错（Q8/Q9/Q11/Q12/Q14），Q13 正确",
        "questions": [
          {
            "id": "高数研选题_第2章_Q8",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "极限函数化简 + 不可导点判断",
            "question": "高数研选题 第2章 第8题：f(x) = lim_{n→∞} √[n]{1+|x|^n+e^{nx}} 不可导点的个数为？",
            "userAnswer": "认为 x=0 可导（✓），x=1 不可导（✗），选 B。自己的思路：把 |x|^n 和 e^{nx} 两个式子单独拎出来分类讨论写分段函数；答案思路：用 max 函数表示整个函数，对整个函数进行分段讨论取大头。",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "没有先用 max 化简极限函数就直接猜不可导点。",
            "keyAnswer": "答案：C. 2 个。",
            "thinking": ""
          },
          {
            "id": "高数研选题_第2章_Q9",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "极限等式反推函数性质 + 导数定义",
            "question": "高数研选题 第2章 第9题：已知 f(x) 在 x=0 处连续，且 lim_{x→0} x²/f(x) = 1，则下列结论正确的个数是？",
            "userAnswer": "选了①②（f'(0)=0，且 f(0) 是极小值点），Q9③ 打了？表示不确定",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "Q9③ 不确定：由已知条件无法推出 f''(0) 存在。你在选项③ 后打？说明你意识到这一点，是对的直觉。",
            "keyAnswer": "答案：B. 2个（①②）。",
            "thinking": ""
          },
          {
            "id": "高数研选题_第2章_Q11",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "含绝对值多项式的驻点与极值点判断",
            "question": "高数研选题 第2章 第11题：设 f(x)=|x²(x+1)| 的驻点个数为 m，极值点的个数为 n，则？",
            "userAnswer": "选 C（m=2,n=3），实际 m 和 n 都算错",
            "score": 2,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "驻点和极值点概念混淆。",
            "keyAnswer": "答案：D. m=3, n=2。",
            "thinking": ""
          },
          {
            "id": "高数研选题_第2章_Q12",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "变限积分 + 极值点判断（莱布尼茨公式）",
            "question": "高数研选题 第2章 第12题：设 f(x)=∫_x^{x²}(t-x sin t)^5 dt，求 f(x) 的极值点个数？",
            "userAnswer": "完全没思路，未作答",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "完全不会莱布尼茨公式处理含参变限积分。",
            "keyAnswer": "解法：对 f(x) 求导（莱布尼茨公式）：",
            "thinking": ""
          },
          {
            "id": "高数研选题_第2章_Q13",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "二阶导数极限 + 极值拐点联合判断",
            "question": "高数研选题 第2章 第13题：设 f 有二阶导数，lim_{x→0}[f(x)-a]/ln(1+x)=0，lim_{x→0}[f''(x)-1]/(e^{x²}-1)=2025，则？",
            "userAnswer": "选A（误以为 f''(0)<0 是极大值），实际选B",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "由第二个极限推出 f''(0)=1>0，应是极小值，但误判为极大值。极值判据：f'(0)=0 且 f''(0)>0 → 极小值。",
            "keyAnswer": "答案：B。",
            "thinking": ""
          },
          {
            "id": "高数研选题_第2章_Q14",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "|f(x)| 的极值点与拐点判断",
            "question": "高数研选题 第2章 第14题：设 f 有二阶连续导数，f(0)=0, f'(0)>0, f''(0)<0，则关于 y=|f(x)| 在 x=0 处的说法？",
            "userAnswer": "选A（x=0 是 |f(x)| 的极值点，但 (0,f(0)) 不是拐点）",
            "score": 4,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "只判断了极值点部分正确，但拐点部分判断错了。",
            "keyAnswer": "答案：C（x=0 是 |f(x)| 的极值点，且 (0,f(0)) 是拐点）。",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-19",
        "title": "构造函数方法论（Q9 武忠祥讲解延伸）",
        "summary": "构造反例函数不是天赋，是可学习的反向工程。核心：主项骨架 + 扰动项破坏。",
        "questions": [
          {
            "id": "K_构造函数方法论",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "选择题构造反例函数的通用思维框架",
            "question": "考研数学选择题中，如何想到构造一个特定函数来推翻某个选项？",
            "userAnswer": "不知道如何想到构造函数，感觉需要天赋或大量刷题",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "【核心结论】构造函数不是天赋，是一套可学习的反向工程。",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-19",
        "title": "极限等式反推抽象函数信息 — 通用解题套路",
        "summary": "分式极限为常数且分母→0 ⇒ 分子也必须→0，借此反推 f(0)、f撇(0)、f两撇(0)",
        "questions": [
          {
            "id": "K_极限等式反推套路",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "极限等式反推抽象函数信息（Q9、Q13核心套路）",
            "question": "已知 lim_{x→0} 分子/分母 = 常数（或0），且分母→0，如何反推抽象函数 f(x) 在 x=0 处的信息？",
            "userAnswer": "分式极限为常数，分母趋近0 → 分子必须也趋近0，借此反推 f(0)、f撇(0) 等。这是 Q9 和 Q13 的共同套路。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "【通用解题套路 — 极限等式反推 f 信息】",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-20",
        "title": "操作系统文件系统磁盘布局（书P294）",
        "summary": "inode区/数据块区/空闲空间管理/MBR/超级块/根目录位置 — 布局梳理与纠错；拐点判定方法",
        "questions": [
          {
            "id": "K_文件系统磁盘布局",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "文件系统磁盘布局：MBR、超级块、inode区、数据区、空闲空间管理",
            "question": "文件系统的磁盘布局是什么样的？各区域的数据结构和作用分别是什么？",
            "userAnswer": "1. 不同区域数据结构不同，inode区数据结构统一 ✓",
            "score": 8,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "【文件系统磁盘布局（以ext2/Unix风格为例）】",
            "thinking": ""
          },
          {
            "id": "K_拐点判定方法",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "拐点判定",
            "question": "拐点判定：嫌疑点有哪些？如何确认一个点是拐点？",
            "userAnswer": "拐点是凹凸性发生改变的点。嫌疑点：二阶导等于零或二阶导不存在的点。若二阶导函数在这一点左右异号，则该点是拐点。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 标准答案：",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-20",
        "title": "操作系统文件管理 — open/read/write + 目录访存次数",
        "summary": "文件描述符FD的本质、读写流程、多级目录下open的磁盘访存次数",
        "questions": [
          {
            "id": "K_文件IO与目录访存",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "文件系统：open/read/write 系统调用 + 目录结构访存计算",
            "question": "操作系统如何通过 FD（文件描述符）进行文件读写？多级目录下打开一个文件需要几次磁盘访问？",
            "userAnswer": "open得到FD → read/write操作这个FD变量相当于生成文件副本 → write修改副本后覆盖源文件。三级目录下open需要访存5次。",
            "score": 8,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "【一、文件I/O完整流程】",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-21",
        "title": "数学二 · 严选题第二章 · 15-23题",
        "summary": "Q15拐点判定；Q16斜渐近线条数（偶函数陷阱）；Q18导数定义+特殊函数；Q19导数定义带公式；Q20参数方程求切线；Q22复合函数求导；Q23反函数二阶导",
        "questions": [
          {
            "id": "Q15",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "拐点判定（二/三阶导判断）",
            "question": "设f(x)满足f'(0)=0, f'(x)+[f(x)]^3=x^2，判断(0,f(0))是否为拐点。",
            "userAnswer": "二阶导在该点为零，三阶导>0，则左边二阶导<0，右边二阶导>0，左凸右凹，(0,f(0))是拐点，选(C)。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "错题",
            "missing": "",
            "keyAnswer": "正确。关键步骤：",
            "thinking": ""
          },
          {
            "id": "Q16",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "渐近线条数（偶函数斜渐近线）",
            "question": "曲线 y=(x^2+1)/sqrt(x^2-1) 的渐近线条数为？",
            "userAnswer": "选(A)1。（错误，未考虑偶函数两端都有斜渐近线）",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "偶函数 y=f(x) 当 x→+∞ 和 x→-∞ 若各有一条斜渐近线，由于偶函数对称性，两侧斜渐近线斜率互为相反数，即共2条不同的斜渐近线。另外还有竖直渐近线 x=±1，所以共4条。",
            "keyAnswer": "答案(D)4条。分析：",
            "thinking": ""
          },
          {
            "id": "K_斜渐近线偶函数",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "渐近线条数（偶函数）",
            "question": "偶函数的斜渐近线条数规律是什么？",
            "userAnswer": "",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "若 f(x) 是偶函数，且 x→+∞ 时有斜渐近线 y=ax+b，则 x→-∞ 时斜渐近线为 y=-ax+b（斜率符号相反），因此偶函数有斜渐近线时一定是2条（不是1条）。",
            "thinking": ""
          },
          {
            "id": "Q18",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "极限计算（导数定义 + 特殊函数构造）",
            "question": "设曲线 y=f(x) 与 y=x^2-x 在点(1,0)处有公共切线，求 lim_{n→∞} n·f(n/(n+2))。",
            "userAnswer": "答案-2，但做题过程写错。",
            "score": 0,
            "max": 10,
            "status": "warn",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "两个关键方法没想到：",
            "keyAnswer": "解题步骤：",
            "thinking": ""
          },
          {
            "id": "Q19",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "导数定义（积分型函数求导）",
            "question": "已知 f(x)=[(x-1)(x-2)...(x-n)]/[(x+1)(x+2)...(x+n)]，求 f'(1)。",
            "userAnswer": "用极限定义 f'(1)=lim[f(x)-f(1)]/(x-1)，当时没想到直接代。",
            "score": 0,
            "max": 10,
            "status": "warn",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "f(1)=0（分子含(x-1)因子，x=1时为0）。利用导数定义：f'(1)=lim_{x→1}[f(x)-0]/(x-1)=lim_{x→1}[(x-2)...(x-n)]/[(x+1)...(x+n)]，直接代x=1即可。",
            "keyAnswer": "f'(1) = [(1-2)(1-3)...(1-n)] / [(1+1)(1+2)...(1+n)]",
            "thinking": ""
          },
          {
            "id": "Q20",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "参数方程求切线",
            "question": "参数方程曲线 x=∫₀^t e^{-u²}du, y=t²ln(2-t²) 在点(0,0)处的切线方程。",
            "userAnswer": "方法：求切线先求对应点的t值，再得到dy/dx和dt的关系。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "错题",
            "missing": "",
            "keyAnswer": "1. 由(0,0)知 x=0 → ∫₀^t e^{-u²}du=0 → t=0",
            "thinking": ""
          },
          {
            "id": "Q22",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "复合函数求导（链式法则）",
            "question": "设 f(x)={ln√x (x≥1), 2x-1 (x<1)，y=f(f(x))，求 dy/dx|_{x=e}。",
            "userAnswer": "先分段讨论了各分段，做复杂了，其实直接用链式求导法则然后代入x=e就行。",
            "score": 0,
            "max": 10,
            "status": "warn",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "链式法则：y'=[f(f(x))]' = f'(f(x))·f'(x)。代入x=e：f(e)=ln√e=1/2<1，所以用第二段求f'(f(x))；f'(e)用第一段求。不需要分段讨论整个y，直接代就行。",
            "keyAnswer": "y'=f'(f(x))·f'(x)",
            "thinking": ""
          },
          {
            "id": "Q23",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "反函数二阶导",
            "question": "设 y=f(x) 的反函数是 x=φ(y)，且 f(x)=∫₁^{2x} e^{t²}dt+1，求 φ''(1)。",
            "userAnswer": "这个点掌握不太行。",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "反函数求导公式没有熟练掌握。",
            "keyAnswer": "反函数求导公式：",
            "thinking": ""
          },
          {
            "id": "K_反函数二阶导公式",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "反函数求导公式",
            "question": "反函数 φ(y) 的一阶导和二阶导公式是什么？",
            "userAnswer": "",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "设 y=f(x) 的反函数为 x=φ(y)，则：",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-22",
        "title": "408操作系统 · 文件管理强化",
        "summary": "文件读取过程（open路径解析+inode索引寻址）；分式处理方法论；fd本质；硬链接误区；偏移量换算；成组链接法；磁盘布局标准",
        "questions": [
          {
            "id": "K_文件读取过程",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "文件读取过程（open+inode索引）",
            "question": "操作系统读一个文件的完整过程是什么？",
            "userAnswer": "open 通过路径逐层查找目录项，最终定位到目标文件的 inode；inode 通过直接、一级、二级、三级索引结构，按偏移量找到对应的数据块，完成读文件操作。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 文件读取完整流程：",
            "thinking": ""
          },
          {
            "id": "K_分式处理方法论",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "分式化简与变形方法论",
            "question": "遇到分式表达式时有哪些常见处理方法？",
            "userAnswer": "1.分子加减→拆项；2.可倒置→乘-1倒置；3.仅有乘→等价无穷小；4.1的无穷大次方→+1-1凑e或取对数",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "分式处理方法论（数学二高频技巧）：",
            "thinking": ""
          },
          {
            "id": "K_fd本质",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "fd与打开文件表",
            "question": "fd（文件描述符）的本质是什么？它和inode的关系？",
            "userAnswer": "fd是指向inode的指针（错误理解）",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ fd 本质：",
            "thinking": ""
          },
          {
            "id": "K_硬链接误区",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "硬链接vs软链接（删除源文件后）",
            "question": "删除源文件后，硬链接和软链接分别还能访问吗？",
            "userAnswer": "删除源文件后好像两个都没法访问（错误）",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 正确答案：",
            "thinking": ""
          },
          {
            "id": "K_偏移量换算",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "read系统调用：偏移量→逻辑块号",
            "question": "read(fd, buf, count) 时，系统怎么把文件偏移量转换成具体的磁盘块？",
            "userAnswer": "知道按直接/一级/二级顺序查，但偏移量换算不清楚",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 偏移量换算完整流程：",
            "thinking": ""
          },
          {
            "id": "K_成组链接法",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "空闲块管理：成组链接法",
            "question": "成组链接法（UNIX）的思想是什么？和位图法比有什么优劣？",
            "userAnswer": "只提到位图法，不知道成组链接法",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 成组链接法（UNIX专用，408高频）：",
            "thinking": ""
          },
          {
            "id": "K_磁盘布局标准",
            "subject": "408",
            "chapter": "【OS】四、文件管理",
            "topic": "文件系统磁盘布局（标准版）",
            "question": "典型UNIX/ext2文件系统的磁盘布局是哪几个区？超级块存什么？",
            "userAnswer": "引导区、超级块区、索引区、根目录区、数据区（根目录区不准确）",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 标准磁盘布局（ext2/ext3）：",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-23",
        "title": "数学二 · 可导充要条件判定（抽象极限式）",
        "summary": "通过抽象极限式判定 f(x) 在 x=0 可导的充要条件，Δx 必须双侧且严格凑成导数定义",
        "questions": [
          {
            "id": "K_可导充要条件判定",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "抽象极限式判定可导性",
            "question": "设 f(0)=0，则 f(x) 在点 x=0 可导的充要条件为哪个选项？",
            "userAnswer": "这是导数是否存在在某一点的判定，左推右和右推左的条件。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 答案：B",
            "thinking": ""
          },
          {
            "id": "K_可导充要条件判定_总结",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "抽象极限式判定可导性：武忠祥总结框架",
            "question": "将极限式 lim_{h→0} f(φ(h))/ψ(h) 判定为 f'(0) 存在的充要条件，需要满足哪三个条件？",
            "userAnswer": "这是对上一道题的总结。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 武忠祥老师总结框架：",
            "thinking": ""
          },
          {
            "id": "K_绝对值可导与函数可导互推",
            "subject": "数学二",
            "chapter": "二、一元函数微分学",
            "topic": "绝对值函数可导性：f(x) 与 |f(x)| 的互推关系",
            "question": "f(x) 可导 与 |f(x)| 可导 之间的互推关系是什么？加上 f(x) 连续的前提后有何结论？",
            "userAnswer": "正常情况下两者没法互推；若 f(x) 连续，则 |f(x)| 可导能推出 f(x) 可导；进一步若 f(x₀)=0，还能推出 f'(x₀)=0。",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "✓ 武忠祥总结（【注】部分）：",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-06-30",
        "title": "英语阅读 1 篇（2012 Text 4）",
        "summary": "5 题对 3 题，38 题同义替换没识别，40 题最后一句没读全",
        "questions": [
          {
            "id": "Q38",
            "subject": "英语二",
            "chapter": "一、阅读理解",
            "topic": "观点态度题（同义替换）",
            "question": "2012 Text 4 Q38: Benjamin Friedman believes that economic recessions may ______?",
            "userAnswer": "A. impose a heavier burden on immigrants",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "没识别 'more mean-spirited and less inclusive' 中 mean-spirited 与 'bring out more evils of human nature' 的同义替换关系；虽然注意到 less inclusive 是负面词，但前面 more mean-spirited 的对应关系没建立",
            "keyAnswer": "正确答案 B. bring out more evils of human nature。原文 'more mean-spirited and less inclusive' 是并列负面描述，mean-spirited = 刻薄/邪恶，对应 'evils of human nature'。",
            "thinking": ""
          },
          {
            "id": "Q40",
            "subject": "英语二",
            "chapter": "一、阅读理解",
            "topic": "主旨态度题（最后一句漏读）",
            "question": "2012 Text 4 Q40: The author thinks that the influence of hard times on society is ______?",
            "userAnswer": "D. destructive",
            "score": 0,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "最后一段最后一句 'But they certainly will reshape it, and all the more so the longer they extend.' 没读全，这句话表明作者认为困难时期会重塑社会（偏积极），而非毁灭性；同时没注意到前文 'more socially tolerant' 等正面描述",
            "keyAnswer": "正确答案 B. positive。作者认为困难时期虽有负面影响，但最终会让社会变得更宽容、重塑社会结构，整体态度是积极的。",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-07-01",
        "title": "408 计组数据单位",
        "summary": "K/M/G/T/P/E/Z 单位换算与读写速度单位",
        "questions": [
          {
            "id": "K_计组数据单位",
            "subject": "408",
            "chapter": "【CO】一、计算机系统概述",
            "topic": "数据单位换算（K/M/G/T/P/E/Z）",
            "question": "计组大纲要求掌握的数据单位 K、M、G、T、P、E、Z 的换算关系？",
            "userAnswer": "需要复习",
            "score": 5,
            "max": 10,
            "status": "warn",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "需要强化记忆 1024 倍关系（2¹⁰），以及磁盘/内存/网络常见容量单位的对应",
            "keyAnswer": "【数据单位换算】（2¹⁰ 倍数）",
            "thinking": ""
          },
          {
            "id": "K_多级页表大小限制",
            "subject": "408",
            "chapter": "【OS】三、内存管理",
            "topic": "多级页表：顶级页表 vs 内部页表的大小限制",
            "question": "多级页表中，为什么顶级页表可以超过一个页大小，而其他级别的页表不能？",
            "userAnswer": "顶级页表支持超过一页大小，因为底层硬件支持；其他多级页表不支持单个页面超过一页大小",
            "score": 8,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "理解方向正确，但需要补充「为什么」的底层原因：① 顶级页表有专用基址寄存器（如 x86 的 CR3），始终驻留内存，无需被换入换出，所以可以跨多页；② 内部各级页表必须恰好占一页，是因为它们本身也要受分页机制管理——只有占一页，才能被换入换出，由上一级页表项指向其所在页框。",
            "keyAnswer": "【核心结论】",
            "thinking": ""
          },
          {
            "id": "K_OS操作并行vs串行计时",
            "subject": "408",
            "chapter": "【OS】三、内存管理",
            "topic": "OS时间计算：操作并行 vs 串行的细节",
            "question": "计算两个操作的总时间时，如何判断它们是并行还是串行？",
            "userAnswer": "有时两个操作是并行的（同时进行），有时是一个操作完成后另一个才开始，计算总时间时要注意区分",
            "score": 8,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "总结方向正确，补充常见场景判断规则",
            "keyAnswer": "【核心要点】",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-07-02",
        "title": "数学二 · 严选题第3章 · Q40/Q41（积分化简+积分型可导性）",
        "summary": "Q40含参积分不会化简;Q41积分型极限用∫ₐˣf(t)dt/(x-a)→f(a)思路",
        "questions": [
          {
            "id": "Q40",
            "subject": "数学二",
            "chapter": "三、一元函数积分学",
            "topic": "含参积分化简（不会做）",
            "question": "严选题第3章第40题，涉及含参积分的化简操作",
            "userAnswer": "左边那个式子积分化简不太会，当时没做出来",
            "score": 2,
            "max": 10,
            "status": "fail",
            "isWrong": true,
            "knowledgeType": "错题",
            "missing": "",
            "keyAnswer": "",
            "thinking": "含参积分（积分号里出现外变量 x）→ 换元把 x 移到积分限里，常用 u = x - t"
          },
          {
            "id": "Q41",
            "subject": "数学二",
            "chapter": "三、一元函数积分学",
            "topic": "积分型极限（思路正确）",
            "question": "严选题第3章第41题，积分型函数在某点的极限/可导性问题",
            "userAnswer": "函数在某点邻域内可导时，∫ₐˣf(t)dt 除以 (x-a) → f(a)",
            "score": 8,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "错题",
            "missing": "",
            "keyAnswer": "",
            "thinking": "变上限积分除以 (x-a) 的极限等于函数在该点的值，这是连接积分和函数值的桥梁"
          },
          {
            "id": "K_含参积分换元思路",
            "subject": "数学二",
            "chapter": "三、一元函数积分学",
            "topic": "积分号里出现外变量x",
            "question": "当积分号内同时出现 x 和 t 时怎么处理？",
            "userAnswer": "",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "",
            "thinking": "必换元，把 x 从被积函数里移到积分限"
          },
          {
            "id": "K_积分型极限思路",
            "subject": "数学二",
            "chapter": "三、一元函数积分学",
            "topic": "∫ₐˣf(t)dt/(x-a)→f(a)",
            "question": "变上限积分函数 F(x)=∫ₐˣf(t)dt 的极限性质",
            "userAnswer": "",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-07-02",
        "title": "408 · 计组指令系统复习策略",
        "summary": "Intel指令格式重点记;其他指令格式(ARM/MIPS)学会看注释",
        "questions": [
          {
            "id": "K_计组指令系统复习思路",
            "subject": "408",
            "chapter": "【CO】四、指令系统",
            "topic": "指令系统学习方法",
            "question": "指令系统这一章的复习重点是什么？",
            "userAnswer": "",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-07-02",
        "title": "408 · 指令系统-有效地址本质",
        "summary": "CPU算出来的有效地址=虚拟地址(不是物理地址);PC存虚拟地址;跳转指令=虚拟地址+偏移",
        "questions": [
          {
            "id": "K_PC和跳转指令中的虚拟地址",
            "subject": "408",
            "chapter": "【CO】四、指令系统",
            "topic": "指令系统中的地址概念",
            "question": "CPU 算出的有效地址是什么？PC 寄存器存的是什么？jump 指令的跳转目标是什么地址？",
            "userAnswer": "",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "",
            "thinking": ""
          }
        ]
      },
      {
        "date": "2026-07-03",
        "title": "408 · 指令系统-PC与跳转指令中的虚拟地址",
        "summary": "PC存虚拟地址;jump指令跳转目标=虚拟地址±偏移量",
        "questions": [
          {
            "id": "K_PC与跳转指令中的虚拟地址",
            "subject": "408",
            "chapter": "【CO】四、指令系统",
            "topic": "PC和jmp指令的地址本质",
            "question": "PC 寄存器存的是什么地址？jump 指令的跳转目标是什么地址？",
            "userAnswer": "",
            "score": 10,
            "max": 10,
            "status": "pass",
            "isWrong": false,
            "knowledgeType": "总结",
            "missing": "",
            "keyAnswer": "",
            "thinking": ""
          }
        ]
      }
    ]
  },
  "progress": {
    "math": 50,
    "eng": 58,
    "pol": 0,
    "cs": 45,
    "updated": "2026-06-30"
  },
  "memoCards": [
    {
      "tag": "1^∞ 型",
      "title": "1^∞ 型极限三件套",
      "steps": [
        "判型：lim f(x)^g(x)，f → 1, g → ∞",
        "取对数：ln y = g · ln f",
        "等价无穷小：f → 1 时，ln f ~ f - 1",
        "ln y ~ g · (f - 1)",
        "原极限 = e^[lim g(f-1)]"
      ],
      "example": "例：lim (1+sin 2x²)^(1/x⁴) = e^[lim (1/x⁴)·2x²] = e^∞ = +∞",
      "tip": "关键：用 g·(f-1) 替代 g·ln f，否则会漏算"
    },
    {
      "tag": "泰勒",
      "title": "4 个泰勒模板（必背）",
      "formulas": [
        "e^x = 1 + x + x²/2! + x³/3! + ...",
        "1/(1+u) = 1 - u + u² - u³ + ...",
        "sin u = u - u³/3! + u⁵/5! - ...",
        "ln(1+u) = u - u²/2 + u³/3 - ..."
      ],
      "tip": "sin/ln 只展奇次或正负交替；1/(1+u) 用几何级数；展到 n 阶 → 取前 n+1 项"
    },
    {
      "tag": "取舍",
      "title": "等价 vs 夹逼 vs 洛必达",
      "table": [
        [
          "单一因式相乘/相除",
          "等价无穷小",
          "题 23、34"
        ],
        [
          "差的极限（求主导项）",
          "取主项 + 等价",
          "题 32"
        ],
        [
          "n 项求和/求积",
          "夹逼 或 定积分定义",
          "题 25、38"
        ],
        [
          "0/0 或 ∞/∞ 通用",
          "洛必达（最笨但通用）",
          "兜底"
        ]
      ],
      "tip": "口诀：'单用等，多用夹，差取主，洛兜底'"
    },
    {
      "tag": "408",
      "title": "进程/线程共享 vs 私有",
      "table": [
        [
          "共享",
          "堆 / 代码段 / 数据段 / 文件描述符 / 全局变量"
        ],
        [
          "私有",
          "栈 / 寄存器 / PC / 线程局部存储"
        ]
      ],
      "tip": "进程是资源分配单位；线程是 CPU 调度单位"
    },
    {
      "tag": "408",
      "title": "Peterson vs TSL",
      "table": [
        [
          "Peterson",
          "软件算法，单核可用，忙等 + 礼让"
        ],
        [
          "TSL",
          "硬件原子指令，多核可用，忙等但无饥饿"
        ]
      ],
      "tip": "两者都忙等！TSL 优势是'硬件原子 + 可用于多核'，不是'不忙等'"
    },
    {
      "tag": "408",
      "title": "进程切换触发条件",
      "table": [
        [
          "会触发",
          "时间片用完 / 阻塞 I/O / 高优先级就绪 / 进程退出"
        ],
        [
          "不触发",
          "纯计算型系统调用 / 中断处理结束（仅恢复现场）"
        ]
      ],
      "tip": "'中断处理结束一定切换'是错的——只是恢复现场"
    },
    {
      "tag": "Σ公式",
      "title": "求和公式（凑定积分必备）",
      "formulas": [
        "Σk (k=1..n) = n(n+1)/2",
        "Σk² (k=1..n) = n(n+1)(2n+1)/6",
        "Σk³ (k=1..n) = [n(n+1)/2]²"
      ],
      "tip": "n 项求和极限 → 提 1/n → Σ(k/n)^m → ∫₀¹ x^m dx = 1/(m+1)"
    }
  ]
};
