import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import planet from "../../public/planet.png";
import { links } from "../data/site";
import TrackLead from "./track";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

export default async function Page({ searchParams }: PageProps<"/thanks">) {
  const { via } = await searchParams;
  const viaCall = via === "call";
  return (
    <section className="flex flex-col gap-8 items-center justify-center text-center max-w-(--breakpoint-sm)">
      <TrackLead via={typeof via === "string" ? via : ""} />
      <Image src={planet} alt="" width={320} height={320} preload />
      <h1>{viaCall ? "Your call is booked" : "Request received"}</h1>
      <p className="text-sm font-medium text-caption leading-6">
        {viaCall
          ? "You'll get a confirmation email with the meeting link. Bring your deck, your references, or just your idea."
          : "Thanks for telling us about your project. We'll get back to you soon, usually with a few questions or a link to book a call."}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link href="/work" className="flex justify-center items-center px-16 py-4 rounded-full bg-label text-void text-sm font-semibold transition-colors hover:bg-white">
          See our work
        </Link>
        <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center px-16 py-4 text-label bg-bodybg hover:bg-transparentbg text-sm font-semibold rounded-full border border-transparentbg">
          Chat on Telegram
        </a>
      </div>
    </section>
  );
}
