import React, { useState } from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:py-20 relative" id="experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl tracking-tight text-[#1a1b1f] mb-1.5">
            Experience
          </h2>
          <p className="text-sm text-[#6e6e73]">
            Internships, research laboratories, and engineering teams
          </p>
        </div>

        <div className="relative border-l-2 border-black/[0.06] ml-3 md:ml-4 pl-6 md:pl-8 space-y-10">
          {EXPERIENCE_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Ring */}
              <div
                className="absolute -left-[31px] md:-left-[41px] top-4 w-4 h-4 rounded-full ring-4 ring-[#faf8fe] shadow-md transition-transform group-hover:scale-125"
                style={{ backgroundColor: item.companyColor }}
              />

              {/* Liquid Glass Experience Card */}
              <div className="liquid-glass-card rounded-3xl p-6 md:p-8 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2.5">
                  <h3 className="font-display font-bold text-lg md:text-xl text-[#1a1b1f] flex items-center gap-1.5">
                    <span>{item.role}</span>
                    <span style={{ color: item.companyColor }} className="font-semibold">
                      · {item.company}
                    </span>
                  </h3>
                  <span
                    className="liquid-glass-pill text-xs font-medium px-3 py-1 rounded-full w-fit"
                    style={{
                      borderColor: `${item.companyColor}30`,
                      color: item.companyColor,
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-[#414753] leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="text-sm text-[#414753] space-y-1.5 mb-5">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span style={{ color: item.companyColor }} className="mt-0.5 font-bold">
                        •
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.05] items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => {
                      const isHighlighted = sIdx < 2;
                      return (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                            isHighlighted
                              ? 'text-white shadow-sm'
                              : 'liquid-glass-pill text-[#414753]'
                          }`}
                          style={
                            isHighlighted
                              ? { backgroundColor: item.companyColor }
                              : undefined
                          }
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>

                  <span className="text-[11px] text-[#6e6e73]">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
