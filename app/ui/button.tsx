import Link from "next/link";

export default function Button ({text="", target=""}){
    return (
        <Link
        href=''
        target={target}
        className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full w-fit max-w-60 overflow-hidden shadow-whitepers active:shadow-none">
            <div className="flex transition-all px-16 py-4 bg-bodybg rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                <span className="inline">{text}</span>
            </div>
        </Link>
    );
}