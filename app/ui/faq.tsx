import { faq } from "../data/site";
import SectionHeading from "./sectionheading";

export default function Faq() {
  return (
    <section aria-labelledby="faq" className="grid gap-12 lg:grid-cols-[1fr_1.4fr] w-full">
      <SectionHeading id="faq" eyebrow="FAQ" title="Before you book" text="The questions we hear most on intro calls." />
      <div className="flex flex-col">
        {faq.map((f) => (
          <details key={f.q} className="group border-b border-transparentbg py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-label font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden className="text-xl text-caption transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="pt-4 text-sm font-medium text-caption leading-6">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
