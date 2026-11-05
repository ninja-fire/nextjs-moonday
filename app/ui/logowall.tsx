/* eslint-disable @next/next/no-img-element -- plain <img>: SVG logos gain nothing from next/image */

// Logos live in /public/logoclient/logoclient-01.svg … -40.svg
// TODO(founders): add big-brand logos here once the NDA check for agency-era work is done.
const logos = Array.from({ length: 40 }, (_, i) => `/logoclient/logoclient-${String(i + 1).padStart(2, "0")}.svg`);

/*
 * Seamless loop: two identical groups side by side, each sliding by exactly its own width.
 * Spacing is padding inside each item (not flex gap) so both groups are the same width to the pixel.
 */
function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const group = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 animate-marquee items-center will-change-transform"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {items.map((src) => (
        <li key={src} className="shrink-0 px-6 md:px-10">
          <img src={src} alt="" loading="lazy" decoding="async" className="h-8 w-auto opacity-60 grayscale md:h-10" />
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

export default function LogoWall() {
  return (
    <section aria-label="Clients" className="flex flex-col gap-10 w-full">
      <p className="text-center text-sm font-medium text-caption">
        Trusted by <span className="highlight font-semibold">60+ brands</span>, from global names to DeFi launches
      </p>
      <div className="relative flex flex-col gap-8 overflow-hidden">
        <Row items={logos.slice(0, 20)} />
        <Row items={logos.slice(20)} reverse />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-bodybg md:w-40" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-bodybg md:w-40" />
      </div>
    </section>
  );
}
