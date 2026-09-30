import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { ArrowDown, MessageSquare, Copy, Check, Github, Linkedin, ExternalLink, Terminal, ShieldCheck, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contacts.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10B981', '#06B6D4', '#F59E0B'],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tactical-blueprint">
      {/* Background Subtle Gradient Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-emerald/10 dark:bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-cyan/10 dark:bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill with Telemetry Formatting */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-brand-emerald/10 dark:bg-brand-emerald/15 text-emerald-700 dark:text-emerald-400 border border-brand-emerald/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="pulse-indicator absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
              </span>
              <span className="tracking-wide uppercase font-semibold">Active & Available for Work</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-paper-900 dark:text-carbon-100 font-heading">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald via-emerald-400 to-brand-cyan">{profileData.name}</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-paper-700 dark:text-carbon-300">
                {profileData.roleTitle}
              </p>
            </div>

            {/* Tagline & Bio Highlights */}
            <p className="text-base sm:text-lg text-paper-600 dark:text-carbon-400 max-w-2xl leading-relaxed">
              Engineering high-throughput <strong className="text-paper-900 dark:text-carbon-100 font-semibold">Go systems</strong>, modern <strong className="text-paper-900 dark:text-carbon-100 font-semibold">Next.js frontends</strong>, and resilient FinTech platforms. Grounded in <strong className="text-paper-900 dark:text-carbon-100 font-semibold">Telecommunications Engineering</strong> from Kabarak University and hardened through peer-driven systems development at <strong className="text-paper-900 dark:text-carbon-100 font-semibold">Zone01 Kisumu</strong>.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold bg-brand-emerald hover:bg-emerald-400 text-carbon-950 shadow-lg shadow-brand-emerald/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href={profileData.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-carbon-850 hover:bg-paper-100 dark:hover:bg-carbon-800 text-paper-800 dark:text-carbon-100 border border-paper-300 dark:border-carbon-700 transition-all hover:scale-[1.02] min-h-[44px] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-brand-emerald" />
                <span>WhatsApp</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-carbon-850 hover:bg-paper-100 dark:hover:bg-carbon-800 text-paper-700 dark:text-carbon-300 border border-paper-300 dark:border-carbon-700 transition-all min-h-[44px] cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-brand-emerald" />
                    <span className="text-brand-emerald font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-paper-400 dark:text-carbon-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Social Icons */}
              <div className="flex items-center space-x-2">
                <a
                  href={profileData.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-300 dark:border-carbon-700 bg-white dark:bg-carbon-850 text-paper-700 dark:text-carbon-300 hover:text-brand-emerald hover:border-brand-emerald/50 transition-colors cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-300 dark:border-carbon-700 bg-white dark:bg-carbon-850 text-paper-700 dark:text-carbon-300 hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick terminal jump tip */}
            <div className="pt-2 text-xs text-paper-500 dark:text-carbon-400 flex items-center justify-center lg:justify-start space-x-2">
              <Terminal className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Type <kbd className="px-1.5 py-0.5 rounded bg-paper-200 dark:bg-carbon-800 text-paper-800 dark:text-carbon-200 border border-paper-300 dark:border-carbon-700 font-bold font-mono">help</kbd> in the <a href="#terminal" className="text-brand-emerald hover:underline">Zone01 Terminal</a> below to test system routines.</span>
            </div>
          </div>

          {/* Right Column: Avatar & Tactical Telemetry Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Orbit Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-emerald via-brand-cyan to-brand-indigo rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-300"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-700 shadow-xl p-5 sm:p-6">
                
                {/* Telemetry Header */}
                <div className="flex items-center justify-between font-mono text-[11px] text-paper-400 dark:text-carbon-400 border-b border-paper-200 dark:border-carbon-700/80 pb-3 mb-4">
                  <span className="flex items-center space-x-1.5 text-brand-emerald font-semibold">
                    <Activity className="w-3 h-3" />
                    <span>SYS_ARCH // ONLINE</span>
                  </span>
                  <span>NODE_ID: QJ-08</span>
                </div>

                {/* Avatar Image Frame */}
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-carbon-950 border border-paper-200 dark:border-carbon-700">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs backdrop-blur-md bg-carbon-950/85 px-3 py-1.5 rounded-lg border border-carbon-700 text-carbon-200">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
                      <span>Zone01 Kisumu</span>
                    </span>
                    <span className="text-brand-cyan font-semibold">Kabarak Eng</span>
                  </div>
                </div>

                {/* Profile Meta Cards */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-paper-50 dark:bg-carbon-900 border border-paper-200 dark:border-carbon-800 text-paper-700 dark:text-carbon-300">
                    <span className="text-paper-500 dark:text-carbon-400">Current Base:</span>
                    <span className="font-semibold text-paper-900 dark:text-carbon-100">{profileData.location}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-paper-50 dark:bg-carbon-900 border border-paper-200 dark:border-carbon-800 text-paper-700 dark:text-carbon-300">
                    <span className="text-paper-500 dark:text-carbon-400">Primary Core:</span>
                    <span className="font-semibold text-brand-emerald">Go (Golang) / Next.js</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-paper-50 dark:bg-carbon-900 border border-paper-200 dark:border-carbon-800 text-paper-700 dark:text-carbon-300">
                    <span className="text-paper-500 dark:text-carbon-400">Production App:</span>
                    <a
                      href="https://efpitch.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-cyan hover:underline flex items-center space-x-1 cursor-pointer"
                    >
                      <span>efpitch.com</span>
                      <ExternalLink className="w-3 h-3 inline" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {profileData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-700/80 shadow-sm hover:border-brand-emerald/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-paper-900 dark:text-carbon-100">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-paper-700 dark:text-carbon-300 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs text-paper-500 dark:text-carbon-400 mt-0.5">
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
