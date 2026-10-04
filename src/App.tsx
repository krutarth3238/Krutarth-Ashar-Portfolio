import { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisSmoothScroll } from './hooks/useLenisSmoothScroll';
import { Cursor } from './components/ui';
import { Header, Hero, Marquee } from './components/Intro';
import { About } from './components/Bento';
import { Skills } from './components/Fan';
import { Menu } from './components/Menu';
import { Experience, Projects } from './components/Work';
import { Contact, Recognition } from './components/More';
import { ResumeModal } from './components/ResumeModal';
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [resume, setResume] = useState<'ai' | 'ds' | null>(null);
  const [menu, setMenu] = useState(false);

  // Pause smooth scroll when any overlay is open
  useLenisSmoothScroll(resume !== null || menu);

  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      // Batch fade-in for all [data-fade] elements
      ScrollTrigger.batch('[data-fade]', {
        start: 'top 92%',
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 48, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.12 },
          ),
      });

      // Parallax for focus-area chips
      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) =>
        gsap.to(el, {
          y: -Number(el.dataset.speed) * 5,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }),
      );
    });

    // Re-measure after all fonts are loaded
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Cursor />
      <Header onResume={setResume} onMenu={() => setMenu(true)} />
      <Menu open={menu} onClose={() => setMenu(false)} />
      <main>
        <Hero onResume={setResume} />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Recognition />
        <Contact />
      </main>
      {resume && (
        <ResumeModal initialTrack={resume} onClose={() => setResume(null)} />
      )}
    </>
  );
}
