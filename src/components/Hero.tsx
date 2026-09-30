import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { ArrowDown, MessageSquare, Copy, Check, Github, Linkedin, ExternalLink, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import avatarImg from '../assets/avatar.jpg';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contacts.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.8 },
      colors: ['#10B981', '#06B6D4', '#6366F1'],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-paper-border dark:border-carbon-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Classification Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-carbon-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">Active & Available for Work</span>
          </div>

          <div className="text-xs font-mono text-ink-muted dark:text-carbon-muted">
            [ Telecommunications Eng · Zone01 Kisumu Fellow ]
          </div>
        </div>

        {/* Main Grid: Bio & Editorial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink dark:text-carbon-text">
                Quinton Juma
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-ink-secondary dark:text-carbon-muted">
                {profileData.roleTitle}
              </p>
            </div>

            {/* Tagline & Bio Highlights */}
            <div className="space-y-3 text-base sm:text-lg text-ink-muted dark:text-carbon-muted leading-relaxed max-w-2xl">
              <p>
                Engineering high-throughput <strong className="text-ink dark:text-carbon-text font-semibold">Go systems</strong>, modern <strong className="text-ink dark:text-carbon-text font-semibold">Next.js frontends</strong>, and resilient FinTech platforms.
              </p>
              <p className="text-sm sm:text-base">
                Grounded in <strong className="text-ink dark:text-carbon-text font-medium">Telecommunications Engineering</strong> from Kabarak University and hardened through peer-driven systems development at <strong className="text-ink dark:text-carbon-text font-medium">Zone01 Kisumu</strong>—building network protocols, concurrency schedulers, and zero-downtime microservices from first principles.
              </p>
            </div>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                className="btn-editorial-primary"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href={profileData.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="btn-editorial-secondary"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-ink-muted dark:text-carbon-muted" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={profileData.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick terminal jump tip */}
            <div className="pt-2 text-xs font-mono text-ink-muted dark:text-carbon-muted flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Interactive CLI: type <kbd>help</kbd> in the <a href="#terminal" className="underline hover:text-ink dark:hover:text-carbon-text">Zone01 Terminal</a> below.</span>
            </div>
          </div>

          {/* Right Column: Editorial Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm p-4 bg-paper-card dark:bg-carbon-card border border-paper-border dark:border-carbon-border rounded-2xl shadow-fine">
              
              {/* Avatar Frame */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-paper-border dark:border-carbon-border bg-paper-subtle dark:bg-carbon-subtle">
                <img
                  src={avatarImg}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-paper/90 dark:bg-carbon-bg/90 backdrop-blur-sm border border-paper-border dark:border-carbon-border text-[10px] font-mono font-medium text-ink dark:text-carbon-text">
                  ZONE01 // KISUMU
                </div>
              </div>

              {/* Data Specifications Table */}
              <div className="mt-4 divide-y divide-paper-border dark:divide-carbon-border text-xs font-mono">
                <div className="py-2 flex justify-between items-center">
                  <span className="text-ink-muted dark:text-carbon-muted">Focus</span>
                  <span className="text-ink dark:text-carbon-text font-medium">Go Systems / Next.js</span>
                </div>
                <div className="py-2 flex justify-between items-center">
                  <span className="text-ink-muted dark:text-carbon-muted">Flagship</span>
                  <a
                    href="https://efpitch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>efpitch.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="py-2 flex justify-between items-center">
                  <span className="text-ink-muted dark:text-carbon-muted">Degree</span>
                  <span className="text-ink dark:text-carbon-text font-medium">BSc Telecom Eng</span>
                </div>
                <div className="py-2 flex justify-between items-center">
                  <span className="text-ink-muted dark:text-carbon-muted">Base</span>
                  <span className="text-ink dark:text-carbon-text font-medium">Kisumu, Kenya</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {profileData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-paper-card dark:bg-carbon-card border border-paper-border dark:border-carbon-border shadow-fine transition-all duration-200 hover:border-paper-borderStrong dark:hover:border-carbon-borderStrong"
            >
              <div className="text-2xl sm:text-3xl font-bold text-ink dark:text-carbon-text font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-ink-secondary dark:text-carbon-muted mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] text-ink-muted dark:text-carbon-muted mt-0.5">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
