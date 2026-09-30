import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { MessageSquare, Phone, Mail, Github, Linkedin, Copy, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contacts.email);
    setCopiedEmail(true);
    triggerCelebration();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.contacts.phone);
    setCopiedPhone(true);
    triggerCelebration();
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10B981', '#06B6D4', '#6366F1'],
    });
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = senderName ? `Hello Quinton, my name is ${senderName}. ` : 'Hello Quinton! ';
    const subject = senderSubject ? `Regarding: ${senderSubject}\n\n` : '';
    const body = senderMessage || 'I would like to discuss an engineering opportunity or project with you.';
    const fullText = encodeURIComponent(`${greeting}\n\n${subject}${body}`);
    triggerCelebration();
    window.open(`https://wa.me/254733425673?text=${fullText}`, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(senderSubject || `Engineering Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Quinton,\n\n${senderMessage || 'I would love to connect regarding software engineering opportunities.'}\n\nBest regards,\n${senderName || 'Anonymous'}`
    );
    triggerCelebration();
    window.location.href = `mailto:${profileData.contacts.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-paper-border dark:border-carbon-border bg-paper-subtle dark:bg-carbon-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-carbon-muted uppercase tracking-wider">
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-carbon-text">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-ink-muted dark:text-carbon-muted max-w-xl">
            Available for full-time engineering roles, high-concurrency systems contracts, and architectural consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={profileData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="minimal-card p-5 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted">Direct WhatsApp</div>
                  <div className="text-base font-semibold text-ink dark:text-carbon-text group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {profileData.contacts.whatsappFormatted}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Instant Chat • Direct link</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-ink-faint dark:text-carbon-muted group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Direct Phone Card */}
            <div className="minimal-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted">Voice & SMS</div>
                  <a
                    href={`tel:${profileData.contacts.phone}`}
                    className="text-base font-semibold text-ink dark:text-carbon-text hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {profileData.contacts.phoneFormatted}
                  </a>
                  <div className="text-xs text-ink-muted dark:text-carbon-muted">0798621270</div>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-cyan-600 transition-colors cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email Card */}
            <div className="minimal-card p-5 flex items-center justify-between group">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted">Email</div>
                  <a
                    href={`mailto:${profileData.contacts.email}`}
                    className="text-sm sm:text-base font-semibold text-ink dark:text-carbon-text hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block cursor-pointer"
                  >
                    {profileData.contacts.email}
                  </a>
                  <div className="text-xs text-ink-muted dark:text-carbon-muted">Open default mail app</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-paper-border dark:border-carbon-border bg-paper-card dark:bg-carbon-card text-ink-muted dark:text-carbon-muted hover:text-indigo-600 transition-colors shrink-0 cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub & LinkedIn Social Split */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profileData.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-card p-4 flex items-center gap-3 group cursor-pointer"
              >
                <Github className="w-5 h-5 text-ink-muted dark:text-carbon-muted group-hover:text-ink dark:group-hover:text-carbon-text transition-colors" />
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono uppercase text-ink-muted dark:text-carbon-muted font-medium">GitHub</div>
                  <div className="text-xs font-semibold text-ink dark:text-carbon-text truncate">
                    @quinton-8
                  </div>
                </div>
              </a>

              <a
                href={profileData.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-card p-4 flex items-center gap-3 group cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-ink-muted dark:text-carbon-muted group-hover:text-cyan-600 transition-colors" />
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono uppercase text-ink-muted dark:text-carbon-muted font-medium">LinkedIn</div>
                  <div className="text-xs font-semibold text-ink dark:text-carbon-text truncate">
                    quinton-juma
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Quick Message Generator */}
          <div className="lg:col-span-7">
            <div className="minimal-card p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold tracking-tight text-ink dark:text-carbon-text">
                  Direct Dispatch
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted dark:text-carbon-muted mt-1">
                  Draft a message and send it immediately via WhatsApp or your mail client.
                </p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted mb-1.5">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah from TechCorp / Collaborator"
                    className="w-full px-4 py-2.5 rounded-lg bg-paper dark:bg-carbon-bg border border-paper-border dark:border-carbon-border text-xs sm:text-sm text-ink dark:text-carbon-text placeholder-ink-faint dark:placeholder-carbon-muted focus:outline-none focus:border-ink dark:focus:border-carbon-text"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. Full-time Go Engineer Role / Project Consultation"
                    className="w-full px-4 py-2.5 rounded-lg bg-paper dark:bg-carbon-bg border border-paper-border dark:border-carbon-border text-xs sm:text-sm text-ink dark:text-carbon-text placeholder-ink-faint dark:placeholder-carbon-muted focus:outline-none focus:border-ink dark:focus:border-carbon-text"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-carbon-muted mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Tell Quinton about the opportunity, requirements, or timeline..."
                    className="w-full px-4 py-2.5 rounded-lg bg-paper dark:bg-carbon-bg border border-paper-border dark:border-carbon-border text-xs sm:text-sm text-ink dark:text-carbon-text placeholder-ink-faint dark:placeholder-carbon-muted focus:outline-none focus:border-ink dark:focus:border-carbon-text"
                  />
                </div>

                {/* Send Buttons Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="btn-editorial-primary w-full sm:w-auto flex-1"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="btn-editorial-secondary w-full sm:w-auto"
                  >
                    <Mail className="w-4 h-4 text-indigo-500" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
