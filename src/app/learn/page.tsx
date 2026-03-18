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
    <div className="min-h-screen gradient-bg">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <span className="text-gradient">🦞 OpenClaw</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/learn" className="text-sm text-white transition">学习路径</Link>
              <Link href="/tutorials" className="text-sm text-gray-400 hover:text-white transition">教程库</Link>
              <Link href="/skills" className="text-sm text-gray-400 hover:text-white transition">技能市场</Link>
            </div>
            <button className="md:hidden text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-12 px-4 grid-bg">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">📚 7 天学习路径</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            从入门到精通，每天一个主题，系统化掌握 OpenClaw
          </p>
        </div>
      </header>

      {/* Learning Path */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          {learningPath.map((day) => (
            <div
              key={day.day}
              className="tech-card rounded-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-6 py-5 border-b border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-blue-500/30">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white">
                      Day {day.day}: {day.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">{day.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-5">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    学习内容
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {day.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                        <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    推荐资源
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {day.resources.map((resource, i) => (
                      <span
                        key={i}
                        className="text-sm bg-white/5 text-gray-400 px-3 py-1.5 rounded-full border border-white/10 hover:border-blue-500/30 hover:text-blue-400 transition"
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
      <section className="border-t border-white/5">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">准备好开始了吗？</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            按照学习路径循序渐进，或跳转到你感兴趣的主题
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutorials"
              className="btn-primary"
            >
              浏览教程
            </Link>
            <Link
              href="/skills"
              className="btn-secondary"
            >
              探索技能
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2026 OpenClaw 社区 - 学习路径</p>
        </div>
      </footer>
    </div>
  );
}
