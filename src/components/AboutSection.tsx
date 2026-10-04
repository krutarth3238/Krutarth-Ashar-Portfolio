import React, { useState } from 'react';
import { GraduationCap, MapPin, Compass, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onSelectFocus?: (focus: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectFocus }) => {
  const [activeFocus, setActiveFocus] = useState<string | null>(null);

  const handleFocusClick = (area: string) => {
    setActiveFocus(area === activeFocus ? null : area);
    if (onSelectFocus) {
      onSelectFocus(area);
    }
  };

  return (
    <section className="w-full py-16 md:py-20 relative" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="font-display font-bold text-3xl tracking-tight text-[#1a1b1f] mb-1.5">
            About Me
          </h2>
          <p className="text-xs uppercase tracking-wider text-[#6e6e73] font-medium">
            Disciplined exploration across model alignment &amp; spatial engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Story Text (Apple editorial card with continuous curvature) */}
          <div className="lg:col-span-7 liquid-glass-card rounded-3xl p-7 md:p-8 space-y-4 text-base text-[#414753] leading-relaxed">
            <p>
              I am fascinated by how intelligent systems learn, adapt, and align with nuanced human intentions. My work involves evaluating loss curves, building and debugging reward models, fine-tuning parameter updates with LoRA, and running empirical preference optimization routines to reduce hallucinations and behavioral drift.
            </p>
            <p>
              Simultaneously, I have an engineering curiosity for messy, undocumented real-world data systems. Whether reverse-engineering obfuscated geospatial tile engines under strict latency constraints or architecting resilient distributed pipelines, I focus on turning fragmented noise into high-signal, auditable intelligence.
            </p>
            <p>
              I believe in building models that fail predictably rather than succeed accidentally, verifying empirical assumptions through well-tested, telemetry-driven code.
            </p>
          </div>

          {/* Quick Facts Card (Apple Glass Inset) */}
          <div className="lg:col-span-5 liquid-glass-card rounded-3xl p-7 space-y-5">
            {/* Education */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center shrink-0 text-[#0071e3] shadow-sm">
                <GraduationCap className="w-5 h-5 text-[#0071e3]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6e6e73] block font-semibold">
                  Education
                </span>
                <h3 className="font-display font-semibold text-base text-[#1a1b1f]">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <p className="text-xs text-[#6e6e73] mt-0.5">
                  {PERSONAL_INFO.education.degree}
                </p>
                <p className="text-xs text-[#0071e3] font-medium mt-1">
                  {PERSONAL_INFO.education.classYear}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="pt-4 border-t border-black/[0.05] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#6462ec]/10 border border-[#6462ec]/20 flex items-center justify-center shrink-0 text-[#6462ec] shadow-sm">
                <MapPin className="w-5 h-5 text-[#6462ec]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#6e6e73] block font-semibold">
                  Location
                </span>
                <h3 className="font-display font-semibold text-base text-[#1a1b1f]">
                  {PERSONAL_INFO.education.location}
                </h3>
                <p className="text-xs text-[#6e6e73] mt-0.5">
                  Available for in-person or remote engineering worldwide
                </p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="pt-4 border-t border-black/[0.05]">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] uppercase tracking-wider text-[#6e6e73] block font-semibold">
                  Focus Areas
                </span>
                <span className="text-[10px] text-[#6e6e73] flex items-center gap-1 font-medium">
                  <Compass className="w-3 h-3 text-[#0071e3]" />
                  Active Specializations
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PERSONAL_INFO.focusAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => handleFocusClick(area)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer flex items-center gap-1 ${
                      activeFocus === area
                        ? 'bg-[#0071e3] text-white border-[#0071e3] shadow-sm'
                        : 'liquid-glass-pill text-[#414753] hover:text-[#1a1b1f]'
                    }`}
                  >
                    {activeFocus === area && <CheckCircle className="w-3 h-3 text-white" />}
                    <span>{area}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
