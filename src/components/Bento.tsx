import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL_INFO as P } from '../data/portfolioData';
import { Reveal } from './ui';
gsap.registerPlugin(ScrollTrigger);

// ─── Row counts for the pyramid dot pattern ───────────────────────────────────
const ROWS = [3, 4, 5, 6, 7];

/** Animated dot pyramid — a random triangle lights up in accent every 1.6 s */
const Dots = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const dots = [...ref.current!.querySelectorAll<HTMLElement>('.dot')];
    const idx = (r: number, c: number) =>
      ROWS.slice(0, r).reduce((s, n) => s + n, 0) + c;

    const tick = () => {
      const r = Math.floor(Math.random() * (ROWS.length - 1));
      const c = Math.floor(Math.random() * ROWS[r]);
      const pick = [idx(r, c), idx(r + 1, c), idx(r + 1, c + 1)].map((i) => dots[i]);
      gsap.to(dots, { backgroundColor: '#262626', scale: 1, duration: 0.5, overwrite: true });
      gsap.to(pick, {
        backgroundColor: '#0064AF',
        scale: 1.08,
        duration: 0.6,
        ease: 'back.out(2)',
        delay: 0.1,
      });
    };
    tick();
    const id = setInterval(tick, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={ref} className="space-y-[1.5%] py-6">
      {ROWS.map((n, r) => (
        <div key={r} className="flex justify-center gap-[1.5%]">
          {Array.from({ length: n }).map((_, c) => (
            <div key={c} className="dot aspect-square w-[11.5%] rounded-full bg-[#262626]" />
          ))}
        </div>
      ))}
    </div>
  );
};

/** Monogram card with a cursor-tracking blue dot */
const Frame = () => {
  const box = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const qx = gsap.quickTo(dot.current, 'x', { duration: 0.6, ease: 'power3' });
    const qy = gsap.quickTo(dot.current, 'y', { duration: 0.6, ease: 'power3' });
    const lim = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    const move = (e: MouseEvent) => {
      const r = box.current!.getBoundingClientRect();
      qx(lim((e.clientX - r.left - r.width / 2) * 0.25, r.width / 2 - 16));
      qy(lim((e.clientY - r.top - r.height / 2) * 0.25, r.height / 2 - 16));
    };
    addEventListener('mousemove', move);
    return () => removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      ref={box}
      className="relative mx-auto flex aspect-square w-3/4 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-onyx"
    >
      <span className="disp text-[10rem] leading-none text-white/5">KA</span>
      <div ref={dot} className="absolute left-1/2 top-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full bg-acc" />
    </div>
  );
};

// ─── Bento About section ──────────────────────────────────────────────────────
export const About = () => {
  const E = P.education;
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento',
        { y: 90, opacity: 0, rotate: 2 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.2,
          ease: 'expo.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="px-6 py-32 md:px-12">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-acc">(About Me)</p>
      <Reveal
        text={P.bio}
        className="disp max-w-6xl text-[clamp(2rem,5.2vw,5.5rem)] leading-[1.02]"
      />

      <div className="bento-grid mt-16 grid gap-4 md:grid-cols-3">
        {/* Card 1 — Role + dot pyramid + focus areas */}
        <div className="bento flex min-h-[34rem] flex-col justify-between rounded-2xl bg-onyx p-8">
          <p className="disp text-4xl leading-tight md:text-5xl">{P.role}</p>
          <Dots />
          <div>
            <h3 className="disp mb-3 text-3xl">#Focus</h3>
            {P.focusAreas.map((f) => (
              <p key={f} className="text-sm text-ink/70">
                {f}
              </p>
            ))}
          </div>
        </div>

        {/* Card 2 — Parallax image + education/status/location */}
        <div className="bento overflow-hidden rounded-2xl bg-onyx">
          <div className="grid grid-cols-2 gap-6 p-8">
            <div>
              <h3 className="disp text-2xl">Education</h3>
              <p className="mt-1 text-sm text-ink/70">{E.institution}</p>
              <p className="text-sm text-ink/70">{E.degree}</p>
              <p className="text-sm text-acc">
                CGPA {E.cgpa} · {E.classYear}
              </p>
            </div>
            <div>
              <h3 className="disp text-2xl">Status</h3>
              <p className="mt-1 text-sm text-ink/70">{P.status}</p>
              <p className="text-sm text-ink/70">{P.availability}</p>
            </div>
            <div className="col-span-2">
              <h3 className="disp text-2xl">Schooling</h3>
              <p className="mt-1 text-sm text-ink/70">{E.cbse12}</p>
              <p className="text-sm text-ink/70">{E.cbse10}</p>
            </div>
            <div className="col-span-2 flex items-start justify-between border-t border-white/10 pt-4">
              <h3 className="disp text-2xl">Location:</h3>
              <p className="text-right text-sm text-ink/70">
                {P.location}
                <br />
                {E.location}
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 — KA monogram with cursor dot */}
        <div className="bento relative flex min-h-[34rem] flex-col justify-between overflow-hidden rounded-2xl bg-onyx p-8">
          <Frame />
          <p className="disp text-4xl leading-tight md:text-5xl">
            What&apos;s the point of the model?
          </p>
        </div>
      </div>

      {/* AI / DS objectives */}
      <div className="mt-20 grid gap-12 md:grid-cols-2">
        {[
          ['AI / ML track', P.objectiveAI],
          ['Data track', P.objectiveDS],
        ].map(([t, b]) => (
          <div key={t} data-fade>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-mute">{t}</h3>
            <p className="text-lg leading-relaxed text-ink/80">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
