import type { Metadata } from "next";
import Image from "next/image";
import projectIllu from "../../public/projectsIllu.svg";
import { projects } from "../data/projects";
import ProjectCard from "../ui/projectcard";
import Reveal from "../ui/reveal";
import FinalCta from "../ui/finalcta";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in brand identity, product UX/UI, websites and motion, from DeFi launches to global fintech.",
  alternates: { canonical: "/work" },
};

export default function Page() {
  return (
    <>
      <section className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4">
          <h1>Our work</h1>
          <p className="text-sm text-center lg:text-start font-medium text-caption leading-6 max-w-xl">
            Brand identities, products and campaigns for startups and established names. Each case study shows the challenge, how we approached it and what we delivered.
          </p>
        </div>
        <div className="hidden lg:flex relative justify-center items-center w-full min-h-64"><Image src={projectIllu} alt="" className="flex absolute scale-75" /></div>
      </section>

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 w-full">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 120}>
            <ProjectCard project={p} sizes="(min-width: 768px) 50vw, 100vw" eager={i < 2} />
          </Reveal>
        ))}
      </div>

      <FinalCta location="work" />
    </>
  );
}
