import { DeveloperProfile, Project, Experience, SkillCategory } from '../types/portfolio';

export const profileData: DeveloperProfile = {
  name: "Quinton Juma",
  roleTitle: "Full-Stack Software Engineer & Systems Architect",
  tagline: "Building high-throughput Go systems, modern Next.js interfaces, and resilient FinTech integrations from first principles.",
  bioParagraphs: [
    "I am a software engineer driven by architecting robust, scalable systems and intuitive digital products. Grounded in a rigorous foundation in Telecommunications Engineering from Kabarak University and hardened through peer-to-peer systems programming at Zone01 Kisumu, I operate at the intersection of low-level networking, high-concurrency backend services, and polished modern frontends.",
    "At Zone01 Kisumu, I engineer complex software under an intensive self-directed pedagogy that emphasizes algorithmic mastery, concurrency in Go, and building distributed systems from first principles without relying on bloated abstractions.",
    "From engineering live competitive tournament engines with recursive conflict-free match scheduling at efpitch.com, to building the unified paykit-go financial SDK and automated M-Pesa STK Push e-commerce backends in JudySales, I focus on clean architecture, deterministic state, and rock-solid reliability."
  ],
  location: "Kisumu / Nairobi, Kenya",
  contacts: {
    email: "jumazquinton.jq@gmail.com",
    phone: "0798621270",
    phoneFormatted: "+254 798 621 270",
    whatsapp: "0733425673",
    whatsappFormatted: "+254 733 425 673",
    whatsappUrl: "https://wa.me/254733425673?text=Hello%20Quinton,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
    github: "https://github.com/quinton-8",
    githubUsername: "quinton-8",
    linkedin: "https://www.linkedin.com/in/quinton-juma",
  },
  avatarUrl: "https://avatars.githubusercontent.com/u/211494205?v=4",
  statusText: "Open to Full-Time Roles & High-Impact Engineering Projects",
  openToRoles: [
    "Full-Stack Software Engineer",
    "Backend / Systems Engineer (Go)",
    "Distributed Systems Developer",
    "Solutions Architect & FinTech Developer"
  ],
  stats: [
    { label: "Public Repositories", value: "29+", sublabel: "GitHub Active" },
    { label: "Core Runtime", value: "Go & Next.js", sublabel: "Clean Architecture" },
    { label: "Focus Areas", value: "FinTech & Real-Time", sublabel: "Distributed Sockets" },
    { label: "Engineering Ethos", value: "01Edu Peer Model", sublabel: "Autonomous Problem Solving" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "efpitch",
    title: "efpitch",
    subtitle: "eFootball Mobile Tournament & Matchmaking Platform",
    description: "A production-grade, full-stack tournament management, matchmaking, and peer-to-peer competition platform designed specifically for mobile eFootball players. Features an automated time-slot allocation engine, bracket templates, and M-Pesa B2C escrow prize disbursements.",
    architectureDetails: [
      "Engineered backend services in Go 1.22+ using Clean Architecture (domain, repository, usecase, delivery/http).",
      "Built a Real-Time Shift-Forward Match Scheduler resolving slot conflicts against regional player timezones, active matches, and circuit-breaker recursive reshuffling up to 3 depth levels.",
      "Architected multi-format tournament templates: Single Elimination Knockouts, Round-Robin (Circle Method algorithm), and Swiss-System hybrid fixtures.",
      "Integrated regulatory-compliant Kenyan M-Pesa B2C prize distribution workflows and dynamic 0.0 - 10.0 player trust ratings."
    ],
    tags: ["Go", "Next.js", "Clean Architecture", "PostgreSQL", "Zustand", "Tailwind CSS", "M-Pesa B2C", "Algorithms"],
    category: "Full-Stack",
    liveUrl: "https://efpitch.com",
    githubUrl: "https://github.com/quinton-8/efpitch",
    featured: true,
    metrics: [
      { label: "Deployment", value: "efpitch.com" },
      { label: "Architecture", value: "Clean Domain" },
      { label: "Scheduling", value: "Conflict-Free" }
    ],
    accentColor: "emerald"
  },
  {
    id: "paykit-go",
    title: "paykit-go",
    subtitle: "Unified Go SDK for Kenyan Payment Providers",
    description: "A robust, developer-first Go software development kit unifying multiple African payment gateways under a single, idiomatic, typed interface. Drastically simplifies integrating Safaricom M-Pesa Daraja, Airtel Money, Pesapal, and Flutterwave.",
    architectureDetails: [
      "Architected clean abstraction interfaces allowing developers to swap payment providers with zero business logic changes.",
      "Built automated OAuth token lifecycle management with in-memory caching and proactive renewal.",
      "Implemented standardized cryptographic signature verification for webhook and callback payloads.",
      "Designed resilient retry strategies with exponential backoff and structured error types."
    ],
    tags: ["Go", "SDK Design", "FinTech", "M-Pesa Daraja", "Airtel Money", "Pesapal", "Webhooks"],
    category: "FinTech / SDK",
    githubUrl: "https://github.com/quinton-8/paykit-go",
    featured: true,
    metrics: [
      { label: "Gateways", value: "Multi-Provider" },
      { label: "Language", value: "Golang" },
      { label: "Standard", value: "Unified API" }
    ],
    accentColor: "cyan"
  },
  {
    id: "judysales",
    title: "JudySales",
    subtitle: "Footwear & Apparel E-Commerce Platform with M-Pesa STK Push",
    description: "A production-grade, full-stack apparel and footwear e-commerce system featuring a high-performance Go backend (Chi, PostgreSQL 16, pgx/v5) and Next.js 14 frontend with instant Safaricom M-Pesa Express checkout.",
    architectureDetails: [
      "Engineered high-performance REST APIs in Go using Chi router and pgxpool connection pooling.",
      "Integrated Safaricom M-Pesa Express (STK Push) with asynchronous webhook processing and zero-config local development simulation.",
      "Designed dynamic variant management supporting multi-attribute SKUs (sizes EU 38-46, colors, clothing sizes) with atomic transactional stock reservations in PostgreSQL.",
      "Created persistent guest cart sessions using lightweight token headers (X-Session-ID) and responsive Next.js 14 App Router UI."
    ],
    tags: ["Go", "Chi", "PostgreSQL 16", "Next.js 14", "Tailwind CSS", "M-Pesa STK", "Docker", "pgx/v5"],
    category: "Full-Stack",
    githubUrl: "https://github.com/quinton-8/judysales",
    featured: true,
    metrics: [
      { label: "Backend", value: "Go / Chi" },
      { label: "Payment", value: "STK Push" },
      { label: "Database", value: "Postgres 16" }
    ],
    accentColor: "indigo"
  },
  {
    id: "netcat-tcp-server",
    title: "Net-Cat Concurrent TCP Server",
    subtitle: "High-Concurrency Socket-Level Group Chat Architecture",
    description: "A concurrent TCP chat server that mirrors and enhances standard Netcat network functionality. Built entirely from scratch in pure Go without external dependencies, handling synchronized broadcasts, join/leave state transitions, and connection limits.",
    architectureDetails: [
      "Leveraged Goroutines and Go channels for thread-safe concurrent connection multiplexing.",
      "Implemented mutex synchronization to eliminate race conditions across shared memory buffers.",
      "Designed dynamic ASCII terminal splash banners, connection caps (max 10 concurrent clients), and graceful teardown on interrupt.",
      "Direct socket programming with zero third-party dependencies."
    ],
    tags: ["Go", "TCP Sockets", "Goroutines", "Concurrency", "Linux / CLI", "Distributed Systems"],
    category: "Go Systems",
    githubUrl: "https://github.com/quinton-8",
    featured: false,
    metrics: [
      { label: "Protocol", value: "Raw TCP" },
      { label: "Concurrency", value: "Channels & Mutex" },
      { label: "Dependencies", value: "Zero (Stdlib)" }
    ],
    accentColor: "emerald"
  },
  {
    id: "lem-in-graph-flow",
    title: "Lem-in Network Flow Optimizer",
    subtitle: "Multi-Path Graph Traversal & Maximum Flow Algorithm",
    description: "A high-performance algorithmic simulation in Go that calculates optimal disjoint paths through complex graph networks (ant colonies). Maximizes throughput and minimizes turns required to transport thousands of units across bottlenecked rooms.",
    architectureDetails: [
      "Engineered breadth-first search (BFS) and Edmonds-Karp variations for multi-path network flow.",
      "Optimized graph parsing with comprehensive cycle detection and invalid room-node handling.",
      "Implemented mathematical scheduling heuristics to prevent collisions and route saturation.",
      "Sub-millisecond execution times on large synthetic room configurations."
    ],
    tags: ["Go", "Graph Theory", "Algorithms", "Network Flow", "Data Structures"],
    category: "Go Systems",
    githubUrl: "https://github.com/quinton-8",
    featured: false,
    metrics: [
      { label: "Algorithm", value: "Edmonds-Karp / BFS" },
      { label: "Flow Optimization", value: "Disjoint Paths" }
    ],
    accentColor: "cyan"
  }
];

export const experiencesData: Experience[] = [
  {
    id: "zone01-kisumu",
    role: "Software Developer & Fellow",
    organization: "Zone01 Kisumu",
    period: "2024 — Present",
    location: "Kisumu, Kenya",
    description: "Part of the intensive 01Edu/01Talent peer-to-peer software engineering collective. Focused on autonomous problem-solving, deep systems programming, algorithmic rigor, and collaborative production-grade software delivery.",
    bulletPoints: [
      "Built high-concurrency systems, network services, and web applications using Go, Next.js, and TypeScript.",
      "Practiced continuous peer-to-peer code reviews, pair-programming, and collective codebase audits.",
      "Engineered full-stack solutions from first principles, designing custom routing, socket communication, and database architectures.",
      "Spearheaded production architecture for efpitch.com and financial tooling (paykit-go)."
    ],
    tags: ["Go", "TypeScript", "Docker", "Systems Programming", "WebSockets", "Peer Pedagogy"],
    type: "engineering",
    badge: "Current Affiliation"
  },
  {
    id: "kabarak-university",
    role: "BSc in Telecommunications Engineering",
    organization: "Kabarak University",
    period: "Graduated",
    location: "Nakuru, Kenya",
    description: "Completed comprehensive engineering studies bridging signal processing, telecommunication network protocols, RF systems, and computational foundations with modern software engineering.",
    bulletPoints: [
      "Deep foundational understanding of networking layers (OSI model, TCP/IP stack, cellular protocols, packet switching).",
      "Explored digital signal processing, embedded systems, and hardware-software telemetry communication.",
      "Bridged telecommunications theory with high-performance software networking and distributed systems development."
    ],
    tags: ["Telecommunications", "TCP/IP Protocols", "Signal Processing", "Network Architecture", "Embedded Systems"],
    type: "education",
    badge: "BSc Degree"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used daily for systems, backends, and responsive applications",
    iconName: "Code2",
    skills: [
      { name: "Go (Golang)", category: "Primary Backend", featured: true, level: "Mastery" },
      { name: "TypeScript", category: "Modern Web", featured: true, level: "Advanced" },
      { name: "JavaScript (ES6+)", category: "Web Engineering", featured: true, level: "Advanced" },
      { name: "Python", category: "Scripting / Backend", featured: true, level: "Proficient" },
      { name: "SQL", category: "Relational Queries", featured: true, level: "Advanced" },
      { name: "Bash / Shell", category: "Automation & CLI", featured: false, level: "Proficient" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Architecting resilient services, real-time protocols, and robust APIs",
    iconName: "Server",
    skills: [
      { name: "Clean Architecture", category: "Design Patterns", featured: true, level: "Mastery" },
      { name: "Goroutines & Concurrency", category: "Go Systems", featured: true, level: "Mastery" },
      { name: "RESTful API Design", category: "API Services", featured: true, level: "Mastery" },
      { name: "M-Pesa Daraja APIs", category: "FinTech / STK Push", featured: true, level: "Mastery" },
      { name: "WebSockets & TCP Sockets", category: "Real-Time Protocols", featured: true, level: "Advanced" },
      { name: "JWT Auth & Session Security", category: "Security", featured: false, level: "Advanced" }
    ]
  },
  {
    title: "Frontend & Modern Web",
    description: "Responsive, high-performance interfaces and client state architectures",
    iconName: "Layout",
    skills: [
      { name: "Next.js (App Router)", category: "React Framework", featured: true, level: "Mastery" },
      { name: "React 18 / 19", category: "UI Library", featured: true, level: "Mastery" },
      { name: "Tailwind CSS", category: "Modern Styling", featured: true, level: "Mastery" },
      { name: "Zustand", category: "State Management", featured: true, level: "Advanced" },
      { name: "HTML5 / Semantic Web", category: "Accessibility", featured: false, level: "Mastery" }
    ]
  },
  {
    title: "Databases, DevOps & Telecom",
    description: "Storage, containerization, protocol analysis, and deployments",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL 16 (pgxpool)", category: "RDBMS", featured: true, level: "Mastery" },
      { name: "Docker & Containerization", category: "DevOps", featured: true, level: "Advanced" },
      { name: "Redis", category: "Caching / In-Memory", featured: true, level: "Proficient" },
      { name: "Git & Collaborative GitHub", category: "Version Control", featured: true, level: "Mastery" },
      { name: "Linux / Unix Shell", category: "OS & Server Admin", featured: true, level: "Advanced" },
      { name: "Telecommunication Protocols", category: "Networking / OSI", featured: false, level: "Advanced" }
    ]
  }
];
