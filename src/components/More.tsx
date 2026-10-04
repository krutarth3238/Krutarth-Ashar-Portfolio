import { useState } from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS, PERSONAL_INFO as P } from '../data/portfolioData';
import { Reveal } from './ui';

const H = 'disp mb-16 text-[clamp(3rem,10vw,10rem)] font-extrabold leading-[.9]';

// ─── Achievements + Certifications ────────────────────────────────────────────
export const Recognition = () => (
  <section id="achievements" className="px-6 py-32 md:px-12">
    <Reveal text="Achievements" className={H} />
    <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
      <div>
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} data-fade className="border-t border-white/10 py-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-acc">
              {a.type} · {a.host}
            </p>
            <h3 className="disp mt-2 text-2xl font-semibold">{a.title}</h3>
            <p className="mt-2 max-w-xl text-sm text-ink/70">{a.description}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-mute">
          (Certifications)
        </p>
        {CERTIFICATIONS.map((c) => (
          <div key={c.title} data-fade className="border-t border-white/10 py-4">
            <p className="text-sm">{c.title}</p>
            <p className="font-mono text-[10px] uppercase text-mute">
              {c.issuer} · {c.subtopic}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Contact + Footer ─────────────────────────────────────────────────────────
export const Contact = () => {
  const [copied, setCopied] = useState('');

  const copy = (v: string) => {
    navigator.clipboard.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(''), 1800);
  };

  const links: [string, string, string][] = [
    ['Email', P.email, `mailto:${P.email}`],
    ['Phone', P.phone, `tel:${P.phone}`],
    ['GitHub', 'github ↗', P.github],
    ['LinkedIn', 'linkedin ↗', P.linkedin],
  ];

  return (
    <section id="contact" className="px-6 pb-10 pt-32 md:px-12">
      <Reveal text="Let's build something intelligent." className={H} />

      <div className="max-w-3xl">
        {/* Contact links */}
        <div>
          {links.map(([k, v, h]) => (
            <div
              key={k}
              data-fade
              className="flex items-center justify-between gap-4 border-t border-white/10 py-5"
            >
              <span className="font-mono text-xs uppercase text-mute">{k}</span>
              <a
                href={h}
                target={h.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                data-cursor="Go"
                className="disp text-xl hover:text-acc md:text-2xl"
              >
                {v}
              </a>
              {(k === 'Email' || k === 'Phone') && (
                <button
                  onClick={() => copy(v)}
                  className="font-mono text-xs text-mute hover:text-acc cursor-pointer"
                >
                  {copied === v ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>
          ))}
          <p data-fade className="border-t border-white/10 py-5 text-sm text-mute">
            {P.location} · {P.education.location}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-widest text-mute">
        <span>
          © {new Date().getFullYear()} {P.name} — {P.role}
        </span>
        <span>{P.availability}</span>
      </footer>
    </section>
  );
};
