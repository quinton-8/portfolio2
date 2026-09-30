import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Github, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full-Stack', 'Go Systems', 'FinTech / SDK'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-paper-border dark:border-carbon-border bg-paper-subtle dark:bg-carbon-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-carbon-muted uppercase tracking-wider">
              <span>Engineering Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-carbon-text">
              Featured Systems & Codebases
            </h2>
            <p className="text-sm sm:text-base text-ink-muted dark:text-carbon-muted max-w-2xl leading-relaxed">
              From real-time conflict-free tournament matchmaking at <a href="https://efpitch.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline font-medium cursor-pointer">efpitch.com</a> to unified financial payment SDKs and socket-level Go servers.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer min-h-[40px] text-xs sm:text-sm font-medium ${
                  activeCategory === cat
                    ? 'bg-ink dark:bg-carbon-text text-paper dark:text-carbon-bg shadow-fine'
                    : 'bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted border border-paper-border dark:border-carbon-border hover:border-paper-borderStrong dark:hover:border-carbon-borderStrong'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-paper-card dark:bg-carbon-card border border-paper-border dark:border-carbon-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-fine">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-ink-muted dark:text-carbon-muted font-mono uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>Open Source & Peer Codebases</span>
            </div>
            <h3 className="text-lg font-bold text-ink dark:text-carbon-text">
              Looking for more repositories and algorithms?
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted dark:text-carbon-muted">
              Explore 29+ repositories covering PWA offline algorithms, Go utilities, open-source documentation, and Zone01 peer assignments.
            </p>
          </div>
          <a
            href="https://github.com/quinton-8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-primary shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Visit @quinton-8 on GitHub</span>
          </a>
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
