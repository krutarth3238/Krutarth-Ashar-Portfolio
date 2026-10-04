import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { PERSONAL_INFO as P } from '../data/portfolioData';
import { Roll } from './ui';

const LINKS: [string, string][] = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Achievements', 'achievements'],
  ['Contact', 'contact'],
];

/** Skew angles for the three decorative cards */
const BASE = [-8, 6, -4];

export const Menu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const root = useRef<HTMLDivElement>(null);
  const shown = useRef(false);
  const [hov, setHov] = useState<number | null>(null);

  // Open / close animation
  useEffect(() => {
    const el = root.current!;
    if (open) {
      shown.current = true;
      el.style.visibility = 'visible';
      gsap
        .timeline()
        .fromTo(
          el,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'expo.inOut' },
        )
        .fromTo(
          '.m-link',
          { yPercent: 115, rotate: 3 },
          { yPercent: 0, rotate: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07 },
          '-=.35',
        )
        .fromTo(
          '.m-card',
          { y: '110vh', rotate: 24 },
          { y: 0, rotate: (i: number) => BASE[i], duration: 1.4, ease: 'expo.out', stagger: 0.1 },
          '<',
        );
    } else if (shown.current) {
      gsap.to(el, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.7,
        ease: 'expo.inOut',
        onComplete: () => {
          el.style.visibility = 'hidden';
        },
      });
    }
  }, [open]);

  // Hovered link straightens + enlarges its matching card
  useEffect(() => {
    if (!open) return;
    gsap.to('.m-card', {
      rotate: (i: number) => (hov !== null && i === hov % 3 ? 0 : BASE[i]),
      scale: (i: number) => (hov !== null && i === hov % 3 ? 1.08 : 1),
      duration: 0.8,
      ease: 'expo.out',
    });
  }, [hov, open]);

  // Escape key closes
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    addEventListener('keydown', k);
    return () => removeEventListener('keydown', k);
  }, [onClose]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 800);
  };

  return (
    <div
      ref={root}
      role="dialog"
      aria-modal="true"
      className="invisible fixed inset-0 z-[60] bg-black text-white"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        data-cursor="Close"
        className="roll-host absolute right-6 top-5 font-mono text-[11px] uppercase tracking-widest md:right-12"
      >
        <Roll text="Close" />
      </button>



      {/* Nav links */}
      <nav
        className="absolute bottom-12 left-6 md:left-12"
        onMouseLeave={() => setHov(null)}
      >
        {LINKS.map(([label, id], i) => (
          <div
            key={id}
            className={`overflow-hidden transition-opacity duration-500 ${
              hov !== null && hov !== i ? 'opacity-30' : ''
            }`}
          >
            <a
              href={`#${id}`}
              onMouseEnter={() => setHov(i)}
              onClick={(e) => go(e, id)}
              data-cursor="Go"
              className="m-link roll-host ser block text-[clamp(3rem,9vw,8.5rem)] leading-[1.05] tracking-[.06em]"
            >
              <Roll text={label} />
            </a>
          </div>
        ))}
      </nav>


      <div className="m-card absolute bottom-[6%] right-[5%] hidden w-[18vw] rounded-3xl bg-acc p-6 text-black md:block">
        <p className="disp text-3xl leading-tight">{P.availability}</p>
      </div>
    </div>
  );
};
