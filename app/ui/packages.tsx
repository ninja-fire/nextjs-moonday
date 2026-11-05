import Image from "next/image";
import gradient from '../../public/gradient.webp';
import { packages } from "../data/site";
import Reveal from "./reveal";

export default function Packages() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 w-full">
      {packages.map((p, i) => (
        <Reveal as="li" key={p.slug} delay={(i % 2) * 120} className="flex flex-col relative gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole overflow-hidden">
          <Image quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute -left-12 blur-xl h-[200%] top-0 w-[2rem]" />
          <div className="flex items-baseline gap-2 flex-wrap">
            <h3>{p.title}</h3>
            <p className="text-sm font-medium bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-indigo-500">{p.duration}</p>
          </div>
          <p className="text-sm font-medium text-caption leading-6">{p.text}</p>
          <ul className="flex flex-col gap-2">
            {p.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-label">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-baseline gap-2 mt-auto">
            <p className="text-sm font-medium text-placeholder">{p.startsAt ? "Starts at" : "Pricing"}</p>
            <p className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-200 to-indigo-500">{p.startsAt ?? "On request"}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
