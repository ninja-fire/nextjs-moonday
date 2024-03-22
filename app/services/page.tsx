import Image from "next/image";
import CtaContact from "../ui/ctacontact";
import Wishlist from "../ui/wishlist";
import Partners from "../ui/partners";
import ServicesList from "../ui/serviceslist";
import servicesIllu from "../../public/servicesIllu.svg"

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap w-full gap-16 justify-center items-center">
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4">
          <h2>Our Services</h2>
          <p className="text-sm text-center lg:text-start font-medium text-caption leading-6">
            Empowering Web3 pioneers with tailored solutions. Crafting Dapps, refining brands, perfecting pitch decks – redefining the web3 experiences together.
          </p>
        </div>
        <div className="flex relative justify-center items-center w-full h-full"><Image src={servicesIllu} alt="" className="flex absolute scale-75" /></div>
      </div>

      <ServicesList />

      <Partners />

      <Wishlist />

      <CtaContact />
    </>
  );
}