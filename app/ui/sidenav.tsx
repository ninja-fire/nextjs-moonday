import Link from 'next/link';
import NavLinks from '../ui/nav-links';
import logo from '../../public/logo/moonday-logo.svg';
import Image from 'next/image';

// The rail is wider than its column: the labels run on under the plate, and show when it slides away.
export default function SideNav() {
  return (
    <div className="absolute inset-y-0 left-0 flex w-[9.5rem] flex-col items-start justify-between py-6">
      <Link className="flex w-[4.5rem] justify-center" href="/" aria-label="Moonday home">
        <Image src={logo} alt="Moonday" fetchPriority="high" className="w-14" />
      </Link>
      <div className='flex w-full flex-col gap-3 px-3'>
        <NavLinks />
      </div>
      <div aria-hidden className="h-8" />
    </div>
  );
}
