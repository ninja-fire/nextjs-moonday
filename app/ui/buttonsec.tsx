import Link from "next/link";

export default function ButtonSec ({text="", target=""}){
    return (
        <Link
        href=''
        target={target}
        className="flex transition-all justify-center items-center px-16 py-4 text-label bg-bodybg hover:bg-transparentbg text-sm font-semibold rounded-full w-full overflow-hidden border border-transparentbg">
                <span className="inline">{text}</span>
        </Link>
    );
}