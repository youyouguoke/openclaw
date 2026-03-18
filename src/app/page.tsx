import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          🦞 OpenClaw 社区
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          一站式学习与资源聚合平台
          <br />
          从入门到精通，掌握你的 24/7 AI 助手
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/learn"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            开始学习
          </Link>
          <Link
            href="/tutorials"
            className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition"
          >
            浏览教程
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">多平台连接</h3>
            <p className="text-slate-600">
              无缝对接 Telegram、Discord、WhatsApp、飞书、微信等平台，随时随地与 AI 对话
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">可扩展技能</h3>
            <p className="text-slate-600">
              5490+ 社区技能，从天气查询到代码生成，一键安装扩展能力
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">自托管部署</h3>
            <p className="text-slate-600">
              完全数据主权，你的数据留在你的服务器上，隐私和安全由你掌控
            </p>
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">📚 7 天掌握 OpenClaw</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {['认识', '安装', '对接', '技能', '开发', '自动化', '安全'].map((day, i) => (
              <Link
                key={i}
                href="/learn"
                className="p-4 bg-white rounded-lg text-center hover:shadow-md transition"
              >
                <div className="text-sm text-slate-500 mb-1">Day {i + 1}</div>
                <div className="font-medium">{day}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/learn"
              className="text-blue-600 hover:underline font-medium"
            >
              查看完整学习路径 →
            </Link>
          </div>
        </div>
      </section>

      {/* Tutorials Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">🔥 精选教程</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">入门</span>
            <h3 className="text-lg font-semibold mt-3 mb-2">OpenClaw 下载安装使用</h3>
            <p className="text-slate-600 text-sm mb-4">
              系统要求、多种安装方式对比、常见问题排查
            </p>
            <Link href="/tutorials" className="text-blue-600 hover:underline text-sm">
              查看更多 →
            </Link>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">部署</span>
            <h3 className="text-lg font-semibold mt-3 mb-2">飞书对接保姆级教程</h3>
            <p className="text-slate-600 text-sm mb-4">
              Linux 下安装并对接飞书机器人全流程
            </p>
            <Link href="/tutorials" className="text-blue-600 hover:underline text-sm">
              查看更多 →
            </Link>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">安全</span>
            <h3 className="text-lg font-semibold mt-3 mb-2">恶意技能安全警示</h3>
            <p className="text-slate-600 text-sm mb-4">
              341 个恶意 ClawHub 技能窃取用户数据事件分析
            </p>
            <Link href="/tutorials" className="text-blue-600 hover:underline text-sm">
              查看更多 →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">🛠️ 热门技能分类</h2>
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
                className="p-4 bg-white rounded-lg hover:shadow-md transition"
              >
                <div className="font-medium">{cat.name}</div>
                <div className="text-sm text-slate-500">{cat.count} 个技能</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/skills"
              className="text-blue-600 hover:underline font-medium"
            >
              浏览全部技能 →
            </Link>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">安全提醒</h3>
              <p className="text-amber-800 text-sm">
                已发现恶意技能通过 ClawHub 传播，窃取用户数据。安装第三方技能前请务必审查源代码。
                <a
                  href="https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline ml-1"
                >
                  了解详情 ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>OpenClaw 社区 - 一站式学习与资源聚合平台</p>
          <p className="mt-2">
            <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">
              官方文档
            </a>
            {' | '}
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            {' | '}
            <a href="https://clawhub.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              ClawHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
