import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { EXPERIENCE_ITEMS, PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { Collapse, Reveal, useRefreshOn } from './ui';
import { ArrowUpRight, Github, ExternalLink, X } from 'lucide-react';

const H = 'disp mb-16 text-[clamp(3rem,10vw,10rem)] font-extrabold leading-[.9]';
const pill = 'rounded-full border border-white/15 px-3 py-1 font-mono text-xs';

// ─── Projects (#My-Work) ──────────────────────────────────────────────────────
export const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Duplicate projects to create a seamless infinite marquee scroll
  const marqueeProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-32 overflow-hidden">
      <div className="px-6 md:px-12 mb-16">
        <Reveal text="#My-Work" className={H} />
      </div>

      <div className="relative flex overflow-x-hidden w-full group cursor-grab active:cursor-grabbing">
        {/* We use a container that animates infinitely to the left */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max pb-8">
          {marqueeProjects.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              onClick={() => setActiveProject(p)}
              className="w-[320px] md:w-[450px] shrink-0 mx-4 rounded-3xl border border-white/10 bg-onyx p-8 text-left cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all group/card shadow-2xl flex flex-col whitespace-normal"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-2xl mb-2 group-hover/card:text-acc transition-colors">{p.title.split('—')[0].trim()}</h3>
                  <p className="font-mono text-[10px] uppercase text-acc tracking-widest">{p.badge}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/card:bg-acc group-hover/card:text-black transition-colors shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tags.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] bg-black border border-white/10 rounded-full px-3 py-1 font-mono text-slate-300">
                    {t}
                  </span>
                ))}
                {p.tags.length > 3 && (
                  <span className="text-[10px] bg-black border border-white/10 rounded-full px-3 py-1 font-mono text-slate-500">
                    +{p.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Project Modal */}
      {activeProject && (
        <div 
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 animate-fadeIn backdrop-blur-sm overscroll-none"
          onClick={() => setActiveProject(null)}
        >
          <div 
            data-lenis-prevent
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-bg border border-white/10 p-8 sm:p-12 shadow-2xl overscroll-contain cursor-default text-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-mute hover:text-ink"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="font-mono text-xs uppercase tracking-widest text-acc mb-4">{activeProject.subtitle}</p>
            <h2 className="disp text-3xl sm:text-5xl font-bold mb-8 leading-tight">{activeProject.title}</h2>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {activeProject.githubUrl && (
                <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-ink">
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
              {activeProject.liveUrl && (
                <a href={activeProject.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-acc text-white hover:bg-opacity-80 transition-colors text-sm font-medium shadow-lg">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>

            <p className="text-ink/80 leading-relaxed text-lg mb-12 font-body">{activeProject.description}</p>
            
            <div className="mb-12">
              <h3 className="disp text-2xl font-bold mb-4 text-ink">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((t) => (
                  <span key={t} className={`${pill} text-mute`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {activeProject.architectureStages && activeProject.architectureStages.length > 0 && (
              <div>
                <h3 className="disp text-2xl font-bold mb-8 text-ink">Architecture & Pipeline</h3>
                <div className="space-y-12">
                  {activeProject.architectureStages.map((stage, n) => (
                    <div key={n} className="border-l-2 border-white/10 pl-6 relative">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-acc" />
                      <div className="text-acc font-mono text-xs mb-2 uppercase tracking-widest">Phase {stage.step}</div>
                      <h4 className="disp text-xl font-semibold mb-2 text-ink">{stage.title}</h4>
                      <p className="text-mute mb-4">{stage.desc}</p>
                      <p className="text-ink/80 text-sm mb-6">{stage.details}</p>
                      {stage.codeSnippet && stage.codeSnippet.trim() !== "" && (
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-xs text-mute">
                          {stage.codeSnippet}
                        </pre>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const Experience = () => (
  <section id="experience" className="px-6 py-32 md:px-12">
    <Reveal text="Experience" className={H} />
    {EXPERIENCE_ITEMS.map((e) => (
      <article
        key={e.id}
        data-fade
        className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[1fr_2fr]"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-mute">
          <p style={{ color: e.companyColor }}>{e.period}</p>
          <p className="mt-2">{e.location}</p>
        </div>
        <div>
          <h3 className="disp text-3xl font-semibold md:text-5xl">
            {e.role}{' '}
            <span className="text-mute">@ {e.company}</span>
          </h3>
          <p className="mt-4 max-w-2xl text-ink/80">{e.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            {e.bullets.map((b) => (
              <li key={b}>— {b}</li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {e.skills.map((s) => (
              <span key={s} className={pill}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </section>
);
