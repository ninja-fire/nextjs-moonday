import Image from "next/image";
import imgex from "../../public/image 3.png";


export default function FolioCard() {
    return (
        <div className="flex gap-4 justify-center items-center w-full">
        <div className="flex flex-nowrap relative w-full rounded-full justify-center items-center h-80 overflow-auto bg-background border border-transparentbg shadow-innerwhole">
          <Image src={imgex} width={518} height={369} alt="" className="flex absolute center w-full" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-auto bg-background border border-transparentbg shadow-innerwhole">
          <Image src={imgex} alt="" className="flex absolute center w-full scale-[280%]" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-auto bg-background border border-transparentbg shadow-innerwhole">
          <Image src={imgex} alt="" className="flex absolute center w-full" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-auto bg-background border border-transparentbg shadow-innerwhole hidden lg:flex">
          <Image src={imgex} alt="" className="flex absolute center w-full" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-auto bg-background border border-transparentbg shadow-innerwhole hidden md:flex">
          <Image src={imgex} alt="" className="flex absolute center w-full" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-auto bg-background border border-transparentbg shadow-innerwhole hidden md:flex">
          <Image src={imgex} alt="" className="flex absolute center w-full" />
          </div>
      </div>
    );
}