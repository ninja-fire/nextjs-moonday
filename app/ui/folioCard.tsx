import Image from "next/image";
import looterlogo from "../../public/looterlogo.webp";
import looter from "../../public/looter.webp";
import coinhouse from "../../public/coinhouse.webp";
import trooper from "../../public/trooper.webp";
import trooper2 from "../../public/trooperlogo.webp";
import family from "../../public/family.webp";
import gradient from '../../public/gradient.webp';

export default function FolioCard() {
    return (
        <div className="flex gap-4 justify-center items-center w-full">
        <div className="flex flex-nowrap relative w-full rounded-full justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
        <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute h-full right-48 blur-2xl z-1"/>
          <Image src={looterlogo} width={2500} height={1562} alt="" className="flex absolute w-full rotate-[-30deg] scale-[320%]" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
          <Image src={coinhouse} width={2500} height={1890} alt="" className="flex absolute center w-full scale-[400%] md:scale-[280%]" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
          <Image src={family} width={1080} height={1080} alt="" className="flex absolute center w-full scale-[280%]" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole hidden lg:flex">
        <Image src={trooper} width={2500} height={1794} alt="" className="flex absolute center w-full scale-[280%]" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole hidden md:flex">
          <Image src={looter} width={2500} height={1801} alt="" className="flex absolute center w-full scale-[240%]" />
          </div>
        <div className="flex relative w-full rounded-full justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole hidden md:flex">
          <Image src={trooper2} alt="" className="flex absolute center w-full rotate-[-30deg] scale-[190%]" />
          </div>
      </div>
    );
}