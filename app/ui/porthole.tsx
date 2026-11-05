"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

/**
 * A hole in the plate. Its children sit on the layer behind, which scrolls slower than the page:
 * they drift past the opening, half in the dark, and line up with it (fully lit, rim glowing)
 * when the hole crosses the middle of the screen.
 */
export default function Porthole({
  children,
  className,
  depth = 18,
  overlay,
}: {
  children: React.ReactNode;
  className?: string;
  /** Sits on the plate side of the hole: does not drift. */
  overlay?: React.ReactNode;
  /** How far the layer behind drifts, in % of the hole's height. */
  depth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.toggleAttribute("data-aligned", true);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const half = window.innerHeight / 2;
      // -1 above the screen, 0 centred, 1 below.
      const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - half) / (half + r.height / 2)));
      el.style.setProperty("--y", `${((-p * r.height * depth) / 100).toFixed(1)}px`);
      el.style.setProperty("--ap", Math.abs(p).toFixed(3));
      el.toggleAttribute("data-aligned", Math.abs(p) < 0.22);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // Only track scroll while the hole is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
      } else {
        stop();
      }
    });
    update();
    observer.observe(el);
    return () => {
      observer.disconnect();
      stop();
      cancelAnimationFrame(frame);
    };
  }, [depth]);

  return (
    <div ref={ref} className={clsx("group/hole hole", className)} style={{ "--depth": depth } as React.CSSProperties}>
      <div className="deep">{children}</div>
      <div aria-hidden className="shade" />
      {overlay}
    </div>
  );
}
