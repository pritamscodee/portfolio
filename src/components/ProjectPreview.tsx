import Image from "next/image";
import type { Project } from "@/data/portfolio";

/**
 * Lightweight, theme-aware mock-ups of each project, drawn with the site's own
 * colour tokens so they never clash with light/dark mode or ship a heavy PNG.
 * Set `image` on a project to use a real screenshot instead.
 */

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="ml-2 truncate rounded bg-bg px-2 py-0.5 font-mono text-[10px] text-muted">
          {label}
        </span>
      </div>
      <div className="bg-bg">{children}</div>
    </div>
  );
}

const svgClass = "block h-auto w-full";

function Zencom() {
  return (
    <svg
      viewBox="0 0 480 290"
      className={svgClass}
      role="img"
      aria-label="Shared inbox showing an AI reply with cited sources and a hand-off to a human"
    >
      <line x1="150" y1="0" x2="150" y2="290" className="text-line" stroke="currentColor" />

      {/* conversation list */}
      <rect x="18" y="20" width="62" height="7" rx="3.5" className="text-muted" fill="currentColor" opacity=".5" />
      {[1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0 ${44 + i * 46})`} className="text-muted" fill="currentColor">
          <circle cx="30" cy="14" r="9" opacity=".2" />
          <rect x="46" y="7" width={70 - i * 8} height="6" rx="3" opacity=".3" />
          <rect x="46" y="19" width={86 - i * 6} height="5" rx="2.5" opacity=".16" />
        </g>
      ))}

      {/* selected conversation */}
      <rect x="10" y="44" width="130" height="36" rx="8" className="text-accent" fill="currentColor" opacity=".12" />
      <circle cx="30" cy="62" r="9" className="text-accent" fill="currentColor" opacity=".6" />
      <rect x="46" y="55" width="70" height="6" rx="3" className="text-fg" fill="currentColor" opacity=".7" />
      <rect x="46" y="67" width="80" height="5" rx="2.5" className="text-muted" fill="currentColor" opacity=".45" />

      {/* customer message */}
      <rect x="172" y="24" width="190" height="34" rx="10" className="text-surface" fill="currentColor" />
      <rect x="172" y="24" width="190" height="34" rx="10" className="text-line" fill="none" stroke="currentColor" />
      <g className="text-muted" fill="currentColor" opacity=".55">
        <rect x="184" y="34" width="150" height="5" rx="2.5" />
        <rect x="184" y="45" width="104" height="5" rx="2.5" />
      </g>

      {/* AI reply with citations */}
      <rect x="192" y="72" width="268" height="86" rx="10" className="text-accent" fill="currentColor" opacity=".1" />
      <rect x="192" y="72" width="268" height="86" rx="10" className="text-accent" fill="none" stroke="currentColor" opacity=".35" />
      <rect x="204" y="84" width="34" height="12" rx="6" className="text-accent" fill="currentColor" opacity=".75" />
      <text x="211" y="92.8" fontSize="7" fontFamily="monospace" className="text-bg" fill="currentColor">AI</text>
      <g className="text-fg" fill="currentColor" opacity=".5">
        <rect x="204" y="106" width="236" height="5" rx="2.5" />
        <rect x="204" y="117" width="210" height="5" rx="2.5" />
        <rect x="204" y="128" width="164" height="5" rx="2.5" />
      </g>
      <g className="text-accent" fill="none" stroke="currentColor" opacity=".6">
        <rect x="204" y="140" width="54" height="12" rx="6" />
        <rect x="264" y="140" width="44" height="12" rx="6" />
      </g>
      <g className="text-accent" fill="currentColor" opacity=".55">
        <circle cx="212" cy="146" r="2.2" />
        <circle cx="272" cy="146" r="2.2" />
      </g>

      {/* hand-off banner */}
      <rect x="172" y="176" width="288" height="30" rx="8" className="text-line" fill="none" stroke="currentColor" strokeDasharray="4 4" />
      <circle cx="188" cy="191" r="4" className="text-accent" fill="currentColor" />
      <rect x="200" y="188" width="118" height="6" rx="3" className="text-muted" fill="currentColor" opacity=".55" />

      {/* composer */}
      <rect x="172" y="224" width="288" height="42" rx="10" className="text-surface" fill="currentColor" />
      <rect x="172" y="224" width="288" height="42" rx="10" className="text-line" fill="none" stroke="currentColor" />
      <rect x="186" y="242" width="96" height="6" rx="3" className="text-muted" fill="currentColor" opacity=".35" />
      <rect x="414" y="234" width="32" height="22" rx="7" className="text-accent" fill="currentColor" opacity=".8" />
    </svg>
  );
}

const WAVE = [10, 22, 38, 56, 30, 64, 44, 72, 50, 34, 60, 26, 46, 68, 36, 20, 42, 58, 28, 14];

function Ringlet() {
  return (
    <svg
      viewBox="0 0 480 290"
      className={svgClass}
      role="img"
      aria-label="Live voice call with a waveform, barge-in marker and turn-by-turn transcript"
    >
      <circle cx="28" cy="28" r="4" className="text-accent" fill="currentColor" />
      <rect x="40" y="24" width="64" height="7" rx="3.5" className="text-fg" fill="currentColor" opacity=".55" />
      <rect x="398" y="21" width="58" height="14" rx="7" className="text-accent" fill="currentColor" opacity=".14" />
      <rect x="406" y="25" width="42" height="6" rx="3" className="text-accent" fill="currentColor" opacity=".7" />

      {/* waveform: solid up to the interruption, faded after it */}
      <g className="text-accent" fill="currentColor">
        {WAVE.map((h, i) => (
          <rect
            key={i}
            x={24 + i * 22}
            y={110 - h / 2}
            width="8"
            height={h}
            rx="4"
            opacity={i < 11 ? 0.85 : 0.26}
          />
        ))}
      </g>
      <line x1="266" y1="58" x2="266" y2="162" className="text-fg" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" opacity=".5" />
      <rect x="272" y="60" width="62" height="14" rx="7" className="text-fg" fill="currentColor" opacity=".08" />
      <rect x="279" y="64" width="48" height="5" rx="2.5" className="text-fg" fill="currentColor" opacity=".45" />

      {/* transcript turns */}
      <g transform="translate(24 170)">
        <rect width="200" height="36" rx="9" className="text-surface" fill="currentColor" />
        <rect width="200" height="36" rx="9" className="text-line" fill="none" stroke="currentColor" />
        <rect x="14" y="11" width="24" height="6" rx="3" className="text-muted" fill="currentColor" opacity=".7" />
        <rect x="14" y="23" width="150" height="5" rx="2.5" className="text-muted" fill="currentColor" opacity=".35" />
      </g>
      <g transform="translate(236 170)">
        <rect width="220" height="36" rx="9" className="text-accent" fill="currentColor" opacity=".1" />
        <rect width="220" height="36" rx="9" className="text-accent" fill="none" stroke="currentColor" opacity=".35" />
        <rect x="14" y="11" width="30" height="6" rx="3" className="text-accent" fill="currentColor" opacity=".8" />
        <rect x="14" y="23" width="168" height="5" rx="2.5" className="text-fg" fill="currentColor" opacity=".4" />
      </g>

      {/* call controls */}
      <circle cx="240" cy="248" r="22" className="text-accent" fill="currentColor" opacity=".9" />
      <g className="text-bg" fill="currentColor">
        <rect x="236" y="238" width="8" height="14" rx="4" />
        <rect x="233" y="254" width="14" height="3" rx="1.5" />
      </g>
      <circle cx="176" cy="248" r="16" className="text-line" fill="none" stroke="currentColor" />
      <circle cx="304" cy="248" r="16" className="text-line" fill="none" stroke="currentColor" />
    </svg>
  );
}

function Orbix() {
  return (
    <svg
      viewBox="0 0 480 290"
      className={svgClass}
      role="img"
      aria-label="Group chat with bots beside a live E2B cloud desktop panel"
    >
      {/* bot roster */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={33 + i * 30}
          cy="31"
          r="11"
          className="text-accent"
          fill="currentColor"
          opacity={0.65 - i * 0.18}
        />
      ))}
      <circle cx="123" cy="31" r="11" className="text-line" fill="none" stroke="currentColor" strokeDasharray="3 3" />
      <rect x="150" y="27" width="76" height="7" rx="3.5" className="text-fg" fill="currentColor" opacity=".45" />

      {/* chat column */}
      <rect x="20" y="56" width="206" height="40" rx="9" className="text-surface" fill="currentColor" />
      <rect x="20" y="56" width="206" height="40" rx="9" className="text-line" fill="none" stroke="currentColor" />
      <g className="text-muted" fill="currentColor" opacity=".4">
        <rect x="34" y="68" width="150" height="5" rx="2.5" />
        <rect x="34" y="80" width="106" height="5" rx="2.5" />
      </g>

      {/* tool call */}
      <rect x="20" y="106" width="206" height="54" rx="9" className="text-accent" fill="currentColor" opacity=".1" />
      <rect x="20" y="106" width="206" height="54" rx="9" className="text-accent" fill="none" stroke="currentColor" opacity=".35" />
      <rect x="34" y="118" width="40" height="12" rx="6" className="text-accent" fill="currentColor" opacity=".75" />
      <text x="40" y="126.8" fontSize="7" fontFamily="monospace" className="text-bg" fill="currentColor">bash</text>
      <g className="text-fg" fill="currentColor" opacity=".4">
        <rect x="34" y="138" width="168" height="5" rx="2.5" />
        <rect x="34" y="149" width="120" height="5" rx="2.5" />
      </g>

      <rect x="20" y="170" width="206" height="34" rx="9" className="text-line" fill="none" stroke="currentColor" strokeDasharray="4 4" />
      <rect x="34" y="184" width="88" height="6" rx="3" className="text-muted" fill="currentColor" opacity=".4" />

      <rect x="20" y="226" width="206" height="38" rx="9" className="text-surface" fill="currentColor" />
      <rect x="20" y="226" width="206" height="38" rx="9" className="text-line" fill="none" stroke="currentColor" />
      <rect x="34" y="242" width="72" height="6" rx="3" className="text-muted" fill="currentColor" opacity=".3" />
      <rect x="186" y="236" width="26" height="18" rx="6" className="text-accent" fill="currentColor" opacity=".8" />

      {/* live sandbox desktop */}
      <rect x="246" y="56" width="214" height="208" rx="11" className="text-surface" fill="currentColor" />
      <rect x="246" y="56" width="214" height="208" rx="11" className="text-line" fill="none" stroke="currentColor" />
      <line x1="246" y1="82" x2="460" y2="82" className="text-line" stroke="currentColor" />
      <circle cx="262" cy="69" r="3.5" className="text-accent" fill="currentColor" />
      <rect x="274" y="66" width="56" height="6" rx="3" className="text-muted" fill="currentColor" opacity=".5" />

      <rect x="262" y="96" width="182" height="96" rx="7" className="text-bg" fill="currentColor" />
      <rect x="262" y="96" width="182" height="96" rx="7" className="text-line" fill="none" stroke="currentColor" />
      <line x1="262" y1="112" x2="444" y2="112" className="text-line" stroke="currentColor" />
      <g className="text-accent" fill="currentColor" opacity=".75">
        <rect x="274" y="122" width="10" height="4" rx="2" />
        <rect x="274" y="134" width="10" height="4" rx="2" />
        <rect x="274" y="146" width="10" height="4" rx="2" />
      </g>
      <g className="text-fg" fill="currentColor" opacity=".32">
        <rect x="292" y="122" width="128" height="4" rx="2" />
        <rect x="292" y="134" width="96" height="4" rx="2" />
        <rect x="292" y="146" width="140" height="4" rx="2" />
        <rect x="292" y="158" width="74" height="4" rx="2" />
      </g>
      <rect x="274" y="170" width="7" height="10" rx="1.5" className="text-accent" fill="currentColor" opacity=".9" />
      <g className="text-line" fill="none" stroke="currentColor">
        <rect x="292" y="212" width="24" height="24" rx="7" />
        <rect x="324" y="212" width="24" height="24" rx="7" />
        <rect x="356" y="212" width="24" height="24" rx="7" />
        <rect x="388" y="212" width="24" height="24" rx="7" />
      </g>
    </svg>
  );
}

const mocks = { zencom: Zencom, ringlet: Ringlet, orbix: Orbix } as const;

export function ProjectPreview({ project }: { project: Project }) {
  const label = project.href
    ? project.href.replace(/^https?:\/\//, "")
    : `localhost:3000 — ${project.title.toLowerCase()}`;

  if (project.image) {
    return (
      <Frame label={label}>
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.title} app`}
          width={1440}
          height={900}
          priority={false}
          sizes="(min-width: 1024px) 480px, 100vw"
          className="block h-auto w-full"
        />
      </Frame>
    );
  }

  const Mock = mocks[project.preview];
  return (
    <Frame label={label}>
      <Mock />
    </Frame>
  );
}
