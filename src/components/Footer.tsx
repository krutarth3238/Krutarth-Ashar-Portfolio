import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-black/[0.05] py-8 liquid-glass relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-b from-[#0077ED] to-[#0071e3] text-white flex items-center justify-center font-display font-bold text-[10px] shadow-sm">
            {PERSONAL_INFO.initials}
          </div>
          <span className="font-display font-semibold text-[#1a1b1f] text-sm">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[#86868b] text-xs">•</span>
          <span className="text-xs text-[#6e6e73]">{PERSONAL_INFO.role}</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#6e6e73]">
          <a
            className="hover:text-[#0071e3] transition-colors"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            Email
          </a>
          <a
            className="hover:text-[#0071e3] transition-colors"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-[#0071e3] transition-colors"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#0071e3] transition-colors font-medium cursor-pointer inline-flex items-center gap-1"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
