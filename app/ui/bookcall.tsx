'use client';

import Link from "next/link";
import clsx from "clsx";
import { track } from "../lib/analytics";

/*
 * The one primary CTA. Goes to /contact, where the calendar is embedded.
 * A solid moonlight pill with a hole punched in its end: the studio gradient shows through,
 * and the hole opens up on hover.
 */
export default function BookCall({
  text = "Book a 30-min call",
  location,
  className,
}: {
  text?: string;
  /** Where on the site the click happened, for the funnel. */
  location: string;
  className?: string;
}) {
  return (
    <Link
      href="/contact#book"
      onClick={() => track("CTA Click", { location })}
      className={clsx(
        "group/cta relative inline-flex items-center justify-between gap-4 rounded-full bg-label py-1.5 pl-7 pr-1.5 text-sm font-semibold whitespace-nowrap text-void shadow-[0_8px_30px_-8px_rgba(200,180,255,0.45)] transition-all duration-300 hover:bg-white hover:shadow-[0_10px_40px_-6px_rgba(200,180,255,0.7)] active:scale-[0.98]",
        className,
      )}
    >
      {text}
      <span aria-hidden className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-void shadow-[inset_0_3px_8px_rgba(0,0,0,0.6)]">
        <span className="light absolute inset-0 scale-[0.55] rounded-full transition-transform duration-500 ease-out group-hover/cta:scale-100" />
        <span className="relative text-base text-void opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100">→</span>
      </span>
    </Link>
  );
}
