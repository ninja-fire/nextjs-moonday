import { steps } from "../data/site";
import SectionHeading from "./sectionheading";
import Reveal from "./reveal";

export default function Process() {
  return (
    <section aria-labelledby="process" className="flex flex-col gap-12 w-full">
      <SectionHeading id="process" eyebrow="How we work" title="From intro call to handoff" />
      <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.name} delay={i * 100} className="flex flex-col gap-4 px-8 py-6 rounded-3xl border border-transparentbg">
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-indigo-500">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.name}</h3>
            <p className="text-sm font-medium text-caption leading-6">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
