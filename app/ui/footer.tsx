'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '../../public/logo/logo-white.svg';
import FooterLinks from '../ui/footer-links'


export default function Footer() {
    return (
        <>
        <div className='flex justify-between items-start'>
        <Link className="scale-90 md:scale-100" href="/">
          <div>
          <Image priority src={logoWhite} alt='' />
          </div>
        </Link>
        <div className='flex flex-1 justify-end gap-20'>
            <FooterLinks />
        </div>
        </div>
        <p className='text-xs text-label font-medium'>Made with 💜 by NinjaFire</p>
        </>
    );
}