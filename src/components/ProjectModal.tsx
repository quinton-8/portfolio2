import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-carbon-950/80 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-carbon-900 border border-paper-200 dark:border-carbon-700 shadow-2xl z-10 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-paper-200 dark:border-carbon-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                [ {project.category} ]
              </span>
              {project.liveUrl && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  LIVE_IN_PRODUCTION
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-paper-900 dark:text-carbon-100 mt-2 font-heading tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-paper-600 dark:text-carbon-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-200 dark:border-carbon-700 text-paper-500 dark:text-carbon-400 hover:text-paper-900 dark:hover:text-carbon-100 hover:bg-paper-100 dark:hover:bg-carbon-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-paper-500 dark:text-carbon-400 mb-2">
              // SYSTEM_OVERVIEW
            </h4>
            <p className="text-sm sm:text-base text-paper-700 dark:text-carbon-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-paper-500 dark:text-carbon-400 mb-3 flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-brand-emerald" />
              <span>// ARCHITECTURE_METRICS</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-paper-50 dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 text-center font-mono"
                >
                  <div className="text-[10px] uppercase tracking-wider text-paper-500 dark:text-carbon-400">{metric.label}</div>
                  <div className="text-base sm:text-lg font-bold text-brand-emerald mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Innovations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-paper-500 dark:text-carbon-400 mb-3 flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-brand-cyan" />
              <span>// KEY_ARCHITECTURAL_DECISIONS</span>
            </h4>
            <div className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-paper-700 dark:text-carbon-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald mt-0.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-paper-500 dark:text-carbon-400 mb-2">
              // TECHNOLOGIES_AND_PROTOCOLS
            </h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-paper-100 dark:bg-carbon-800 text-paper-800 dark:text-carbon-200 border border-paper-200 dark:border-carbon-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions with 44px min touch target */}
        <div className="pt-4 border-t border-paper-200 dark:border-carbon-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-brand-emerald hover:bg-emerald-400 text-carbon-950 transition-colors shadow-md min-h-[44px] cursor-pointer"
              >
                <span>Visit Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-paper-100 dark:bg-carbon-800 hover:bg-paper-200 dark:hover:bg-carbon-700 text-paper-800 dark:text-carbon-200 border border-paper-300 dark:border-carbon-700 transition-colors min-h-[44px] cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase text-paper-500 dark:text-carbon-400 hover:text-paper-900 dark:hover:text-carbon-100 cursor-pointer py-2"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
