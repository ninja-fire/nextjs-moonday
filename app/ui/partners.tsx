import Image from "next/image";
import hydnlogo from '../../public/logopartners/hydnlogo.svg';
import bhlogo from '../../public/logopartners/bhlogo.svg';
import block3logo from '../../public/logopartners/block3logo.png';
import radishlogo from '../../public/logopartners/radishlogo.svg';
import logoimg from '../../public/logo/logoimg.svg'

export default function Partners() {
  return (
    <div className="flex flex-wrap xl:flex-nowrap w-full gap-16 justify-center items-center">
      <div className="flex flex-col relative justify-center items-center rounded-3xl border border-transparentbg overflow-hidden">
      <Image src={logoimg} alt="" className="flex absolute w-full mix-blend-overlay"/>
        <div className="flex">
          <div className="flex flex-col gap-4 p-8 justify-center items-center">
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Development</span>
            </div>
            <Image src={radishlogo} alt="" />
          </div>
          <div className="flex flex-col gap-4 p-8 justify-center items-center">
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Investment</span>
            </div>
            <Image src={bhlogo} alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-4 p-8 justify-center items-center">
            <Image src={block3logo} alt="" />
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Marketing</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8 justify-center items-center">
            <Image src={hydnlogo} alt="" />
            <div className="flex px-4 py-2 max-w-fit rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Security Audit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center grow gap-4">
        <h2>A complete Hub</h2>
        <p className="text-sm text-center lg:text-start font-medium text-caption">You need a full range of services to build your project?
          From ideation to product launch, Moonday can link you to high quality partners to help you build your idea.</p>
      </div>
    </div>
  );
}