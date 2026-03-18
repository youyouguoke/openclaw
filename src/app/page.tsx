import Link from 'next/link';

export default function Home() {
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
              <Link href="/learn" className="text-sm text-gray-400 hover:text-white transition">学习路径</Link>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 grid-bg">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 animate-float">
            <span className="text-7xl md:text-8xl">🦞</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">OpenClaw 社区</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            一站式学习与资源聚合平台
            <br className="hidden md:block" />
            从入门到精通，掌握你的 24/7 AI 助手
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="btn-primary text-center"
            >
              开始学习
            </Link>
            <Link
              href="/tutorials"
              className="btn-secondary text-center"
            >
              浏览教程
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="tech-card p-8 rounded-2xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-white">多平台连接</h3>
              <p className="text-gray-400 leading-relaxed">
                无缝对接 Telegram、Discord、WhatsApp、飞书、微信等平台，随时随地与 AI 对话
              </p>
            </div>
            <div className="tech-card p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-white">可扩展技能</h3>
              <p className="text-gray-400 leading-relaxed">
                5490+ 社区技能，从天气查询到代码生成，一键安装扩展能力
              </p>
            </div>
            <div className="tech-card p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-white">自托管部署</h3>
              <p className="text-gray-400 leading-relaxed">
                完全数据主权，你的数据留在你的服务器上，隐私和安全由你掌控
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">📚 7 天掌握 OpenClaw</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            每天一个主题，系统化学习路径
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {['认识', '安装', '对接', '技能', '开发', '自动化', '安全'].map((day, i) => (
              <Link
                key={i}
                href="/learn"
                className="tech-card p-4 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-xs text-gray-500 mb-2">Day {i + 1}</div>
                <div className="font-medium text-white">{day}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/learn"
              className="text-blue-400 hover:text-blue-300 transition text-sm"
            >
              查看完整学习路径 →
            </Link>
          </div>
        </div>
      </section>

      {/* Tutorials Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">🔥 精选教程</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl"> curated 高质量教程资源</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="tech-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">入门</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">图文</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">OpenClaw 下载安装使用</h3>
              <p className="text-gray-400 text-sm mb-4">
                系统要求、多种安装方式对比、常见问题排查
              </p>
              <Link href="/tutorials" className="text-blue-400 hover:text-blue-300 text-sm transition">
                查看更多 →
              </Link>
            </div>
            <div className="tech-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">部署</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">图文</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">飞书对接保姆级教程</h3>
              <p className="text-gray-400 text-sm mb-4">
                Linux 下安装并对接飞书机器人全流程
              </p>
              <Link href="/tutorials" className="text-blue-400 hover:text-blue-300 text-sm transition">
                查看更多 →
              </Link>
            </div>
            <div className="tech-card p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">安全</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">图文</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">恶意技能安全警示</h3>
              <p className="text-gray-400 text-sm mb-4">
                341 个恶意 ClawHub 技能窃取用户数据事件分析
              </p>
              <Link href="/tutorials" className="text-blue-400 hover:text-blue-300 text-sm transition">
                查看更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">🛠️ 热门技能分类</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl">5490+ 技能，覆盖 31 个类别</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'AI & LLMs', count: 159 },
              { name: 'Search & Research', count: 148 },
              { name: 'DevOps & Cloud', count: 144 },
              { name: 'Marketing & Sales', count: 94 },
              { name: 'Web & Frontend', count: 46 },
              { name: 'Coding Agents', count: 55 },
              { name: 'Smart Home & IoT', count: 50 },
              { name: 'Communication', count: 58 },
            ].map((cat) => (
              <Link
                key={cat.name}
                href="/skills"
                className="tech-card p-5 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="font-medium text-white mb-1">{cat.name}</div>
                <div className="text-sm text-gray-500">{cat.count} 个技能</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/skills"
              className="text-blue-400 hover:text-blue-300 transition text-sm"
            >
              浏览全部技能 →
            </Link>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="tech-card border-amber-500/30 bg-amber-500/5 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚠️</div>
              <div>
                <h3 className="font-semibold text-amber-400 mb-2">安全提醒</h3>
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  已发现恶意技能通过 ClawHub 传播，窃取用户数据。安装第三方技能前请务必审查源代码。
                  <a
                    href="https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline ml-1 hover:text-amber-300 transition"
                  >
                    了解详情 ↗
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2026 OpenClaw 社区
              </p>
              <p className="text-gray-600 text-xs mt-1">
                一站式学习与资源聚合平台
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                官方文档
              </a>
              <span className="text-gray-700">|</span>
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                GitHub
              </a>
              <span className="text-gray-700">|</span>
              <a href="https://clawhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                ClawHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
