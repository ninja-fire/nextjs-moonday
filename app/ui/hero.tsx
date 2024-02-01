import Image from "next/image";
import Button from "./button";
import moon from "../../public/moon.svg";
import sun from "../../public/sun.svg";

export default function Hero() {
    return (
        <div className="flex flex-col gap-16 justify-center items-center h-[48vh]">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex gap-1 md:gap-3 justify-center items-center flex-wrap text-center">
            <h1>We design</h1>
            <Image src={moon} alt="" className="scale-75 md:scale-100"/>
            <h1>your</h1>
            </div>
            <div className="flex gap-1 md:gap-3 justify-center items-center flex-wrap text-center">
            <h1>brand & dapp</h1>
            <Image src={sun} alt="" className="scale-75 md:scale-100"/>
            <h1>faster</h1>
            </div>
          </div>
          <p className="text-sm font-medium text-center text-caption">We are a web3 design studio building impactful brands and super easy to use Dapps to help launch great ideas faster.</p>
        </div>
        <Button text="Press to Chat" target="_blank" />
      </div>
    );
}