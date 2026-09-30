import React from 'react';
import { Project } from '../types/portfolio';
import { ExternalLink, Github, ChevronRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="minimal-card p-6 flex flex-col justify-between">
      
      {/* Top Details */}
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-paper-subtle dark:bg-carbon-subtle text-ink-muted dark:text-carbon-muted border border-paper-border dark:border-carbon-border">
            {project.category}
          </span>
          {project.liveUrl && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Platform</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold tracking-tight text-ink dark:text-carbon-text">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-ink-secondary dark:text-carbon-muted mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-ink-muted dark:text-carbon-muted line-clamp-3 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-paper-border dark:border-carbon-border mb-4 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-wider text-ink-faint dark:text-carbon-muted truncate">
                {m.label}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-ink dark:text-carbon-text font-mono truncate mt-0.5">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-paper-subtle dark:bg-carbon-subtle text-[11px] font-mono text-ink-muted dark:text-carbon-muted border border-paper-border dark:border-carbon-border"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] font-mono text-ink-faint dark:text-carbon-muted self-center">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-3 flex items-center justify-between border-t border-paper-border dark:border-carbon-border">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-ink-secondary dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text transition-colors py-2 cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Inspect Architecture</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text transition-colors cursor-pointer"
              title="View on GitHub"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-pointer"
              title="Visit Live Application"
              aria-label={`Visit live platform for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
