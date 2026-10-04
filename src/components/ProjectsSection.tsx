import React, { useState } from 'react';
import { PROJECTS, SOIL_PIPELINE_STAGES } from '../data/portfolioData';
import { ProjectStage } from '../types/portfolio';
import { Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<ProjectStage | null>(null);

  const flagship = PROJECTS[0];
  const otherProjects = PROJECTS.slice(1);

  return (
    <section className="w-full py-16 md:py-20 relative" id="projects">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl tracking-tight text-[#1a1b1f] mb-1.5">
            Featured Projects
          </h2>
          <p className="text-sm text-[#6e6e73]">
            Selected engineering systems, reverse-engineered pipelines, and agentic workflows
          </p>
        </div>

        <div className="space-y-8">
          {/* FLAGSHIP PROJECT: Soil Health Data Extraction Pipeline */}
          <div className="liquid-glass-card rounded-3xl p-7 md:p-9 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="liquid-glass-pill px-3.5 py-1 rounded-full text-[#0071e3] text-xs font-medium border border-[#0071e3]/20 shadow-sm">
                {flagship.badge}
              </span>

              <div className="flex items-center gap-3">
                <a
                  className="inline-flex items-center gap-1.5 text-xs text-[#6e6e73] hover:text-[#0071e3] transition-colors"
                  href={flagship.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View Source</span>
                </a>
              </div>
            </div>

            <h3 className="font-display font-bold text-2xl md:text-3xl text-[#1a1b1f] mb-3">
              {flagship.title}
            </h3>

            <p className="text-base text-[#414753] leading-relaxed mb-6 max-w-3xl">
              {flagship.description}
            </p>

            {/* 5-Stage Orchestration Overview (Liquid Glass interactive mini cards) */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#6e6e73] block font-semibold">
                  5-Stage Pipeline Workflow
                </span>
                <span className="text-[11px] text-[#0071e3] hidden sm:inline">
                  Click stage to view specification
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {SOIL_PIPELINE_STAGES.map((stage) => {
                  const isSelected = selectedStage?.id === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setSelectedStage(isSelected ? null : stage)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white shadow-md border-[#0071e3] ring-2 ring-[#0071e3]/20'
                          : 'liquid-glass-pill hover:bg-white hover:border-black/[0.1] shadow-sm'
                      }`}
                    >
                      <div
                        className="text-xs font-bold mb-1 flex items-center justify-between"
                        style={{ color: stage.color }}
                      >
                        <span>
                          {stage.step}. {stage.title}
                        </span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3]" />}
                      </div>
                      <div className="text-xs text-[#6e6e73] leading-snug">
                        {stage.desc}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Stage Quick Inspector Drawer */}
              {selectedStage && (
                <div className="mt-4 p-4 rounded-2xl liquid-glass border border-[#0071e3]/30 shadow-md transition-all animate-fadeIn">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0071e3]">
                      Stage {selectedStage.step} Deep-Dive: {selectedStage.title}
                    </span>
                    <button
                      onClick={() => setSelectedStage(null)}
                      className="text-xs text-[#6e6e73] hover:text-[#1a1b1f] cursor-pointer"
                    >
                      Close ✕
                    </button>
                  </div>
                  <p className="text-xs text-[#414753] mb-3 leading-relaxed">
                    {selectedStage.details}
                  </p>
                  <div className="bg-[#1a1b1f] text-[#f5f5f7] p-3 rounded-xl font-mono text-[11px] overflow-x-auto no-scrollbar shadow-inner">
                    <pre>{selectedStage.codeSnippet}</pre>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/[0.05]">
              <div className="flex flex-wrap gap-2">
                {flagship.tags.map((tag) => (
                  <span
                    key={tag}
                    className="liquid-glass-pill px-3 py-1 rounded-full text-xs text-[#0071e3] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Grid of Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="liquid-glass-card rounded-3xl p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: project.badgeColor }}
                    >
                      {project.badge}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6e6e73] group-hover:text-[#0071e3] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#1a1b1f] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#414753] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.05]">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tag}
                        className={`liquid-glass-pill px-3 py-1 rounded-full text-xs font-medium ${
                          tIdx === 0
                            ? 'text-[#0071e3] border-[#0071e3]/20'
                            : 'text-[#414753]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
