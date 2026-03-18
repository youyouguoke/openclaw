'use client';

import { useState } from 'react';
import { skills, skillCategories } from '@/data/skills';

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  const filteredSkills = selectedCategory === '全部'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">🛠️ 技能市场</h1>
          <p className="text-slate-600">
            发现并安装 OpenClaw 社区技能，扩展你的 AI 助手能力
          </p>
        </div>
      </header>

      {/* Categories */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('全部')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              selectedCategory === '全部'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            全部
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {skill.name}
                </h3>
                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                {skill.description}
              </p>
              <div className="bg-slate-50 rounded-lg p-3 mb-4">
                <code className="text-xs text-slate-700 font-mono">
                  {skill.installCommand}
                </code>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>作者：{skill.author}</span>
                {skill.downloads && (
                  <span>⬇️ {skill.downloads.toLocaleString()}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">该分类下暂无技能</p>
          </div>
        )}
      </div>

      {/* Install Guide */}
      <section className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">📦 如何安装技能？</h2>
          <ol className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span>确保已安装 OpenClaw 和 ClawHub CLI</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span>复制技能卡片中的安装命令</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span>在终端中运行命令完成安装</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span>重启 OpenClaw Gateway 使技能生效</span>
            </li>
          </ol>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm">
              ⚠️ <strong>安全提醒：</strong>安装第三方技能前请审查源代码，避免安装来源不明的技能。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
