import Image from "next/image";
import Button from "./button";
import qrcode from '../../public/qrcode.svg';
import Link from "next/link";
import gradient from '../../public/gradient.webp';

export default function CtaContact() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center">
      <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center grow gap-4">
        <h2>Contact us</h2>
        <p className="text-sm text-center lg:text-start font-medium text-caption leading-6">
          Ready to take the next step? Book a 30-minute intro call with us now and let's bring your vision to life together.
        </p>
      </div>
      <div className="flex relative overflow-hidden lg:overflow-visible grow flex-col lg:flex-row gap-12 p-8 justify-center lg:justify-start items-center rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
      <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute lg:hidden -left-12 blur-xl h-[200%] bottom-0 w-[2rem]" />
        <div className="flex grow justify-center items-center p-6 border border-dashed border-transparentbg rounded-2xl">
          <Image src={qrcode} alt="" width={160} height={160} className="max-w-fit" />
        </div>
        <div className="flex flex-col gap-3 justify-center lg:justify-start lg:items-start items-center">
          <h3>Your intro call</h3>
          <p className="text-sm text-center lg:text-start font-medium text-caption leading-6">It is always easier to introduce your project in your own voice.</p>
          <Link
            href="https://cal.com/moondaystudio/introcall"
            target="_blank"
            className="flex buttonBG transition-all justify-center items-center p-px rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
            <div className="flex bgeffect transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
              <span className="inline">Book your call</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}