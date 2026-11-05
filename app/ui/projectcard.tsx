import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Project } from "../data/projects";
import Porthole from "./porthole";

/** "Case study →" tag that surfaces once the cover lines up with its hole (or on hover). */
const tag = (
  <span className="absolute bottom-4 right-4 z-4 rounded-full bg-void/70 px-4 py-2 text-xs font-semibold text-label backdrop-blur-md opacity-0 translate-y-2 transition-all duration-500 group-data-aligned/hole:opacity-100 group-data-aligned/hole:translate-y-0 group-hover/card:opacity-100 group-hover/card:translate-y-0">
    Case study →
  </span>
);

export default function ProjectCard({
  project,
  sizes,
  eager = false,
  index,
  large = false,
}: {
  project: Project;
  sizes: string;
  eager?: boolean;
  /** Shown as 01, 02… in front of the title. */
  index?: number;
  /** Editorial layout: hole and text side by side, alternating. */
  large?: boolean;
}) {
  const flip = large && index !== undefined && index % 2 === 1;
  return (
    <Link
      href={`/work/${project.slug}`}
      className={clsx(
        "group/card grid gap-6",
        large && "md:grid-cols-12 md:items-center md:gap-12",
      )}
    >
      <Porthole
        className={clsx(
          "w-full rounded-[28px] md:rounded-[36px]",
          large ? "aspect-[4/3] md:aspect-[16/10] md:col-span-7" : "aspect-[4/3]",
          flip && "md:order-2 md:col-start-6",
        )}
        overlay={tag}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
        />
      </Porthole>
      <div className={clsx("flex flex-col gap-3 px-1", large && "md:col-span-5", flip && "md:order-1 md:col-start-1 md:text-right md:items-end")}>
        <p className="eyebrow">
          {index !== undefined && <span className="text-label">{String(index + 1).padStart(2, "0")}</span>}
          {project.sector}
        </p>
        <h3 className={clsx("normal-case! transition-colors group-hover/card:text-white", large && "text-3xl! md:text-5xl! font-bold! tracking-tight!")}>
          {project.title}
        </h3>
        <p className={clsx("font-medium text-caption", large ? "text-base leading-7 max-w-sm" : "text-sm leading-6")}>{project.tagline}</p>
      </div>
    </Link>
  );
}
