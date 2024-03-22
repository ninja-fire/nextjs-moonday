import Image from "next/image";
import computer from '../../public/computer.png';
import Link from "next/link";
import arrow from '../../public/icons/arrow.svg';
import partners from "../../public/partners.png";
import Wishlist from "../ui/wishlist";
import Partners from "../ui/partners";

export default function Page() {
    return (
      <>
      <div className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center">
        <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center grow gap-4">
          <h2>Our Work</h2>
          <p className="text-sm text-center lg:text-start font-medium text-caption">It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
        </div>
        <div><Image priority src={computer} alt="" /></div>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center">
        <h2>Discover our services</h2>
        <div className="flex gap-4 items-center w-full justify-center">
          <Link href="/services/webdesign" className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex items-baseline gap-2">
              <h3>Website Design</h3>
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

          <Link href="/services/branding" className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex items-baseline gap-2">
              <h3>Branding design</h3>
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

          <Link href="/services/dappdesign" className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex items-baseline gap-2">
              <h3>Dapp design</h3>
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

          <Link href="/services/nftcollection" className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex items-baseline gap-2">
              <h3>NFT Collection</h3>
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

          <Link href="/services/metaverse" className="flex flex-col w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
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
          </Link>
        </div>
      </div>

      <Partners />

      <Wishlist />
      </>
    );
  }