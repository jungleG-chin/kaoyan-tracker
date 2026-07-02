# Jungle 考研个人数据库（升级版）

## 架构

```
data_src/*.md          ← 手动编辑（自然语言 Markdown）
       │
       ▼
   build.js            ← 扫描 MD → 生成数据 → 内联到 HTML
       │
       ▼
kaoyan_db.html         ← 数据已内联，双击即用（无需外部文件）
```

**核心理念：** Local-First — 数据以 MD 文件存本地，构建脚本扫描后直接把数据内联到 HTML 中，双击打开即可用，无需任何服务器。

## 使用方式

### 日常使用
直接双击 `kaoyan_db.html` 即可查看。

### 更新数据后
编辑 `data_src/` 下的 MD 文件，然后运行构建脚本：

```bash
node build.js
```

构建完成后刷新网页即可看到更新。

> **注意：** 需要安装 [Node.js](https://nodejs.org/) 才能运行 `build.js`。如果没装 Node，可以下载安装后使用。

## 目录结构

```
考研追踪升级版/
├── kaoyan_db.html          # 主应用（双击打开，数据已内联）
├── build.js                # 构建脚本（node build.js 运行）
├── README.md               # 本文件
├── data/                   # 构建产物（自动生成，勿手动编辑）
│   └── data.js             # 备用数据文件
└── data_src/               # 数据源（手动编辑）
    ├── 数学二.md            # 考纲
    ├── 英语二.md
    ├── 政治.md
    ├── 408.md
    ├── progress.md          # 进度
    └── 复习日志/            # 每日复习记录
        ├── 2026-06-14_*.md
        └── ...
```

## 与原版对比

| | 原版 | 升级版 |
|---|---|---|
| 数据格式 | 手写 JSON | 自然语言 Markdown |
| 启动方式 | 需要 start.bat（Python HTTP 服务器） | 双击 HTML 即可 |
| 数据加载 | fetch('./data/*.json') | 数据内联到 HTML，无需外部文件 |
| 编辑体验 | 手写 JSON，漏逗号就崩 | 写 Markdown，所见即所得 |
| 代码复杂度 | 异步加载 + 错误处理 | 同步初始化，代码量减少 |

## GitHub 开源

别人 clone 后：
1. 直接双击 `kaoyan_db.html` → 看到你的数据
2. 编辑 `data_src/` 下的 MD → `node build.js` → 刷新 → 看到自己的数据
3. 不需要装 Python，只需要 Node.js

## 技术要点

- **为何能双击直接用？** 构建时把数据直接写入 HTML 的 `<script>` 标签中，无需 `fetch()` 或 HTTP 服务器
- **数据从哪来？** `build.js` 扫描 `data_src/*.md`，解析 YAML frontmatter + Markdown 正文，生成 JSON 并内联到 HTML
- **已掌握标记存哪？** `localStorage`（浏览器本地），不依赖文件系统
- **如果页面空白？** 按 `F12` 打开浏览器控制台查看错误信息，或检查是否禁用了 JavaScript
