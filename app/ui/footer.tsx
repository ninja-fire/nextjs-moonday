'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '../../public/logo/logo-white.svg';
import FooterLinks from '../ui/footer-links'


export default function Footer() {
    return (
        <>
        <div className='flex flex-col lg:flex-row gap-8 justify-between items-start w-full'>
        <Link className="flex items-start justify-start" href="/">
          {/* <div className='flex items-start justify-start'> */}
          <Image priority src={logoWhite} alt='' className='w-4/5 md:scale-90' />
          {/* </div> */}
        </Link>
        <div className='flex flex-col md:flex-row w-full justify-between lg:justify-end gap-20'>
            <FooterLinks />
        </div>
        </div>
        <p className='text-xs text-label font-medium'>Made with 💜 by NinjaFire</p>
        </>
    );
}