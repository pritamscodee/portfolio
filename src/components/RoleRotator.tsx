"use client";

import { useEffect, useRef, useState } from "react";

const TYPE_MS = 55;
const ERASE_MS = 28;
const HOLD_MS = 1900;

/**
 * Types each role out, holds, erases, moves to the next. Renders roles[0] on the
 * server and on the first client paint, so there's no layout shift or hydration
 * mismatch. Reduced motion gets the first role, static.
 */
export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [text, setText] = useState(roles[0] ?? "");
  const [animate, setAnimate] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (roles.length < 2) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    setAnimate(true);

    let index = 0;
    let chars = roles[0].length;
    let erasing = true;

    const tick = () => {
      const word = roles[index];

      if (erasing) {
        chars -= 1;
        if (chars <= 0) {
          erasing = false;
          index = (index + 1) % roles.length;
          chars = 0;
        }
      } else {
        chars += 1;
        if (chars >= word.length) {
          erasing = true;
          setText(word);
          timer.current = setTimeout(tick, HOLD_MS);
          return;
        }
      }

      setText(roles[index].slice(0, chars));
      timer.current = setTimeout(tick, erasing ? ERASE_MS : TYPE_MS);
    };

    timer.current = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer.current);
  }, [roles]);

  return (
    <span className="inline-flex items-baseline">
      {/* Reserves the width of the longest role so the line never reflows. */}
      <span className="relative">
        <span aria-hidden className="invisible whitespace-nowrap">
          {roles.reduce((a, b) => (b.length > a.length ? b : a), "")}
        </span>
        <span className="absolute inset-0 whitespace-nowrap">
          {text}
          {animate && (
            <span aria-hidden className="caret ml-0.5 inline-block w-[0.06em] self-stretch bg-accent align-[-0.08em]">
              &nbsp;
            </span>
          )}
        </span>
      </span>
      <span className="sr-only">{roles.join(", ")}</span>
    </span>
  );
}
