import Link from 'next/link';
import { tutorials } from '@/data/tutorials';

export default function TutorialsPage() {
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
              <Link href="/learn" className="text-sm text-gray-400 hover:text-white transition">学习路径</Link>
              <Link href="/tutorials" className="text-sm text-white transition">教程库</Link>
              <Link href="/skills" className="text-sm text-gray-400 hover:text-white transition">技能市场</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            教程<span className="text-gradient">资源库</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            精选 OpenClaw 教程，从入门到精通
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-black/50 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg whitespace-nowrap">
              全部
            </span>
            {['入门', '进阶', '部署', '技能开发', '安全'].map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-white/5 text-gray-400 text-sm font-medium rounded-lg whitespace-nowrap border border-white/10 hover:bg-white/10 hover:text-white cursor-pointer transition"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorial List */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {tutorials.map((tutorial) => (
            <a
              key={tutorial.id}
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block p-6 rounded-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                      {tutorial.source}
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      {tutorial.type}
                    </span>
                    <span className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                      {tutorial.language === 'zh' ? '中文' : 'English'}
                    </span>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                      {tutorial.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {tutorial.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tutorial.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 text-gray-500 group-hover:text-blue-400 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © 2026 OpenClaw 社区
        </div>
      </footer>
    </div>
  );
}
