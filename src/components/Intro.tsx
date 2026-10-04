import { PERSONAL_INFO as P, PROJECTS } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { Reveal, Roll } from './ui';

type Resume = (t: 'ai' | 'ds') => void;

const POS = [
  'right-[12%] top-[18%]  rotate-6',
  'right-[5%]  top-[32%] -rotate-3',
  'right-[15%] top-[48%] -rotate-6',
  'right-[8%]  top-[64%]  rotate-3',
  'right-[18%] top-[80%]  rotate-2',
];

// ─── Header ──────────────────────────────────────────────────────────────────
export const Header = ({
  onResume,
  onMenu,
}: {
  onResume: Resume;
  onMenu: () => void;
}) => (
  <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 text-white mix-blend-difference md:px-12">
    <a href="#top" className="disp text-2xl" data-cursor="Top">
      KA
    </a>
    <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
      <button onClick={() => onResume('ai')} className="underline underline-offset-4">
        Resume
      </button>
      <button onClick={onMenu} data-cursor="Menu" className="roll-host">
        <Roll text="Menu" />
      </button>
    </div>
  </header>
);

// ─── Hero ────────────────────────────────────────────────────────────────────
export const Hero = ({ onResume }: { onResume: Resume }) => (
  <section
    id="top"
    className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-12 pt-32 md:px-12"
  >
    {/* Metadata row */}
    <div className="absolute inset-x-6 top-24 flex justify-between font-mono text-[11px] uppercase tracking-widest text-mute md:inset-x-12">
      <span className="hidden md:block">{P.status}</span>
      <span>{P.location}</span>
    </div>

    {/* Parallax focus-area chips */}
    {P.focusAreas.map((f, i) => (
      <div
        key={f}
        data-speed={10 + i * 8}
        className={`absolute hidden md:block ${POS[i]}`}
      >
        <div 
          className={`rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs ${
            ['animate-[float-1_7s_ease-in-out_infinite]', 'animate-[float-2_8s_ease-in-out_infinite]', 'animate-[float-3_9s_ease-in-out_infinite]'][i % 3]
          }`}
        >
          {f}
        </div>
      </div>
    ))}

    {/* Giant name */}
    <Reveal
      as="h1"
      text={P.name}
      className="disp text-[clamp(4rem,15vw,15rem)] font-extrabold uppercase leading-[.82]"
    />

    {/* Tagline + CTAs */}
    <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
      <p data-fade className="max-w-xl text-lg text-ink/80">
        {P.tagline}
      </p>
      <div data-fade className="flex flex-wrap gap-3">
        <MagneticButton>
          <a
            href="#projects"
            data-cursor="Go"
            className="block rounded-full bg-acc px-6 py-3.5 text-sm font-semibold text-black"
          >
            View projects
          </a>
        </MagneticButton>
        <MagneticButton>
          <button
            onClick={() => onResume('ai')}
            className="rounded-full border border-white/20 px-6 py-3.5 text-sm"
          >
            Resume · AI/ML
          </button>
        </MagneticButton>
        <MagneticButton>
          <button
            onClick={() => onResume('ds')}
            className="rounded-full border border-white/20 px-6 py-3.5 text-sm"
          >
            Resume · Data
          </button>
        </MagneticButton>
      </div>
    </div>
  </section>
);

// ─── Tech-stack marquee ───────────────────────────────────────────────────────
const TAGS = [...new Set(PROJECTS.flatMap((p) => p.tags))];

export const Marquee = () => (
  <div className="overflow-hidden border-y border-white/10 py-5">
    <div className="marquee disp flex w-max whitespace-nowrap text-4xl font-bold uppercase text-ink/30 md:text-6xl">
      {[...TAGS, ...TAGS].map((t, i) => (
        <span key={i} className="pr-10">
          {t} <span className="text-acc">✦</span>
        </span>
      ))}
    </div>
  </div>
);
