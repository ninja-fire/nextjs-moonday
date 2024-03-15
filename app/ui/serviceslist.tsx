import Link from "next/link";
import Image from "next/image";
import projectsicon from '../../public/icons/projects.svg';
import arrow from '../../public/icons/arrow.svg';
import Button from "./button";
import gradient from '../../public/gradient.webp';

export default function ServicesList() {
    return (
        <div className="flex flex-col gap-8 w-full justify-center items-center">
            <h2>Our Services</h2>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center w-full justify-center">
                <div className="flex flex-wrap gap-4 w-full">
                    <div className="flex flex-col relative w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole overflow-hidden">
                    <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute -left-8 blur-xl h-[200%] top-0 w-[2rem]" />
                        <div className="flex items-baseline gap-2">
                            <h3>Website Design</h3>
                            <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">2-4 days</p>
                        </div>
                        <p className="text-start text-sm font-medium text-caption leading-6">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                                <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                                <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">800$</p>
                            </div>
                            {/* <Image src={arrow} alt="" /> */}
                        </div>
                    </div>
                    <div className="flex flex-col relative overflow-hidden w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
                    <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute -left-8 blur-xl h-[200%] bottom-0 w-[2rem]" />
                        <div className="flex items-baseline gap-2">
                            <h3>Branding design</h3>
                            <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">4-7 days</p>
                        </div>
                        <p className="text-start text-sm font-medium text-caption leading-6">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                                <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                                <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">1200$</p>
                            </div>
                            {/* <Image src={arrow} alt="" /> */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 w-full">
                    <div className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
                        <div className="flex items-baseline gap-2">
                            <h3>Dapp design</h3>
                            <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">4-12 days</p>
                        </div>
                        <p className="text-start text-sm font-medium text-caption leading-6">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                                <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                                <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">1800$</p>
                            </div>
                            {/* <Image src={arrow} alt="" /> */}
                        </div>
                    </div>
                    <div className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
                        <div className="flex items-baseline gap-2">
                            <h3>Pitch Deck</h3>
                            <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">1-3 days</p>
                        </div>
                        <p className="text-start text-sm font-medium text-caption leading-6">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                                <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                                <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">400$</p>
                            </div>
                            {/* <Image src={arrow} alt="" /> */}
                        </div>
                    </div>
                </div>

                {/* <Link href="/services/metaverse" className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex items-baseline gap-2">
              <h3>Metaverse</h3>
              <p className="text-start text-sm font-medium text-caption">2-7 days</p>
            </div>
            <p className="text-start text-sm font-medium text-caption">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <p className="text-start text-sm font-medium text-caption">Starts at</p>
                <p className="font-md text-label font-bold">800$</p>
              </div>
              <Image src={arrow} alt="" />
            </div>
          </Link>

          <Link href="/services/consulting" className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex items-baseline gap-2">
              <h3>Consulting</h3>
              <p className="text-start text-sm font-medium text-caption">2-7 days</p>
            </div>
            <p className="text-start text-sm font-medium text-caption">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <p className="text-start text-sm font-medium text-caption">Starts at</p>
                <p className="font-md text-label font-bold">800$</p>
              </div>
              <Image src={arrow} alt="" />
            </div>
          </Link> */}
            </div>
            <div className="flex grow md:grow-0">
                <Button text="Discover all our services" target="" href="/services" />
            </div>
        </div>
    );
}