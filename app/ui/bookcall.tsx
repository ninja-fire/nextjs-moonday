'use client';

import Link from "next/link";
import clsx from "clsx";
import { track } from "../lib/analytics";

// The one primary CTA. Goes to /contact, where the calendar is embedded.
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
      className={clsx("flex buttonBG transition-all justify-center items-center p-px rounded-full overflow-hidden shadow-whitepers active:shadow-none", className)}>
      <span className="flex transition-all justify-center items-center px-10 md:px-16 py-4 bg-bodybg hover:bg-bodybg/[0.96] w-full rounded-full text-label text-sm font-semibold whitespace-nowrap">
        {text}
      </span>
    </Link>
  );
}
