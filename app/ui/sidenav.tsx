import Link from 'next/link';
import NavLinks from '../ui/nav-links';
import logo from '../../public/logo/moonday-logo.svg';
import Image from 'next/image';

export default function SideNav() {
  return (
    <>
      <Link className="scale-90 md:scale-100" href="/" aria-label="Moonday home">
        <Image src={logo} alt="Moonday" fetchPriority="high" />
      </Link>
      <div className='flex flex-1 flex-col justify-center gap-4'>
        <NavLinks />
      </div>
      <div aria-hidden className="opacity-0">
        <Image src={logo} alt="" />
      </div>
    </>
  );
}
