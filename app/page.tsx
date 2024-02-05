import Image from "next/image";
import Button from "../app/ui/button";
import logoipsum from "../public/Logoipsum.svg";
import projectsicon from '../public/icons/projects.svg';
import Hero from "./ui/hero";
import FolioCard from "./ui/folioCard";
import gradient from '../public/gradient.png';
import CtaContact from "./ui/ctacontact";
import Testimonials from "./ui/testimonials";
import ContactForm from "./ui/form";


export default function Home() {
  return (
    <>
      <Hero />
      <FolioCard />

      <div className="flex gap-0 md:gap-16 justify-center items-center opacity-80">
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
        <div className="contents justify-center items-center py-8"><Image src={logoipsum} alt="" width={169} height={40} className="scale-50 md:scale-75 ld:scale-90" /></div>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
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
      </div>

      <ContactForm />

      <Testimonials />
      
      <CtaContact />
    </>
  );
}