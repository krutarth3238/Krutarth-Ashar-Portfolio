import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectWorkflowStage } from '../types/portfolio';
import { 
  Code2, 
  ExternalLink, 
  CheckCircle2, 
  Maximize2, 
  Layers, 
  Cpu, 
  Database,
  ArrowUpRight
} from 'lucide-react';
import { SpatialGlassPanel } from './SpatialGlassPanel';

export const ProjectsSpatialSection: React.FC = () => {
  // Any project can be expanded into the spotlight!
  const [selectedProjectId, setSelectedProjectId] = useState<string>('crewmate');
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const activeProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== selectedProjectId);

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveStageIndex(0);
    // Smooth scroll to top of spotlight
    spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const stages: ProjectWorkflowStage[] = activeProject.architectureStages || [];
  const activeStage = stages[activeStageIndex] || stages[0];

  return (
    <section 
      ref={spotlightRef}
      className="w-full py-16 md:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
      id="projects"
    >
      {/* Section Header Plaque */}
      <div className="mb-10 text-left">
        <div className="spatial-glass-card inline-block px-7 py-5 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-1.5 font-bold">
            <span>03 —</span>
            <span className="text-slate-400">Featured Projects &amp; Systems</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-1.5">
            Systems &amp; Architecture Spotlight
          </h2>
          <p className="text-xs uppercase tracking-wider text-slate-300 font-medium">
            Click any project card below to expand it into the spotlight
          </p>
        </div>
      </div>

      {/* PRIMARY EXPANDED SPOTLIGHT PANEL */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-left"
        >
          <SpatialGlassPanel className="p-7 md:p-10 border border-[#38bdf8]/30 shadow-[0_25px_70px_-15px_rgba(0,113,227,0.35)]">
            {/* Header Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span 
                  className="spatial-glass-pill px-4 py-1.5 text-xs font-bold uppercase tracking-wider border"
                  style={{ color: activeProject.badgeColor, borderColor: `${activeProject.badgeColor}40` }}
                >
                  {activeProject.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeProject.subtitle}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spatial-glass-button inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white"
                >
                  <Code2 className="w-4 h-4 text-[#38bdf8]" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Title & Core Summary */}
            <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              {activeProject.title}
            </h3>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-4xl mb-7">
              {activeProject.description}
            </p>

            {/* Live Metrics Grid */}
            {activeProject.liveDemoStats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {activeProject.liveDemoStats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                      {stat.label}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-white mt-0.5 block truncate">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* INTERACTIVE WORKFLOW STAGES SELECTOR (Clean, No Code Bloat) */}
            {stages.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#38bdf8]" />
                    <span>System Architecture &amp; Execution Pipeline</span>
                  </span>
                  <span className="text-xs text-[#38bdf8] hidden sm:inline">
                    Select a step to inspect architectural design
                  </span>
                </div>

                {/* Stage Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {stages.map((stage, idx) => {
                    const isSelected = activeStageIndex === idx;
                    return (
                      <button
                        key={stage.step}
                        onClick={() => setActiveStageIndex(idx)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white/15 shadow-xl border-[#38bdf8] ring-2 ring-[#38bdf8]/30'
                            : 'spatial-glass-pill hover:bg-white/10'
                        }`}
                      >
                        <div 
                          className="text-xs font-bold mb-1 flex items-center justify-between"
                          style={{ color: stage.color }}
                        >
                          <span>Step {stage.step}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />}
                        </div>
                        <div className="font-display font-semibold text-sm text-white mb-1 truncate">
                          {stage.title}
                        </div>
                        <div className="text-xs text-slate-300 leading-snug line-clamp-2">
                          {stage.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Stage Technical Details (Clean Architectural Breakdown) */}
                {activeStage && (
                  <div className="p-5 md:p-6 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
                        Stage {activeStage.step}: {activeStage.title} — Architectural Mechanism
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-4xl">
                      {activeStage.details}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Tags Footer */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="spatial-glass-pill px-3 py-1 text-xs text-[#38bdf8] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SpatialGlassPanel>
        </motion.div>
      </AnimatePresence>

      {/* THE OTHER PROJECTS DECK (Clicking expands that project into the primary spotlight above!) */}
      <div className="text-left">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-display font-bold text-lg text-white">
            Other Projects in the Portfolio
          </h4>
          <span className="text-xs text-slate-400">
            Click any project to expand it into the spotlight
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleSelectProject(project.id)}
              className="spatial-glass-card p-6 flex flex-col justify-between group cursor-pointer hover:border-[#38bdf8]/50 hover:shadow-[0_15px_35px_-5px_rgba(0,113,227,0.3)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: project.badgeColor }}
                  >
                    {project.badge}
                  </span>

                  {/* Expand into Spotlight Icon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectProject(project.id);
                    }}
                    className="p-1.5 rounded-full bg-white/10 text-slate-300 group-hover:text-white group-hover:bg-[#0071e3] transition-all cursor-pointer"
                    title="Expand into Spotlight"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h5 className="font-display font-bold text-base text-white mb-1.5 group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h5>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 pt-3 border-t border-white/10 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="spatial-glass-pill px-2 py-0.5 text-[10px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] text-slate-400 self-center">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-[#38bdf8] font-semibold pt-1">
                  <span className="flex items-center gap-1 group-hover:underline">
                    <span>Expand into Spotlight</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
