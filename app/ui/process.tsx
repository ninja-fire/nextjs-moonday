import { steps } from "../data/site";
import SectionHeading from "./sectionheading";
import Reveal from "./reveal";

// Each step is a moon phase: from new moon at the intro call to full moon at handoff.
const phases = ["14%", "42%", "72%", "105%"];

export default function Process() {
  return (
    <section aria-labelledby="process" className="flex flex-col gap-16 w-full">
      <SectionHeading id="process" eyebrow="How we work" title="From new moon to full moon" text="Four steps from the intro call to files your developers can build from." />
      <ol className="relative grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        {/* The orbit the phases sit on. */}
        <span aria-hidden className="absolute left-12 right-12 top-12 hidden h-px bg-linear-to-r from-transparent via-white/15 to-transparent xl:block" />
        {steps.map((s, i) => (
          <Reveal as="li" key={s.name} delay={i * 140} className="relative flex flex-col gap-5">
            <div aria-hidden className="hole size-24 rounded-full bg-void">
              <span className="light absolute inset-0" />
              <span className="phase-shadow absolute -inset-px rounded-full bg-void" style={{ "--phase": phases[i] } as React.CSSProperties} />
            </div>
            <p className="eyebrow before:hidden!">Step {String(i + 1).padStart(2, "0")}</p>
            <h3 className="text-2xl! font-bold! tracking-tight!">{s.name}</h3>
            <p className="text-sm font-medium text-caption leading-6 max-w-xs">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
