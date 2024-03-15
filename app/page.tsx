import Image from "next/image";
import Link from "next/link";
import Hero from "./ui/hero";
import FolioCard from "./ui/folioCard";
import ServicesList from "./ui/serviceslist";
import CtaContact from "./ui/ctacontact";
import Testimonials from "./ui/testimonials";
import Wishlist from "./ui/wishlist";
import Portfolio from "./ui/portfolio";
import hydnlogo from '../public/logopartners/hydnlogo.svg';
import bhlogo from '../public/logopartners/bhlogo.svg';
import block3logo from '../public/logopartners/block3logo.png';
import radishlogo from '../public/logopartners/radishlogo.svg';



export default function Home() {
  return (
    <>
      <Hero />
      <FolioCard />

      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <p className="text-start text-md font-semibold text-caption">Our global hub</p>
        <div className="flex flex-wrap justify-center items-center">
          <Link href="https://hydnsec.com/" target="blank" className="flex justify-center items-center"><Image src={hydnlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://www.blockhubdao.com/" target="blank" className="justify-center items-center"><Image src={bhlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://block3.pr/" target="blank" className="flex justify-center items-center"><Image src={block3logo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://radish.la/" target="blank" className="flex justify-center items-center"><Image src={radishlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
        </div>
      </div>

      {/* <div className="flex gap-0 md:gap-16 justify-center items-center opacity-80">
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
      </div> */}

      {/* <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-center">Why you should work with us</h2>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg border border-transparentbg max-w-sm">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 1</h3>
            </div>
            <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg border border-transparentbg max-w-sm">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 2</h3>
            </div>
            <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg border border-transparentbg max-w-sm">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 3</h3>
            </div>
            <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
        </div>
      </div> */}

      <Portfolio />

      <ServicesList />

      <Wishlist />

      <Testimonials />
      
      <CtaContact />
    </>
  );
}