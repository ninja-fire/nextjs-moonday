import Image from "next/image";
import Link from "next/link";
import moon from "../../public/moon.svg";
import sun from "../../public/sun.svg";
import BookCall from "./bookcall";

export default function Hero() {
  return (
    <section className="flex flex-col gap-12 justify-center items-center min-h-[48vh]">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="flex flex-col gap-2 items-center text-center">
          <span className="flex gap-0 md:gap-3 justify-center items-center flex-wrap">
            We design <Image src={moon} alt="" className="scale-75 md:scale-100" /> your
          </span>
          <span className="flex gap-0 md:gap-3 justify-center items-center flex-wrap">
            brand & product <Image src={sun} alt="" className="scale-75 md:scale-100" /> faster
          </span>
        </h1>
        <p className="text-sm md:text-base font-medium text-center text-caption leading-7 max-w-xl">
          <span className="highlight">Brand, product and motion design</span> for tech & Web3 startups.
          10+ years and 60+ brands, from global names to DeFi launches.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <BookCall location="hero" />
        <Link href="/work" className="text-sm font-semibold text-caption hover:text-label transition-colors px-6 py-4">
          See our work →
        </Link>
      </div>
    </section>
  );
}
