import Image from "next/image";
import imgex from "../../public/image 3.png";


export default function FolioCard() {
    return (
        <div className="flex gap-4 justify-center items-center">
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background hidden lg:flex"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background hidden md:flex"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background hidden md:flex"><Image src={imgex} alt="" className="h-full" /></div>
      </div>
    );
}