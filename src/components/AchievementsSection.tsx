import React from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';
import { Trophy, Award, CheckCircle, Code, Medal } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 relative" id="achievements">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl tracking-tight text-[#1a1b1f] mb-1.5">
            Achievements &amp; Certifications
          </h2>
          <p className="text-sm text-[#6e6e73]">
            Competitive hackathons and accredited academic specializations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Competitions */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#1a1b1f] mb-5 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#0071e3]" />
              <span>Hackathons &amp; Competitions</span>
            </h3>

            <div className="space-y-3.5">
              {ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl liquid-glass-card flex items-start gap-3.5 transition-all"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-white"
                    style={{
                      backgroundColor: `${item.badgeColor}15`,
                      color: item.badgeColor,
                    }}
                  >
                    {item.icon === 'code' ? (
                      <Code className="w-4 h-4" />
                    ) : (
                      <Medal className="w-4 h-4" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display font-semibold text-sm text-[#1a1b1f]">
                        {item.title}
                      </h4>
                      <span
                        className="text-xs font-medium"
                        style={{ color: item.badgeColor }}
                      >
                        {item.host}
                      </span>
                    </div>
                    <p className="text-xs text-[#6e6e73] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-bold text-lg text-[#1a1b1f] mb-5 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0071e3]" />
              <span>Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl liquid-glass-card flex flex-col justify-between transition-all"
                >
                  <div>
                    <span
                      className="text-xs font-semibold block mb-1"
                      style={{ color: cert.accentColor }}
                    >
                      {cert.issuer}
                    </span>
                    <div className="text-sm font-semibold text-[#1a1b1f] leading-snug">
                      {cert.title}
                    </div>
                  </div>

                  <span className="text-xs text-[#6e6e73] mt-3 flex items-center gap-1">
                    <CheckCircle
                      className="w-3.5 h-3.5"
                      style={{ color: cert.accentColor }}
                    />
                    <span>{cert.subtopic}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
