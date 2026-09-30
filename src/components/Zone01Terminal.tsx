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
        <div className="space-y-1.5 text-carbon-muted font-mono text-xs sm:text-sm">
          <p className="font-semibold text-emerald-400">
            Quinton Juma — Zone01 Kisumu & Kabarak Telecommunications Shell v2.4
          </p>
          <p className="text-carbon-muted">
            Welcome to the interactive systems terminal. Type <kbd>help</kbd> or click any command chip below to execute routines.
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
          <div className="text-xs sm:text-sm space-y-2 text-carbon-muted font-mono">
            <p className="font-semibold text-carbon-text">// AVAILABLE_SYSTEM_ROUTINES:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              <div><span className="text-emerald-400 font-bold">efpitch</span> : Inspect efpitch.com tournament platform</div>
              <div><span className="text-cyan-400 font-bold">paykit</span> : Unified Go SDK for Kenyan payments</div>
              <div><span className="text-indigo-400 font-bold">judysales</span> : Footwear & apparel M-Pesa store</div>
              <div><span className="text-emerald-300 font-bold">zone01</span> : Zone01 Kisumu 01Edu peer engineering</div>
              <div><span className="text-cyan-300 font-bold">telecom</span> : Kabarak Univ Telecomm Engineering</div>
              <div><span className="text-amber-400 font-bold">stack</span> : View core backend & frontend stacks</div>
              <div><span className="text-emerald-400 font-bold">contact</span> : Direct phone, WhatsApp & email links</div>
              <div><span className="text-carbon-muted font-bold">clear</span> : Clear terminal history buffer</div>
            </div>
          </div>
        );
        break;

      case 'efpitch':
      case 'efpitch.com':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-card border border-carbon-border text-carbon-muted font-mono">
            <div className="flex items-center justify-between text-emerald-400 font-bold">
              <span>🏆 efpitch — Mobile Tournament & Matchmaking</span>
              <a
                href="https://efpitch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs hover:underline text-cyan-400 cursor-pointer"
              >
                <span>efpitch.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-carbon-muted">
              Go 1.22 Clean Architecture backend with Next.js 19 frontend and PostgreSQL. Built with a Real-Time Shift-Forward Match Scheduler resolving player timezone conflicts and recursive backtracking up to 3 depth levels.
            </p>
            <div className="flex flex-wrap gap-1 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-carbon-subtle text-emerald-400 border border-carbon-border">Golang</span>
              <span className="px-2 py-0.5 rounded bg-carbon-subtle text-cyan-400 border border-carbon-border">Clean Arch</span>
              <span className="px-2 py-0.5 rounded bg-carbon-subtle text-indigo-400 border border-carbon-border">Next.js 19</span>
              <span className="px-2 py-0.5 rounded bg-carbon-subtle text-emerald-300 border border-carbon-border">M-Pesa B2C Escrow</span>
            </div>
          </div>
        );
        break;

      case 'paykit':
      case 'paykit-go':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-card border border-carbon-border text-carbon-muted font-mono">
            <div className="flex items-center justify-between text-cyan-400 font-bold">
              <span>💳 paykit-go — Unified African Payment SDK</span>
              <a
                href="https://github.com/quinton-8/paykit-go"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs hover:underline text-emerald-400 cursor-pointer"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-carbon-muted">
              Developer-first Go SDK unifying M-Pesa Daraja, Airtel Money, Pesapal, and Flutterwave under a single idiomatic interface. Features automatic OAuth token caching, exponential retries, and cryptographic webhook verification.
            </p>
          </div>
        );
        break;

      case 'judysales':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-card border border-carbon-border text-carbon-muted font-mono">
            <div className="flex items-center justify-between text-indigo-400 font-bold">
              <span>👟 JudySales — Apparel E-Commerce & STK Push</span>
              <a
                href="https://github.com/quinton-8/judysales"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs hover:underline text-cyan-400 cursor-pointer"
              >
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-carbon-muted">
              Go Chi REST API with pgx/v5 and Next.js 14 App Router. Includes dynamic variant inventory matrices and automated Safaricom M-Pesa STK Push with built-in zero-config local simulation.
            </p>
          </div>
        );
        break;

      case 'zone01':
      case 'zone01kisumu':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-card border border-carbon-border text-carbon-muted font-mono">
            <p className="font-semibold text-emerald-400">Zone01 Kisumu — 01Talent Peer Pedagogy</p>
            <p className="text-carbon-muted">
              Teacherless, collaborative software engineering hub. Projects built under strict time bounds from first principles: raw TCP servers in Go, custom routing engines, graph pathfinding algorithms, and concurrent web applications.
            </p>
            <p className="text-carbon-muted text-xs">
              Focus: High-concurrency systems, peer review discipline, autonomous problem solving.
            </p>
          </div>
        );
        break;

      case 'telecom':
      case 'kabarak':
      case 'education':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-card border border-carbon-border text-carbon-muted font-mono">
            <p className="font-semibold text-cyan-400">Kabarak University — Telecommunications Engineering</p>
            <p className="text-carbon-muted">
              Graduated with a degree in Telecommunications Engineering. Grounded in OSI networking models, TCP/IP protocol internals, signal processing, and low-level embedded hardware-to-cloud communications.
            </p>
          </div>
        );
        break;

      case 'stack':
      case 'skills':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2 p-3 rounded-lg bg-carbon-card border border-carbon-border text-carbon-muted font-mono">
            <p className="font-semibold text-emerald-400">Core Tech Arsenal:</p>
            <ul className="list-disc pl-4 space-y-1 text-carbon-muted">
              <li><strong className="text-carbon-text">Languages:</strong> Go (Golang), TypeScript, JavaScript (ES6+), Python, SQL, Bash.</li>
              <li><strong className="text-carbon-text">Backend Systems:</strong> Clean Architecture, Goroutines & Channels, TCP Sockets, WebSockets, Chi, M-Pesa Daraja APIs.</li>
              <li><strong className="text-carbon-text">Frontend:</strong> Next.js (App Router), React 18/19, Tailwind CSS, Zustand.</li>
              <li><strong className="text-carbon-text">Data & Infrastructure:</strong> PostgreSQL 16 (pgxpool), Redis, Docker, Linux/Unix, Git/GitHub.</li>
            </ul>
          </div>
        );
        break;

      case 'contact':
        responseNode = (
          <div className="text-xs sm:text-sm space-y-2.5 p-3 rounded-lg bg-carbon-card border border-carbon-border text-carbon-muted font-mono">
            <p className="font-semibold text-emerald-400">Direct Contact Channels:</p>
            <div className="space-y-1.5 pl-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp:</span>
                <a href={profileData.contacts.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold cursor-pointer">
                  {profileData.contacts.whatsappFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Phone:</span>
                <a href={`tel:${profileData.contacts.phone}`} className="text-cyan-400 hover:underline cursor-pointer">
                  {profileData.contacts.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>Email:</span>
                <a href={`mailto:${profileData.contacts.email}`} className="text-indigo-400 hover:underline cursor-pointer">
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
            Command not recognized: "{cmd}". Type <kbd className="text-carbon-text font-bold">help</kbd> for available routines.
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
    <section id="terminal" className="py-16 md:py-24 border-b border-paper-border dark:border-carbon-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-carbon-muted uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Node</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink dark:text-carbon-text">
            Zone01 Developer Terminal
          </h2>
          <p className="text-sm sm:text-base text-ink-muted dark:text-carbon-muted max-w-xl">
            Inspect Quinton's system architectures, production platforms, and telecommunications background via interactive CLI.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="border border-paper-border dark:border-carbon-border bg-carbon-bg rounded-2xl shadow-lift overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-carbon-card border-b border-carbon-border">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs text-carbon-muted font-mono hidden sm:inline">quinton@zone01-node:~ (bash)</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-carbon-muted font-mono">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>TERMINAL // CLI</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-4 bg-carbon-bg">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono">
                  <span className="text-emerald-400 font-bold">quinton@zone01:~$</span>
                  <span className="text-carbon-text">{item.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-carbon-border">
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
            className="flex items-center px-4 py-3 bg-carbon-card border-t border-carbon-border"
          >
            <span className="text-emerald-400 font-bold text-xs sm:text-sm font-mono mr-2">
              quinton@zone01:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              aria-label="Terminal command input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'efpitch', 'stack', 'contact')..."
              className="flex-1 bg-transparent border-none text-xs sm:text-sm font-mono text-carbon-text focus:outline-none placeholder-carbon-muted"
            />
            <button
              type="submit"
              aria-label="Execute terminal command"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-carbon-subtle hover:bg-carbon-border text-carbon-muted hover:text-emerald-400 transition-colors cursor-pointer"
              title="Run command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

          {/* Quick-Click Command Chips */}
          <div className="px-4 py-3 bg-carbon-bg border-t border-carbon-border flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
            <span className="text-carbon-muted whitespace-nowrap uppercase tracking-wider">Quick Commands:</span>
            {commandChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => executeCommand(chip)}
                className="px-2.5 py-1 rounded bg-carbon-card hover:bg-carbon-subtle hover:text-emerald-400 text-carbon-muted border border-carbon-border whitespace-nowrap transition-colors cursor-pointer"
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
