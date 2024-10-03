import Image from "next/image";
import projectIllu from "../../public/projectsIllu.svg"
import Link from "next/link";
import Wishlist from "../ui/wishlist";
import Partners from "../ui/partners";
import coinhouseLogo from '../../public/coinhouselogo.svg';
import coinhouseMockup from '../../public/coinhouse-mockup-pages.webp';
import coinhouseCoins from '../../public/coinhouseCoins.webp';
import coinhouseGallery from '../../public/Coinhouse-gallery.webp';
import coinhouseCarte from '../../public/cartevoeux-gallery.webp';
import looterlogo from "../../public/looterlogo.webp";
import looterswap from "../../public/looterswap.webp";
import looterMascot from "../../public/looterMascot.webp";
import looterTreasure from "../../public/lootertreasure.webp";
import lootercard from "../../public/lootercard.webp";
import gradient from '../../public/gradient.webp';
import linxo1 from '../../public/linxo1.webp';
import linxo2 from '../../public/linxo2.webp';
import linxo3 from '../../public/linxo3.webp';
import linxo4 from '../../public/linxo4.webp';
import linxo5 from '../../public/linxo5.webp';
import trooper1 from '../../public/trooper1.webp';
import trooper2 from '../../public/trooper2.webp';
import trooper3 from '../../public/trooper3.webp';
import trooper4 from '../../public/trooper4.webp';
import trooper5 from '../../public/trooper5.webp';

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center mb-4">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4">
          <h1>Our Work</h1>
          <p className="text-sm text-center lg:text-start font-medium text-caption leading-6">
            Discover our portfolio of Web3 projects, each crafted with innovation and passion. From Dapps to brand identities, our work speaks for itself. Explore our creations and see how we're shaping the future of digital design.
          </p>
        </div>
        <div className="flex relative justify-center items-center w-full h-full"><Image src={projectIllu} alt="" className="flex absolute scale-75" /></div>
      </div>

      {/* Coinhouse section */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
          <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Digital currency exchange</p>
          <h2>Coinhouse</h2>
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

      {/* Looter section */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
          <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Decentralized Exchange with AMM and Game Theory</p>
          <h2>Looter</h2>
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
              <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 top-[8rem] blur-2xl scale-y-[250%]" />
            </Link>
            <Link href={"/projects/looter"} className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={looterswap} width={2500} height={1562} alt="" className="flex absolute w-full scale-[180%] md:scale-[100%] md:hover:scale-[104%] transition-all ease-in hover:brightness-[1.16]" />
            </Link>
          </div>
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <Link href={"/projects/looter"} className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={lootercard} width={2500} height={1801} alt="" className="flex absolute w-full scale-[180%] hover:scale-[184%] md:scale-[112%] md:hover:scale-[116%] transition-all ease-in hover:brightness-[1.16]" />
              <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 bottom-[8rem] blur-2xl scale-y-[250%]" />
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

      {/* Trooper section */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
          <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Blockchain Job Market for the Gaming Industry</p>
          <h2>Trooper</h2>
          <div className="flex gap-2 w-full flex-wrap">
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Branding</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Landing Page</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Dapp Design</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">3D Designs</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <Link href={"/projects/linxo"} className="flex grow lg:grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={trooper1} width={2500} height={1562} alt="" className="flex absolute w-full hover:scale-[104%] transition-all ease-in hover:brightness-[1.08]" />
              <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 top-[8rem] blur-2xl scale-y-[250%]" />
            </Link>
            <Link href={"/projects/linxo"} className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={trooper2} width={2500} height={1562} alt="" className="flex absolute w-full scale-[120%] hover:scale-[124%] xl:scale-[100%] xl:hover:scale-[104%] transition-all ease-in hover:brightness-[1.08]" />
            </Link>
          </div>
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <Link href={"/projects/linxo"} className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={trooper3} width={2500} height={1801} alt="" className="flex absolute w-full scale-[144%] hover:scale-[148%] md:scale-[100%] md:hover:scale-[104%] lg:scale-[150%] lg:hover:scale-[154%] xl:scale-[100%] xl:hover:scale-[104%] transition-all ease-in hover:brightness-[1.08]" />
              <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 bottom-[8rem] blur-2xl scale-y-[250%]" />
            </Link>
            <div className='flex gap-6 flex-wrap md:flex-nowrap w-full'>
              <Link href={"/projects/linxo"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                <Image priority={true} src={trooper4} width={1080} height={1080} alt="" className="flex absolute w-full md:scale-[116%] md:hover:scale-[120%] lg:scale-[170%] lg:hover:scale-[174%] xl:scale-[100%] xl:hover:scale-[104%] transition-all ease-in hover:brightness-[1.04]" />
              </Link>
              <Link href={"/projects/linxo"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                <Image priority={true} src={trooper5} width={1080} height={1080} alt="" className="flex absolute w-full hover:scale-[104%]  md:scale-[180%] md:hover:scale-[184%] xl:scale-[120%] xl:hover:scale-[124%] transition-all ease-in hover:brightness-[1.08]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Linxo section */}
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
          <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Payment and financial solutions</p>
          <h2>Linxo Connect</h2>
          <div className="flex gap-2 w-full flex-wrap">
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Visual identity</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Landing Page</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">2D Illustrations</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Icon Design</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <Link href={"/projects/linxo"} className="flex grow lg:grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={linxo1} width={2500} height={1562} alt="" className="flex absolute w-full hover:scale-[104%] transition-all ease-in hover:brightness-[1.04]" />
              <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 top-[8rem] blur-2xl scale-y-[250%]" />
            </Link>
            <Link href={"/projects/linxo"} className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={linxo2} width={2500} height={1562} alt="" className="flex absolute w-full scale-[300%] left-60 md:scale-[200%] md:hover:scale-[204%] xl:scale-[140%] xl:hover:scale-[144%] xl:left-0 transition-all ease-in hover:brightness-[1.04]" />
            </Link>
          </div>
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <Link href={"/projects/linxo"} className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
              <Image priority={true} src={linxo3} width={2500} height={1801} alt="" className="flex absolute w-full scale-[140%] md:scale-[112%] md:hover:scale-[116%] transition-all ease-in hover:brightness-[1.04]" />
              <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="absolute h-full w-[64px] -left-20 bottom-[8rem] blur-2xl scale-y-[250%]" />
            </Link>
            <div className='flex gap-6 flex-wrap md:flex-nowrap w-full'>
              <Link href={"/projects/linxo"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                <Image priority={true} src={linxo4} width={1080} height={1080} alt="" className="flex absolute w-full scale-[140%] hover:scale-[144%] md:scale-[220%] md:hover:scale-[224%] xl:scale-[180%] xl:hover:scale-[184%] transition-all ease-in hover:brightness-[1.04]" />
              </Link>
              <Link href={"/projects/linxo"} className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-innerwhole">
                <Image priority={true} src={linxo5} width={1080} height={1080} alt="" className="flex absolute w-full hover:scale-[104%]  md:scale-[180%] md:hover:scale-[184%] xl:scale-[140%] xl:hover:scale-[144%] transition-all ease-in hover:brightness-[1.04]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Partners />

      <Wishlist />
    </>
  );
}