import type { IconType } from "react-icons";
import { FaAws, FaSlack } from "react-icons/fa";
import {
  SiBetterauth,
  SiBun,
  SiClerk,
  SiCloudflare,
  SiConvex,
  SiDeepgram,
  SiDrizzle,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGraphql,
  SiGreensock,
  SiHubspot,
  SiCloudinary,
  SiLinear,
  SiMistralai,
  SiNeon,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpentelemetry,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiRazorpay,
  SiReact,
  SiRedis,
  SiResend,
  SiRust,
  SiSentry,
  SiShadcnui,
  SiSocketdotio,
  SiSolana,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { TbApi, TbArrowsSort, TbChecklist } from "react-icons/tb";

const icons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  Python: SiPython,
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Express.js": SiExpress,
  FastAPI: SiFastapi,
  "REST API": TbApi,
  GraphQL: SiGraphql,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Convex: SiConvex,
  RabbitMQ: SiRabbitmq,
  "Better Auth": SiBetterauth,
  Cloudflare: SiCloudflare,
  AWS: FaAws,
  Git: SiGit,
  Sentry: SiSentry,
  OpenTelemetry: SiOpentelemetry,
  Bun: SiBun,
  Clerk: SiClerk,
  Deepgram: SiDeepgram,
  "Deepgram STT": SiDeepgram,
  "Deepgram TTS": SiDeepgram,
  Drizzle: SiDrizzle,
  Prisma: SiPrisma,
  Razorpay: SiRazorpay,
  "Socket.IO": SiSocketdotio,
  NestJS: SiNestjs,
  "Node.js": SiNodedotjs,
  "Mistral AI": SiMistralai,
  Cloudinary: SiCloudinary,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  GSAP: SiGreensock,
  Neon: SiNeon,
  Resend: SiResend,
  HubSpot: SiHubspot,
  Slack: FaSlack,
  Linear: SiLinear,
  Zod: SiZod,
  // The AI SDK is Vercel's, and Cloudflare R2 is Cloudflare's object store.
  "AI SDK": SiVercel,
  "Vercel AI SDK": SiVercel,
  "Cloudflare R2": SiCloudflare,
  "React Native": SiReact,
  Expo: SiExpo,
  Solana: SiSolana,
  Rust: SiRust,
  Evals: TbChecklist,
  Reranker: TbArrowsSort,
};

// Single-colour logos from /public/logos, painted with currentColor via CSS mask
// so they match the react-icons glyphs and follow the theme.
const masks: Record<string, string> = {
  "TanStack Query": "/logos/tanstack.svg",
  Mastra: "/logos/mastra.svg",
  "OpenAI SDK": "/logos/openai.svg",
  LangSmith: "/logos/langsmith.svg",
  Neo4j: "/logos/neo4j.svg",
  SST: "/logos/sst.svg",
  Langfuse: "/logos/langfuse.svg",
};

// Full-colour logos rendered as images.
const images: Record<string, string> = {
  Zustand: "/logos/zustand.png",
  Inngest: "/logos/inngest.png",
  "Trigger.dev": "/logos/trigger.png",
  "E2B Sandbox": "/logos/e2b.png",
  Pinecone: "/logos/pinecone.png",
  "Pinecone (Vector DB)": "/logos/pinecone.png",
};

export function TechIcon({ name }: { name: string }) {
  const Icon = icons[name];
  if (Icon) return <Icon aria-hidden className="size-4 shrink-0" />;

  const mask = masks[name];
  if (mask)
    return (
      <span
        aria-hidden
        className="size-4 shrink-0 bg-current"
        style={{
          mask: `url(${mask}) center / contain no-repeat`,
          WebkitMask: `url(${mask}) center / contain no-repeat`,
        }}
      />
    );

  const img = images[name];
  if (img)
    // eslint-disable-next-line @next/next/no-img-element -- 16px static icon, no optimisation needed
    return <img src={img} alt="" aria-hidden width={16} height={16} className="size-4 shrink-0 rounded-[3px]" />;

  return (
    <span
      aria-hidden
      className="grid size-4 shrink-0 place-items-center rounded-[4px] bg-accent font-mono text-[9px] font-bold leading-none text-bg"
    >
      {name[0]}
    </span>
  );
}
