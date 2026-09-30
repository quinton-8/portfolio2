import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, MessageSquare, Terminal } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center space-x-2 font-mono font-bold text-lg tracking-tight text-paper-900 dark:text-carbon-100 focus:outline-none"
          >
            <span className="text-brand-emerald">&lt;</span>
            <span className="group-hover:text-brand-emerald transition-colors">Quinton</span>
            <span className="text-brand-cyan">/&gt;</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-paper-700 dark:text-carbon-300 hover:text-brand-emerald dark:hover:text-brand-emerald hover:bg-paper-100 dark:hover:bg-carbon-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2 rounded-xl border border-paper-200 dark:border-carbon-700 bg-paper-100 dark:bg-carbon-800 text-paper-700 dark:text-carbon-300 hover:text-brand-emerald dark:hover:text-brand-emerald transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-paper-700" />}
            </button>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={profileData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30 hover:bg-brand-emerald hover:text-carbon-950 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-paper-200 dark:border-carbon-700 bg-paper-100 dark:bg-carbon-800 text-paper-700 dark:text-carbon-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-paper-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="p-2 rounded-lg border border-paper-200 dark:border-carbon-700 bg-paper-100 dark:bg-carbon-800 text-paper-700 dark:text-carbon-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-paper-200 dark:border-carbon-800 bg-white/95 dark:bg-carbon-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-paper-800 dark:text-carbon-200 hover:bg-paper-100 dark:hover:bg-carbon-800 hover:text-brand-emerald"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-paper-200 dark:border-carbon-800 flex items-center justify-between">
                <a
                  href={profileData.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-brand-emerald text-carbon-950 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
