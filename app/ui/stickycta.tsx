'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import BookCall from "./bookcall";

const hiddenOn = ["/contact", "/thanks"];

// Appears once the hero is out of view, so the CTA is always one tap away.
export default function StickyCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (hiddenOn.includes(pathname)) return null;

  return (
    <div
      className={clsx(
        "fixed z-40 bottom-4 right-4 left-20 sm:left-auto transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
      )}
      aria-hidden={!visible}
      inert={!visible}
    >
      <BookCall location="sticky" className="w-full sm:w-auto" />
    </div>
  );
}
