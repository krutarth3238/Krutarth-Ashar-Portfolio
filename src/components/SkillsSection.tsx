import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Search, Code, Cpu, Eye, Database, Bot, Terminal as TerminalIcon } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-[#0071e3]" />;
      case 'neurology':
        return <Cpu className="w-5 h-5 text-[#0071e3]" />;
      case 'center_focus_strong':
        return <Eye className="w-5 h-5 text-[#34c759]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#0071e3]" />;
      case 'smart_toy':
        return <Bot className="w-5 h-5 text-[#6462ec]" />;
      case 'terminal':
      default:
        return <TerminalIcon className="w-5 h-5 text-[#6e6e73]" />;
    }
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (selectedCategory !== 'All' && category.title !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const matchesCategory = category.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkill = category.skills.some((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesCategory || matchesSkill;
  });

  return (
    <section className="w-full py-16 md:py-20 relative" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display font-bold text-3xl tracking-tight text-[#1a1b1f] mb-1.5">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm text-[#6e6e73]">
              Practical, applied engineering proficiencies &amp; toolchains
            </p>
          </div>

          {/* Interactive Search Field */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6e6e73]" />
            <input
              type="text"
              placeholder="Filter skills (e.g. LoRA, PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="liquid-glass-input w-full pl-9 pr-8 py-2 rounded-full text-xs text-[#1a1b1f] placeholder-[#6e6e73] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6e6e73] hover:text-[#1a1b1f] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0071e3] text-white shadow-sm font-semibold'
                  : 'liquid-glass-pill text-[#6e6e73] hover:text-[#1a1b1f]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="liquid-glass-card rounded-3xl p-6 transition-all"
            >
              <div className="flex items-center gap-2.5 mb-4">
                {getCategoryIcon(category.icon)}
                <h3 className="font-display font-semibold text-base text-[#1a1b1f]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills
                  .filter((skill) =>
                    searchQuery
                      ? skill.name.toLowerCase().includes(searchQuery.toLowerCase())
                      : true
                  )
                  .map((skill) => {
                    const matchesSearch =
                      searchQuery &&
                      skill.name.toLowerCase().includes(searchQuery.toLowerCase());

                    return (
                      <span
                        key={skill.name}
                        className={`liquid-glass-pill px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          matchesSearch
                            ? 'bg-[#0071e3] text-white ring-2 ring-[#0071e3]/20 font-semibold scale-105 shadow-sm'
                            : 'text-[#414753]'
                        }`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
