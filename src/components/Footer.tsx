import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-paper-border dark:border-carbon-border bg-paper dark:bg-carbon-bg py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Note */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 font-bold text-base text-ink dark:text-carbon-text">
              <span className="font-mono text-emerald-600 dark:text-emerald-400">&lt;</span>
              <span>{profileData.name}</span>
              <span className="font-mono text-cyan-600 dark:text-cyan-400">/&gt;</span>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted dark:text-carbon-muted">
              Telecommunications Engineering (Kabarak) • Software Engineering Fellow (Zone01 Kisumu)
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={profileData.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text transition-colors cursor-pointer border border-paper-border dark:border-carbon-border"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-cyan-600 transition-colors cursor-pointer border border-paper-border dark:border-carbon-border"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-emerald-600 transition-colors cursor-pointer border border-paper-border dark:border-carbon-border"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text transition-all cursor-pointer border border-paper-border dark:border-carbon-border"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-paper-border dark:border-carbon-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-faint dark:text-carbon-muted gap-3">
          <div>
            © {new Date().getFullYear()} Quinton Juma. All rights reserved.
          </div>
          <div>
            Kisumu, Kenya • Available Globally
          </div>
        </div>
      </div>
    </footer>
  );
};
