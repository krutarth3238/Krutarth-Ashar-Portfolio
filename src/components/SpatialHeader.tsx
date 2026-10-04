import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronDown, Download, Menu, X, GripVertical, RotateCcw } from 'lucide-react';

interface SpatialHeaderProps {
  onOpenResumeModal: (track: 'ai' | 'ds') => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const SpatialHeader: React.FC<SpatialHeaderProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Right-Click Liquid Glass Dragging Physics State
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [tilt, setTilt] = useState<number>(0);
  const dragStartRef = useRef<{
    startMouseX: number;
    startMouseY: number;
    startPosX: number;
    startPosY: number;
    lastMouseX: number;
    lastTime: number;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  // Right-Click (or Grip Handle) Drag Handler
  const startDrag = (clientX: number, clientY: number) => {
    dragStartRef.current = {
      startMouseX: clientX,
      startMouseY: clientY,
      startPosX: position.x,
      startPosY: position.y,
      lastMouseX: clientX,
      lastTime: performance.now(),
    };
    setIsDragging(true);

    const onPointerMove = (e: PointerEvent) => {
      if (!dragStartRef.current) return;
      const dx = e.clientX - dragStartRef.current.startMouseX;
      const dy = e.clientY - dragStartRef.current.startMouseY;

      // Calculate horizontal velocity for natural liquid glass inertia tilt
      const now = performance.now();
      const dt = Math.max(1, now - dragStartRef.current.lastTime);
      const vx = (e.clientX - dragStartRef.current.lastMouseX) / dt;
      const currentTilt = Math.max(-5, Math.min(5, vx * 4));
      setTilt(currentTilt);

      dragStartRef.current.lastMouseX = e.clientX;
      dragStartRef.current.lastTime = now;

      setPosition({
        x: dragStartRef.current.startPosX + dx,
        y: dragStartRef.current.startPosY + dy,
      });
    };

    const onPointerUp = () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      setIsDragging(false);
      setTilt(0);
      dragStartRef.current = null;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Button 2 is Right-Click as requested ("draggable with a right click like proper liquid glass")
    if (e.button === 2) {
      e.preventDefault();
      e.stopPropagation();
      startDrag(e.clientX, e.clientY);
    }
  };

  const handleGripMouseDown = (e: React.MouseEvent) => {
    // Allow left-click on the grip handle as well for convenience
    if (e.button === 0) {
      e.preventDefault();
      e.stopPropagation();
      startDrag(e.clientX, e.clientY);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    // Prevent default browser menu on the navigation dock so right-click dragging is seamless
    e.preventDefault();
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
    setTilt(0);
  };

  const hasMoved = Math.abs(position.x) > 20 || Math.abs(position.y) > 20;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3.5">
        <div className="pointer-events-auto relative flex items-center justify-between gap-3">
          {/* Left: Brand Monogram Pill */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="spatial-nav-dock flex items-center gap-3 py-1.5 px-3.5 group cursor-pointer transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center border border-white/20 shadow-[0_2px_12px_rgba(0,113,227,0.45)] bg-black/40 shrink-0">
              <img 
                src="/logo.png" 
                alt="Krutarth Ashar KA Logo" 
                className="w-full h-full object-contain p-0.5" 
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-semibold text-sm text-white tracking-tight leading-tight group-hover:text-[#38bdf8] transition-colors">
                Krutarth Ashar
              </span>
              <span className="text-[10px] text-slate-300 font-medium leading-none mt-0.5">
                AI &amp; Data Science
              </span>
            </div>
          </button>

          {/* Center: Translucent Liquid Glass Draggable Island */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 pointer-events-auto items-center">
            <motion.nav
              animate={{
                x: position.x,
                y: position.y,
                rotate: tilt,
                scale: isDragging ? 1.04 : 1,
              }}
              transition={
                isDragging
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 420, damping: 28 }
              }
              onMouseDown={handleMouseDown}
              onContextMenu={handleContextMenu}
              onDoubleClick={resetPosition}
              className={`flex items-center p-1.5 spatial-nav-dock select-none transition-all duration-200 ${
                isDragging
                  ? 'cursor-grabbing shadow-[0_24px_50px_-10px_rgba(0,113,227,0.45)] ring-2 ring-[#38bdf8]/50 bg-[#121826]/85'
                  : scrolled
                  ? 'shadow-2xl bg-[#121826]/80'
                  : ''
              }`}
              title="Right-click and drag anywhere on this dock to float freely · Double-click to snap back"
            >
              {/* Tactile Grip Handle */}
              <div
                onMouseDown={handleGripMouseDown}
                className="px-1 text-slate-400 hover:text-[#38bdf8] cursor-grab active:cursor-grabbing transition-colors flex items-center"
                title="Drag handle (Left-click or Right-click)"
              >
                <GripVertical className="w-3.5 h-3.5 opacity-60 hover:opacity-100" />
              </div>

              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer text-slate-300 hover:text-white"
                  >
                    {/* Motion layoutId Active Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-white/15 border border-white/25 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.3)] -z-10"
                        transition={{
                          type: 'spring',
                          stiffness: 450,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className={isActive ? 'text-white font-bold' : 'text-slate-300'}>
                      {item.label}
                    </span>
                  </button>
                );
              })}

              {/* Reset Snap-back Button */}
              {hasMoved && (
                <button
                  onClick={resetPosition}
                  className="ml-1 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Reset to center dock"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </motion.nav>
          </div>

          {/* Right: Resume Button with Glass Dropdown */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
                onBlur={() => setTimeout(() => setResumeMenuOpen(false), 200)}
                className="spatial-nav-dock inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white hover:text-[#38bdf8] transition-all cursor-pointer shadow-sm"
                type="button"
              >
                <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>Resume</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform" />
              </button>

              <AnimatePresence>
                {resumeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-64 spatial-glass-card p-2 z-50 shadow-2xl border border-white/20"
                  >
                    <div className="px-3 py-1 text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      Curriculum Vitae
                    </div>
                    <button
                      onClick={() => {
                        onOpenResumeModal('ai');
                        setResumeMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-2.5 text-xs text-slate-200 hover:bg-white/10 hover:text-white rounded-xl transition-all cursor-pointer text-left group"
                    >
                      <div>
                        <div className="font-semibold text-white group-hover:text-[#38bdf8]">
                          AI / ML Track
                        </div>
                        <div className="text-[10px] text-slate-400">
                          RLHF, ThinkRL, Alignment
                        </div>
                      </div>
                      <Download className="w-3.5 h-3.5 text-[#38bdf8]" />
                    </button>
                    <button
                      onClick={() => {
                        onOpenResumeModal('ds');
                        setResumeMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-2.5 text-xs text-slate-200 hover:bg-white/10 hover:text-white rounded-xl transition-all cursor-pointer text-left group"
                    >
                      <div>
                        <div className="font-semibold text-white group-hover:text-[#38bdf8]">
                          Data Science Track
                        </div>
                        <div className="text-[10px] text-slate-400">
                          ETL, Geospatial, Pipelines
                        </div>
                      </div>
                      <Download className="w-3.5 h-3.5 text-[#38bdf8]" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 spatial-nav-dock text-slate-200 hover:text-white rounded-full cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-7xl mx-auto px-4 pt-2 pointer-events-auto"
          >
            <div className="spatial-glass-card rounded-2xl p-4 shadow-2xl border border-white/20">
              <nav className="flex flex-col gap-1 text-sm font-medium text-slate-200">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-2.5 rounded-xl hover:text-white hover:bg-white/10 text-left transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
