import Link from "next/link";
import Image from "next/image";
import gradient from '../../public/gradient.png'

export default function Button ({text="", target=""}){
    return (
        <Link
        href=''
        target={target}
        className="buttonBG transition-all inline-flex justify-center items-center p-0.5 rounded-full w-fit overflow-hidden shadow-whitepers active:shadow-none">
            <span className="transition-all flex px-8 py-4 bg-bodybg rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">{text}</span>
        </Link>
    );
}