import React from 'react';
import { experiencesData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-paper-border dark:border-carbon-border bg-paper-subtle dark:bg-carbon-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-carbon-muted uppercase tracking-wider">
            <span>Academic & Professional Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-carbon-text">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-ink-muted dark:text-carbon-muted max-w-xl">
            Bridging rigorous telecommunications networking theory with intense peer-driven software engineering at Zone01 Kisumu.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-paper-border dark:border-carbon-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiencesData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-paper-card dark:bg-carbon-card border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 shadow-fine">
                {item.type === 'engineering' ? (
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
                )}
              </div>

              {/* Card Container */}
              <div className="minimal-card p-6 sm:p-8">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-paper-subtle dark:bg-carbon-subtle text-ink-muted dark:text-carbon-muted border border-paper-border dark:border-carbon-border mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-ink dark:text-carbon-text">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-ink-muted dark:text-carbon-muted space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-muted dark:text-carbon-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6">
                  {item.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary dark:text-carbon-muted">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-paper-border dark:border-carbon-border">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-paper-subtle dark:bg-carbon-subtle text-[11px] font-mono text-ink-muted dark:text-carbon-muted border border-paper-border dark:border-carbon-border"
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
