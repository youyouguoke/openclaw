import Link from 'next/link';

const learningPath = [
  {
    day: 1,
    title: '认识 OpenClaw',
    description: '了解 OpenClaw 是什么，核心能力和应用场景',
    topics: ['什么是 OpenClaw', '核心功能介绍', '与其他 AI 助手的区别', '典型使用场景'],
  },
  {
    day: 2,
    title: '安装与配置',
    description: '选择适合你的安装方式，完成基础配置',
    topics: ['系统要求', 'Node.js 环境', '多种安装方式对比', '配置文件详解', '常见问题排查'],
  },
  {
    day: 3,
    title: '通道对接',
    description: '将 OpenClaw 连接到你的常用通讯平台',
    topics: ['飞书机器人对接', '微信接入', '钉钉集成', 'Telegram Bot', 'Discord 配置'],
  },
  {
    day: 4,
    title: '技能安装与使用',
    description: '发现并安装社区技能，扩展 AI 能力',
    topics: ['ClawHub 使用', '技能分类浏览', '一键安装技能', '技能配置', '使用最佳实践'],
  },
  {
    day: 5,
    title: '自定义技能开发',
    description: '创建属于你自己的 OpenClaw 技能',
    topics: ['SKILL.md 规范', '技能目录结构', '工具调用', '参数处理', '发布到 ClawHub'],
  },
  {
    day: 6,
    title: '高级自动化',
    description: '构建复杂的自动化工作流',
    topics: ['心跳机制', '定时任务', '多 Agent 协作', '与外部 API 集成', 'Canvas 画布'],
  },
  {
    day: 7,
    title: '安全与最佳实践',
    description: '确保你的 OpenClaw 部署安全可靠',
    topics: ['恶意技能识别', '权限管理', '数据隐私', '安全加固', '监控与日志'],
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              🦞 <span className="text-gradient">OpenClaw</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/learn" className="text-sm text-white transition">学习路径</Link>
              <Link href="/tutorials" className="text-sm text-gray-400 hover:text-white transition">教程库</Link>
              <Link href="/skills" className="text-sm text-gray-400 hover:text-white transition">技能市场</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gradient">7 天</span> 学习路径
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            从入门到精通，每天一个主题
          </p>
        </div>
      </header>

      {/* Learning Path */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {learningPath.map((day, index) => (
            <div
              key={day.day}
              className="card p-6 rounded-xl relative overflow-hidden"
            >
              {/* 连接线 */}
              {index < learningPath.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* 天数圆形 */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <span className="text-2xl font-bold text-white">{day.day}</span>
                </div>
                
                {/* 内容 */}
                <div className="flex-1 pt-2">
                  <h2 className="text-xl font-bold text-white mb-2">
                    Day {day.day}: {day.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{day.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {day.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            准备好开始了吗
          </h2>
          <p className="text-gray-400 mb-8">
            按照学习路径循序渐进，或跳转到你感兴趣的主题
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutorials"
              className="btn-gradient inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl"
            >
              浏览教程
            </Link>
            <Link
              href="/skills"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition backdrop-blur-sm"
            >
              探索技能
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © 2026 OpenClaw 社区
        </div>
      </footer>
    </div>
  );
}
