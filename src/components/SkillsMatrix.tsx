import React from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import { Code2, Server, Layout, Database } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const getLevelBadge = (level?: string) => {
    switch (level) {
      case 'Mastery':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pastel-green dark:bg-pastel-darkGreen text-pastel-greenText dark:text-pastel-darkGreenText border border-pastel-greenText/20 uppercase tracking-wider font-medium">
            Mastery
          </span>
        );
      case 'Advanced':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pastel-blue dark:bg-pastel-darkBlue text-pastel-blueText dark:text-pastel-darkBlueText border border-pastel-blueText/20 uppercase tracking-wider font-medium">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-paper-subtle dark:bg-carbon-subtle text-ink-muted dark:text-carbon-muted border border-paper-border dark:border-carbon-border uppercase tracking-wider font-medium">
            Proficient
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-paper-border dark:border-carbon-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-carbon-muted uppercase tracking-wider">
            <span>Capabilities & Core Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-carbon-text">
            Technical Architecture & Systems
          </h2>
          <p className="text-sm sm:text-base text-ink-muted dark:text-carbon-muted max-w-xl">
            High-density systems programming in Go, modern Next.js client engineering, and production-tested API architectures.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategoriesData.map((category, idx) => (
            <div
              key={idx}
              className="minimal-card p-6 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-lg bg-paper-subtle dark:bg-carbon-subtle border border-paper-border dark:border-carbon-border">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink dark:text-carbon-text">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted dark:text-carbon-muted">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Items List */}
              <div className="mt-6 space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-paper-subtle dark:bg-carbon-subtle border border-paper-border dark:border-carbon-border transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-xs sm:text-sm font-semibold text-ink dark:text-carbon-text">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-ink-muted dark:text-carbon-muted hidden sm:inline">
                        {skill.category}
                      </span>
                      {getLevelBadge(skill.level)}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
