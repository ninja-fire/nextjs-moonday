import Image from "next/image";
import Button from "../app/ui/button";
import imgex from "../public/image 3.png";
import logoipsum from "../public/Logoipsum.svg";
import projectsicon from '../public/icons/projects.svg';
import avatar from '../public/avatar.png';
import qrcode from '../public/qrcode.svg';


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1>We design you brand & dapps faster</h1>
          <p>We are a web3 design studio building impactful brands and super easy to use Dapps to help launch great ideas faster.</p>
        </div>
        <Button text="Press to Chat" target="_blank" />
      </div>

      <div className="flex gap-4 ">
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
        <div className="rounded-full flex justify-center items-center h-80 overflow-auto bg-background"><Image src={imgex} alt="" className="h-full" /></div>
      </div>

      <div className="flex gap-16 justify-center items-center">
        <div className="flex justify-center items-center py-8"><Image src={logoipsum} alt="" /></div>
        <div className="flex justify-center items-center py-8"><Image src={logoipsum} alt="" /></div>
        <div className="flex justify-center items-center py-8"><Image src={logoipsum} alt="" /></div>
        <div className="flex justify-center items-center py-8"><Image src={logoipsum} alt="" /></div>
        <div className="flex justify-center items-center py-8"><Image src={logoipsum} alt="" /></div>
        <div className="flex justify-center items-center py-8"><Image src={logoipsum} alt="" /></div>
        <div className="flex justify-center items-center py-8"><Image src={logoipsum} alt="" /></div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h2>why you should work with us</h2>
        <div className="flex gap-4 justify-center items-center">
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 1</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 2</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
          <div className="flex flex-col gap-4 p-8 rounded-3xl bg-transparentbg">
            <div className="flex gap-2 items-center">
              <Image src={projectsicon} alt="" />
              <h3>Title benefice 3</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 py-16 p-8 bg-background rounded-3xl">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2>What are your design needs?</h2>
          <p>Our aim is to understand your unique vision and goals, and tailor our design services to suit your needs in the ever-evolving landscape of Web3 and blockchain technology.</p>
        </div>

        <form className="gap-2" id="dynamic-form">
          <div className="sticky-header">
            <h4>Your Wish List</h4>
          </div>
          <div className="gap-2 flex-start" id="form-content-needs">
            <label className="form-control gap-1-row" htmlFor="branding">
              <input type="checkbox" id="branding" name="design-needs" value="branding" />
              <div className="gap-1-2">
                <p className="subtitle">Branding and Identity Design</p>
                <p className="caption">Crafting unique visual identities that represent your brands values and
                  resonate with your target audience.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="print">
              <input type="checkbox" id="print" name="design-needs" value="print" />
              <div className="gap-1-2">
                <p className="subtitle">Print Design</p>
                <p className="caption">Creating compelling designs for print materials such as brochures,
                  business cards, posters, and more.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="social">
              <input type="checkbox" id="social" name="design-needs" value="social" />
              <div className="gap-1-2">
                <p className="subtitle">Social Media Graphics</p>
                <p className="caption">Crafting eye-catching graphics optimized for social media platforms to
                  boost your online presence.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="app">
              <input type="checkbox" id="app" name="design-needs" value="app" />
              <div className="gap-1-2">
                <p className="subtitle">Blockchain Application</p>
                <p className="caption">Crafting user-friendly and visually appealing interfaces for blockchain
                  platforms, wallets, and decentralized applications.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="website">
              <input type="checkbox" id="website" name="design-needs" value="website" />
              <div className="gap-1-2">
                <p className="subtitle">Web3 Website Design</p>
                <p className="caption">Designing immersive websites that seamlessly integrate blockchain
                  technology, providing interactive and engaging experiences.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="metaverse">
              <input type="checkbox" id="metaverse" name="design-needs" value="metaverse" />
              <div className="gap-1-2">
                <p className="subtitle">Brand Integration into Metaverse</p>
                <p className="caption">Crafting user-friendly and visually appealing interfaces for blockchain
                  platforms, wallets, and decentralized applications.</p>
              </div>
            </label>
            <label className="form-control gap-1-row" htmlFor="consulting">
              <input type="checkbox" id="consulting" name="design-needs" value="consulting" />
              <div className="gap-1-2">
                <p className="subtitle">Consultation and Ideation</p>
                <p className="caption">Collaborating with you to brainstorm, conceptualize, and refine design
                  ideas tailored to your specific project.</p>
              </div>
            </label>
          </div>
          <div className="gap-2 flex-start hidden" id="form-content-contact">
            <p className="caption start">Please provide your name and email so we can reach out to you. It is the
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
              <Button text="Back" target=""/>
            </button>
            <div className="btn-primary-out" id="btn-wishlist"><button className="btn-primary-in"
              id="validate-wishlist-button" type="button">Validate My Wishlist</button></div>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center">
        <h2>Dont trust verify</h2>
        <div className="flex gap-4 items-center jusitfy-center">
          <div className="flex flex-col gap-6 px-8 py-6 rounded-3xl bg-background">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p>John Doe</p>
                <p>Blabla CTO</p>
              </div>
            </div>
            <div className="text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</div>
          </div>
          <div className="flex flex-col gap-6 px-8 py-6 rounded-3xl bg-background">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p>John Doe</p>
                <p>Blabla CTO</p>
              </div>
            </div>
            <div className="text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</div>
          </div>
          <div className="flex flex-col gap-6 px-8 py-6 rounded-3xl bg-background">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p>John Doe</p>
                <p>Blabla CTO</p>
              </div>
            </div>
            <div className="text-start">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</div>
          </div>
        </div>
      </div>

      <div className="flex gap-16 justify-center items-center">
        <div className="flex flex-col grow gap-4">
          <h2>Contact us</h2>
          <p>It is always easier to introduce your project from your own voice. Thus, you can directly book a free 30min intro call with our team by clicking on the button or scanning the QR code.</p>
        </div>
        <div className="flex grow gap-6 py-16 p-8 bg-background rounded-3xl">
          <div className="flex justify-center items-center p-6">
            <Image src={qrcode} alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <h3>Your intro call</h3>
            <p>It is always easier to introduce your project from your own voice.</p>
            <Button text="Book your call" target="_blank" />
          </div>
        </div>
      </div>
    </>
  );
}