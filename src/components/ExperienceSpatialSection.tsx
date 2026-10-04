import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { SpatialGlassPanel } from './SpatialGlassPanel';

export const ExperienceSpatialSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Timeline line grows with scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
  });

  return (
    <section 
      ref={containerRef}
      className="w-full py-16 md:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
      id="experience"
    >
      {/* Section Header Plaque - Translucent Glassmorphism */}
      <div className="mb-12 text-left">
        <div className="spatial-glass-card inline-block px-7 py-5 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-1.5 font-bold">
            <span>02 —</span>
            <span className="text-slate-400">Work &amp; Research</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-1.5">
            Experience
          </h2>
          <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">
            Internships, research laboratories, and engineering teams
          </p>
        </div>
      </div>

      {/* Timeline Wrapper with Mathematically Aligned Rail and Nodes */}
      <div className="relative pl-8 md:pl-12 space-y-12">
        {/* Static Background Rail Line */}
        <div className="absolute left-[15px] md:left-[19px] top-3 bottom-3 w-[2px] bg-white/15" />

        {/* Dynamic Glowing Blue Progress Line */}
        <motion.div
          style={{ scaleY, transformOrigin: 'top' }}
          className="absolute left-[15px] md:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#38bdf8] via-[#0071e3] to-[#818cf8] shadow-[0_0_12px_rgba(56,189,248,0.6)]"
        />

        {EXPERIENCE_ITEMS.map((item) => (
          <div key={item.id} className="relative group text-left">
            {/* Timeline Pulsing Node */}
            <div className="absolute -left-[24px] md:-left-[36px] top-6 w-4 h-4 flex items-center justify-center pointer-events-none">
              <span className="w-4 h-4 rounded-full bg-[#121826] border-2 border-[#38bdf8] flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
              </span>
            </div>

            {/* Spatial Glass Card */}
            <SpatialGlassPanel className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <h3 className="font-display font-bold text-lg md:text-xl text-white flex items-center gap-2">
                  <span>{item.role}</span>
                  <span className="text-[#38bdf8] font-semibold">· {item.company}</span>
                </h3>
                <span className="spatial-glass-pill text-xs font-semibold px-3 py-1 text-slate-300 w-fit">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                {item.description}
              </p>

              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#38bdf8] mt-1 font-bold">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags & Location */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => {
                    const isHighlighted = sIdx < 2;
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          isHighlighted
                            ? 'bg-[#0071e3] text-white border border-[#38bdf8]/40 shadow-sm'
                            : 'spatial-glass-pill text-slate-200'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>

                <span className="text-xs text-slate-400 font-medium">
                  {item.location}
                </span>
              </div>
            </SpatialGlassPanel>
          </div>
        ))}
      </div>
    </section>
  );
};
