import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { getNeighbours, getProject, projects, type Highlight, type ProjectImage } from "../../data/projects";
import { testimonials } from "../../data/site";
import Tags from "../../ui/tags";
import Reveal from "../../ui/reveal";
import SectionHeading from "../../ui/sectionheading";
import BookCall from "../../ui/bookcall";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title}: ${project.tagline}`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      // Generated from the cover by scripts/og-images.mjs before each build.
      images: [{ url: `/og/${project.slug}.jpg`, width: 1200, height: 630, alt: project.cover.alt }],
    },
  };
}

function Frame({ image, sizes }: { image: ProjectImage; sizes: string }) {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
      <Image src={image.src} alt={image.alt} sizes={sizes} unoptimized={image.unoptimized} className="h-auto w-full" />
    </div>
  );
}

function ProblemFix({ issue, solution }: { issue?: string; solution?: string }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-placeholder">The problem</p>
        <p className="text-sm font-medium text-caption leading-6">{issue}</p>
      </div>
      <div className="flex flex-col gap-2 border-l-2 border-indigo-300 pl-5">
        <p className="eyebrow text-xs! uppercase tracking-wider">The fix</p>
        <p className="text-sm font-medium text-caption leading-6">{solution}</p>
      </div>
    </div>
  );
}

function HighlightBlock({ h, index }: { h: Highlight; index: number }) {
  // v1 screen next to its v2 redesign, problem / fix below.
  if (h.before) {
    return (
      <Reveal className="flex flex-col gap-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[{ label: "Before", image: h.before }, { label: "After", image: h.images[0] }].map(({ label, image }) => (
            <figure key={label} className="flex flex-col gap-3">
              <figcaption className={clsx("text-xs font-semibold uppercase tracking-wider", label === "Before" ? "text-placeholder" : "eyebrow")}>{label}</figcaption>
              <Frame image={image} sizes="(min-width: 768px) 40vw, 100vw" />
            </figure>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <h3 className="normal-case!">{h.title}</h3>
          <ProblemFix issue={h.issue} solution={h.solution} />
        </div>
      </Reveal>
    );
  }

  // Single image + problem / fix: side by side, alternating sides.
  if (h.images.length === 1 && h.issue) {
    return (
      <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <Frame image={h.images[0]} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="normal-case!">{h.title}</h3>
          <ProblemFix issue={h.issue} solution={h.solution} />
        </div>
      </Reveal>
    );
  }

  // Image row, title and text below. Four images go 2×2 rather than leave one alone on a second row.
  const n = h.images.length;
  const cols = n === 3 || n > 4 ? "md:grid-cols-3" : n === 2 || n === 4 ? "md:grid-cols-2" : "";
  return (
    <Reveal className="flex flex-col gap-8">
      <div className={`grid items-stretch gap-6 ${cols}`}>
        {h.images.map((img) => (
          <Frame key={img.alt} image={img} sizes={cols ? "(min-width: 768px) 30vw, 100vw" : "(min-width: 768px) 80vw, 100vw"} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <h3 className="normal-case!">{h.title}</h3>
        {h.text && <p className="text-sm md:text-base font-medium text-caption leading-7">{h.text}</p>}
      </div>
    </Reveal>
  );
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const { prev, next } = getNeighbours(project.slug);
  const quote = testimonials.find((t) => t.name === project.testimonial);

  return (
    <article className="flex flex-col gap-32 w-full">
      <header className="flex flex-col gap-10 w-full">
        <Link href="/work" className="w-fit text-sm font-semibold text-caption hover:text-label transition-colors">← All work</Link>
        <div className="flex flex-col gap-4 max-w-3xl">
          <p className="eyebrow">{project.sector}</p>
          <h1>{project.title}</h1>
          <p className="text-lg md:text-2xl font-medium text-caption leading-snug">{project.tagline}</p>
        </div>
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
          <Image preload src={project.cover.src} alt={project.cover.alt} fill sizes="(min-width: 768px) 80vw, 100vw" className="object-cover" />
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <p className="text-base md:text-lg font-medium text-label leading-8">{project.summary}</p>
          <dl className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-placeholder">What we delivered</dt>
              <dd><Tags tags={project.tags} /></dd>
            </div>
            {project.year && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-placeholder">Year</dt>
                <dd className="text-sm font-medium">{project.year}</dd>
              </div>
            )}
            {project.link && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-placeholder">Live</dt>
                <dd>
                  <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium highlight underline underline-offset-4">
                    {project.link.label} ↗
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      {project.challenges && (
        <section aria-labelledby="challenge" className="flex flex-col gap-12">
          <SectionHeading id="challenge" eyebrow="The brief" title="The challenge" />
          <ol className="grid gap-4 lg:grid-cols-3">
            {project.challenges.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 120} className="flex flex-col gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-indigo-500">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-base font-semibold text-label leading-7">{c}</p>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {project.approach && (
        <section aria-labelledby="approach" className="flex flex-col gap-4">
          <SectionHeading id="approach" eyebrow="How we got there" title="Our approach" />
          <ol className="mt-8 flex flex-col">
            {project.approach.map((phase, i) => (
              <Reveal as="li" key={phase.name} className="grid gap-6 border-t border-transparentbg py-10 lg:grid-cols-[14rem_1fr] lg:gap-16">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-indigo-500">{i + 1}</span>
                  <h3>{phase.name}</h3>
                </div>
                <div className="flex flex-col gap-6">
                  {phase.intro && <p className="text-sm md:text-base font-medium text-caption leading-7">{phase.intro}</p>}
                  {phase.items && (
                    <dl className="grid gap-4 md:grid-cols-2">
                      {phase.items.map((item) => (
                        <div key={item.title} className="flex flex-col gap-2 rounded-2xl border border-transparentbg bg-background p-6">
                          <dt className="font-semibold text-label">{item.title}</dt>
                          <dd className="text-sm font-medium text-caption leading-6">{item.text}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {project.highlights && (
        <section aria-labelledby="visuals" className="flex flex-col gap-20">
          <SectionHeading id="visuals" eyebrow="The work" title={project.highlightsTitle ?? "Design highlights"} />
          {project.highlights.map((h, i) => (
            <HighlightBlock key={h.title} h={h} index={i} />
          ))}
        </section>
      )}

      {project.gallery && (
        <section aria-label="Gallery" className="flex flex-col gap-6 -mt-20">
          {project.gallery.map((img) => (
            <Reveal key={img.alt}>
              <Frame image={img} sizes="(min-width: 768px) 80vw, 100vw" />
            </Reveal>
          ))}
        </section>
      )}

      {project.results && (
        <section aria-labelledby="results" className="flex flex-col gap-12">
          <SectionHeading id="results" eyebrow="The outcome" title="Results" />
          <ul className="grid gap-4 md:grid-cols-3">
            {project.results.map((r) => (
              <li key={r} className="px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole text-base font-semibold text-label">{r}</li>
            ))}
          </ul>
        </section>
      )}

      {quote && (
        <Reveal as="section" className="flex flex-col gap-8 items-center text-center max-w-3xl mx-auto">
          <blockquote className="text-lg md:text-2xl font-medium text-label leading-snug">“{quote.quote}”</blockquote>
          <div className="flex gap-3 items-center">
            <Image src={quote.avatar} alt="" width={48} height={48} className="rounded-full" />
            <div className="flex flex-col text-left">
              <p className="text-sm text-label font-semibold">{quote.name}</p>
              <p className="text-xs font-medium text-placeholder">{quote.role}{quote.note && ` · ${quote.note}`}</p>
            </div>
          </div>
        </Reveal>
      )}

      <section className="flex flex-col gap-6 items-center text-center px-6 py-16 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
        <h2>Start a similar project</h2>
        <p className="text-sm font-medium text-caption leading-6 max-w-lg">
          Tell us where you are and where you want to go. A 30-minute call is enough to scope it.
        </p>
        <BookCall location={`case-study:${project.slug}`} />
      </section>

      <nav aria-label="More projects" className="grid grid-cols-2 gap-4 border-t border-transparentbg pt-8">
        <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-1">
          <span className="text-xs font-medium text-placeholder">← Previous</span>
          <span className="font-semibold text-label group-hover:text-caption transition-colors">{prev.title}</span>
        </Link>
        <Link href={`/work/${next.slug}`} className="group flex flex-col gap-1 items-end text-right">
          <span className="text-xs font-medium text-placeholder">Next →</span>
          <span className="font-semibold text-label group-hover:text-caption transition-colors">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
