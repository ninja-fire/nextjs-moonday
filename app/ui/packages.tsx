import { packages } from "../data/site";
import Reveal from "./reveal";

// Engraved rows rather than cards: a pinhole on each row lets the light through on hover.
export default function Packages() {
  return (
    <ul className="flex flex-col w-full border-t border-white/[.08]">
      {packages.map((p, i) => (
        <Reveal
          as="li"
          key={p.slug}
          delay={i * 80}
          className="group/pkg relative grid gap-5 border-b border-white/[.08] py-8 md:grid-cols-[5rem_1fr_1.3fr_auto] md:gap-10 md:py-10 transition-colors hover:bg-white/[.015]"
        >
          <div className="flex items-center gap-3 md:flex-col md:items-start">
            <span aria-hidden className="hole h-5 w-10 rounded-full">
              <span className="light absolute inset-0 opacity-40 transition-opacity duration-500 group-hover/pkg:opacity-100" />
            </span>
            <span className="text-xs font-semibold tracking-[0.16em] text-placeholder">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl! md:text-3xl! font-bold! tracking-tight!">{p.title}</h3>
            <p className="text-sm font-medium text-placeholder">{p.duration}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base font-medium text-caption leading-6 md:leading-7">{p.text}</p>
            <ul className="flex flex-wrap gap-2">
              {p.items.map((item) => (
                <li key={item} className="rounded-full border border-white/[.08] px-3 py-1.5 text-xs font-medium text-label/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-baseline gap-2 md:flex-col md:items-end md:gap-1">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-placeholder">{p.startsAt ? "Starts at" : "Pricing"}</p>
            <p className="text-2xl md:text-3xl font-bold text-label">{p.startsAt ?? "On request"}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
