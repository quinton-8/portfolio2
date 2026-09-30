import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-paper-200 dark:border-carbon-750 bg-white dark:bg-carbon-950 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Note */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 font-bold text-base text-paper-900 dark:text-carbon-100">
              <span className="text-brand-emerald font-mono">&lt;</span>
              <span className="tracking-normal">{profileData.name}</span>
              <span className="text-brand-cyan font-mono">/&gt;</span>
            </div>
            <p className="text-xs sm:text-sm text-paper-500 dark:text-carbon-400">
              Telecommunications Engineering (Kabarak) • Software Engineering Fellow (Zone01 Kisumu)
            </p>
          </div>

          {/* Socials & Back to Top (Min 44x44px touch targets) */}
          <div className="flex items-center space-x-3">
            <a
              href={profileData.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-paper-100 dark:bg-carbon-900 text-paper-600 dark:text-carbon-400 hover:text-brand-emerald transition-colors cursor-pointer border border-paper-200 dark:border-carbon-800"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-paper-100 dark:bg-carbon-900 text-paper-600 dark:text-carbon-400 hover:text-brand-cyan transition-colors cursor-pointer border border-paper-200 dark:border-carbon-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-paper-100 dark:bg-carbon-900 text-paper-600 dark:text-carbon-400 hover:text-brand-emerald transition-colors cursor-pointer border border-paper-200 dark:border-carbon-800"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-paper-100 dark:bg-carbon-900 text-paper-600 dark:text-carbon-400 hover:text-brand-emerald hover:border-brand-emerald transition-all cursor-pointer border border-paper-200 dark:border-carbon-800"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-paper-100 dark:border-carbon-900 flex flex-col sm:flex-row items-center justify-between text-paper-400 dark:text-carbon-500 gap-3">
          <div>
            © {new Date().getFullYear()} Quinton Juma. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-paper-500 dark:text-carbon-400 text-xs">
            <span>Kisumu, Kenya • Available Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
