import type { Metadata } from "next";
import FinalCta from "../ui/finalcta";
import LeadForm from "../ui/leadform";
import SectionHeading from "../ui/sectionheading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute intro call with Moonday, or send us a short brief about your brand, product, website or motion project.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <FinalCta location="contact" />
      <section aria-labelledby="brief-title" id="brief" className="flex flex-col gap-12 w-full max-w-(--breakpoint-md) scroll-mt-8">
        <SectionHeading
          id="brief-title"
          center
          eyebrow="Or send a brief"
          title="Tell us what you need"
          text="Two minutes, and we come back to you with questions or a link to book a call."
        />
        <LeadForm />
      </section>
    </>
  );
}
