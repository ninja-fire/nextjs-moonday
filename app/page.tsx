import Link from "next/link";
import Hero from "./ui/hero";
import ProjectCard from "./ui/projectcard";
import Packages from "./ui/packages";
import Process from "./ui/process";
import Testimonials from "./ui/testimonials";
import Faq from "./ui/faq";
import FinalCta from "./ui/finalcta";
import SectionHeading from "./ui/sectionheading";
import { projects } from "./data/projects";
import { faq } from "./data/site";

const featured = projects.filter((p) => p.featured).slice(0, 3);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-labelledby="work" className="flex flex-col gap-16 md:gap-24 w-full">
        <div className="flex flex-wrap gap-6 items-end justify-between">
          <SectionHeading id="work" eyebrow="Selected work" title="Brands and products we've shaped" text="Scroll slowly: each one comes into the light as it lines up." />
          <Link href="/work" className="text-sm font-semibold text-caption hover:text-label transition-colors">All case studies →</Link>
        </div>
        <div className="flex flex-col gap-20 md:gap-32">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} large sizes="(min-width: 768px) 58vw, 100vw" />
          ))}
        </div>
      </section>

      <section aria-labelledby="services" className="flex flex-col gap-12 w-full">
        <div className="flex flex-wrap gap-6 items-end justify-between">
          <SectionHeading id="services" eyebrow="What we do" title="Four ways to work with us" text="Design only, done well: we hand off developer-ready files to your team or no-code tool." />
          <Link href="/services" className="text-sm font-semibold text-caption hover:text-label transition-colors">Package details →</Link>
        </div>
        <Packages />
      </section>

      <Process />
      <Testimonials />
      <Faq />
      <FinalCta location="home" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
