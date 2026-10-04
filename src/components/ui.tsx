import { CSSProperties, ElementType, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Masked word-by-word headline reveal, triggered on scroll ───────────────
export const Reveal = ({
  text,
  as: Tag = 'h2',
  className = '',
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) => {
  const ref = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.word',
        { yPercent: 115, rotate: 4 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.06,
          scrollTrigger: { trigger: ref.current, start: 'top 90%' },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [text]);
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="mask" aria-hidden>
          <span className="word">{w}&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
};

// ─── Smooth height accordion ─────────────────────────────────────────────────
export const Collapse = ({ open, children }: { open: boolean; children: ReactNode }) => (
  <div
    className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
    }`}
  >
    <div className="overflow-hidden">{children}</div>
  </div>
);

// ─── Refresh ScrollTrigger after accordion height changes ────────────────────
export const useRefreshOn = (dep: unknown) =>
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 750);
    return () => clearTimeout(t);
  }, [dep]);

// ─── Custom cursor dot ────────────────────────────────────────────────────────
export const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  useEffect(() => {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const x = gsap.quickTo(dot.current, 'x', { duration: 0.35, ease: 'power3' });
    const y = gsap.quickTo(dot.current, 'y', { duration: 0.35, ease: 'power3' });
    const move = (e: MouseEvent) => {
      dot.current!.style.opacity = '1';
      x(e.clientX);
      y(e.clientY);
    };
    const over = (e: MouseEvent) =>
      setLabel(
        (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')?.dataset.cursor ?? '',
      );
    addEventListener('mousemove', move);
    addEventListener('mouseover', over);
    return () => {
      removeEventListener('mousemove', move);
      removeEventListener('mouseover', over);
    };
  }, []);
  return (
    <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[999] opacity-0">
      <div
        className={`grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-acc font-mono text-[11px] uppercase text-black transition-all duration-300 ${
          label ? 'h-20 w-20' : 'h-3 w-3'
        }`}
      >
        {label}
      </div>
    </div>
  );
};

// ─── Letter helpers for roll/swap effects ────────────────────────────────────
const letters = (text: string, cls: string, dup: boolean) =>
  text.split(' ').map((w, wi, arr) => (
    <span key={wi} aria-hidden style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      {[...w].map((c, i) => (
        <span key={i} className={cls} style={{ '--i': i + wi * 4 } as CSSProperties}>
          <span>{c}</span>
          {dup && <span>{c}</span>}
        </span>
      ))}
      {wi < arr.length - 1 && '\u00a0'}
    </span>
  ));

/** Letters roll up on hover of any `.roll-host` parent */
export const Roll = ({ text, className = '' }: { text: string; className?: string }) => (
  <span className={className} aria-label={text}>
    {letters(text, 'roll-c', true)}
  </span>
);

/** Letters slide in when remounted with a new key (heading swap) */
export const Swap = ({ text, className = '' }: { text: string; className?: string }) => (
  <span className={className} aria-label={text}>
    {letters(text, 'swap-c', false)}
  </span>
);
