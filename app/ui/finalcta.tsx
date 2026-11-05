import Link from "next/link";
import Image from "next/image";
import CalEmbed from "./calembed";
import LogoWall from "./logowall";
import { testimonials } from "../data/site";

const takeaways = ["A clear scope", "A timeline", "A quote"];

/*
 * Booking QR (public/qr-book.svg, generated from links.bookCall): a hole in the plate whose modules
 * let the studio light through. Desktop only, for people who'd rather book from their phone.
 */
function BookingQr() {
  return (
    <figure className="hidden items-center gap-5 lg:flex">
      <div className="hole size-44 shrink-0 rounded-[32px]">
        <div
          className="light absolute inset-8"
          style={{ mask: "url(/qr-book.svg) center / contain no-repeat", WebkitMask: "url(/qr-book.svg) center / contain no-repeat" }}
        />
      </div>
      <figcaption className="flex max-w-[9rem] flex-col gap-1">
        <span className="text-sm font-semibold text-label">On your phone?</span>
        <span className="text-xs font-medium leading-5 text-caption">Scan to book the call from there.</span>
      </figcaption>
    </figure>
  );
}

/** Reassurance at the moment of booking: a client in their own words (verbatim), then who else we've worked with. */
function Proof() {
  const t = testimonials[0];
  return (
    <div className="flex flex-col gap-10 lg:px-5">
      <figure className="flex flex-col gap-5 border-t border-white/[.07] pt-10 md:flex-row md:items-start md:gap-8">
        <Image src={t.avatar} alt="" width={56} height={56} className="shrink-0 rounded-full ring-1 ring-white/10" />
        <div className="flex flex-col gap-4">
          <blockquote className="text-base font-medium leading-7 text-label/90 md:text-lg md:leading-8">&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className="text-sm font-medium text-caption">
            <span className="font-semibold text-label">{t.name}</span> · {t.role}
          </figcaption>
        </div>
      </figure>
      <LogoWall />
    </div>
  );
}

// Closing section on every marketing page: the calendar itself, with the form as the fallback.
// Everything sits on one 1000px column: below that width the cal.com embed breaks its own layout.
// `proof` adds a testimonial and the logo wall under the calendar, for pages that don't already show them.
export default function FinalCta({ location, proof = false }: { location: string; proof?: boolean }) {
  return (
    <section aria-labelledby="book-title" id="book" className="mx-auto flex w-full max-w-[1000px] flex-col gap-10">
      {/* lg:px-5 matches the ~20px cal.com leaves around its card, so the heading lines up with the calendar. */}
      <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:px-5">
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <p className="eyebrow">See you Monday</p>
          <h2 id="book-title" className="text-balance">Let&apos;s talk about your project</h2>
          <p className="max-w-md text-base font-medium leading-7 text-caption">
            A free 30-minute intro call. Pick a time that works for you, and leave with:
          </p>
          <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {takeaways.map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-full border border-white/[.08] py-1.5 pl-2 pr-3.5 text-xs font-semibold text-label">
                <span aria-hidden className="hole size-3 rounded-full"><span className="light absolute inset-0" /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <BookingQr />
      </div>

      <CalEmbed location={location} />

      {proof && <Proof />}

      <p className="text-center text-sm font-medium text-caption">
        Prefer writing? <Link href="/contact#brief" className="highlight underline underline-offset-4">Send us a short brief</Link> instead.
      </p>
    </section>
  );
}
