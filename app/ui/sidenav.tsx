import Link from 'next/link';
import NavLinks from './nav-links';
import logo from '../../public/logo/moonday-logo.svg';
import Image from 'next/image';


export default function SideNav() {
    return (
      <>
        <Link className="scale-90 md:scale-100" href="/">
          <div className="">
          <Image priority src={logo} alt='' />
          </div>
        </Link>
        <div className='flex flex-1 flex-col justify-center gap-4'>
        <NavLinks />
        </div>
        <div className="opacity-0">
          <Image priority src={logo} alt='' />
          </div>
      </>
    );
  }