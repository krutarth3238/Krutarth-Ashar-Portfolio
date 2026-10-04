import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const SpatialFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 py-10 bg-[#0f172a]/60 backdrop-blur-2xl relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center border border-white/20 shadow-[0_2px_10px_rgba(0,113,227,0.4)] bg-black/40 shrink-0">
            <img 
              src="/logo.png" 
              alt="KA Monogram Logo" 
              className="w-full h-full object-contain p-0.5" 
            />
          </div>
          <span className="font-display font-semibold text-white text-sm">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-slate-500 text-xs">•</span>
          <span className="text-xs text-slate-300">{PERSONAL_INFO.role}</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-300">
          <a
            className="hover:text-[#38bdf8] transition-colors"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            Email
          </a>
          <a
            className="hover:text-[#38bdf8] transition-colors"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-[#38bdf8] transition-colors"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#38bdf8] transition-colors font-medium cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
