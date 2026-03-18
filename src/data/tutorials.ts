export interface Tutorial {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  type: '图文' | '视频' | '官方文档';
  language: 'zh' | 'en';
  tags: string[];
  category: '入门' | '进阶' | '安全' | '部署' | '技能开发';
}

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'OpenClaw 下载安装使用 — 详细图文教程',
    description: '系统要求、多种安装方式对比、常见问题排查、Web/终端两种界面入门',
    url: 'https://apifox.com/apiskills/openclaw-installation-and-usage-guide/',
    source: 'Apifox',
    type: '图文',
    language: 'zh',
    tags: ['安装', '入门', '配置'],
    category: '入门',
  },
  {
    id: '2',
    title: '保姆级飞书对接教程 — 手把手搭建 AI 助手',
    description: 'Linux 下安装 OpenClaw 并对接飞书机器人，打造专属智能助理',
    url: 'https://www.cnblogs.com/catchadmin/p/19556552',
    source: '博客园',
    type: '图文',
    language: 'zh',
    tags: ['飞书', '对接', '机器人'],
    category: '入门',
  },
  {
    id: '3',
    title: '阿里云 — 部署 OpenClaw 构建钉钉 AI 助理',
    description: '轻量应用服务器一键部署，可视化配置面板接入钉钉',
    url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw',
    source: '阿里云',
    type: '图文',
    language: 'zh',
    tags: ['阿里云', '部署', '钉钉'],
    category: '部署',
  },
  {
    id: '4',
    title: '腾讯云 — OpenClaw 接入飞书保姆级教程',
    description: 'Lighthouse 一键部署 + 飞书机器人全流程配置',
    url: 'https://cloud.tencent.com/developer/article/2625073',
    source: '腾讯云',
    type: '图文',
    language: 'zh',
    tags: ['腾讯云', '部署', '飞书'],
    category: '部署',
  },
  {
    id: '5',
    title: 'OpenClaw 海量全玩法攻略 — 国内网络使用 + 本地部署',
    description: 'B 站详细视频教程，涵盖所有主要功能和配置',
    url: 'https://www.bilibili.com/video/BV1kH6nBFEPq/',
    source: 'Bilibili',
    type: '视频',
    language: 'zh',
    tags: ['视频教程', '功能详解'],
    category: '入门',
  },
  {
    id: '6',
    title: 'ClawHub 技能开发文档',
    description: '如何创建、发布和管理自定义技能',
    url: 'https://docs.openclaw.ai/tools/clawhub',
    source: 'OpenClaw Docs',
    type: '官方文档',
    language: 'zh',
    tags: ['技能开发', 'ClawHub'],
    category: '技能开发',
  },
  {
    id: '7',
    title: '341 个恶意 ClawHub 技能窃取用户数据',
    description: 'Koi Security 审计发现 ClawHavoc 供应链攻击，OpenClaw 用户必读安全警示',
    url: 'https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html',
    source: 'The Hacker News',
    type: '图文',
    language: 'en',
    tags: ['安全', '警示'],
    category: '安全',
  },
  {
    id: '8',
    title: '知乎 — 一文读懂 OpenClaw 分析与教程',
    description: '完整目录结构解析：AGENTS.md / SOUL.md / MEMORY.md / Skills 全拆解',
    url: 'https://zhuanlan.zhihu.com/p/2000850539936765122',
    source: '知乎',
    type: '图文',
    language: 'zh',
    tags: ['架构', '目录结构'],
    category: '进阶',
  },
  {
    id: '9',
    title: 'OpenClaw 7 天入门指南 — 飞书知识库',
    description: '从认识到进阶，每天一个主题的系统化学习路径',
    url: 'https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf',
    source: '飞书',
    type: '图文',
    language: 'zh',
    tags: ['学习路径', '系统化'],
    category: '入门',
  },
  {
    id: '10',
    title: 'B 站 — 本地部署接入微信/飞书/钉钉/QQ 10 分钟保姆级教程',
    description: '10 分钟手把手教会，附完整操作文档，四大平台全覆盖',
    url: 'https://www.bilibili.com/video/BV1MfFAz6EnR/',
    source: 'Bilibili',
    type: '视频',
    language: 'zh',
    tags: ['本地部署', '多平台'],
    category: '部署',
  },
];
