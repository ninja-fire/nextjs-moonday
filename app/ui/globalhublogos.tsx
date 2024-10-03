import hydnlogo from '../../public/logopartners/hydnlogo.svg';
import bhlogo from '../../public/logopartners/bhlogo.svg';
import block3logo from '../../public/logopartners/block3logo.png';
import radishlogo from '../../public/logopartners/radishlogo.svg';
import chainimpactlogo from '../../public/logopartners/chainimpact.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function GlobalHubLogos () {
    return(
        <div className="flex flex-col gap-4 w-full items-center justify-center">
        <p className="text-start text-md font-semibold text-caption">Our global hub</p>
        <div className="flex flex-wrap justify-center items-center">
          <Link href="https://hydnsec.com/" target="blank" className="flex justify-center items-center"><Image src={hydnlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://www.blockhubdao.com/" target="blank" className="justify-center items-center"><Image src={bhlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://block3.pr/" target="blank" className="flex justify-center items-center"><Image src={block3logo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://radish.la/" target="blank" className="flex justify-center items-center"><Image src={radishlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://www.chainimpact.xyz/" target="blank" className="flex justify-center items-center"><Image src={chainimpactlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
        </div>
      </div>
    );
}