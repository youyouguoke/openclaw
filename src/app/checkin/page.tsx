import Link from 'next/link';

export default function CheckinPage() {
  const today = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  const day1Tasks = [
    {
      id: 1,
      title: '阅读 OpenClaw 简介',
      description: '了解 OpenClaw 是什么，它能做什么',
      duration: '10 分钟',
      points: 10,
    },
    {
      id: 2,
      title: '观看介绍视频',
      description: '观看 OpenClaw 功能演示视频（B 站）',
      duration: '15 分钟',
      points: 15,
      link: 'https://www.bilibili.com/video/BV1kH6nBFEPq/',
    },
    {
      id: 3,
      title: '了解核心功能',
      description: '学习多平台连接、可扩展技能、自托管部署三大核心能力',
      duration: '15 分钟',
      points: 15,
    },
    {
      id: 4,
      title: '浏览社区技能市场',
      description: '查看 ClawHub 上有哪些有趣的技能',
      duration: '10 分钟',
      points: 10,
      link: 'https://clawhub.com',
    },
    {
      id: 5,
      title: '写下你的学习目标',
      description: '用一句话描述你想用 OpenClaw 实现什么',
      duration: '10 分钟',
      points: 20,
      type: 'writing',
    },
  ];

  const totalPoints = day1Tasks.reduce((sum, task) => sum + task.points, 0);

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
              <Link href="/checkin" className="text-sm text-white transition">打卡</Link>
              <Link href="/tutorials" className="text-sm text-gray-400 hover:text-white transition">教程库</Link>
              <Link href="/skills" className="text-sm text-gray-400 hover:text-white transition">技能市场</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full pulse-dot"></span>
            <span className="text-xs text-blue-300 font-medium">Day 1 · 认识 OpenClaw</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            今日<span className="text-gradient">打卡</span>
          </h1>
          <p className="text-xl text-gray-400">{today}</p>
        </div>
      </header>

      {/* Progress Card */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">今日任务</h2>
                <p className="text-gray-400">完成所有任务，获得 {totalPoints} 积分</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-gradient">{totalPoints}</div>
                <div className="text-sm text-gray-400">总积分</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>进度：0/{day1Tasks.length}</span>
              <span>0%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {day1Tasks.map((task, index) => (
              <div
                key={task.id}
                className="card p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <label className="relative flex items-start cursor-pointer mt-1">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-6 h-6 border-2 border-gray-600 rounded-lg peer-checked:bg-blue-500 peer-checked:border-blue-500 transition"></div>
                  </label>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-blue-400">任务 {task.id}</span>
                      <span className="text-xs bg-white/10 text-gray-400 px-2 py-1 rounded">{task.duration}</span>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">+{task.points} 积分</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{task.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{task.description}</p>
                    
                    {task.link && (
                      <a
                        href={task.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
                      >
                        前往学习
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                    
                    {task.type === 'writing' && (
                      <textarea
                        className="w-full mt-3 p-4 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition resize-none"
                        rows={3}
                        placeholder="写下你的学习目标..."
                      ></textarea>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-center">
            <h3 className="text-xl font-bold text-white mb-4">完成所有任务后提交</h3>
            <p className="text-gray-400 mb-6">提交后获得今日打卡徽章，并解锁明天的任务</p>
            <button className="btn-gradient inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl">
              提交打卡
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © 2026 OpenClaw 社区 - 7 天学习打卡
        </div>
      </footer>
    </div>
  );
}
