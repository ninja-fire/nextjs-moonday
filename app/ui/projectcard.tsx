import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, sizes, eager = false }: { project: Project; sizes: string; eager?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-[1.08]"
        />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <p className="eyebrow text-sm!">{project.sector}</p>
        <h3 className="normal-case!">{project.title}</h3>
        <p className="text-sm font-medium text-caption leading-6">{project.tagline}</p>
      </div>
    </Link>
  );
}
