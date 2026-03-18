import { tutorials } from '@/data/tutorials';

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">📚 教程资源库</h1>
          <p className="text-slate-600">
            精选 OpenClaw 教程，从入门到精通
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            全部
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-slate-200 cursor-pointer">
            入门
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-slate-200 cursor-pointer">
            进阶
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-slate-200 cursor-pointer">
            部署
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-slate-200 cursor-pointer">
            技能开发
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-slate-200 cursor-pointer">
            安全
          </span>
        </div>
      </div>

      {/* Tutorial List */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid gap-4">
          {tutorials.map((tutorial) => (
            <a
              key={tutorial.id}
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {tutorial.source}
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                      {tutorial.type}
                    </span>
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
                      {tutorial.language === 'zh' ? '中文' : 'English'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    {tutorial.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-blue-600 text-sm font-medium">
                  访问 ↗
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
