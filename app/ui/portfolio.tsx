import gradient from '../../public/gradient.webp';
import looterlogo from "../../public/looterlogo.webp";
import looterswap from "../../public/looterswap.webp";
import looterMascot from "../../public/looterMascot.webp";
import looterTreasure from "../../public/lootertreasure.webp";
import lootercard from "../../public/lootercard.webp";
import Image from 'next/image';

export default function Portfolio() {
    return (
        <div className="flex flex-col gap-40 w-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
                    <p className='text-md font-semibold'>A tailored landing page that converts</p>
                    <h2>No template, no bullshit</h2>
                    <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                    <div className="flex gap-2">
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
                    <div className="flex gap-6">
                        <div className="flex grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterlogo} width={2500} height={1562} alt="" className="flex absolute w-full scale-[140%] hover:scale-[144%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 top-[8rem] blur-2xl scale-y-[250%]" />
                        </div>
                        <div className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterswap} width={2500} height={1562} alt="" className="flex absolute w-full hover:scale-[104%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={lootercard} width={2500} height={1801} alt="" className="flex absolute w-full scale-[112%] hover:scale-[116%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 bottom-[8rem] blur-2xl scale-y-[250%]" />
                        </div>
                        <div className="flex grow-0 flex-nowrap relative w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterTreasure} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-40 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                        <div className="flex grow-0 flex-nowrap relative w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterMascot} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-24 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
                    <p className='text-md font-semibold'>A tailored landing page that converts</p>
                    <h2>No template, no bullshit</h2>
                    <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                    <div className="flex gap-2">
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
                    <div className="flex gap-6">
                        <div className="flex grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterlogo} width={2500} height={1562} alt="" className="flex absolute w-full scale-[140%] hover:scale-[144%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 top-[8rem] blur-2xl scale-y-[250%]" />
                        </div>
                        <div className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterswap} width={2500} height={1562} alt="" className="flex absolute w-full hover:scale-[104%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={lootercard} width={2500} height={1801} alt="" className="flex absolute w-full scale-[112%] hover:scale-[116%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 bottom-[8rem] blur-2xl scale-y-[250%]" />
                        </div>
                        <div className="flex grow-0 flex-nowrap relative w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterTreasure} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-40 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                        <div className="flex grow-0 flex-nowrap relative w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterMascot} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-24 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
                    <p className='text-md font-semibold'>A tailored landing page that converts</p>
                    <h2>No template, no bullshit</h2>
                    <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                    <div className="flex gap-2">
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
                    <div className="flex gap-6">
                        <div className="flex grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterlogo} width={2500} height={1562} alt="" className="flex absolute w-full scale-[140%] hover:scale-[144%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 top-[8rem] blur-2xl scale-y-[250%]" />
                        </div>
                        <div className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterswap} width={2500} height={1562} alt="" className="flex absolute w-full hover:scale-[104%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={lootercard} width={2500} height={1801} alt="" className="flex absolute w-full scale-[112%] hover:scale-[116%] transition-all ease-in hover:brightness-[1.16]" />
                            <Image priority src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 bottom-[8rem] blur-2xl scale-y-[250%]" />
                        </div>
                        <div className="flex grow-0 flex-nowrap relative w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterTreasure} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-40 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                        <div className="flex grow-0 flex-nowrap relative w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image src={looterMascot} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-24 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}