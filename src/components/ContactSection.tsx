import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { MessageSquare, Phone, Mail, Github, Linkedin, Copy, Check, Send, Sparkles, ArrowRight } from 'lucide-react';
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
      particleCount: 50,
      spread: 70,
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
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-brand-emerald/10 dark:bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-paper-900 dark:text-carbon-100 font-mono">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-paper-600 dark:text-carbon-400 max-w-xl mx-auto">
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
              className="p-5 rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 hover:border-brand-emerald dark:hover:border-brand-emerald flex items-center justify-between group transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-brand-emerald/10 text-brand-emerald group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-paper-500 dark:text-carbon-400">Direct WhatsApp</div>
                  <div className="text-base font-bold font-mono text-paper-900 dark:text-carbon-100 group-hover:text-brand-emerald transition-colors">
                    {profileData.contacts.whatsappFormatted}
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">Instant Chat • Typically replies fast</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-paper-400 dark:text-carbon-500 group-hover:text-brand-emerald group-hover:translate-x-1 transition-all" />
            </a>

            {/* Direct Phone Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 flex items-center justify-between group transition-all shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-paper-500 dark:text-carbon-400">Direct Phone</div>
                  <a
                    href={`tel:${profileData.contacts.phone}`}
                    className="text-base font-bold font-mono text-paper-900 dark:text-carbon-100 hover:text-brand-cyan transition-colors"
                  >
                    {profileData.contacts.phoneFormatted}
                  </a>
                  <div className="text-[11px] text-paper-500 dark:text-carbon-400 font-mono">Voice & SMS</div>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-paper-100 dark:bg-carbon-800 text-paper-600 dark:text-carbon-400 hover:text-brand-cyan transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 flex items-center justify-between group transition-all shadow-sm">
              <div className="flex items-center space-x-4 overflow-hidden">
                <div className="p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-paper-500 dark:text-carbon-400">Direct Email</div>
                  <a
                    href={`mailto:${profileData.contacts.email}`}
                    className="text-sm sm:text-base font-bold font-mono text-paper-900 dark:text-carbon-100 hover:text-brand-indigo transition-colors truncate block"
                  >
                    {profileData.contacts.email}
                  </a>
                  <div className="text-[11px] text-paper-500 dark:text-carbon-400 font-mono">Click to mail</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-paper-100 dark:bg-carbon-800 text-paper-600 dark:text-carbon-400 hover:text-brand-indigo transition-colors shrink-0"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub & LinkedIn Social Split */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profileData.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 hover:border-brand-emerald transition-colors flex items-center space-x-3 group"
              >
                <Github className="w-5 h-5 text-paper-800 dark:text-carbon-200 group-hover:text-brand-emerald" />
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-paper-500 dark:text-carbon-400">GitHub</div>
                  <div className="text-xs font-bold font-mono text-paper-800 dark:text-carbon-200 truncate">
                    @quinton-8
                  </div>
                </div>
              </a>

              <a
                href={profileData.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 hover:border-brand-cyan transition-colors flex items-center space-x-3 group"
              >
                <Linkedin className="w-5 h-5 text-paper-800 dark:text-carbon-200 group-hover:text-brand-cyan" />
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-paper-500 dark:text-carbon-400">LinkedIn</div>
                  <div className="text-xs font-bold font-mono text-paper-800 dark:text-carbon-200 truncate">
                    quinton-juma
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Quick Message Generator */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-carbon-850 border border-paper-200 dark:border-carbon-800 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold font-mono text-paper-900 dark:text-carbon-100">
                  Quick Message Composer
                </h3>
                <p className="text-xs sm:text-sm text-paper-600 dark:text-carbon-400 mt-1">
                  Draft a message and send it directly via WhatsApp or your preferred email client.
                </p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-paper-700 dark:text-carbon-300 mb-1.5">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah from TechCorp / Collaborator"
                    className="w-full px-4 py-2.5 rounded-xl bg-paper-50 dark:bg-carbon-900 border border-paper-200 dark:border-carbon-700 text-xs sm:text-sm text-paper-900 dark:text-carbon-100 placeholder-paper-400 dark:placeholder-carbon-600 focus:outline-none focus:border-brand-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-paper-700 dark:text-carbon-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. Full-time Go Engineer Role / Project Consultation"
                    className="w-full px-4 py-2.5 rounded-xl bg-paper-50 dark:bg-carbon-900 border border-paper-200 dark:border-carbon-700 text-xs sm:text-sm text-paper-900 dark:text-carbon-100 placeholder-paper-400 dark:placeholder-carbon-600 focus:outline-none focus:border-brand-emerald"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-paper-700 dark:text-carbon-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Tell Quinton about the opportunity, requirements, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-paper-50 dark:bg-carbon-900 border border-paper-200 dark:border-carbon-700 text-xs sm:text-sm text-paper-900 dark:text-carbon-100 placeholder-paper-400 dark:placeholder-carbon-600 focus:outline-none focus:border-brand-emerald"
                  />
                </div>

                {/* Send Buttons Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-brand-emerald hover:bg-emerald-400 text-carbon-950 shadow-md shadow-brand-emerald/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-medium bg-paper-100 dark:bg-carbon-800 hover:bg-paper-200 dark:hover:bg-carbon-700 text-paper-800 dark:text-carbon-100 border border-paper-300 dark:border-carbon-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-brand-indigo" />
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
