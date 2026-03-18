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
              <Link href="/skills" className="text-sm text-white transition">技能市场</Link>
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
            <span className="text-gradient">🛠️ 技能市场</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            发现并安装 OpenClaw 社区技能，扩展你的 AI 助手能力
          </p>
        </div>
      </header>

      {/* Categories - 移动端横向滚动 */}
      <div className="sticky top-16 z-40 backdrop-blur-md bg-black/50 border-b border-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('全部')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition ${
                selectedCategory === '全部'
                  ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              全部
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition ${
                  selectedCategory === cat
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="tech-card p-6 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded whitespace-nowrap">
                  {skill.category}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="bg-white/5 rounded-lg p-3 mb-4 overflow-x-auto">
                <code className="text-xs text-cyan-400 font-mono whitespace-nowrap">
                  {skill.installCommand}
                </code>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>作者：{skill.author}</span>
                {skill.downloads && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {skill.downloads >= 1000 ? `${(skill.downloads / 1000).toFixed(1)}k` : skill.downloads}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400">该分类下暂无技能</p>
          </div>
        )}
      </div>

      {/* Install Guide */}
      <section className="border-t border-white/5">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">📦 如何安装技能？</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: '1', title: '环境准备', desc: '确保已安装 OpenClaw 和 ClawHub CLI' },
              { step: '2', title: '复制命令', desc: '复制技能卡片中的安装命令' },
              { step: '3', title: '运行安装', desc: '在终端中运行命令完成安装' },
              { step: '4', title: '重启生效', desc: '重启 OpenClaw Gateway 使技能生效' },
            ].map((item) => (
              <div key={item.step} className="tech-card p-6 rounded-xl text-center">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center font-bold mx-auto mb-3 border border-blue-500/30">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-amber-500/5 border border-amber-500/30 rounded-xl max-w-2xl mx-auto">
            <p className="text-amber-200/80 text-sm flex items-start gap-2">
              <span className="text-lg">⚠️</span>
              <span>
                <strong>安全提醒：</strong>安装第三方技能前请审查源代码，避免安装来源不明的技能。
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2026 OpenClaw 社区 - 技能市场</p>
        </div>
      </footer>
    </div>
  );
}
