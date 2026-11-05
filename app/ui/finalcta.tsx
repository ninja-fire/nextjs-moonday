import Link from "next/link";
import CalEmbed from "./calembed";
import SectionHeading from "./sectionheading";

// Closing section on every marketing page: the calendar itself, with the form as the fallback.
export default function FinalCta({ location }: { location: string }) {
  return (
    <section aria-labelledby="book-title" id="book" className="flex flex-col gap-12 w-full scroll-mt-8">
      <SectionHeading
        id="book-title"
        center
        eyebrow="Free 30-minute intro call"
        title="Let's talk about your project"
        text="Pick a time that works for you. You'll leave the call with a clear scope, a timeline and a quote."
      />
      <CalEmbed location={location} />
      <p className="text-center text-sm font-medium text-caption">
        Prefer writing? <Link href="/contact#brief" className="highlight underline underline-offset-4">Send us a short brief</Link> instead.
      </p>
    </section>
  );
}
