import Image from "next/image";
import {
  TbArrowUpRight,
  TbBrandGithub,
  TbFileText,
  TbFolderOpen,
  TbMail,
  TbPointFilled,
} from "react-icons/tb";
import {
  experience,
  otherWork,
  profile,
  projects,
  stack,
} from "@/data/portfolio";
import { ProjectPreview } from "./ProjectPreview";
import { RoleRotator } from "./RoleRotator";
import { Socials } from "./Socials";
import { TechIcon } from "./TechIcon";

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div data-heading className="mb-10 flex items-baseline gap-4">
      <span data-heading-index className="font-mono text-sm text-accent">
        {index}
      </span>
      <h2
        data-heading-title
        className="text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      <span data-heading-rule className="h-px flex-1 origin-left bg-line" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        data-hero-grid
        className="hero-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        data-hero-inner
        className="relative mx-auto flex min-h-[min(88vh,820px)] max-w-5xl flex-col justify-center px-6 pt-16"
      >
        {profile.availability && (
          <p
            data-hero
            className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-ok/40 bg-ok/10 px-4 py-1.5 text-sm font-semibold text-ok shadow-[0_0_24px_-6px_var(--ok)]"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2.5 rounded-full bg-ok" />
            </span>
            {profile.availability}
          </p>
        )}
        <p data-hero className="mb-5 font-mono text-sm text-muted">
          <span className="text-accent">~/</span> hi, I&apos;m
        </p>
        <h1
          data-hero
          className="text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          {profile.name}
        </h1>
        <p
          data-hero
          className="mt-3 flex flex-wrap items-center gap-3 text-2xl font-medium text-accent sm:text-3xl"
        >
          <RoleRotator roles={profile.roles} />
          {profile.timezone && (
            <span className="rounded-md border border-line px-2 py-1 font-mono text-xs font-normal text-muted">
              {profile.timezone}
            </span>
          )}
        </p>
        <p
          data-hero
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </p>
        <div data-hero className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            View experience
          </a>
          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              <TbFileText size={16} />
              Résumé
            </a>
          )}
          <div className="-ml-2 sm:ml-2">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01" title="Tech Stack" />
      <div
        data-stack
        className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2"
      >
        {stack.map((group) => (
          <div key={group.title} data-stack-group className="bg-bg p-6">
            <h3 className="font-medium">{group.title}</h3>
            <p className="mt-1 text-sm text-muted">{group.blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  data-chip
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm"
                >
                  <TechIcon name={item} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="02" title="Experience" />
      <ol data-timeline className="relative">
        <span aria-hidden className="absolute inset-y-0 left-0 w-px bg-line" />
        <span
          aria-hidden
          data-timeline-progress
          className="absolute inset-y-0 left-0 w-px origin-top bg-accent"
        />
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            data-job
            className="relative pb-12 pl-8 last:pb-0"
          >
            <span
              data-job-dot
              className="absolute -left-[4.5px] top-2 size-2.5 rounded-full bg-accent ring-4 ring-bg"
            />
            <p
              data-job-part
              className="font-mono text-xs uppercase tracking-wider text-muted"
            >
              {job.start} – {job.end}
            </p>
            <h3 data-job-part className="mt-2 text-xl font-medium">
              {job.role}
            </h3>
            <p data-job-part className="mt-1 text-muted">
              {job.url ? (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {job.company}
                  <TbArrowUpRight size={14} />
                </a>
              ) : (
                <span className="text-fg">{job.company}</span>
              )}
              {job.location && (
                <span className="ml-2 rounded border border-line px-1.5 py-0.5 font-mono text-xs">
                  {job.location}
                </span>
              )}
            </p>

            {job.highlights && job.highlights.length > 0 && (
              <ul data-job-part className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <TbPointFilled size={13} className="mt-[4px] shrink-0 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {job.stack && job.stack.length > 0 && (
              <ul data-job-part className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs"
                  >
                    <TechIcon name={tech} />
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="Projects" />
      {projects.length === 0 ? (
        <div
          data-reveal
          className="grid place-items-center rounded-xl border border-dashed border-line px-6 py-20 text-center"
        >
          <TbFolderOpen size={28} className="text-muted" />
          <p className="mt-4 font-medium">Projects are on the way</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            In the meantime, see what I&apos;m building on{" "}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-fg underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      ) : (
        <ol className="flex flex-col gap-20 lg:gap-28">
          {projects.map((p, i) => (
            <li
              key={p.title}
              data-project
              className="grid items-start gap-8 border-t border-line pt-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12"
            >
              {/* preview */}
              <div data-project-media className="lg:sticky lg:top-24">
                <ProjectPreview project={p} />
              </div>

              {/* details */}
              <div>
                <div
                  data-project-part
                  className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted"
                >
                  <span className="text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.year && <span>{p.year}</span>}
                  <span className="h-px flex-1 bg-line" />
                </div>

                <h3
                  data-project-part
                  className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                    >
                      {p.title}
                      <TbArrowUpRight size={20} className="text-muted" />
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>

                <p
                  data-project-part
                  className="mt-2 text-lg leading-snug text-accent"
                >
                  {p.tagline}
                </p>
                <p
                  data-project-part
                  className="mt-4 leading-relaxed text-muted"
                >
                  {p.description}
                </p>

                <ul data-project-part className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <TbPointFilled
                        size={14}
                        className="mt-[3px] shrink-0 text-accent"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <ul data-project-part className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs"
                    >
                      <TechIcon name={tech} />
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  data-project-part
                  className="mt-6 flex flex-wrap items-center gap-3"
                >
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                    >
                      Live site <TbArrowUpRight size={15} />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
                    >
                      <TbBrandGithub size={15} /> Source
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export function OtherWork() {
  return (
    <section id="other-work" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="04" title="Other Work" />
      <p data-reveal className="-mt-4 mb-10 max-w-2xl text-muted">
        Smaller builds and experiments — each one shipped far enough to use.
      </p>
      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {otherWork.map((w) => (
          <li key={w.title} data-work className="flex flex-col bg-bg">
            {w.image && (
              <a
                href={w.href}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden
                className="block border-b border-line"
              >
                <Image
                  src={w.image}
                  alt=""
                  width={1440}
                  height={900}
                  sizes="(min-width: 640px) 420px, 100vw"
                  className="aspect-[16/9] w-full object-cover object-top"
                />
              </a>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-medium">
                {w.href ? (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                  >
                    {w.title}
                    <TbArrowUpRight size={16} className="text-muted" />
                  </a>
                ) : (
                  w.title
                )}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {w.blurb}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {w.stack.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 font-mono text-xs"
                  >
                    <TechIcon name={tech} />
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-4 text-sm">
                {w.href && (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg"
                  >
                    Live <TbArrowUpRight size={14} />
                  </a>
                )}
                {w.repo ? (
                  <a
                    href={w.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                  >
                    <TbBrandGithub size={14} /> Source
                  </a>
                ) : (
                  <span className="font-mono text-xs text-muted/70">
                    private repo
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="05" title="Contact" />
      <div
        data-reveal
        className="rounded-xl border border-line bg-surface p-8 sm:p-12"
      >
        <h3 className="max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
          Have a project or role in mind? Let&apos;s talk.
        </h3>
        <p className="mt-3 max-w-lg text-muted">
          I usually reply within a day or two. Email works best.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            <TbMail size={16} />
            {profile.email}
          </a>
          <Socials />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {profile.name}</p>
        <p>
          Built with Next.js, TypeScript and Tailwind. Inspired by{" "}
          <a
            href="https://github.com/yujisatojr/react-portfolio-template"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 hover:text-fg"
          >
            react-portfolio-template
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
