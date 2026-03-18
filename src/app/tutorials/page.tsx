import Link from 'next/link';
import { tutorials } from '@/data/tutorials';

export default function TutorialsPage() {
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
              <Link href="/tutorials" className="text-sm text-white transition">教程库</Link>
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
            <span className="text-gradient">📚 教程资源库</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            精选 OpenClaw 教程，从入门到精通
          </p>
        </div>
      </header>

      {/* Filters - 移动端横向滚动 */}
      <div className="sticky top-16 z-40 backdrop-blur-md bg-black/50 border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium whitespace-nowrap border border-blue-500/30">
              全部
            </span>
            {['入门', '进阶', '部署', '技能开发', '安全'].map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-white/5 text-gray-400 rounded-full text-sm font-medium whitespace-nowrap border border-white/10 hover:bg-white/10 hover:text-white cursor-pointer transition"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorial List */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-4">
          {tutorials.map((tutorial) => (
            <a
              key={tutorial.id}
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card p-6 rounded-2xl block group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                      {tutorial.source}
                    </span>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                      {tutorial.type}
                    </span>
                    <span className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">
                      {tutorial.language === 'zh' ? '中文' : 'English'}
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                      {tutorial.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {tutorial.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/5 text-gray-500 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  访问
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2026 OpenClaw 社区 - 教程资源库</p>
        </div>
      </footer>
    </div>
  );
}
