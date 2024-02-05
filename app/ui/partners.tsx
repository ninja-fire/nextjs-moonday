import Image from "next/image";
import partners from "../../public/partners.png";

export default function Partners() {
    return (
        <div className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center">
        <Image src={partners} alt="" />
        <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center grow gap-4">
          <h2>A complete Hub</h2>
          <p className="text-sm text-center lg:text-start font-medium text-caption">You need a full range of services to build your project?
            From ideation to product launch, Moonday can link you to high quality partners to help you build your idea.</p>
        </div>
      </div>
    );
}