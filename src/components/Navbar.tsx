import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, MessageSquare } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-paper/85 dark:bg-carbon-bg/85 backdrop-blur-md py-3.5 border-b border-paper-border dark:border-carbon-border shadow-fine'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center space-x-1.5 font-bold text-base tracking-tight text-ink dark:text-carbon-text focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <span className="font-mono text-emerald-600 dark:text-emerald-400">&lt;</span>
            <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-semibold tracking-normal">
              Quinton Juma
            </span>
            <span className="font-mono text-cyan-600 dark:text-cyan-400">/&gt;</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text hover:bg-paper-subtle dark:hover:bg-carbon-subtle transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Theme Toggle Button (44x44px touch target) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-ink dark:hover:text-carbon-text transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-ink-secondary" />}
            </button>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={profileData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-primary text-xs !py-2 !px-3.5 !min-h-[40px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-ink-secondary" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 border border-paper-border dark:border-carbon-border bg-paper-card/95 dark:bg-carbon-card/95 backdrop-blur-md rounded-2xl shadow-lift space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-ink-secondary dark:text-carbon-muted hover:bg-paper-subtle dark:hover:bg-carbon-subtle hover:text-ink dark:hover:text-carbon-text cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-paper-border dark:border-carbon-border">
              <a
                href={profileData.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-primary w-full text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
