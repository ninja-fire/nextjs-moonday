'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import BookCall from "./bookcall";

const hiddenOn = ["/contact", "/thanks"];

// Appears once the hero is done (on the homepage, its zoom has played out), so the CTA is always one tap away.
// Steps aside while the booking section (#book) is on screen: the calendar is right there.
export default function StickyCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const book = document.getElementById("book")?.getBoundingClientRect();
      const onBook = !!book && book.top < window.innerHeight && book.bottom > 0;
      const hero = document.querySelector(".hero")?.getBoundingClientRect();
      const pastHero = hero ? hero.bottom < window.innerHeight * 0.5 : window.scrollY > window.innerHeight * 0.8;
      setVisible(pastHero && !onBook);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (hiddenOn.includes(pathname)) return null;

  return (
    <div
      className={clsx(
        "fixed z-40 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] right-4 left-4 sm:left-auto md:bottom-4 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
      )}
      aria-hidden={!visible}
      inert={!visible}
    >
      <BookCall location="sticky" className="w-full sm:w-auto" />
    </div>
  );
}
