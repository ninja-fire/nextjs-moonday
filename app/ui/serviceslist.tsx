import Link from "next/link";
import Image from "next/image";
import arrow from '../../public/icons/arrow.svg';
import gradient from '../../public/gradient.webp';

export default function ServicesList() {
    return (
        <div className="flex flex-col gap-4 items-center w-full justify-center">
            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
                <div className="flex flex-col relative w-80 grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole overflow-hidden">
                    <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute -left-12 blur-xl h-[400%] md:h-[200%] top-0 w-[2rem]" />
                    <div className="flex items-baseline gap-2">
                        <h3>Website Design</h3>
                        <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">2-4 days</p>
                    </div>
                    <p className="text-start text-sm font-medium text-caption leading-6">
                        Empower your decentralized vision with designs that embody the ethos of Web3, seamlessly integrating blockchain technology to create immersive digital experiences that resonate with your community and drive adoption.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">800$</p>
                        </div>
                        <Link target="_blank" href="https://t.me/moondaydesign">
                            <Image src={arrow} alt="" className="opacity-80 hover:opacity-100 active:opacity-100 scale-[94%] hover:scale-[100%] transition-all" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col relative w-80 overflow-hidden grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
                    <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute -left-12 -top-64 blur-xl h-[400%] w-[2rem] md:hidden" />
                    <div className="flex items-baseline gap-2">
                        <h3>Branding design</h3>
                        <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">4-7 days</p>
                    </div>
                    <p className="text-start text-sm font-medium text-caption leading-6 h-full">
                        Establish your Web3 identity with designs that embody authenticity, trust, and innovation, creating brand experiences that resonate deeply with your community and position you as a leader in the decentralized ecosystem.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">1200$</p>
                        </div>
                        <Link target="_blank" href="https://t.me/moondaydesign">
                            <Image src={arrow} alt="" className="opacity-80 hover:opacity-100 active:opacity-100 scale-[94%] hover:scale-[100%] transition-all" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
                <div className="flex flex-col w-80 relative overflow-hidden grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
                    <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute -left-12 blur-xl h-[400%] md:h-[200%] -bottom-64 md:bottom-0 w-[2rem]" />
                    <div className="flex items-baseline gap-2">
                        <h3>Dapp design</h3>
                        <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">4-12 days</p>
                    </div>
                    <p className="text-start text-sm font-medium text-caption leading-6 h-full">
                        Revolutionize the decentralized landscape with designs that prioritize user empowerment and decentralization, fostering trust and transparency while delivering intuitive interfaces that enable seamless interaction with your dapp.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">1800$</p>
                        </div>
                        <Link target="_blank" href="https://t.me/moondaydesign">
                            <Image src={arrow} alt="" className="opacity-80 hover:opacity-100 active:opacity-100 scale-[94%] hover:scale-[100%] transition-all" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-80 relative overflow-hidden grow gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
                    <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute -left-12 blur-xl h-[400%] bottom-0 w-[2rem] md:hidden" />
                    <div className="flex items-baseline gap-2">
                        <h3>Pitch Deck</h3>
                        <p className="text-start text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">1-3 days</p>
                    </div>
                    <p className="text-start text-sm font-medium text-caption leading-6 h-full">
                        Push your Web3 project to success with decks that showcase your vision, technology, and community impact, compelling investors to join your mission to reshape the future of finance, governance, and beyond.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <p className="text-start text-sm font-medium text-placeholder">Starts at</p>
                            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">400$</p>
                        </div>
                        <Link target="_blank" href="https://t.me/moondaydesign">
                            <Image src={arrow} alt="" className="opacity-80 hover:opacity-100 active:opacity-100 scale-[94%] hover:scale-[100%] transition-all" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}