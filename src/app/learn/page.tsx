import Link from 'next/link';

const learningPath = [
  {
    day: 1,
    title: '认识 OpenClaw',
    description: '了解 OpenClaw 是什么，核心能力和应用场景',
    topics: ['什么是 OpenClaw', '核心功能介绍', '与其他 AI 助手的区别', '典型使用场景'],
    resources: ['官方文档', '介绍视频', '社区案例'],
  },
  {
    day: 2,
    title: '安装与配置',
    description: '选择适合你的安装方式，完成基础配置',
    topics: ['系统要求', 'Node.js 环境', '多种安装方式对比', '配置文件详解', '常见问题排查'],
    resources: ['安装教程', '配置指南', 'FAQ'],
  },
  {
    day: 3,
    title: '通道对接',
    description: '将 OpenClaw 连接到你的常用通讯平台',
    topics: ['飞书机器人对接', '微信接入', '钉钉集成', 'Telegram Bot', 'Discord 配置'],
    resources: ['飞书教程', '微信教程', '钉钉教程'],
  },
  {
    day: 4,
    title: '技能安装与使用',
    description: '发现并安装社区技能，扩展 AI 能力',
    topics: ['ClawHub 使用', '技能分类浏览', '一键安装技能', '技能配置', '使用最佳实践'],
    resources: ['ClawHub 文档', '热门技能推荐'],
  },
  {
    day: 5,
    title: '自定义技能开发',
    description: '创建属于你自己的 OpenClaw 技能',
    topics: ['SKILL.md 规范', '技能目录结构', '工具调用', '参数处理', '发布到 ClawHub'],
    resources: ['技能开发文档', '示例技能', '发布指南'],
  },
  {
    day: 6,
    title: '高级自动化',
    description: '构建复杂的自动化工作流',
    topics: ['心跳机制', '定时任务', '多 Agent 协作', '与外部 API 集成', 'Canvas 画布'],
    resources: ['自动化案例', '高级配置'],
  },
  {
    day: 7,
    title: '安全与最佳实践',
    description: '确保你的 OpenClaw 部署安全可靠',
    topics: ['恶意技能识别', '权限管理', '数据隐私', '安全加固', '监控与日志'],
    resources: ['安全指南', 'CVE 列表', '加固建议'],
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">📚 7 天学习路径</h1>
          <p className="text-slate-600">
            从入门到精通，每天一个主题，系统化掌握 OpenClaw
          </p>
        </div>
      </header>

      {/* Learning Path */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {learningPath.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {day.day}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Day {day.day}: {day.title}
                    </h2>
                    <p className="text-slate-600 text-sm">{day.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-slate-900 mb-2">学习内容</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {day.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">推荐资源</h3>
                  <div className="flex flex-wrap gap-2">
                    {day.resources.map((resource, i) => (
                      <span
                        key={i}
                        className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                      >
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-slate-600 mb-6">
            按照学习路径循序渐进，或跳转到你感兴趣的主题
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/tutorials"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              浏览教程
            </Link>
            <Link
              href="/skills"
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition"
            >
              探索技能
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
