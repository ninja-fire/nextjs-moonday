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
          <Reveal as="li" key={t.name} delay={i * 120} className="flex flex-col justify-between gap-8 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <blockquote className="text-sm font-medium text-caption leading-6">“{t.quote}”</blockquote>
            <div className="flex gap-3 items-center">
              <Image src={t.avatar} alt="" width={48} height={48} className="rounded-full" />
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
