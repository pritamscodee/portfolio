# Pritam Mondal: Portfolio

Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Zustand (theme toggle, persisted).
Layout inspired by [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) (MIT).

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing content

All content lives in `src/data/portfolio.ts`:

- `profile`: name, role, tagline, email, socials
- `stack`: tech stack groups
- `experience`: career timeline (newest first)
- `projects`: one entry per project, rendered as a vertical stack of preview + details:

```ts
{
  title: "My Project",
  tagline: "One line a recruiter can skim.",
  description: "What it does and who it is for.",
  features: ["The hard parts, one per line."],
  stack: ["Next.js", "FastAPI", "PostgreSQL"],
  year: "2026",
  preview: "zencom",                    // which built-in SVG mock to fall back to
  image: "/previews/my-project.png",    // optional screenshot; wins over the mock
  href: "https://live-demo.example.com",
  repo: "https://github.com/pritamscodee/my-project",
}
```

### Project previews

Screenshots live in `public/previews/`. Recapture one with headless Chrome:

```bash
chrome --headless --disable-gpu --hide-scrollbars --force-prefers-reduced-motion   --window-size=1440,900 --virtual-time-budget=25000   --screenshot=public/previews/<name>.png https://<live-url>
```

Drop `image` from a project and it falls back to the hand-drawn, theme-aware mock in
`src/components/ProjectPreview.tsx`.

Tech names that match `src/components/TechIcon.tsx` get a brand icon; others get a letter badge.
