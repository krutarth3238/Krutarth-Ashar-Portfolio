import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';
import { Trophy, Award, CheckCircle, Code, Medal } from 'lucide-react';
import { SpatialGlassPanel } from './SpatialGlassPanel';

export const AchievementsSpatialSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="achievements">
      {/* Section Header Plaque - Translucent Glassmorphism */}
      <div className="mb-10 text-left">
        <div className="spatial-glass-card inline-block px-7 py-5 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-1.5 font-bold">
            <span>05 —</span>
            <span className="text-slate-400">Honors &amp; Credentials</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-1.5">
            Achievements &amp; Certifications
          </h2>
          <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">
            Competitive hackathons and accredited academic specializations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
        {/* Competitions */}
        <div>
          <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2.5">
            <Trophy className="w-5 h-5 text-[#fbbf24]" />
            <span>Hackathons &amp; Competitions</span>
          </h3>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((item, idx) => (
              <SpatialGlassPanel key={idx} className="p-5 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-inner border border-white/15"
                  style={{
                    backgroundColor: `${item.badgeColor}25`,
                    color: item.badgeColor,
                  }}
                >
                  {item.icon === 'code' ? (
                    <Code className="w-5 h-5" />
                  ) : (
                    <Medal className="w-5 h-5" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display font-semibold text-sm text-white">
                      {item.title}
                    </h4>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: item.badgeColor }}
                    >
                      {item.host}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpatialGlassPanel>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#38bdf8]" />
            <span>Accredited Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <SpatialGlassPanel key={idx} className="p-5 flex flex-col justify-between">
                <div>
                  <span
                    className="text-xs font-semibold block mb-1"
                    style={{ color: cert.accentColor }}
                  >
                    {cert.issuer}
                  </span>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {cert.title}
                  </div>
                </div>

                <span className="text-xs text-slate-400 mt-4 flex items-center gap-1.5">
                  <CheckCircle
                    className="w-3.5 h-3.5"
                    style={{ color: cert.accentColor }}
                  />
                  <span>{cert.subtopic}</span>
                </span>
              </SpatialGlassPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
