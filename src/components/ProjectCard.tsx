import React from 'react';
import { Project } from '../types/portfolio';
import { ExternalLink, Github, ChevronRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 p-6 flex flex-col justify-between hover:border-brand-emerald/50 dark:hover:border-brand-emerald/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
      
      {/* Top Details */}
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
            {project.category}
          </span>
          {project.liveUrl && (
            <span className="flex items-center space-x-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>
              <span>Live App</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold font-mono text-paper-900 dark:text-carbon-100 group-hover:text-brand-emerald transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-paper-600 dark:text-carbon-400 mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-paper-700 dark:text-carbon-300 line-clamp-3 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-paper-100 dark:border-carbon-800/80 mb-4 font-mono text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="overflow-hidden">
              <div className="text-[10px] text-paper-500 dark:text-carbon-400 truncate">{m.label}</div>
              <div className="text-xs font-bold text-paper-800 dark:text-carbon-200 truncate mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-paper-100 dark:bg-carbon-800 text-[11px] font-mono text-paper-600 dark:text-carbon-400 border border-paper-200 dark:border-carbon-700/60"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] font-mono text-paper-400 dark:text-carbon-500 self-center">
              +{project.tags.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-2 flex items-center justify-between border-t border-paper-100 dark:border-carbon-800">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-brand-emerald hover:text-emerald-400 transition-colors"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Architecture Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center space-x-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-paper-100 dark:bg-carbon-800 hover:bg-paper-200 dark:hover:bg-carbon-700 text-paper-700 dark:text-carbon-300 hover:text-brand-emerald transition-colors"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-emerald/10 text-brand-emerald hover:bg-brand-emerald hover:text-carbon-950 transition-colors"
              title="Visit Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
