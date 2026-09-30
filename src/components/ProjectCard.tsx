import React from 'react';
import { Project } from '../types/portfolio';
import { ExternalLink, Github, ChevronRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group relative rounded-xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-700/80 p-6 flex flex-col justify-between hover:border-brand-emerald/50 dark:hover:border-brand-emerald/40 transition-all duration-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5">
      
      {/* Top Details */}
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
            {project.category}
          </span>
          {project.liveUrl && (
            <span className="flex items-center space-x-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
              <span>Live Platform</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-paper-900 dark:text-carbon-100 group-hover:text-brand-emerald transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-paper-600 dark:text-carbon-400 mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-paper-700 dark:text-carbon-300 line-clamp-3 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-paper-100 dark:border-carbon-750 mb-4 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="overflow-hidden">
              <div className="text-[11px] uppercase tracking-wider text-paper-400 dark:text-carbon-400 truncate">{m.label}</div>
              <div className="text-xs sm:text-sm font-bold text-paper-900 dark:text-carbon-100 truncate mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-paper-100 dark:bg-carbon-800 text-xs font-medium text-paper-600 dark:text-carbon-300 border border-paper-200 dark:border-carbon-700"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-xs text-paper-400 dark:text-carbon-400 self-center">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions with 44px min touch target */}
      <div className="pt-3 flex items-center justify-between border-t border-paper-100 dark:border-carbon-750">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-brand-emerald hover:text-emerald-400 transition-colors py-2 cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Inspect Architecture</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center space-x-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-paper-100 dark:bg-carbon-800 hover:bg-paper-200 dark:hover:bg-carbon-700 text-paper-700 dark:text-carbon-300 hover:text-brand-emerald transition-colors cursor-pointer"
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
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-emerald/10 text-brand-emerald hover:bg-brand-emerald hover:text-carbon-950 transition-colors cursor-pointer border border-brand-emerald/30"
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
