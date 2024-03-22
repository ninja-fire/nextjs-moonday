import Link from "next/link";

export default function Button({ text = "", target = "", href = "" }) {
    return (
        <Link
            href={href}
            target={target}
            className="flex buttonBG transition-all justify-center items-center p-px rounded-full w-full overflow-hidden shadow-whitepers active:shadow-none">
            <div className="flex transition-all justify-center items-center px-16 py-4 bg-bodybg w-full rounded-full text-label text-sm font-semibold">
                <span className="inline">{text}</span>
            </div>
        </Link>
    );
}