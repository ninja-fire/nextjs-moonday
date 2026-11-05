import type { Metadata } from "next";
import Image from "next/image";
import servicesIllu from "../../public/servicesIllu.svg";
import Packages from "../ui/packages";
import Process from "../ui/process";
import Faq from "../ui/faq";
import FinalCta from "../ui/finalcta";
import BookCall from "../ui/bookcall";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand launch, product design, website design and motion & content. Four design packages with clear starting prices, handed off as developer-ready files.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <section className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
          <h1>Our services</h1>
          <p className="text-sm text-center lg:text-start font-medium text-caption leading-6 max-w-xl">
            Brand, product, website and motion design for tech & Web3 startups. We design, your developers or no-code tool build:
            every project ends with <span className="highlight">developer-ready Figma files</span>.
          </p>
          <BookCall location="services-hero" />
        </div>
        <div className="hidden lg:flex relative justify-center items-center w-full min-h-64"><Image src={servicesIllu} alt="" className="flex absolute scale-75" /></div>
      </section>

      <Packages />
      <Process />
      <Faq />
      <FinalCta location="services" />
    </>
  );
}
