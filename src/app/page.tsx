import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg overflow-x-hidden">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              🦞 <span className="text-gradient">OpenClaw</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/learn" className="text-sm text-gray-400 hover:text-white transition">学习路径</Link>
              <Link href="/tutorials" className="text-sm text-gray-400 hover:text-white transition">教程库</Link>
              <Link href="/skills" className="text-sm text-gray-400 hover:text-white transition">技能市场</Link>
              <a href="https://github.com/youyouguoke/openclaw" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        {/* 背景光效 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></span>
            <span className="text-xs text-gray-300">OpenClaw 一站式学习社区</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            掌握你的<br />
            <span className="text-gradient">24/7 AI 助手</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            系统化学习路径 · 精选教程资源 · 5490+ 社区技能
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="btn-gradient inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl"
            >
              开始学习
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition backdrop-blur-sm"
            >
              浏览教程
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">5490+</div>
              <div className="text-sm text-gray-400">社区技能</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">31</div>
              <div className="text-sm text-gray-400">技能分类</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">421+</div>
              <div className="text-sm text-gray-400">精选教程</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            为什么选择 <span className="text-gradient">OpenClaw</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-8 rounded-2xl glow">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">多平台连接</h3>
              <p className="text-gray-400 leading-relaxed">
                Telegram、Discord、WhatsApp、飞书、微信... 随时随地与 AI 对话
              </p>
            </div>
            <div className="card p-8 rounded-2xl glow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">可扩展技能</h3>
              <p className="text-gray-400 leading-relaxed">
                从天气查询到代码生成，一键安装，无限扩展 AI 能力
              </p>
            </div>
            <div className="card p-8 rounded-2xl glow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">自托管部署</h3>
              <p className="text-gray-400 leading-relaxed">
                数据完全私有，部署在你的服务器上，隐私安全由你掌控
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-gradient">7 天</span> 学习路径
            </h2>
            <p className="text-gray-400">每天一个主题，从入门到精通</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { day: 1, title: '认识', subtitle: 'OpenClaw' },
              { day: 2, title: '安装', subtitle: '配置' },
              { day: 3, title: '通道', subtitle: '对接' },
              { day: 4, title: '技能', subtitle: '使用' },
              { day: 5, title: '开发', subtitle: '自定义' },
              { day: 6, title: '自动化', subtitle: '高级' },
              { day: 7, title: '安全', subtitle: '实践' },
            ].map((item) => (
              <Link
                key={item.day}
                href="/learn"
                className="card p-6 rounded-xl text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 group-hover:scale-110 transition">
                  {item.day}
                </div>
                <div className="text-white font-semibold mb-1">{item.title}</div>
                <div className="text-xs text-gray-500">{item.subtitle}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tutorials */}
            <div className="card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📖</span>
                <h3 className="text-2xl font-bold text-white">精选教程</h3>
              </div>
              <div className="space-y-4">
                {[
                  { tag: '入门', color: 'blue', title: 'OpenClaw 下载安装使用', source: 'Apifox' },
                  { tag: '部署', color: 'green', title: '飞书对接保姆级教程', source: '博客园' },
                  { tag: '安全', color: 'red', title: '恶意技能安全警示', source: 'Hacker News' },
                ].map((item, i) => (
                  <Link key={i} href="/tutorials" className="block group">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition">
                      <span className={`text-xs bg-${item.color}-500/20 text-${item.color}-400 px-2 py-1 rounded`}>
                        {item.tag}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition flex-1 truncate">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500">{item.source}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/tutorials" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mt-6">
                浏览全部教程
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Skills */}
            <div className="card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🛠️</span>
                <h3 className="text-2xl font-bold text-white">热门技能</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'AI & LLMs', count: 159 },
                  { name: 'Search', count: 148 },
                  { name: 'DevOps', count: 144 },
                  { name: 'Coding', count: 55 },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href="/skills"
                    className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition"
                  >
                    <div className="text-white font-medium text-sm mb-1">{cat.name}</div>
                    <div className="text-xs text-gray-500">{cat.count} 个技能</div>
                  </Link>
                ))}
              </div>
              <Link href="/skills" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mt-6">
                浏览全部技能
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="font-semibold text-amber-400 mb-2">安全提醒</h4>
                <p className="text-amber-200/70 text-sm leading-relaxed">
                  已发现恶意技能通过 ClawHub 传播。安装第三方技能前请务必审查源代码。
                  <a href="https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-amber-300">了解详情</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © 2026 OpenClaw 社区
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">官方文档</a>
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              <a href="https://clawhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ClawHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
