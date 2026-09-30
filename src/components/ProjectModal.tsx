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
        className="fixed inset-0 bg-ink/60 dark:bg-carbon-bg/85 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-paper-card dark:bg-carbon-card border border-paper-border dark:border-carbon-border shadow-lift z-10 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-paper-border dark:border-carbon-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-paper-subtle dark:bg-carbon-subtle text-ink-muted dark:text-carbon-muted border border-paper-border dark:border-carbon-border">
                {project.category}
              </span>
              {project.liveUrl && (
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Live in Production
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink dark:text-carbon-text mt-2">
              {project.title}
            </h3>
            <p className="text-sm text-ink-secondary dark:text-carbon-muted mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-paper-border dark:border-carbon-border text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text hover:bg-paper-subtle dark:hover:bg-carbon-subtle transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted mb-2">
              System Overview
            </h4>
            <p className="text-sm sm:text-base text-ink dark:text-carbon-text leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Architecture Metrics</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-paper-subtle dark:bg-carbon-subtle border border-paper-border dark:border-carbon-border text-center"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-ink-faint dark:text-carbon-muted">
                    {metric.label}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-ink dark:text-carbon-text font-mono mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Innovations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Key Architectural Decisions</span>
            </h4>
            <div className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-secondary dark:text-carbon-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted mb-2">
              Technologies & Protocols
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-paper-subtle dark:bg-carbon-subtle text-ink dark:text-carbon-text border border-paper-border dark:border-carbon-border font-mono text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-paper-border dark:border-carbon-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary"
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
                className="btn-editorial-secondary"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text cursor-pointer py-2"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
