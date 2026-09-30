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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/85 dark:bg-carbon-900/90 backdrop-blur-md py-3 border-b border-paper-200 dark:border-carbon-700/80 shadow-sm'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center space-x-2 font-bold text-lg tracking-tight text-paper-900 dark:text-carbon-100 focus-visible:ring-2 focus-visible:ring-brand-emerald rounded-lg p-1"
          >
            <span className="text-brand-emerald font-mono">&lt;</span>
            <span className="group-hover:text-brand-emerald transition-colors tracking-normal font-bold">Quinton</span>
            <span className="text-brand-cyan font-mono">/&gt;</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-paper-700 dark:text-carbon-300 hover:text-brand-emerald dark:hover:text-brand-emerald hover:bg-paper-100 dark:hover:bg-carbon-800 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle (Min 44x44px touch target) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-200 dark:border-carbon-700 bg-paper-100 dark:bg-carbon-800 text-paper-700 dark:text-carbon-300 hover:text-brand-emerald dark:hover:text-brand-emerald transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-paper-700" />}
            </button>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={profileData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30 hover:bg-brand-emerald hover:text-carbon-950 transition-all shadow-sm cursor-pointer min-h-[44px]"
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
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-200 dark:border-carbon-700 bg-paper-100 dark:bg-carbon-800 text-paper-700 dark:text-carbon-300 cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-paper-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-paper-200 dark:border-carbon-700 bg-paper-100 dark:bg-carbon-800 text-paper-700 dark:text-carbon-300 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border border-paper-200 dark:border-carbon-700 bg-white/95 dark:bg-carbon-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-3 rounded-lg text-sm font-medium text-paper-800 dark:text-carbon-200 hover:bg-paper-100 dark:hover:bg-carbon-800 hover:text-brand-emerald cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-paper-200 dark:border-carbon-800">
                <a
                  href={profileData.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl text-sm font-semibold bg-brand-emerald text-carbon-950 shadow-md cursor-pointer"
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
