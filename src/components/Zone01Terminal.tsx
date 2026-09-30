import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, ExternalLink, Phone, Mail, MessageSquare } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const Zone01Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-carbon-300 font-mono text-xs sm:text-sm">
          <p className="font-semibold text-brand-emerald">
            Quinton Juma — Zone01 Kisumu & Kabarak Telecommunications Shell v2.4
          </p>
          <p className="text-carbon-400">
            Welcome to the interactive systems terminal. Type <kbd className="px-1.5 py-0.5 rounded bg-carbon-800 text-carbon-100 text-[11px] font-semibold border border-carbon-700">help</kbd> or click any command chip below to execute routines.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let responseNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 text-carbon-300 font-mono">
            <p className="font-semibold text-carbon-100">// AVAILABLE_SYSTEM_ROUTINES:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              <div><span className="text-brand-emerald font-bold">efpitch</span> : Inspect efpitch.com tournament platform</div>
              <div><span className="text-brand-cyan font-bold">paykit</span> : Unified Go SDK for Kenyan payments</div>
              <div><span className="text-brand-indigo font-bold">judysales</span> : Footwear & apparel M-Pesa store</div>
              <div><span className="text-emerald-400 font-bold">zone01</span> : Zone01 Kisumu 01Edu peer engineering</div>
              <div><span className="text-cyan-400 font-bold">telecom</span> : Kabarak Univ Telecomm Engineering</div>
              <div><span className="text-brand-amber font-bold">stack</span> : View core backend & frontend stacks</div>
              <div><span className="text-brand-emerald font-bold">contact</span> : Direct phone, WhatsApp & email links</div>
              <div><span className="text-carbon-400 font-bold">clear</span> : Clear terminal history buffer</div>
            </div>
          </div>
        );
        break;

      case 'efpitch':
      case 'efpitch.com':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 font-mono">
            <div className="flex items-center justify-between text-brand-emerald font-bold">
              <span>🏆 efpitch — Mobile Tournament & Matchmaking</span>
              <a
                href="https://efpitch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs hover:underline text-brand-cyan cursor-pointer"
              >
                <span>efpitch.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-carbon-400">
              Go 1.22 Clean Architecture backend with Next.js 19 frontend and PostgreSQL. Built with a Real-Time Shift-Forward Match Scheduler resolving player timezone conflicts and recursive backtracking up to 3 depth levels.
            </p>
            <div className="flex flex-wrap gap-1 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-carbon-800 text-brand-emerald border border-carbon-700">Golang</span>
              <span className="px-2 py-0.5 rounded bg-carbon-800 text-brand-cyan border border-carbon-700">Clean Arch</span>
              <span className="px-2 py-0.5 rounded bg-carbon-800 text-brand-indigo border border-carbon-700">Next.js 19</span>
              <span className="px-2 py-0.5 rounded bg-carbon-800 text-emerald-400 border border-carbon-700">M-Pesa B2C Escrow</span>
            </div>
          </div>
        );
        break;

      case 'paykit':
      case 'paykit-go':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 font-mono">
            <div className="flex items-center justify-between text-brand-cyan font-bold">
              <span>💳 paykit-go — Unified African Payment SDK</span>
              <a
                href="https://github.com/quinton-8/paykit-go"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs hover:underline text-brand-emerald cursor-pointer"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-carbon-400">
              Developer-first Go SDK unifying M-Pesa Daraja, Airtel Money, Pesapal, and Flutterwave under a single idiomatic interface. Features automatic OAuth token caching, exponential retries, and cryptographic webhook verification.
            </p>
          </div>
        );
        break;

      case 'judysales':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 font-mono">
            <div className="flex items-center justify-between text-brand-indigo font-bold">
              <span>👟 JudySales — Apparel E-Commerce & STK Push</span>
              <a
                href="https://github.com/quinton-8/judysales"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs hover:underline text-brand-cyan cursor-pointer"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-carbon-400">
              Go Chi REST API with pgx/v5 and Next.js 14 App Router. Includes dynamic variant inventory matrices and automated Safaricom M-Pesa STK Push with built-in zero-config local simulation.
            </p>
          </div>
        );
        break;

      case 'zone01':
      case 'zone01kisumu':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 font-mono">
            <p className="font-semibold text-brand-emerald">Zone01 Kisumu — 01Talent Peer Pedagogy</p>
            <p className="text-carbon-400">
              Teacherless, collaborative software engineering hub. Projects built under strict time bounds from first principles: raw TCP servers in Go, custom routing engines, graph pathfinding algorithms, and concurrent web applications.
            </p>
            <p className="text-carbon-400 text-xs">
              Focus: High-concurrency systems, peer review discipline, autonomous problem solving.
            </p>
          </div>
        );
        break;

      case 'telecom':
      case 'kabarak':
      case 'education':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 font-mono">
            <p className="font-semibold text-cyan-400">Kabarak University — Telecommunications Engineering</p>
            <p className="text-carbon-400">
              Graduated with a degree in Telecommunications Engineering. Grounded in OSI networking models, TCP/IP protocol internals, signal processing, and low-level embedded hardware-to-cloud communications.
            </p>
          </div>
        );
        break;

      case 'stack':
      case 'skills':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 font-mono">
            <p className="font-semibold text-brand-emerald">Core Tech Arsenal:</p>
            <ul className="list-disc pl-4 space-y-1 text-carbon-400">
              <li><strong className="text-carbon-200">Languages:</strong> Go (Golang), TypeScript, JavaScript (ES6+), Python, SQL, Bash.</li>
              <li><strong className="text-carbon-200">Backend Systems:</strong> Clean Architecture, Goroutines & Channels, TCP Sockets, WebSockets, Chi, M-Pesa Daraja APIs.</li>
              <li><strong className="text-carbon-200">Frontend:</strong> Next.js (App Router), React 18/19, Tailwind CSS, Zustand.</li>
              <li><strong className="text-carbon-200">Data & Infrastructure:</strong> PostgreSQL 16 (pgxpool), Redis, Docker, Linux/Unix, Git/GitHub.</li>
            </ul>
          </div>
        );
        break;

      case 'contact':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2.5 p-3 rounded-lg bg-carbon-900 border border-carbon-800 text-carbon-300 font-mono">
            <p className="font-semibold text-brand-emerald">Direct Contact Channels:</p>
            <div className="space-y-1.5 pl-2">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-brand-emerald" />
                <span>WhatsApp:</span>
                <a href={profileData.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-brand-emerald hover:underline font-bold cursor-pointer">
                  {profileData.contacts.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Phone:</span>
                <a href={`tel:${profileData.contacts.phone}`} className="text-brand-cyan hover:underline cursor-pointer">
                  {profileData.contacts.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-indigo" />
                <span>Email:</span>
                <a href={`mailto:${profileData.contacts.email}`} className="text-brand-indigo hover:underline cursor-pointer">
                  {profileData.contacts.email}
                </a>
              </div>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        responseNode = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: "{cmd}". Type <kbd className="text-carbon-200 font-bold">help</kbd> for available routines.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: responseNode }]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const commandChips = ['help', 'efpitch', 'paykit', 'judysales', 'zone01', 'telecom', 'stack', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>[ SHELL // ENVIRONMENT_V2 ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-paper-900 dark:text-carbon-100 font-heading">
            Zone01 Developer Terminal
          </h2>
          <p className="text-sm sm:text-base text-paper-600 dark:text-carbon-400 max-w-xl mx-auto font-mono">
            Inspect Quinton's system architectures, production platforms, and telecommunications background via interactive CLI.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="terminal-window border border-carbon-700 bg-carbon-950 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-carbon-900 border-b border-carbon-800">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs text-carbon-400 font-mono hidden sm:inline">quinton@zone01-node:~ (bash)</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-carbon-400 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
              <span>TERMINAL // EMULATOR</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono">
                  <span className="text-brand-emerald font-bold">quinton@zone01:~$</span>
                  <span className="text-carbon-100">{item.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-carbon-800/80">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Bar */}
          <form
            onSubmit={handleFormSubmit}
            aria-label="Zone01 terminal form"
            className="flex items-center px-4 py-3 bg-carbon-900/90 border-t border-carbon-800"
          >
            <span className="text-brand-emerald font-bold text-xs sm:text-sm font-mono mr-2">
              quinton@zone01:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              aria-label="Terminal command input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'efpitch', 'stack', 'contact')..."
              className="flex-1 bg-transparent border-none text-xs sm:text-sm font-mono text-carbon-100 focus:outline-none placeholder-carbon-600"
            />
            <button
              type="submit"
              aria-label="Execute terminal command"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-carbon-800 hover:bg-carbon-700 text-carbon-300 hover:text-brand-emerald transition-colors cursor-pointer"
              title="Run command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

          {/* Quick-Click Command Chips */}
          <div className="px-4 py-3 bg-carbon-950 border-t border-carbon-850 flex items-center space-x-2 overflow-x-auto text-[11px] font-mono">
            <span className="text-carbon-500 whitespace-nowrap uppercase tracking-wider">Quick Commands:</span>
            {commandChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => executeCommand(chip)}
                className="px-3 py-1.5 rounded bg-carbon-900 hover:bg-carbon-800 hover:text-brand-emerald text-carbon-300 border border-carbon-800 whitespace-nowrap transition-colors cursor-pointer min-h-[32px]"
              >
                {chip}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
