export interface Skill {
  id: string;
  name: string;
  description: string;
  installCommand: string;
  category: string;
  author: string;
  githubUrl?: string;
  downloads?: number;
  rating?: number;
}

export const skills: Skill[] = [
  {
    id: '1',
    name: 'weather',
    description: '获取实时天气和预报，支持全球城市查询',
    installCommand: 'npx clawhub@latest install weather',
    category: 'AI & LLMs',
    author: 'OpenClaw Team',
    downloads: 15000,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'coding-agent',
    description: '委托编码任务给 Codex、Claude Code 或 Pi 助手',
    installCommand: 'npx clawhub@latest install coding-agent',
    category: 'Coding Agents',
    author: 'OpenClaw Team',
    downloads: 12000,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'feishu-doc',
    description: '从飞书 Wiki、Docs、Sheets 和 Bitable 获取内容',
    installCommand: 'npx clawhub@latest install feishu-doc',
    category: 'Communication',
    author: 'OpenClaw Team',
    downloads: 8000,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'agent-browser',
    description: '浏览器自动化 CLI，支持导航、填表、点击、截图等',
    installCommand: 'npx clawhub@latest install agent-browser',
    category: 'Web & Frontend',
    author: 'OpenClaw Team',
    downloads: 9500,
    rating: 4.6,
  },
  {
    id: '5',
    name: 'pdf',
    description: 'PDF 文件处理：创建、读取、编辑、合并、拆分、OCR 等',
    installCommand: 'npx clawhub@latest install pdf',
    category: 'Tools',
    author: 'OpenClaw Team',
    downloads: 7200,
    rating: 4.5,
  },
  {
    id: '6',
    name: 'xlsx',
    description: 'Excel 表格处理：读取、编辑、公式、图表、数据清洗',
    installCommand: 'npx clawhub@latest install xlsx',
    category: 'Tools',
    author: 'OpenClaw Team',
    downloads: 6800,
    rating: 4.6,
  },
  {
    id: '7',
    name: 'docx',
    description: 'Word 文档处理：创建、编辑、格式化、目录、页码等',
    installCommand: 'npx clawhub@latest install docx',
    category: 'Tools',
    author: 'OpenClaw Team',
    downloads: 5500,
    rating: 4.4,
  },
  {
    id: '8',
    name: 'finance-data',
    description: '查询 A/港股股价、财务指标、市场新闻、中国宏观经济数据',
    installCommand: 'npx clawhub@latest install finance-data',
    category: 'Search & Research',
    author: 'OpenClaw Team',
    downloads: 4200,
    rating: 4.7,
  },
  {
    id: '9',
    name: 'travel-planner',
    description: '旅行规划助手，帮助创建行程和旅行计划',
    installCommand: 'npx clawhub@latest install travel-planner',
    category: 'AI & LLMs',
    author: 'OpenClaw Team',
    downloads: 3800,
    rating: 4.5,
  },
  {
    id: '10',
    name: 'wechat-mp-cn',
    description: '微信公众号监控 - 文章监控、阅读量追踪、舆情分析',
    installCommand: 'npx clawhub@latest install wechat-mp-cn',
    category: 'Marketing & Sales',
    author: 'OpenClaw Team',
    downloads: 3200,
    rating: 4.8,
  },
];

export const skillCategories = [
  'Web & Frontend',
  'Coding Agents',
  'DevOps & Cloud',
  'Search & Research',
  'Marketing & Sales',
  'AI & LLMs',
  'Smart Home & IoT',
  'Speech & Audio',
  'Communication',
  'Health & Fitness',
  'Notes & PKM',
  'Gaming',
  'Tools',
];
