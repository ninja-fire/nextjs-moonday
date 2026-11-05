/* eslint-disable @next/next/no-img-element -- plain <img>: SVG logos gain nothing from next/image */

// Logos live in /public/logoclient/logoclient-01.svg … -40.svg
// TODO(founders): add big-brand logos here once the NDA check for agency-era work is done.
const logos = Array.from({ length: 40 }, (_, i) => `/logoclient/logoclient-${String(i + 1).padStart(2, "0")}.svg`);

/*
 * Seamless loop: two identical groups side by side, each sliding by exactly its own width.
 * Spacing is padding inside each item (not flex gap) so both groups are the same width to the pixel.
 */
function Row({ items }: { items: string[] }) {
  const group = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 animate-marquee items-center will-change-transform">
      {items.map((src) => (
        <li key={src} className="shrink-0 px-7 md:px-9">
          {/* One colour for every logo: mixed brand colours are what made the wall look cheap. */}
          <img src={src} alt="" loading="lazy" decoding="async" className="h-6 w-auto opacity-55 brightness-0 invert md:h-7" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="flex">
      {group(false)}
      {group(true)}
    </div>
  );
}

// The client logos run through a slot cut in the plate.
export default function LogoWall() {
  return (
    <section aria-label="Clients" className="flex w-full flex-col items-center gap-5 md:flex-row md:gap-8">
      <p className="shrink-0 text-center text-sm font-medium leading-6 text-caption md:max-w-[11rem] md:text-left">
        <span className="highlight font-semibold">60+ brands</span> in 10+ years, from global names to DeFi launches
      </p>
      <div className="hole flex h-16 w-full min-w-0 items-center rounded-full md:h-20">
        <Row items={logos} />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-2 w-16 bg-linear-to-r from-void md:w-28" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-2 w-16 bg-linear-to-l from-void md:w-28" />
      </div>
    </section>
  );
}
