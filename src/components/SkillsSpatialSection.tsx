import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillCategory, SkillDetail } from '../types/portfolio';
import { 
  Search, 
  Cpu, 
  Database, 
  Bot, 
  Terminal as TerminalIcon, 
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';

export const SkillsSpatialSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Set of expanded skill names
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(
    new Set(['RLHF / RLAIF', 'Reverse-Engineered WMS ETL', 'Boundary-Gated Autonomy', 'FastAPI & Asynchronous Python'])
  );

  const toggleSkill = (skillName: string) => {
    setExpandedSkills((prev) => {
      const next = new Set(prev);
      if (next.has(skillName)) {
        next.delete(skillName);
      } else {
        next.add(skillName);
      }
      return next;
    });
  };

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'neurology':
        return <Cpu className="w-4 h-4 text-[#38bdf8]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#34d399]" />;
      case 'smart_toy':
        return <Bot className="w-4 h-4 text-[#818cf8]" />;
      case 'terminal':
      default:
        return <TerminalIcon className="w-4 h-4 text-[#fbbf24]" />;
    }
  };

  const displayedCategories = selectedCategoryIndex === 'all'
    ? SKILL_CATEGORIES
    : [SKILL_CATEGORIES[selectedCategoryIndex]];

  return (
    <section className="w-full py-16 md:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="skills">
      {/* Section Header Plaque */}
      <div className="mb-10 text-left">
        <div className="spatial-glass-card inline-block px-7 py-5 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-1.5 font-bold">
            <span>04 —</span>
            <span className="text-slate-400">Technical Competencies</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-1.5">
            Technical Skills
          </h2>
          <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">
            Click any skill to expand its implementation details and production applications
          </p>
        </div>
      </div>

      {/* FILTER TABS & SEARCH BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 text-left">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <button
            onClick={() => {
              setSelectedCategoryIndex('all');
              setSearchQuery('');
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategoryIndex === 'all' && !searchQuery
                ? 'bg-[#0071e3] text-white shadow-md border border-[#38bdf8]/50'
                : 'spatial-glass-pill text-slate-300 hover:text-white'
            }`}
          >
            All Skills
          </button>
          
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = selectedCategoryIndex === idx && !searchQuery;
            return (
              <button
                key={cat.title}
                onClick={() => {
                  setSelectedCategoryIndex(idx);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0071e3] text-white shadow-md border border-[#38bdf8]/50'
                    : 'spatial-glass-pill text-slate-300 hover:text-white'
                }`}
              >
                {getDomainIcon(cat.icon)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search skills (e.g. PyTorch, WMS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 rounded-full text-xs text-slate-900 placeholder-slate-400 bg-white border border-slate-200 focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 transition-all shadow-sm font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* SKILL CATEGORIES WITH EXPANDABLE SKILL CARDS */}
      <div className="space-y-8 text-left">
        {displayedCategories.map((category) => {
          const filteredSkills = searchQuery.trim()
            ? category.skills.filter((s) =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (s.proof && s.proof.toLowerCase().includes(searchQuery.toLowerCase()))
              )
            : category.skills;

          if (filteredSkills.length === 0) return null;

          return (
            <div key={category.title} className="space-y-3">
              {/* Category Header Bar */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                {getDomainIcon(category.icon)}
                <h3 className="font-display font-bold text-lg text-white">
                  {category.title}
                </h3>
                <span className="text-xs text-slate-400 font-medium ml-auto">
                  {filteredSkills.length} competencies
                </span>
              </div>

              {/* Expandable Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filteredSkills.map((skill) => {
                  const isExpanded = expandedSkills.has(skill.name);

                  return (
                    <div
                      key={skill.name}
                      onClick={() => toggleSkill(skill.name)}
                      className={`rounded-2xl border transition-all cursor-pointer p-4 text-left ${
                        isExpanded
                          ? 'bg-white/15 border-[#38bdf8]/60 shadow-lg ring-1 ring-[#38bdf8]/30'
                          : 'spatial-glass-card hover:bg-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      {/* Skill Header (Always Visible) */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-display font-semibold text-sm text-white flex items-center gap-2">
                          <span>{skill.name}</span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {skill.level && (
                            <span className="spatial-glass-pill px-2.5 py-0.5 text-[10px] text-[#38bdf8] font-semibold border border-[#38bdf8]/30">
                              {skill.level}
                            </span>
                          )}
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-[#38bdf8]' : ''
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expandable Content Drawer */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-white/10 text-xs space-y-2 animate-fadeIn">
                          {skill.proof && (
                            <p className="text-slate-300 leading-relaxed text-[11px]">
                              {skill.proof}
                            </p>
                          )}

                          <div className="flex items-center justify-between text-[11px] pt-1">
                            {skill.usedIn ? (
                              <span className="text-[#34d399] font-medium">
                                Applied in: <strong className="text-white">{skill.usedIn}</strong>
                              </span>
                            ) : (
                              <span className="text-slate-400">Core Engineering Stack</span>
                            )}
                            <span className="text-[#38bdf8] text-[10px] font-mono">
                              Verified
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
