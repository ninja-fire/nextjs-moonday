import Image from "next/image";
import avatar from '../../public/avatar.png';


export default function Testimonials() {
    return (
        <div className="flex flex-col gap-8 justify-center items-center w-full">
        <h2>Dont trust verify</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center w-full justify-center">
          <div className="flex flex-col grow max-w-80 md:max-w-full gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p className="font-sm text-label font-semibold">John Doe</p>
                <p className="text-start text-xs font-medium">Blabla CTO</p>
              </div>
            </div>
            <p className="text-start text-sm font-medium text-caption">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</p>
          </div>
          <div className="flex flex-col grow max-w-80 md:max-w-full gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
            <div className="flex gap-2 items-center">
              <Image src={avatar} alt="" />
              <div className="flex flex-col">
                <p className="font-sm text-label font-semibold">John Doe</p>
                <p className="text-start text-xs font-medium">Blabla CTO</p>
              </div>
            </div>
            <p className="text-start text-sm font-medium text-caption">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”</p>
          </div>
          <div className="flex flex-col grow max-w-80 md:max-w-full gap-6 px-8 py-6 rounded-3xl bg-background border border-transparentbg shadow-innerwhole">
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
    );
}