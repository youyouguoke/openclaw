'use client';

import { useState } from 'react';
import Link from 'next/link';
import { skills, skillCategories } from '@/data/skills';

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  const filteredSkills = selectedCategory === '全部'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

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
              <Link href="/skills" className="text-sm text-white transition">技能市场</Link>
            </div>
            <button className="md:hidden text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            技能市场
          </h1>
          <p className="text-lg text-gray-400">
            发现并安装 OpenClaw 社区技能
          </p>
        </div>
      </header>

      {/* Categories */}
      <div className="sticky top-16 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('全部')}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition ${
                selectedCategory === '全部'
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              全部
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="bg-black/50 rounded-lg p-3 mb-4 overflow-x-auto">
                <code className="text-xs text-cyan-400 font-mono whitespace-nowrap">
                  {skill.installCommand}
                </code>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{skill.author}</span>
                {skill.downloads && (
                  <span>⬇️ {skill.downloads >= 1000 ? `${(skill.downloads / 1000).toFixed(1)}k` : skill.downloads}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-400">该分类下暂无技能</p>
          </div>
        )}
      </div>

      {/* Install Guide */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            如何安装技能
          </h2>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { step: '1', title: '环境准备', desc: '已安装 OpenClaw' },
              { step: '2', title: '复制命令', desc: '复制安装命令' },
              { step: '3', title: '运行安装', desc: '终端执行命令' },
              { step: '4', title: '重启生效', desc: '重启 Gateway' },
            ].map((item) => (
              <div key={item.step} className="text-center p-4">
                <div className="w-8 h-8 bg-white text-black text-sm font-bold rounded-full flex items-center justify-center mx-auto mb-2">
                  {item.step}
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p className="text-amber-200/70 text-sm">
              ⚠️ 安装第三方技能前请审查源代码
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © 2026 OpenClaw 社区
        </div>
      </footer>
    </div>
  );
}
