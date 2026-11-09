export const profile = {
  name: "Pritam Mondal",
  role: "Full Stack Engineer",
  /** Cycled in the hero. The first one is what renders before JS runs. */
  roles: ["Full Stack Engineer", "Forward Deployed Engineer", "AI Engineer"],
  tagline:
    "I build typed, production-ready web apps and AI agents, from the React frontend down to queues, databases and observability.",
  email: "codewithpritam29@gmail.com",
  /** Shown next to the role. Remote teams filter on this first. */
  timezone: "India · IST (UTC+5:30) · Flexible hours, any timezone",
  /** Hero badge. Empty string hides it. */
  availability: "Open to work · Remote or onsite · Open to relocation",
  /** Drop the file in /public and set this (e.g. "/pritam-mondal-cv.pdf"). Hidden while empty. */
  resume: "",
  socials: {
    github: "https://github.com/pritamscodee",
    linkedin: "https://www.linkedin.com/in/pritam-mondal-3aa402381/",
    x: "https://x.com/pritam1010110",
  },
} as const;

export type StackGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    title: "Languages",
    blurb: "Typed end to end.",
    items: ["TypeScript", "Python"],
  },
  {
    title: "Frontend",
    blurb: "Fast, server-first React UIs.",
    items: ["Next.js", "React", "Zustand", "TanStack Query"],
  },
  {
    title: "Backend & APIs",
    blurb: "Services in Node and Python.",
    items: ["Express.js", "FastAPI", "REST API", "GraphQL"],
  },
  {
    title: "AI & Agents",
    blurb: "LLM apps with retrieval and evals built in.",
    items: ["Vercel AI SDK", "Mastra", "OpenAI SDK", "Pinecone (Vector DB)", "Evals", "Reranker"],
  },
  {
    title: "Databases",
    blurb: "Relational, graph, cache and realtime.",
    items: ["PostgreSQL", "Redis", "Neo4j", "Convex"],
  },
  {
    title: "Queues & Background Jobs",
    blurb: "Durable workflows and messaging.",
    items: ["RabbitMQ", "Inngest", "Trigger.dev"],
  },
  {
    title: "Auth, Cloud & DevOps",
    blurb: "Shipping and securing it.",
    items: ["Better Auth", "Cloudflare", "AWS", "Git"],
  },
  {
    title: "Observability",
    blurb: "Knowing what production is doing.",
    items: ["Sentry", "OpenTelemetry"],
  },
];

export type Experience = {
  role: string;
  company: string;
  url?: string;
  location?: string;
  start: string;
  end: string;
  /** What you owned and what it changed. Lead with the verb, end with the effect. */
  highlights?: string[];
  /** Tech used in the role, rendered as chips. */
  stack?: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack AI Engineer",
    company: "NextLevr",
    location: "Remote",
    start: "2025",
    end: "2026",
    highlights: [
      "Designed the PostgreSQL schema and the Prisma data layer behind new product features — models, relations and migrations — then built the backend endpoints that read and wrote them.",
      "Shipped features end to end, owning client-side state on the React front end so what loaded, cached and refreshed stayed consistent as the data model grew.",
      "Reviewed teammates’ pull requests in an existing codebase, keeping schema changes, types and state handling consistent across the team.",
    ],
    stack: ["TypeScript", "Next.js", "React", "Prisma", "PostgreSQL"],
  },
  {
    role: "Community Manager",
    company: "ByteToLogic",
    url: "https://bytetologic.com/",
    start: "2025",
    end: "Present",
  },
];

export type Project = {
  title: string;
  /** One line a recruiter can skim. */
  tagline: string;
  description: string;
  /** 4-6 things that were actually hard or interesting to build. */
  features: string[];
  stack: string[];
  year?: string;
  /** Matches a mock in ProjectPreview; falls back to a generic frame. */
  preview: "zencom" | "ringlet" | "orbix";
  /** Optional screenshot in /public; replaces the generated mock when set. */
  image?: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Zencom",
    tagline: "An AI support agent that answers from your own documents — and knows when to hand over.",
    description:
      "A multi-tenant support platform: an embeddable website messenger answers customers from the company’s own docs with citations, takes action through tools, and passes the conversation to a human the moment its confidence drops.",
    features: [
      "Agentic loop instead of a chatbot: plan → hybrid multi-query RAG + reranker → up to six tool turns → verify.",
      "Guardrails on both ends — moderation and PII redaction in, citation and confidence checks out.",
      "Tools for live HubSpot lookups, opening a ticket with a proposed resolution, and escalating to a human.",
      "Shared inbox over Socket.IO where AI and human replies live in one thread, with Slack and Linear hand-offs.",
      "Multi-tenant SaaS with plan-based limits on seats, AI replies and documents, billed through Razorpay.",
      "Knowledge-base files stored on Cloudflare R2, with a local-disk fallback for development.",
      "Every reply traced and scored in Langfuse, plus an offline eval suite that blocks regressions in CI.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "GSAP",
      "Bun",
      "Express.js",
      "Socket.IO",
      "Better Auth",
      "PostgreSQL",
      "Neon",
      "Prisma",
      "OpenAI SDK",
      "Pinecone",
      "Trigger.dev",
      "Cloudflare R2",
      "Resend",
      "Razorpay",
      "Langfuse",
      "HubSpot",
      "Slack",
      "Linear",
    ],
    year: "2026",
    preview: "zencom",
    image: "/previews/zencom.png",
    href: "https://frontend-pi-six-p4ny06tzkb.vercel.app",
    repo: "https://github.com/pritamscodee/zencom",
  },
  {
    title: "Ringlet",
    tagline: "Real-time AI voice agents your callers can interrupt.",
    description:
      "Receptionist, sales and support voice agents that own the whole speech loop — streaming speech-to-text, turn-taking and streamed text-to-speech — so the agent starts talking on its first sentence and the caller can talk straight over it.",
    features: [
      "Barge-in: browser VAD stops playback, aborts the in-flight LLM and every pending TTS call, and records the partial reply as interrupted.",
      "Gapless speech by scheduling PCM chunks on the Web Audio clock, still stoppable in a single frame.",
      "Deepgram credentials never reach the browser — 60-second scoped tokens plus a signed call ticket for the hot TTS route.",
      "Multi-tenant workspaces with role-based access, agent CRUD and a live in-browser test call.",
      "Turn-by-turn transcripts with captured leads and bookings, plus per-workspace usage analytics."
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "TanStack Query",
      "Neon",
      "PostgreSQL",
      "Better Auth",
      "Mastra",
      "Deepgram STT",
      "Deepgram TTS",
      "Silero VAD",
      "Web Audio API",
      "Sentry",
      "Bun",
    ],
    year: "2026",
    preview: "ringlet",
    image: "/previews/ringlet.png",
    href: "https://ringlet-one.vercel.app",
    repo: "https://github.com/pritamscodee/ringlet",
  },
  {
    title: "Orbix",
    tagline: "AI teammates with their own cloud computer — give them a job and watch them work.",
    description:
      "Create a bot with a name, a job and instructions, and it gets its own E2B cloud sandbox with a full Linux desktop. It works through shell, file and mouse/keyboard tools while you watch the screen live in a side panel.",
    features: [
      "Every bot owns an E2B desktop sandbox it drives with bash, file, mouse, keyboard and screenshot tools.",
      "Live noVNC desktop panel that never reloads — one fixed container tracks the resizable panel and the fullscreen dialog per frame.",
      "Group chats with a handoff tool that swaps instructions, tool context and active tools mid-turn.",
      "A per-bot MEMORY.md inside the sandbox, shared across chats and injected into every turn.",
      "Durable chat runs on Trigger.dev, with transcripts stored and replayed outside the app database.",
      "Careful sandbox lifecycle: rollback on failed creation, auto-resume from pause and rolling timeouts.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "AI SDK",
      "OpenAI SDK",
      "E2B Sandbox",
      "Trigger.dev",
      "Drizzle",
      "PostgreSQL",
      "Neon",
      "Clerk",
      "Zod",
      "Sentry",
    ],
    year: "2026",
    preview: "orbix",
    image: "/previews/orbix.png",
    href: "https://orbix-two.vercel.app",
    repo: "https://github.com/pritamscodee/Orbix",
  },
];

export type OtherWork = {
  title: string;
  blurb: string;
  stack: string[];
  /** Screenshot of the live site, in /public/previews. */
  image?: string;
  href?: string;
  repo?: string;
};

/** Smaller builds and experiments, shown as a compact grid under the main projects. */
export const otherWork: OtherWork[] = [
  {
    title: "Meo",
    blurb:
      "A memory layer for agents: a Redis short-term ring, a Neo4j knowledge graph and a sliding context window, with every recall shown as a visible seven-stage trace instead of a black box.",
    stack: ["Next.js", "TypeScript", "Redis", "Neo4j"],
    image: "/previews/meo.png",
    href: "https://meo-six-liard.vercel.app",
  },
  {
    title: "DeckAI",
    blurb:
      "Type a topic and get a 6–10 slide deck in about two minutes — planned, written and illustrated by an LLM, with every word editable, a full-screen presenter and PDF export.",
    stack: ["Next.js", "AI SDK", "Trigger.dev", "Prisma", "PostgreSQL", "Better Auth", "Razorpay"],
    image: "/previews/deckai.png",
    href: "https://www.deckai.site",
    repo: "https://github.com/pritamscodee/deckai",
  },
  {
    title: "Formly",
    blurb:
      "A conversational form builder: 14 drag-and-drop field types, one question per step, live response analytics and QR-coded distribution channels you can filter results by.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Zustand"],
    image: "/previews/formly.png",
    href: "https://formly-l.vercel.app",
    repo: "https://github.com/pritamscodee/formly",
  },
  {
    title: "PeerVote CLI",
    blurb:
      "Anonymous yes/no elections from the terminal on the Midnight blockchain. Every ballot is a zero-knowledge proof and the only public trace is a one-way nullifier, so votes stay secret while the tally stays auditable.",
    stack: ["TypeScript", "Midnight", "Compact", "Node.js"],
    image: "/previews/peervote-ascii.png",
    href: "https://peervotecli.vercel.app",
    repo: "https://github.com/pritamscodee/peervotecli",
  },
  {
    title: "PUNCH",
    blurb:
      "A time clock for habits, bonded in SKR. Punch in once per shift; miss one and your penalty goes straight to the people who showed up. Built for the Solana Mobile CLOCK IN hackathon — no custom program, the whole pact history lives in SPL Memo records on a clock PDA.",
    stack: [
      "TypeScript",
      "React Native",
      "Expo",
      "Solana",
      "Rust",
      "PostgreSQL",
      "Neon",
    ],
    image: "/previews/punch-cover.png",
    href: "https://github.com/pritamscodee/punch/releases/latest",
    repo: "https://github.com/pritamscodee/punch",
  },
  {
    title: "Finapple",
    blurb:
      "A personal finance platform with a categorised wallet, self-tracking budgets and savings goals, plus AI that reads uploaded bank statements and invoices so they do not pile up unread.",
    stack: ["NestJS", "React", "Drizzle", "PostgreSQL", "Mistral AI", "Cloudinary"],
    image: "/previews/finapple.png",
    href: "https://finnappl.netlify.app",
    repo: "https://github.com/pritamscodee/Finapple",
  },
];
