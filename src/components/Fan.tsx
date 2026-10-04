import { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Swap } from './ui';
gsap.registerPlugin(ScrollTrigger);

/** 3-D fan of skill category cards — hover/tap lifts a card and swaps the heading */
export const Skills = () => {
  const [a, setA] = useState(0);
  const root = useRef<HTMLElement>(null);
  const cat = SKILL_CATEGORIES[a];

  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.fan-card',
        { yPercent: 70, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '.fan', start: 'top 75%' },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={root} className="overflow-hidden px-6 py-32 md:px-12">
      <p className="text-center font-mono text-xs uppercase tracking-widest text-mute">(Skills) ↗</p>

      <h2
        className="disp mt-4 text-center text-[clamp(2.6rem,7.5vw,8rem)] uppercase leading-none"
        aria-live="polite"
      >
        <Swap key={a} text={cat.title} />
      </h2>

      {/* Fan cards */}
      <div className="fan mt-16 flex h-[28rem] items-end justify-center gap-2 overflow-hidden md:h-[32rem] md:gap-3">
        {SKILL_CATEGORIES.map((c, i) => (
          <div key={c.title} className="fan-card h-[60%] w-full max-w-[17rem]">
            <button
              onMouseEnter={() => setA(i)}
              onFocus={() => setA(i)}
              onClick={() => setA(i)}
              data-cursor="View"
              style={{ '--ty': i === a ? '-5rem' : '0px' } as CSSProperties}
              className={`fan-skew flex h-[160%] w-full flex-col items-start justify-start rounded-t-3xl border p-6 text-left ${
                i === a
                  ? 'border-acc bg-black shadow-[0_0_60px_-10px_var(--color-acc)]'
                  : 'border-white/10 bg-onyx'
              }`}
            >
              <span className="font-mono text-[10px] text-mute">0{i + 1}</span>
              <span className="disp mt-4 block text-xl leading-tight md:text-2xl">{c.title}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Skill grid for active category */}
      <div key={a} className="fadein mx-auto mt-12 max-w-6xl">
        <p className="mb-6 max-w-2xl text-mute">{cat.description}</p>
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {cat.skills.map((s) => (
            <div key={s.name} className="bg-bg p-5">
              <p className={s.highlighted ? 'text-acc' : ''}>{s.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase text-mute">
                {s.level} · {s.usedIn}
              </p>
              <p className="mt-3 text-xs text-ink/70">{s.proof}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
