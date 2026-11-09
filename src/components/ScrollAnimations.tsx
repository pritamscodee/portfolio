"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  gsap.utils.toArray<T>(root.querySelectorAll(sel));

/**
 * Drives every scroll/entrance animation on the page by targeting data-* hooks
 * in the (server-rendered) sections. Elements start hidden via the
 * `gsap-pending` class set in layout.tsx, so there's no flash before hydration.
 */
export function ScrollAnimations() {
  useGSAP(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // ---- Hero intro on load ----
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-grid]", { autoAlpha: 0, scale: 1.08, duration: 1.6 }, 0)
        .from("[data-hero]", { autoAlpha: 0, y: 40, duration: 0.9, stagger: 0.12 }, 0.1);

      // Hero drifts up and fades as you scroll past it
      gsap.to("[data-hero-inner]", {
        y: -80,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
      });

      // ---- Section headings: index + title slide in, rule draws across ----
      q("[data-heading]").forEach((h) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: h, start: "top 85%" },
            defaults: { ease: "power3.out" },
          })
          .from(h.querySelector("[data-heading-index]"), { autoAlpha: 0, x: -20, duration: 0.5 })
          .from(h.querySelector("[data-heading-title]"), { autoAlpha: 0, y: 30, duration: 0.7 }, "<0.05")
          .from(h.querySelector("[data-heading-rule]"), { scaleX: 0, duration: 1, ease: "power2.inOut" }, "<0.15");
      });

      // ---- Tech stack: cards rise in, chips pop in staggered ----
      // Animate each card's contents (not the card) so the grid never shows gaps.
      q("[data-stack-group]").forEach((group) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: group, start: "top 88%" },
            defaults: { ease: "power3.out" },
          })
          .from(q(":scope > :not(ul)", group), {
            autoAlpha: 0,
            y: 24,
            duration: 0.8,
            stagger: 0.06,
          })
          .from(
            q("[data-chip]", group),
            {
              autoAlpha: 0,
              y: 12,
              scale: 0.9,
              duration: 0.45,
              ease: "back.out(2)",
              stagger: 0.05,
            },
            "<0.25",
          );
      });

      // ---- Experience: line fills with scroll, each job slides in ----
      const timeline = document.querySelector("[data-timeline]");
      if (timeline) {
        gsap.fromTo(
          "[data-timeline-progress]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: timeline, start: "top 75%", end: "bottom 55%", scrub: 0.6 },
          },
        );

        q("[data-job]").forEach((job) => {
          gsap
            .timeline({
              scrollTrigger: { trigger: job, start: "top 80%" },
              defaults: { ease: "power3.out" },
            })
            .from(job.querySelector("[data-job-dot]"), {
              scale: 0,
              duration: 0.5,
              ease: "back.out(3)",
            })
            .from(
              q("[data-job-part]", job),
              { autoAlpha: 0, x: -40, duration: 0.7, stagger: 0.1 },
              "<0.1",
            );
        });
      }

      // ---- Projects: preview lifts in, then the details stagger up beside it ----
      q("[data-project]").forEach((project) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: project, start: "top 80%" },
            defaults: { ease: "power3.out" },
          })
          .from(project.querySelector("[data-project-media]"), {
            autoAlpha: 0,
            y: 40,
            scale: 0.97,
            duration: 0.9,
          })
          .from(
            q("[data-project-part]", project),
            { autoAlpha: 0, y: 24, duration: 0.7, stagger: 0.08 },
            "<0.15",
          );
      });

      // ---- Other work: compact cards fade up, staggered down the grid ----
      q("[data-work]").forEach((card, i) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 28,
          duration: 0.7,
          ease: "power3.out",
          delay: (i % 2) * 0.07,
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });

      // ---- Generic blocks (projects, contact) ----
      q("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 50,
          scale: 0.98,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      root.classList.remove("gsap-pending");

      // Images settle after hydration and a #hash deep-link jumps the page before
      // any trigger has been measured, which would otherwise leave whole sections
      // stuck at opacity 0. Re-measure once everything has loaded.
      const refresh = () => ScrollTrigger.refresh();
      if (document.readyState === "complete") refresh();
      else window.addEventListener("load", refresh, { once: true });
      return () => window.removeEventListener("load", refresh);
    });

    // Reduced motion (or the query not matching): just show everything.
    mm.add("(prefers-reduced-motion: reduce)", () => {
      root.classList.remove("gsap-pending");
    });
  });

  return null;
}
