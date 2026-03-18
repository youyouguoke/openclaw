import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">
              🦞 OpenClaw
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/learn" className="text-sm text-gray-400 hover:text-white transition">学习路径</Link>
              <Link href="/tutorials" className="text-sm text-gray-400 hover:text-white transition">教程库</Link>
              <Link href="/skills" className="text-sm text-gray-400 hover:text-white transition">技能市场</Link>
              <a href="https://github.com/youyouguoke/openclaw" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">GitHub</a>
            </div>
            <button className="md:hidden text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-gray-400">OpenClaw 一站式学习社区</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            掌握你的<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">24/7 AI 助手</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            系统化学习路径 · 精选教程资源 · 5490+ 社区技能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition"
            >
              开始学习
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition"
            >
              浏览教程
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">5490+</div>
              <div className="text-sm text-gray-500">社区技能</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">31</div>
              <div className="text-sm text-gray-500">技能分类</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">421+</div>
              <div className="text-sm text-gray-500">精选教程</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            为什么选择 OpenClaw
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">多平台连接</h3>
              <p className="text-gray-400 leading-relaxed">
                Telegram、Discord、WhatsApp、飞书、微信... 随时随地与 AI 对话
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">可扩展技能</h3>
              <p className="text-gray-400 leading-relaxed">
                从天气查询到代码生成，一键安装，无限扩展 AI 能力
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">自托管部署</h3>
              <p className="text-gray-400 leading-relaxed">
                数据完全私有，部署在你的服务器上，隐私安全由你掌控
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              7 天学习路径
            </h2>
            <p className="text-gray-400">每天一个主题，从入门到精通</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { day: 1, title: '认识', desc: 'OpenClaw' },
              { day: 2, title: '安装', desc: '与配置' },
              { day: 3, title: '通道', desc: '对接' },
              { day: 4, title: '技能', desc: '安装使用' },
              { day: 5, title: '自定义', desc: '技能开发' },
              { day: 6, title: '高级', desc: '自动化' },
              { day: 7, title: '安全', desc: '最佳实践' },
            ].map((item) => (
              <Link
                key={item.day}
                href="/learn"
                className="group p-6 bg-black rounded-xl border border-white/10 hover:border-blue-500/50 transition"
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">D{item.day}</div>
                <div className="text-white font-medium mb-1">{item.title}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/learn" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              查看完整课程 →
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tutorials */}
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📖</span>
                <h3 className="text-2xl font-bold text-white">精选教程</h3>
              </div>
              <div className="space-y-4">
                {[
                  { tag: '入门', title: 'OpenClaw 下载安装使用', source: 'Apifox' },
                  { tag: '部署', title: '飞书对接保姆级教程', source: '博客园' },
                  { tag: '安全', title: '恶意技能安全警示', source: 'Hacker News' },
                ].map((item, i) => (
                  <Link key={i} href="/tutorials" className="block group">
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
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
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🛠️</span>
                <h3 className="text-2xl font-bold text-white">热门技能</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'AI & LLMs', count: 159 },
                  { name: 'Search & Research', count: 148 },
                  { name: 'DevOps & Cloud', count: 144 },
                  { name: 'Coding Agents', count: 55 },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href="/skills"
                    className="p-4 bg-black rounded-lg border border-white/10 hover:border-blue-500/50 transition"
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
          <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⚠️</span>
              <div>
                <h4 className="font-semibold text-amber-400 mb-2">安全提醒</h4>
                <p className="text-amber-200/70 text-sm leading-relaxed">
                  已发现恶意技能通过 ClawHub 传播。安装第三方技能前请务必审查源代码。
                  <a href="https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html" target="_blank" rel="noopener noreferrer" className="underline ml-1">了解详情</a>
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
