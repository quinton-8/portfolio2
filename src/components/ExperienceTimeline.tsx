import React from 'react';
import { experiencesData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Path & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-paper-900 dark:text-carbon-100 font-mono">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-paper-600 dark:text-carbon-400 max-w-xl mx-auto">
            The dual foundation of deep telecommunications networking theory and intense peer-driven software engineering at Zone01 Kisumu.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-paper-200 dark:border-carbon-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiencesData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-paper-50 dark:bg-carbon-900 border-2 border-brand-emerald text-brand-emerald shadow-md">
                {item.type === 'engineering' ? (
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 shadow-sm hover:border-brand-emerald/40 transition-colors">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-brand-emerald/10 text-brand-emerald mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-mono text-paper-900 dark:text-carbon-100">
                      {item.role}
                    </h3>
                    <div className="text-base font-semibold text-brand-cyan font-mono mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-paper-500 dark:text-carbon-400 space-y-1">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-paper-700 dark:text-carbon-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6">
                  {item.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-paper-600 dark:text-carbon-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-paper-100 dark:border-carbon-800">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-paper-100 dark:bg-carbon-800 text-[11px] font-mono text-paper-600 dark:text-carbon-400 border border-paper-200 dark:border-carbon-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
