import Image from "next/image";
import Link from "next/link";
import hydnlogo from '../../public/logopartners/hydnlogo.svg';
import block3logo from '../../public/logopartners/block3logo.png';
import radishlogo from '../../public/logopartners/radishlogo.svg';
import chainimpactlogo from '../../public/logopartners/chainimpact.svg';
import logoimg from '../../public/logo/logoimg.svg';

export default function Partners() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap w-full gap-16 justify-center items-center">
      <div className="flex flex-col relative justify-center items-center rounded-3xl border border-transparentbg overflow-hidden">
      <Image src={logoimg} alt="" className="flex absolute w-full scale-[2] mix-blend-overlay z-[-2] opacity-80"/>
        <div className="flex">
          <Link href="https://radish.la/" target="_blank" className="flex flex-col gap-4 p-8 justify-center items-center brightness-[0.90] hover:brightness-[1.08] transition-all">
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[16px]">
              <span className="text-start text-sm font-medium text-label inline">Development</span>
            </div>
            <Image src={radishlogo} alt="" className="scale-125" />
          </Link>
          <Link href="https://www.chainimpact.xyz/" target="_blank" className="flex flex-col gap-4 p-8 justify-center items-center brightness-[0.90] hover:brightness-[1.08] transition-all">
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label inline">Management</span>
            </div>
            <Image src={chainimpactlogo} alt="" className="scale-125" />
          </Link>
        </div>
        <div className="flex">
          <Link href="https://block3.pr/" target="_blank" className="flex flex-col gap-4 p-8 justify-center items-center brightness-[0.90] hover:brightness-[1.08] transition-all">
            <Image src={block3logo} alt="" className="scale-125" />
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label inline">Marketing</span>
            </div>
          </Link>
          <Link href="https://hydnsec.com/" target="_blank" className="flex flex-col gap-4 p-8 justify-center items-center brightness-[0.90] hover:brightness-[1.08] transition-all">
            <Image src={hydnlogo} alt="" className="scale-125" />
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label inline">Security Audit</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center grow gap-4">
        <h2>A complete Hub</h2>
        <p className="text-sm text-center lg:text-start font-medium text-caption leading-6">
        Do you require a comprehensive suite of services to bring your project to life? <br/> From ideation to product launch, Moonday can connect you with top-tier partners to assist in realizing your vision.  
        </p>
      </div>
    </div>
  );
}