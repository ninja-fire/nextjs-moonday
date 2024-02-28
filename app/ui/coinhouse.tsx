import Image from 'next/image';
import Link from 'next/link';
import coinhouseLogo from '../../public/coinhouselogo.svg';
import coinhouseMockup from '../../public/coinhouse-mockup-pages.webp';
import coinhouseCoins from '../../public/coinhouseCoins.webp';
import coinhouseGallery from '../../public/Coinhouse-gallery.webp';
import coinhouseCarte from '../../public/cartevoeux-gallery.webp';


export default function CoinFolio () {
    return(
        <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
                    <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>A tailored landing page that converts</p>
                    <h2>Reinforce your brand and community</h2>
                    <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
                    <div className="flex gap-2 w-full flex-wrap">
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">Rebranding</span>
                        </div>
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">Landing Page</span>
                        </div>
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">Social Content</span>
                        </div>
                        <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                            <span className="text-start text-sm font-medium text-label">Motion Design</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                        <Link href={"/projects/coinhouse"} className="group flex grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-white border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={coinhouseLogo} alt="" className="scale-[80%] group-hover:scale-[84%] transition-all ease-in" />
                        </Link>
                        <Link href={"/projects/coinhouse"} className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={coinhouseMockup} width={3000} height={2000} alt="" className="flex absolute w-full scale-[140%] md:scale-[100%] md:hover:scale-[104%] transition-all ease-in hover:brightness-[1.04]" />
                        </Link>
                    </div>
                    <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                        <Link href={"/projects/coinhouse"} className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={coinhouseGallery} width={2694} height={2022} alt="" className="flex absolute w-full scale-[120%] md:scale-[100%] md:hover:scale-[104%] transition-all ease-in hover:brightness-[1.04]" />
                        </Link>
                        <div className='flex gap-6 flex-wrap md:flex-nowrap w-full'>
                        <Link href={"/projects/coinhouse"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={coinhouseCoins} width={1225} height={1500} alt="" className="flex absolute w-full scale-[108%] hover:scale-[112%] transition-all ease-in hover:brightness-[1.04]" />
                        </Link>
                        <Link href={"/projects/coinhouse"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                            <Image priority={true} src={coinhouseCarte} width={2694} height={2022} alt="" className="flex absolute w-full scale-[180%] hover:scale-[184%] transition-all ease-in hover:brightness-[1.04]" />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}