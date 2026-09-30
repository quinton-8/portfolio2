import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Github, ExternalLink } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full-Stack', 'Go Systems', 'FinTech / SDK'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-paper-100/50 dark:bg-carbon-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Systems & Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-paper-900 dark:text-carbon-100 font-mono">
              Featured Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-paper-600 dark:text-carbon-400 max-w-2xl">
              From real-time conflict-free tournament matchmaking at <a href="https://efpitch.com" target="_blank" rel="noopener noreferrer" className="text-brand-emerald underline font-semibold">efpitch.com</a> to unified payment SDKs and low-level Go socket servers.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-6 md:mt-0 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-emerald text-carbon-950 font-bold shadow-md shadow-brand-emerald/20'
                    : 'bg-white dark:bg-carbon-850 text-paper-700 dark:text-carbon-300 border border-paper-200 dark:border-carbon-800 hover:border-brand-emerald/50'
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
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-paper-100 via-white to-paper-100 dark:from-carbon-850 dark:via-carbon-800 dark:to-carbon-850 border border-paper-200 dark:border-carbon-700/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-paper-900 dark:text-carbon-100 font-mono">
              Looking for more codebases & experiments?
            </h3>
            <p className="text-xs sm:text-sm text-paper-600 dark:text-carbon-400">
              Explore 29+ repositories covering PWA offline algorithms, Go tools, open-source guides, and Zone01 peer assignments.
            </p>
          </div>
          <a
            href="https://github.com/quinton-8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-paper-900 dark:bg-white text-white dark:text-carbon-950 hover:bg-brand-emerald dark:hover:bg-brand-emerald dark:hover:text-carbon-950 transition-all shrink-0 shadow"
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
