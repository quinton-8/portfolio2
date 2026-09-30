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
        className="fixed inset-0 bg-carbon-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-paper-50 dark:bg-carbon-900 border border-paper-300 dark:border-carbon-700 shadow-2xl z-10 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-paper-200 dark:border-carbon-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                {project.category}
              </span>
              {project.liveUrl && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Live in Production
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-paper-900 dark:text-carbon-100 mt-2 font-mono">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-paper-600 dark:text-carbon-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-paper-200 dark:border-carbon-700 text-paper-500 dark:text-carbon-400 hover:text-paper-900 dark:hover:text-carbon-100 hover:bg-paper-100 dark:hover:bg-carbon-800 transition-colors"
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
              System Overview
            </h4>
            <p className="text-sm sm:text-base text-paper-700 dark:text-carbon-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-paper-500 dark:text-carbon-400 mb-3 flex items-center space-x-1.5">
              <Cpu className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Core Architecture Metrics</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-paper-100 dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 text-center font-mono"
                >
                  <div className="text-xs text-paper-500 dark:text-carbon-400">{metric.label}</div>
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
              <span>Key Architectural Implementations</span>
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
              Technologies & Standards
            </h4>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-paper-200 dark:bg-carbon-800 text-paper-800 dark:text-carbon-200 border border-paper-300 dark:border-carbon-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-paper-200 dark:border-carbon-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-brand-emerald hover:bg-emerald-400 text-carbon-950 transition-colors shadow-md"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-paper-100 dark:bg-carbon-800 hover:bg-paper-200 dark:hover:bg-carbon-700 text-paper-800 dark:text-carbon-200 border border-paper-300 dark:border-carbon-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-paper-500 dark:text-carbon-400 hover:text-paper-900 dark:hover:text-carbon-100"
          >
            Close Dialog (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
