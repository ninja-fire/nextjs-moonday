import Image from "next/image";
import { testimonials } from "../data/site";
import SectionHeading from "./sectionheading";
import Reveal from "./reveal";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials" className="flex flex-col gap-12 w-full">
      <SectionHeading id="testimonials" center eyebrow="Don't trust, verify" title="What clients say" />
      <ul className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 120} className="flex flex-col justify-between gap-10 p-8 rounded-[28px] bg-bodybg/60 border border-white/[.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <blockquote className="text-base font-medium text-label/90 leading-7"><span aria-hidden className="light-text block text-5xl font-bold leading-none mb-2">“</span>{t.quote}”</blockquote>
            <div className="flex gap-3 items-center">
              <Image src={t.avatar} alt="" width={48} height={48} className="rounded-full ring-1 ring-white/10" />
              <div className="flex flex-col">
                <p className="text-sm text-label font-semibold">{t.name}</p>
                <p className="text-xs font-medium text-placeholder">{t.role}{t.note && ` · ${t.note}`}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
