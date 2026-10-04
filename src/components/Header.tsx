import React, { useState } from 'react';
import { Download, ChevronDown, Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenResumeModal: (track: 'ai' | 'ds') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3.5">
        <div className="liquid-glass-island rounded-2xl sm:rounded-full px-4 sm:px-6 h-14 flex items-center justify-between transition-all">
          {/* Brand Monogram */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-b from-[#0077ED] to-[#0071e3] text-white flex items-center justify-center font-display font-bold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-all">
              KA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm text-[#1a1b1f] tracking-tight group-hover:text-[#0071e3] transition-colors">
                Krutarth Ashar
              </span>
              <span className="text-[10px] text-[#6e6e73] leading-tight font-medium">
                AI &amp; Data Science
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-[#414753]">
            <button
              onClick={() => scrollToSection('about')}
              className="px-3.5 py-1.5 rounded-full hover:text-[#1a1b1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-3.5 py-1.5 rounded-full hover:text-[#1a1b1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-3.5 py-1.5 rounded-full hover:text-[#1a1b1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="px-3.5 py-1.5 rounded-full hover:text-[#1a1b1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="px-3.5 py-1.5 rounded-full hover:text-[#1a1b1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3.5 py-1.5 rounded-full hover:text-[#1a1b1f] hover:bg-black/[0.04] transition-all cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Resume Dropdown + Mobile Trigger */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
                onBlur={() => setTimeout(() => setResumeMenuOpen(false), 200)}
                className="liquid-glass-button inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0071e3] transition-all cursor-pointer"
                type="button"
              >
                <FileText className="w-3.5 h-3.5 text-[#0071e3]" />
                <span>Resume</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#0071e3] transition-transform" />
              </button>

              {resumeMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 liquid-glass rounded-2xl shadow-xl py-1.5 transition-all z-50 border border-white/90 animate-fadeIn">
                  <div className="px-3.5 py-1 text-[11px] text-[#86868b] uppercase tracking-wider font-semibold">
                    Select Track
                  </div>
                  <button
                    onClick={() => {
                      onOpenResumeModal('ai');
                      setResumeMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-body text-[#1a1b1f] hover:bg-[#0071e3]/10 hover:text-[#0071e3] rounded-xl mx-1 transition-colors cursor-pointer text-left"
                  >
                    <div>
                      <div className="font-semibold text-[#1a1b1f]">AI / ML Track</div>
                      <div className="text-[10px] text-[#6e6e73]">LLM Alignment, RLHF, ThinkRL</div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-[#0071e3]" />
                  </button>
                  <button
                    onClick={() => {
                      onOpenResumeModal('ds');
                      setResumeMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-body text-[#1a1b1f] hover:bg-[#0071e3]/10 hover:text-[#0071e3] rounded-xl mx-1 transition-colors cursor-pointer text-left"
                  >
                    <div>
                      <div className="font-semibold text-[#1a1b1f]">Data Science Track</div>
                      <div className="text-[10px] text-[#6e6e73]">ETL, Geospatial, Pipelines</div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-[#0071e3]" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#414753] hover:text-[#1a1b1f] rounded-full hover:bg-black/[0.04] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto px-4 pt-2">
          <div className="liquid-glass rounded-2xl px-5 py-4 shadow-xl border border-white/90 animate-fadeIn">
            <nav className="flex flex-col gap-1 text-sm font-medium text-[#414753]">
              <button
                onClick={() => scrollToSection('about')}
                className="px-3 py-2 rounded-xl hover:text-[#1a1b1f] hover:bg-black/[0.04] text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="px-3 py-2 rounded-xl hover:text-[#1a1b1f] hover:bg-black/[0.04] text-left cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-3 py-2 rounded-xl hover:text-[#1a1b1f] hover:bg-black/[0.04] text-left cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="px-3 py-2 rounded-xl hover:text-[#1a1b1f] hover:bg-black/[0.04] text-left cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className="px-3 py-2 rounded-xl hover:text-[#1a1b1f] hover:bg-black/[0.04] text-left cursor-pointer"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3 py-2 rounded-xl hover:text-[#1a1b1f] hover:bg-black/[0.04] text-left cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
