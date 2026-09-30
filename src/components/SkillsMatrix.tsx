import React from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import { Code2, Server, Layout, Database, Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-brand-emerald" />;
      case 'Server':
        return <Server className="w-5 h-5 text-brand-cyan" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-brand-indigo" />;
      case 'Database':
        return <Database className="w-5 h-5 text-brand-amber" />;
      default:
        return <Code2 className="w-5 h-5 text-brand-emerald" />;
    }
  };

  const getLevelBadge = (level?: string) => {
    switch (level) {
      case 'Mastery':
        return (
          <span className="text-[11px] px-2 py-0.5 rounded bg-brand-emerald/15 text-emerald-700 dark:text-emerald-400 border border-brand-emerald/30 font-semibold uppercase tracking-wider">
            Mastery
          </span>
        );
      case 'Advanced':
        return (
          <span className="text-[11px] px-2 py-0.5 rounded bg-brand-cyan/15 text-cyan-700 dark:text-cyan-400 border border-brand-cyan/30 font-semibold uppercase tracking-wider">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="text-[11px] px-2 py-0.5 rounded bg-paper-200 dark:bg-carbon-800 text-paper-700 dark:text-carbon-300 border border-paper-300 dark:border-carbon-700 font-medium uppercase tracking-wider">
            Proficient
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-paper-100/60 dark:bg-carbon-900/60 border-t border-paper-200 dark:border-carbon-750">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-paper-900 dark:text-carbon-100 font-heading">
            Skills & Architectural Toolkit
          </h2>
          <p className="text-sm sm:text-base text-paper-600 dark:text-carbon-400 max-w-xl mx-auto">
            High-density systems programming in Go, modern Next.js client engineering, and production-tested API architectures.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategoriesData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-700/80 shadow-sm hover:border-brand-emerald/40 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 rounded-lg bg-paper-100 dark:bg-carbon-800 border border-paper-200 dark:border-carbon-700">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-paper-900 dark:text-carbon-100">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-paper-500 dark:text-carbon-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Items List */}
              <div className="mt-6 space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-paper-50 dark:bg-carbon-900 border border-paper-100 dark:border-carbon-800 hover:border-paper-300 dark:hover:border-carbon-700 transition-colors"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></div>
                      <span className="text-xs sm:text-sm font-semibold text-paper-900 dark:text-carbon-100">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-paper-500 dark:text-carbon-400 hidden sm:inline">
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
