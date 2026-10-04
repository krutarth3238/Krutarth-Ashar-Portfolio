import React, { useState } from 'react';
import { GraduationCap, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpatialGlassPanel } from './SpatialGlassPanel';

interface AboutSpatialSectionProps {
  onSelectFocus?: (focus: string) => void;
}

export const AboutSpatialSection: React.FC<AboutSpatialSectionProps> = ({ onSelectFocus }) => {
  const [activeFocus, setActiveFocus] = useState<string | null>(null);

  const handleFocusClick = (area: string) => {
    setActiveFocus(area === activeFocus ? null : area);
    if (onSelectFocus) onSelectFocus(area);
  };

  return (
    <section className="w-full py-16 md:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about">
      {/* Section Header Plaque - Translucent Glassmorphism */}
      <div className="mb-10 text-left">
        <div className="spatial-glass-card inline-block px-7 py-5 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-1.5 font-bold">
            <span>01 —</span>
            <span className="text-slate-400">Overview</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-1.5">
            About Me
          </h2>
          <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">
            Disciplined exploration across model alignment &amp; spatial engineering
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Story Card (Exact match to left card in image.png) */}
        <SpatialGlassPanel className="lg:col-span-7 p-7 md:p-9 space-y-6 text-[15px] text-slate-200 leading-relaxed text-left">
          <p>
            I am fascinated by how intelligent systems learn, adapt, and align with nuanced human intentions. My work involves evaluating loss curves, building and debugging reward models, fine-tuning parameter updates with LoRA, and running empirical preference optimization routines to reduce hallucinations and behavioral drift.
          </p>
          <p>
            Simultaneously, I have an engineering curiosity for messy, undocumented real-world data systems. Whether reverse-engineering obfuscated geospatial tile engines under strict latency constraints or architecting resilient distributed pipelines, I focus on turning fragmented noise into high-signal, auditable intelligence.
          </p>
          <p>
            I believe in building models that fail predictably rather than succeed accidentally, verifying empirical assumptions through well-tested, telemetry-driven code.
          </p>
        </SpatialGlassPanel>

        {/* Right Info Card (Exact match to right card in image.png) */}
        <SpatialGlassPanel className="lg:col-span-5 p-7 md:p-8 space-y-6 text-left">
          {/* Education */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-inner">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                Education
              </span>
              <h3 className="font-display font-semibold text-base text-white mt-0.5">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                {PERSONAL_INFO.education.degree}
              </p>
              <p className="text-xs text-[#38bdf8] font-semibold mt-0.5">
                CGPA: {PERSONAL_INFO.education.cgpa} · {PERSONAL_INFO.education.classYear}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="pt-6 border-t border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-inner">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                Location
              </span>
              <h3 className="font-display font-semibold text-base text-white mt-0.5">
                {PERSONAL_INFO.education.location}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Available for in-person or remote opportunities worldwide
              </p>
            </div>
          </div>

          {/* Focus Areas (Exact match to bottom of image.png) */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0071e3] shadow-[0_0_8px_#0071e3]" />
                <span>Focus Areas</span>
              </div>
              <span className="text-xs text-slate-300 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                Active Specializations
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {PERSONAL_INFO.focusAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => handleFocusClick(area)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeFocus === area
                      ? 'bg-[#0071e3] text-white border-[#38bdf8] shadow-[0_0_12px_rgba(0,113,227,0.5)]'
                      : 'spatial-glass-pill text-slate-200 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {activeFocus === area && <CheckCircle className="w-3 h-3 text-white" />}
                  <span>{area}</span>
                </button>
              ))}
            </div>
          </div>
        </SpatialGlassPanel>
      </div>
    </section>
  );
};
