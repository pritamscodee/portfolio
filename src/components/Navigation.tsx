"use client";

import { useEffect, useState } from "react";
import { TbMenu2, TbMoon, TbSun, TbX } from "react-icons/tb";
import { useTheme } from "@/store/theme";

const links = [
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Other Work", href: "#other-work" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const toggle = useTheme((s) => s.toggle);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          pritam<span className="text-accent">.</span>dev
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle color theme"
            className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:text-fg"
          >
            {/* Icon chosen via CSS so it matches the pre-hydration theme */}
            <TbSun size={18} className="in-data-[theme=light]:hidden" />
            <TbMoon size={18} className="hidden in-data-[theme=light]:block" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-md text-muted hover:text-fg sm:hidden"
          >
            {open ? <TbX size={20} /> : <TbMenu2 size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-6 py-3 sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-muted hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
