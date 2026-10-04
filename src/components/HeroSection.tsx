import React, { useState } from 'react';
import { ArrowRight, Mail, FileText, ChevronDown, Download, MapPin, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  onOpenResumeModal: (track: 'ai' | 'ds') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenProjects,
  onOpenContact,
  onOpenResumeModal,
}) => {
  const [resumeDropdown, setResumeDropdown] = useState(false);

  return (
    <section className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 md:pb-20 text-center flex flex-col items-center">
      {/* Sleek Liquid Glass Status Bar */}
      <div className="liquid-glass-pill inline-flex flex-wrap items-center justify-center gap-3 px-4 py-1.5 rounded-full text-xs text-[#414753] font-medium mb-8 shadow-sm">
        <div className="flex items-center gap-1.5 text-[#1a1b1f] font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#0071e3] ring-4 ring-[#0071e3]/20 animate-pulse" />
          <span>
            AI Research Intern @ <span className="text-[#0071e3]">EllanorAI</span>
          </span>
        </div>
        <span className="text-black/20" aria-hidden="true">·</span>
        <div className="flex items-center gap-1.5 text-[#6e6e73]">
          <Calendar className="w-3.5 h-3.5 text-[#0071e3]" />
          <span>{PERSONAL_INFO.availability}</span>
        </div>
        <span className="text-black/20 hidden sm:inline" aria-hidden="true">·</span>
        <div className="flex items-center gap-1.5 text-[#6e6e73] hidden sm:flex">
          <MapPin className="w-3.5 h-3.5 text-[#6462ec]" />
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>

      {/* Main Display Headline */}
      <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#1a1b1f] mb-5">
        {PERSONAL_INFO.name}
      </h1>

      {/* Subheading in Apple Electric Blue */}
      <p className="font-display text-xl sm:text-2xl text-[#0071e3] font-semibold max-w-2xl leading-relaxed mb-4">
        {PERSONAL_INFO.tagline}
      </p>

      {/* Secondary Description */}
      <p className="text-base sm:text-lg text-[#6e6e73] max-w-2xl leading-relaxed mb-10">
        {PERSONAL_INFO.bio}
      </p>

      {/* Sleek Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5 relative z-20">
        <button
          onClick={onOpenProjects}
          className="liquid-glass-prominent inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm transition-all cursor-pointer shadow-md"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenContact}
          className="liquid-glass-button inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#1a1b1f] font-medium text-sm transition-all cursor-pointer shadow-sm"
        >
          <Mail className="w-4 h-4 text-[#6e6e73]" />
          <span>Get in Touch</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setResumeDropdown(!resumeDropdown)}
            onBlur={() => setTimeout(() => setResumeDropdown(false), 200)}
            className="liquid-glass-button inline-flex items-center gap-2 px-5 py-3 rounded-full text-[#0071e3] font-medium text-sm transition-all cursor-pointer shadow-sm"
            type="button"
          >
            <FileText className="w-4 h-4 text-[#0071e3]" />
            <span>Resume / CV</span>
            <ChevronDown className="w-4 h-4 text-[#0071e3]" />
          </button>

          {resumeDropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 liquid-glass rounded-2xl shadow-xl py-2 transition-all z-30 text-left border border-white/90 animate-fadeIn">
              <button
                onClick={() => {
                  onOpenResumeModal('ai');
                  setResumeDropdown(false);
                }}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-body text-[#1a1b1f] hover:bg-[#0071e3]/10 hover:text-[#0071e3] rounded-xl mx-1 transition-colors cursor-pointer text-left"
              >
                <div>
                  <div className="font-semibold text-[#1a1b1f]">AI / ML Track</div>
                  <div className="text-[10px] text-[#6e6e73]">RLHF, ThinkRL, Alignment</div>
                </div>
                <Download className="w-3.5 h-3.5 text-[#0071e3]" />
              </button>
              <button
                onClick={() => {
                  onOpenResumeModal('ds');
                  setResumeDropdown(false);
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
      </div>
    </section>
  );
};
