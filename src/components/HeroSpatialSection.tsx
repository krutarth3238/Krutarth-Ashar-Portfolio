import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  FileText, 
  ChevronDown, 
  Download, 
  GraduationCap, 
  MapPin, 
  Send,
  Brain,
  Database,
  Box,
  BarChart3
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { SpatialGlassPanel } from './SpatialGlassPanel';

interface HeroSpatialSectionProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  onOpenResumeModal: (track: 'ai' | 'ds') => void;
}

export const HeroSpatialSection: React.FC<HeroSpatialSectionProps> = ({
  onOpenProjects,
  onOpenContact,
  onOpenResumeModal,
}) => {
  const [resumeDropdown, setResumeDropdown] = useState(false);

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Upper Grid: Left Hero Glass Card + Right Quick Info Glass Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
        {/* Left Column: Translucent Liquid Glass Hero Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col"
        >
          <SpatialGlassPanel className="p-8 sm:p-10 md:p-12 flex-1 flex flex-col justify-center text-left">
            {/* Brand Logo Emblem */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl overflow-hidden p-1 bg-black/40 border border-white/20 shadow-[0_4px_20px_rgba(0,113,227,0.4)] backdrop-blur-md shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Krutarth Ashar Futuristic Glass KA Monogram" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold block">
                  AI &amp; Data Science Systems
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {PERSONAL_INFO.status}
                </span>
              </div>
            </div>

            {/* Giant "Krutarth Ashar" Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Headline in Luminous Electric Blue */}
            <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-[#38bdf8] max-w-2xl leading-snug mb-4">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Supporting Bio */}
            <p className="text-sm sm:text-base text-slate-200 font-normal max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* Magnetic Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 relative z-20">
              {/* View Projects (Solid White Button) */}
              <MagneticButton strength={0.3}>
                <button
                  onClick={onOpenProjects}
                  className="spatial-white-button inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#0071e3]" />
                </button>
              </MagneticButton>

              {/* Get in Touch (Translucent Glass Pill) */}
              <MagneticButton strength={0.25}>
                <button
                  onClick={onOpenContact}
                  className="spatial-glass-button inline-flex items-center gap-2 px-5 py-3.5 text-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-300" />
                  <span>Get in Touch</span>
                </button>
              </MagneticButton>

              {/* Resume / CV Dropdown */}
              <div className="relative">
                <MagneticButton strength={0.2}>
                  <button
                    onClick={() => setResumeDropdown(!resumeDropdown)}
                    onBlur={() => setTimeout(() => setResumeDropdown(false), 200)}
                    className="spatial-glass-button inline-flex items-center gap-2 px-5 py-3.5 text-sm cursor-pointer text-[#38bdf8] font-semibold"
                    type="button"
                  >
                    <FileText className="w-4 h-4 text-[#38bdf8]" />
                    <span>Resume / CV</span>
                    <ChevronDown className="w-4 h-4 text-slate-300" />
                  </button>
                </MagneticButton>

                {resumeDropdown && (
                  <div className="absolute left-0 top-full mt-2 w-64 spatial-glass-card p-2 z-30 shadow-2xl border border-white/20">
                    <button
                      onClick={() => {
                        onOpenResumeModal('ai');
                        setResumeDropdown(false);
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
                        setResumeDropdown(false);
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
                  </div>
                )}
              </div>
            </div>
          </SpatialGlassPanel>
        </motion.div>

        {/* Right Column: Floating Quick Info Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col"
        >
          <SpatialGlassPanel className="p-7 md:p-8 space-y-6 flex-1 flex flex-col justify-center">
            {/* Education */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-inner">
                <GraduationCap className="w-5 h-5 text-[#38bdf8]" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-sm text-white leading-tight">
                  {PERSONAL_INFO.education.institution}
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  {PERSONAL_INFO.education.degree}
                </p>
                <p className="text-xs text-[#38bdf8] font-semibold mt-0.5">
                  CGPA: {PERSONAL_INFO.education.cgpa} · {PERSONAL_INFO.education.classYear}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="pt-6 border-t border-white/10 flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-inner">
                <MapPin className="w-5 h-5 text-[#818cf8]" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-sm text-white leading-tight">
                  {PERSONAL_INFO.education.location}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Available for in-person or remote opportunities worldwide
                </p>
              </div>
            </div>

            {/* Open to Internships */}
            <div className="pt-6 border-t border-white/10 flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-inner">
                <Send className="w-5 h-5 text-[#34d399]" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-sm text-white leading-tight">
                  Open to Internships
                </h2>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  {PERSONAL_INFO.availability}
                </p>
              </div>
            </div>
          </SpatialGlassPanel>
        </motion.div>
      </div>

      {/* Bottom Floating Capability Dock */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center gap-6"
      >
        <SpatialGlassPanel className="w-full p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* 1. LLM Alignment */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 text-[#38bdf8] shadow-sm">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                LLM Alignment
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Research &amp; Evaluation
              </p>
            </div>

            {/* 2. Data Systems */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 text-[#818cf8] shadow-sm">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                Data Systems
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-world Pipelines
              </p>
            </div>

            {/* 3. Applied AI */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 text-[#34d399] shadow-sm">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                Applied AI
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                From Research to Impact
              </p>
            </div>

            {/* 4. Reliable Engineering */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 text-[#fbbf24] shadow-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-sm text-white">
                Reliable Engineering
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Scalable &amp; Testable
              </p>
            </div>
          </div>
        </SpatialGlassPanel>

        {/* Down Chevron Scroll Indicator */}
        <button
          onClick={() => {
            const el = document.getElementById('about');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-9 h-9 rounded-full bg-white/10 border border-white/20 shadow-sm flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer hover:scale-110"
          aria-label="Scroll to About"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};
