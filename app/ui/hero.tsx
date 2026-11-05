"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import BookCall from "./bookcall";
import LightSwitch from "./lightswitch";
import LogoWall from "./logowall";
import trooperMascot from "../../public/trooper1.webp";
import trooperCrates from "../../public/trooper4.webp";
import coinhouseCoins from "../../public/coinhouseCoins.webp";
import coinhouseCard from "../../public/cartevoeux-gallery.webp";
import looterLanding from "../../public/work/looter/looter03.webp";
import looterPitch from "../../public/work/looter/looter.webp";
import venaCover from "../../public/work/venalabs/cover.webp";
import ethPoster from "../../public/work/ethzurich/poster-eth.webp";
import ethPosterHand from "../../public/work/ethzurich/poster-hand.webp";
import ethTote from "../../public/work/ethzurich/tote.webp";
import ethCity from "../../public/work/ethzurich/illustration-city.webp";

type Shot = { src: StaticImageData; slug: string; title: string; alt: string };

// Two columns of work drifting past the hero window in opposite directions. Mixed formats on purpose.
const columns: Shot[][] = [
  [
    { src: trooperMascot, slug: "trooper", title: "Trooper", alt: "Trooper's 3D mascot in a purple helmet" },
    { src: ethPoster, slug: "ethzurich", title: "ETHZürich", alt: "ETHZürich conference poster with the Ethereum diamond" },
    { src: looterLanding, slug: "looter", title: "Looter", alt: "Looter pitch deck pages around a laptop" },
    { src: coinhouseCoins, slug: "coinhouse", title: "Coinhouse", alt: "Three crypto coins rendered in 3D for Coinhouse" },
    { src: ethCity, slug: "ethzurich", title: "ETHZürich", alt: "ETHZürich illustration of people meeting in the city" },
  ],
  [
    { src: venaCover, slug: "venalabs", title: "VenaLabs", alt: "The VenaLabs logo in 3D ice blue" },
    { src: ethTote, slug: "ethzurich", title: "ETHZürich", alt: "ETHZürich tote bag" },
    { src: trooperCrates, slug: "trooper", title: "Trooper", alt: "Trooper crates parachuting down" },
    { src: coinhouseCard, slug: "coinhouse", title: "Coinhouse", alt: "Coinhouse 2023 greeting card" },
    { src: ethPosterHand, slug: "ethzurich", title: "ETHZürich", alt: "ETHZürich poster with an illustrated hand" },
    { src: looterPitch, slug: "looter", title: "Looter", alt: "Looter pitch deck slides" },
  ],
];

// The work behind the disc: four drifting columns (two on mobile).
const grid = [columns[0], columns[1], [...columns[0]].reverse(), [...columns[1]].reverse()];

function Column({ shots, reverse = false, first = false, className }: { shots: Shot[]; reverse?: boolean; first?: boolean; className?: string }) {
  // The list is rendered twice so the loop is seamless; the copy is hidden from assistive tech.
  // The first two columns show on every screen, so the shots in view at load don't wait. A reversed
  // column starts half-way through its loop: there, that's the end of the list and the top of the copy.
  const inView = (copy: boolean, i: number) =>
    first && (reverse ? (copy ? i < 2 : i >= shots.length - 2) : !copy && i < 2);
  const list = (copy: boolean) => (
    <ul aria-hidden={copy || undefined} className="flex flex-col gap-3 pb-3">
      {shots.map((s, i) => (
        <li key={i}>
          <Image
            src={s.src}
            alt={copy ? "" : s.alt}
            sizes="(min-width: 1024px) 25vw, 50vw"
            quality={50}
            loading={inView(copy, i) ? "eager" : "lazy"}
            fetchPriority={inView(copy, i) ? "high" : "low"}
            className="h-auto w-full rounded-2xl"
          />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={clsx("animate-drift flex flex-col will-change-transform", reverse && "[animation-direction:reverse]", className)}>
      {list(false)}
      {list(true)}
    </div>
  );
}

/**
 * Two beats, both from the logo, which is a toggle. The work drifts behind a disc cut in the plate,
 * in the dark until the switch in the headline flips from crescent to disc (moon to day) and the
 * light comes on. Then scrolling opens that disc until the work fills the screen.
 */
export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const anchor = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  // The story plays once without a click.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setOn(true), reduce ? 0 : 1100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const sec = section.current;
    const st = stage.current;
    const an = anchor.current;
    if (!sec || !st || !an) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    const update = () => {
      frame = 0;
      const s = sec.getBoundingClientRect();
      const t = st.getBoundingClientRect();
      const a = an.getBoundingClientRect();
      // 0 while the stage sits at the top, 1 once the section has scrolled by.
      const p = still ? 0 : Math.max(0, Math.min(1, (t.top - s.top) / (s.height - t.height || 1)));
      if (p > 0.01) setOn(true);
      // The disc at rest is the anchor's circle; it grows to reach the stage's farthest corner.
      const x = a.left + a.width / 2 - t.left;
      const y = a.top + a.height / 2 - t.top;
      const r0 = a.width / 2;
      const far = Math.hypot(Math.max(x, t.width - x), Math.max(y, t.height - y));
      st.style.setProperty("--p", p.toFixed(4));
      st.style.setProperty("--sx", `${x.toFixed(1)}px`);
      st.style.setProperty("--sy", `${y.toFixed(1)}px`);
      st.style.setProperty("--r", `${(r0 + (far - r0) * p ** 1.6).toFixed(1)}px`);
      st.toggleAttribute("data-open", p > 0.85);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <section ref={section} aria-labelledby="hero-title" data-lights={on ? "on" : "off"} className="hero relative -mt-14 w-[100cqw] md:-mt-20">
        <div ref={stage} className="hero-stage sticky top-0 overflow-hidden md:rounded-l-[32px]">
          <div aria-hidden className="hero-spill pointer-events-none absolute inset-0" />

          <div className="hero-layout mx-auto grid h-full max-w-[1400px] content-center items-center gap-8 px-4 md:px-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 2xl:px-20">
            <div className="hero-copy flex flex-col items-start gap-6 text-left md:gap-8">
              <h1 id="hero-title" className="text-[clamp(2.4rem,5vw,4.75rem)]! leading-[0.98]! tracking-[-0.03em]! text-balance">
                We design <LightSwitch on={on} onChange={setOn} /> your brand & product faster
              </h1>
              <p className="max-w-md text-base font-medium leading-7 text-caption text-balance md:text-lg md:leading-8">
                Brand, product and motion design for tech & Web3 startups.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <BookCall location="hero" />
                <Link href="/work" className="py-4 text-sm font-semibold text-caption transition-colors hover:text-label">
                  See our work →
                </Link>
              </div>
            </div>
            {/* Where the disc sits at rest (drawn by the layers below, sized from this box). */}
            <div ref={anchor} aria-hidden className="aspect-square w-[min(100%,34svh)] justify-self-center lg:w-[min(100%,74svh)]" />
          </div>

          {/* Through the disc: the work, drifting. Above the copy: as it opens, it swallows the headline. */}
          <div aria-hidden className="hero-work pointer-events-none absolute inset-0 z-10 bg-void">
            <div className="hero-grid grid h-full grid-cols-2 gap-3 px-3 lg:grid-cols-4">
              {grid.map((shots, i) => (
                <Column key={i} shots={shots} reverse={i % 2 === 1} first={i < 2} className={clsx(i % 2 === 1 && "-mt-32", i > 1 && "max-lg:hidden")} />
              ))}
            </div>
            {/* Fades back into the plate as the stage lets go. */}
            <div className="hero-fade absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-[#161616] via-[#161616]/70 to-transparent" />
          </div>
          <div aria-hidden className="hero-ring pointer-events-none absolute z-10 rounded-full" />

          {/* Once through: the way on to the case studies. */}
          <Link href="/work" className="hero-enter absolute z-20 bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-void/75 px-6 py-3.5 text-sm font-semibold text-label backdrop-blur-md transition-colors hover:bg-void">
            Explore the case studies →
          </Link>
        </div>
      </section>

      <LogoWall />
    </>
  );
}
