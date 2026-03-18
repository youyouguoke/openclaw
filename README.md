# OpenClaw 社区

🦞 OpenClaw 一站式学习与资源聚合平台

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 📖 项目简介

OpenClaw 社区是一个为 OpenClaw 用户打造的一站式学习与资源聚合平台，提供：

- 📚 **系统化学习路径** - 7 天从入门到精通
- 🔍 **教程资源库** - 精选图文/视频教程
- 🛠️ **技能市场** - 5490+ 社区技能发现与安装指南
- ⚠️ **安全中心** - 恶意技能警示与最佳实践

## 🚀 快速开始

### 环境要求

- Node.js 18+ (推荐 v20+)
- npm 或 pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm run start
```

## 📁 项目结构

```
openclaw-community/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 首页
│   │   ├── tutorials/        # 教程列表页
│   │   ├── skills/           # 技能市场页
│   │   ├── learn/            # 学习路径页
│   │   ├── layout.tsx        # 根布局
│   │   └── globals.css       # 全局样式
│   ├── components/           # 可复用组件
│   └── data/
│       ├── tutorials.ts      # 教程数据
│       └── skills.ts         # 技能数据
├── public/                   # 静态资源
├── package.json
└── README.md
```

## 📄 页面说明

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 项目介绍、功能展示、精选推荐 |
| 学习路径 | `/learn` | 7 天系统化学习课程 |
| 教程库 | `/tutorials` | 精选教程列表与筛选 |
| 技能市场 | `/skills` | 社区技能浏览与安装指引 |

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui (可选)
- **部署**: Vercel / Cloudflare Pages

## 📝 添加内容

### 添加教程

编辑 `src/data/tutorials.ts`，添加新的教程对象：

```typescript
{
  id: '11',
  title: '教程标题',
  description: '教程简介',
  url: 'https://...',
  source: '来源',
  type: '图文' | '视频' | '官方文档',
  language: 'zh' | 'en',
  tags: ['标签 1', '标签 2'],
  category: '入门' | '进阶' | '安全' | '部署' | '技能开发',
}
```

### 添加技能

编辑 `src/data/skills.ts`，添加新的技能对象：

```typescript
{
  id: '11',
  name: 'skill-name',
  description: '技能描述',
  installCommand: 'npx clawhub@latest install skill-name',
  category: '分类名称',
  author: '作者',
  downloads: 1000,
  rating: 4.5,
}
```

## 🤝 贡献指南

欢迎贡献教程、技能或改进代码！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## ⚠️ 安全提醒

已发现恶意技能通过 ClawHub 传播，窃取用户数据。

- 安装第三方技能前请务必审查源代码
- 仅从可信来源安装技能
- 定期更新 OpenClaw 和依赖

[了解更多安全信息](https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html)

## 🔗 相关链接

- [OpenClaw 官方文档](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [ClawHub 技能市场](https://clawhub.com)
- [OpenClaw 社区 Discord](https://discord.com/invite/clawd)

## 📄 许可证

MIT License

---

Built with ❤️ for the OpenClaw Community
