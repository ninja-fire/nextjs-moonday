import gradient from '../../public/gradient.webp';
import looterlogo from "../../public/looterlogo.webp";
import looterswap from "../../public/looterswap.webp";
import looterMascot from "../../public/looterMascot.webp";
import looterTreasure from "../../public/lootertreasure.webp";
import lootercard from "../../public/lootercard.webp";
import Image from 'next/image';
import Link from 'next/link';

export default function LooterFolio () {
    return(
        <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
                    <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Unleash the power of first impressions</p>
                    <h2>All you need for your launch</h2>
                    <p className="text-sm font-medium text-caption leading-6">Step into the arena armed with the ultimate launch toolkit. Our battle-tested landing pages are designed to maximize conversions and pump your project to the moon. From captivating designs to strategic UX, we've got you covered.</p>
                    <div className="flex gap-2 w-full flex-wrap">
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">Branding</span>
                        </div>
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">UX/UI Design</span>
                        </div>
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">3D Design</span>
                        </div>
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">Pitch Deck</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                        <Link href={"/projects/looter"} className="flex grow lg:grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={looterlogo} width={2500} height={1562} alt="" className="flex absolute w-full scale-[140%] hover:scale-[144%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority quality={50}  src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 top-[8rem] blur-2xl scale-y-[250%]" />
                        </Link>
                        <Link href={"/projects/looter"} className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={looterswap} width={2500} height={1562} alt="" className="flex absolute w-full scale-[180%] md:scale-[100%] md:hover:scale-[104%] transition-all ease-in hover:brightness-[1.16]" />
                        </Link>
                    </div>
                    <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                        <Link href={"/projects/looter"} className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={lootercard} width={2500} height={1801} alt="" className="flex absolute w-full scale-[180%] hover:scale-[184%] md:scale-[112%] md:hover:scale-[116%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority quality={50}  src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 bottom-[8rem] blur-2xl scale-y-[250%]" />
                        </Link>
                        <div className='flex gap-6 flex-wrap md:flex-nowrap w-full'>
                        <Link href={"/projects/looter"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={looterTreasure} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-40 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </Link>
                        <Link href={"/projects/looter"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={looterMascot} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-24 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}