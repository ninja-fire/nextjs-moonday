import Hero from "./ui/hero";
import FolioCard from "./ui/folioCard";
import ServicesList from "./ui/serviceslist";
import CtaContact from "./ui/ctacontact";
import Testimonials from "./ui/testimonials";
import Wishlist from "./ui/wishlist";
import Portfolio from "./ui/portfolio";
import Button from "./ui/button";
import GlobalHubLogos from "./ui/globalhublogos";

export default function Home() {
  return (
    <>
      <Hero />
      <FolioCard />
      <GlobalHubLogos />
      <Portfolio />

      <div className="flex flex-col gap-8 w-full justify-center items-center">
        <h2>Our Services</h2>
        <ServicesList />
        <div className="flex grow md:grow-0">
          <Button text="Discover all our services" target="" href="/services" />
        </div>
      </div>

      <Wishlist />
      <CtaContact />
    </>
  );
}