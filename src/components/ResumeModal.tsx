import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, PROJECTS, ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';
import { X, Printer, Copy, Check, GraduationCap, Award, Briefcase, Code2, Sparkles, Download, FileText } from 'lucide-react';
import { downloadResumeFile, printResumeDocument, generateResumeMarkdown } from '../utils/resumeExport';

interface ResumeModalProps {
  initialTrack?: 'ai' | 'ds';
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ initialTrack = 'ai', onClose }) => {
  const [activeTrack, setActiveTrack] = useState<'ai' | 'ds'>(initialTrack);
  const [copied, setCopied] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Lock body scroll and focus modal scroll container on mount
  React.useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalDocOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Focus scroll container so keyboard and trackpad target it directly
    scrollRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
    };
  }, []);

  // Intercept wheel/touchpad events so they scroll this modal directly and never propagate to background page
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
      const atTop = el.scrollTop <= 0 && e.deltaY < 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight && e.deltaY > 0;
      
      if (!atTop && !atBottom) {
        el.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // Dynamic Markdown Generation based on Active Track
  const copyMarkdown = () => {
    const md = generateResumeMarkdown(activeTrack);
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    printResumeDocument(activeTrack);
  };



  const isAI = activeTrack === 'ai';

  return (
    <div 
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      <div 
        data-lenis-prevent
        className="relative w-full max-w-4xl h-[90vh] max-h-[90vh] flex flex-col rounded-3xl overflow-hidden text-left z-10 transition-all cursor-default bg-black border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-black">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black">
              <span className="disp text-2xl text-white">KA</span>
            </div>
            <div>
              <h2 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                {PERSONAL_INFO.name} — CV
              </h2>
              <span className="text-[11px] text-acc font-medium flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-3 h-3 text-acc" />
                <span>
                  {isAI
                    ? 'AI / ML Track (ThinkRL, Alignment & Agent Loops)'
                    : 'Data Science Track (ETL, Warehousing & Analytics)'}
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex p-1 bg-white/5 rounded-full text-xs border border-white/10">
              <button
                onClick={() => setActiveTrack('ai')}
                className={`px-3.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                  activeTrack === 'ai'
                    ? 'bg-acc text-black shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                AI / ML
              </button>
              <button
                onClick={() => setActiveTrack('ds')}
                className={`px-3.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                  activeTrack === 'ds'
                    ? 'bg-acc text-black shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Data Science
              </button>
            </div>

            <div className="relative">
              <a
                href={isAI ? "/Krutarth Ashar Resume ML.pdf" : "/Krutarth Ashar Resume DS.pdf"}
                download
                className="px-3.5 py-1.5 rounded-full bg-acc hover:bg-ocean text-black hover:text-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                title="Download PDF Resume"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
              title="Print / Save PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={copyMarkdown}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
              title="Copy Markdown format"
            >
              {copied ? <Check className="w-4 h-4 text-acc" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          tabIndex={0}
          data-lenis-prevent
          className="flex-1 min-h-0 p-6 md:p-10 glass-modal-scroll space-y-8 text-sm text-slate-300 font-sans outline-none focus:outline-none bg-black"
        >
          <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="disp text-4xl text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-xs uppercase tracking-widest text-acc mt-2">
                {isAI
                  ? 'AI & Machine Learning Research Candidate'
                  : 'Data Science & Analytics Engineering Candidate'}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-mute mt-4">
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.email}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>

            <div className="text-right text-xs text-mute">
              <div className="text-white font-medium">K. J. Somaiya School of Engineering</div>
              <div className="text-acc font-mono uppercase tracking-widest mt-1">
                {isAI ? `CGPA: ${PERSONAL_INFO.education.cgpa} · ` : ''}Expected: 2027
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl text-xs text-slate-300 leading-relaxed bg-onyx border border-white/10">
            <span className="font-mono font-bold text-acc block mb-2 uppercase tracking-wider text-[10px]">
              Objective
            </span>
            <p>{isAI ? PERSONAL_INFO.objectiveAI : PERSONAL_INFO.objectiveDS}</p>
          </div>

          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-mute mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-acc" />
              <span>Education</span>
            </h3>
            <div className="p-6 rounded-2xl space-y-2 bg-onyx border border-white/10">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-sm text-white">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-xs text-acc font-mono uppercase tracking-widest">
                  {PERSONAL_INFO.education.classYear}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                {PERSONAL_INFO.education.institution}
                {isAI && (
                  <span className="text-acc ml-2">
                    — CGPA: {PERSONAL_INFO.education.cgpa}
                  </span>
                )}
              </div>
              {isAI && (
                <div className="flex flex-wrap gap-4 text-xs text-mute pt-3 mt-3 border-t border-white/10">
                  <span>{PERSONAL_INFO.education.cbse12}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.education.cbse10}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-mute mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-acc" />
              <span>Technical Skills</span>
            </h3>
            <div className="p-6 rounded-2xl text-xs space-y-3 bg-onyx border border-white/10">
              {isAI ? (
                <>
                  <div>
                    <strong className="text-white">Programming Languages:</strong>{' '}
                    <span className="text-slate-400">Python, C++, Java, JavaScript, SQL</span>
                  </div>
                  <div>
                    <strong className="text-white">ML &amp; Deep Learning:</strong>{' '}
                    <span className="text-slate-400">
                      TensorFlow, PyTorch, scikit-learn, NLP, Transformer Architectures, RLHF/RLAIF, LoRA Model Fine-tuning &amp; Evaluation, RAG (Retrieval-Augmented Generation)
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Computer Vision:</strong>{' '}
                    <span className="text-slate-400">OpenCV, YOLOv5, Roboflow, Object Detection</span>
                  </div>
                  <div>
                    <strong className="text-white">GenAI &amp; APIs:</strong>{' '}
                    <span className="text-slate-400">
                      Gemini API, Groq API, LLM Agent Orchestration, Permission-Gated Task Execution, Google Cloud APIs (Calendar, Gmail, Sheets, Maps), RESTful API Design
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Backend &amp; Web Development:</strong>{' '}
                    <span className="text-slate-400">
                      FastAPI, Flask, Asynchronous Python, Node.js, Express, React 19, TypeScript, Tailwind CSS v4
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Databases &amp; Security:</strong>{' '}
                    <span className="text-slate-400">
                      PostgreSQL, asyncpg, SQLAlchemy 2.0, SQLite, Relational Schema Design, Append-Only Audit Logging, OAuth 2.0, JWT Auth, Firebase Admin SDK, HMAC-SHA256 Token Signing
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Data &amp; Tools:</strong>{' '}
                    <span className="text-slate-400">Pandas, SQL, Git, VSCode, Pytest, Asynchronous Testing</span>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <strong className="text-white">Programming:</strong>{' '}
                    <span className="text-slate-400">Python, SQL, C++, Java, JavaScript</span>
                  </div>
                  <div>
                    <strong className="text-white">Data Analytics &amp; Visualization:</strong>{' '}
                    <span className="text-slate-400">
                      MS Excel, Power BI, Tableau, Pandas, Exploratory Data Analysis (EDA), Data Cleaning &amp; Wrangling, Dashboarding, Geospatial Analysis (QGIS)
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Databases &amp; ETL:</strong>{' '}
                    <span className="text-slate-400">
                      SQL, PostgreSQL, SQLite, SQLAlchemy 2.0, asyncpg, Relational Database Design, ER Modeling, Query Optimization, ETL Pipelines, Data Warehousing, OLAP/OLTP, Star/Snowflake Schema
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Machine Learning:</strong>{' '}
                    <span className="text-slate-400">
                      scikit-learn, Regression, Classification, Clustering, Feature Engineering, Dimensionality Reduction (PCA)
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Machine Learning Methods:</strong>{' '}
                    <span className="text-slate-400">SVM, Decision Trees, k-NN, Naive Bayes, k-Means, DBSCAN</span>
                  </div>
                  <div>
                    <strong className="text-white">Deep Learning &amp; AI:</strong>{' '}
                    <span className="text-slate-400">
                      TensorFlow, PyTorch, NLP, Transformer Architectures, LLM API Integration (Groq, Gemini), AI Agent Workflows, Permission-Gated Task Execution
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Development &amp; Cloud:</strong>{' '}
                    <span className="text-slate-400">
                      AWS, FastAPI, Flask, Node.js, Express, React.js, TypeScript, Tailwind CSS, REST APIs, Asynchronous Python, Git, VSCode
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Security &amp; Testing:</strong>{' '}
                    <span className="text-slate-400">
                      Google OAuth 2.0, Firebase Admin SDK, JWT Authentication, HMAC-SHA256 Token Validation, Permission Scopes, Audit Logging, Async Pytest, Jest, Supertest
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-mute mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-acc" />
              <span>Professional Experience</span>
            </h3>
            <div className="space-y-4">
              {EXPERIENCE_ITEMS.map((exp) => (
                <div key={exp.id} className="p-6 rounded-2xl bg-onyx border border-white/10">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-bold text-sm text-white">
                      {exp.role} <span className="text-mute font-normal mx-1">at</span> <span className="text-acc">{exp.company}</span>
                    </span>
                    <span className="text-xs text-mute font-mono tracking-wide">{exp.period}</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 mt-3">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-mute mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-acc" />
              <span>Key Engineering Projects</span>
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-6 rounded-2xl bg-onyx border border-white/10">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-bold text-sm text-white">{proj.title}</span>
                    <span className="text-[10px] text-acc font-mono uppercase tracking-widest">{proj.badge}</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px]">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-mute mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-acc" />
                <span>Accredited Certifications</span>
              </h3>
              <ul className="text-xs text-slate-400 space-y-3">
                {CERTIFICATIONS.map((c, i) => (
                  <li key={i} className="p-4 rounded-xl flex items-center justify-between bg-onyx border border-white/10">
                    <div>
                      <strong className="text-white">{c.title}</strong>
                      <span className="text-mute block text-[11px] mt-1 font-mono tracking-wide">{c.issuer}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-mute mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-acc" />
                <span>Additional Qualifications</span>
              </h3>
              <div className="p-5 rounded-xl text-xs text-slate-400 space-y-3 leading-relaxed bg-onyx border border-white/10">
                <p>
                  <strong className="text-white">Competitions Finalist:</strong> CaseQuest 2026 (KJSSE E-Summit), MergeMania 2026 (SPIT E-Summit), and FCRIT Green Club Ideathon 2026.
                </p>
                <p>
                  <strong className="text-white">Active Learning:</strong> LangChain, RAG pipeline design, and transformer agentic loops.
                </p>
                <p>
                  <strong className="text-white">Leadership &amp; Delivery:</strong> Experienced presenting technical results and architecture decisions to peers and senior stakeholders in cross-functional environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
