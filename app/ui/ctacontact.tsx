import Image from "next/image";
import Button from "./button";
import qrcode from '../../public/qrcode.svg';
import Link from "next/link";


export default function CtaContact() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center">
      <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center grow gap-4">
        <h2>Contact us</h2>
        <p className="text-sm text-center lg:text-start font-medium text-caption leading-6">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
      </div>
      <div className="flex grow flex-wrap lg:flex-nowrap gap-12 p-8 justify-center lg:justify-start items-center rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
        <div className="flex grow justify-center items-center p-6 border border-dashed border-transparentbg rounded-2xl">
          <Image src={qrcode} alt="" width={160} height={160} className="max-w-fit" />
        </div>
        <div className="flex flex-col gap-3 justify-center lg:justify-start lg:items-start items-center">
          <h3>Your intro call</h3>
          <p className="text-sm text-center lg:text-start font-medium text-caption leading-6">It is always easier to introduce your project from your own voice.</p>
          <Link
            href="https://cal.com/moondaystudio/introcall"
            target="_blank"
            className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
            <div className="flex bgeffect transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
              <span className="inline">Book your call</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}