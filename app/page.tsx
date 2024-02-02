import Image from "next/image";
import Button from "../app/ui/button";
import logoipsum from "../public/Logoipsum.svg";
import projectsicon from '../public/icons/projects.svg';
import avatar from '../public/avatar.png';
import Hero from "./ui/hero";
import FolioCard from "./ui/folioCard";
import gradient from '../public/gradient.png';
import CtaContact from "./ui/ctacontact";


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
        <h2>Why you should work with us</h2>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg max-w-sm">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 1</h3>
            </div>
            <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg max-w-sm">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 2</h3>
            </div>
            <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg max-w-sm">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 3</h3>
            </div>
            <p className="text-sm font-medium text-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
        </div>
      </div>

      <div className="light flex flex-col gap-6 py-16 p-40 bg-background overflow-y-b-clip rounded-3xl justify-center items-center border border-transparentbg shadow-innerwhole">
        {/* <Image priority src={gradient} alt="" width={1080} height={1080} className="absolute h-full left-32 blur-3xl -z-1"/> */}

        <div className="flex flex-col gap-4 justify-center items-center">
          <h2>What are your design needs?</h2>
          <p className="text-sm font-medium text-center text-caption">Our aim is to understand your unique vision and goals, and tailor our design services to suit your needs in the ever-evolving landscape of Web3 and blockchain technology.</p>
        </div>

        <form className="flex flex-col gap-2 bg-bodybg/[64%] backdrop-blur-md shadow-xl border border-transparentbg rounded-3xl gap-6 px-8 py-6" id="dynamic-form">
          <div className="flex pb-4 border-b border-transparentbg">
          <h4>Your Wish List</h4>
          </div>
          <div className="gap-2 flex-start" id="form-content-needs">
            <label className="form-control gap-1-row" htmlFor="branding">
              <input type="checkbox" id="branding" name="design-needs" value="branding" />
              <div className="gap-1-2">
                <h5 className="">Branding and Identity Design</h5>
                <p className="text-sm font-medium text-caption">Crafting unique visual identities that represent your brands values and
                  resonate with your target audience.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="print">
              <input type="checkbox" id="print" name="design-needs" value="print" />
              <div className="gap-1-2">
                <h5 className="">Print Design</h5>
                <p className="text-sm font-medium text-caption">Creating compelling designs for print materials such as brochures,
                  business cards, posters, and more.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="social">
              <input type="checkbox" id="social" name="design-needs" value="social" />
              <div className="gap-1-2">
                <h5 className="">Social Media Graphics</h5>
                <p className="text-sm font-medium text-caption">Crafting eye-catching graphics optimized for social media platforms to
                  boost your online presence.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="app">
              <input type="checkbox" id="app" name="design-needs" value="app" />
              <div className="gap-1-2">
                <h5 className="">Blockchain Application</h5>
                <p className="text-sm font-medium text-caption">Crafting user-friendly and visually appealing interfaces for blockchain
                  platforms, wallets, and decentralized applications.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="website">
              <input type="checkbox" id="website" name="design-needs" value="website" />
              <div className="gap-1-2">
                <h5 className="">Web3 Website Design</h5>
                <p className="text-sm font-medium text-caption">Designing immersive websites that seamlessly integrate blockchain
                  technology, providing interactive and engaging experiences.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="metaverse">
              <input type="checkbox" id="metaverse" name="design-needs" value="metaverse" />
              <div className="gap-1-2">
                <h5 className="">Brand Integration into Metaverse</h5>
                <p className="text-sm font-medium text-caption">Crafting user-friendly and visually appealing interfaces for blockchain
                  platforms, wallets, and decentralized applications.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="consulting">
              <input type="checkbox" id="consulting" name="design-needs" value="consulting" />
              <div className="gap-1-2">
                <h5 className="">Consultation and Ideation</h5>
                <p className="text-sm font-medium text-caption">Collaborating with you to brainstorm, conceptualize, and refine design
                  ideas tailored to your specific project.</p>
              </div>
            </label>
          </div>
          <div className="gap-2 flex-start hidden" id="form-content-contact">
            <p className="text-sm font-medium text-caption">Please provide your name and email so we can reach out to you. It is the
              first step to bringing your design project to life.</p>

            <div className="gap-1 width-full">
              <label className="gap-1-2" id="email-label" htmlFor="email-details">
                Your email address *
                <input type="text" name="email-details" placeholder="Enter your email" id="email-details" />
                <span id="email-error" className="error-message">Please enter a valid email address.</span>
              </label>

              <label className="gap-1-2" id="name-label" htmlFor="name-details">
                Your name
                <input type="text" name="name-details" placeholder="Name and Surname" id="name-details" />
                <span id="name-error" className="error-message">Please enter a valid email address.</span>
              </label>

              <label className="gap-1-2" id="text-label" htmlFor="text-details">
                Describe your needs
                <textarea name="text-details"
                  placeholder="Tell us more about your project and your needs..." id="text-details"
                  spellCheck="true">
                </textarea>
                <span id="text-error" className="error-message">Please enter a valid email address.</span>
              </label>
            </div>
          </div>

          <div className="sticky-btn" id="btn-container">
            <button type="button" className="btn-secondary hidden" id="btn-back">
              <Button text="Back" target="" />
            </button>
            <div className="btn-primary-out" id="btn-wishlist"><button className="btn-primary-in"
              id="validate-wishlist-button" type="button">Validate My Wishlist</button></div>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center">
        <h2>Dont trust verify</h2>
        <div className="flex gap-4 items-center jusitfy-center">
          <div className="flex flex-col gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p className="font-sm text-label font-semibold">John Doe</p>
                <p className="text-start text-xs font-medium">Blabla CTO</p>
              </div>
            </div>
            <p className="text-start text-sm font-medium text-caption">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</p>
          </div>
          <div className="flex flex-col gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p className="font-sm text-label font-semibold">John Doe</p>
                <p className="text-start text-xs font-medium">Blabla CTO</p>
              </div>
            </div>
            <p className="text-start text-sm font-medium text-caption">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</p>
          </div>
          <div className="flex flex-col gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p className="font-sm text-label font-semibold">John Doe</p>
                <p className="text-start text-xs font-medium">Blabla CTO</p>
              </div>
            </div>
            <p className="text-start text-sm font-medium text-caption">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</p>
          </div>
        </div>
      </div>

      <CtaContact />
    </>
  );
}