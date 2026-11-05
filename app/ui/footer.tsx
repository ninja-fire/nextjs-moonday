import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '../../public/logo/logo-white.svg';
import FooterLinks from '../ui/footer-links'
import { links } from '../data/site';

export default function Footer() {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-8 justify-between items-start w-full'>
                <div className='flex flex-col gap-4'>
                    <Link className="flex items-start justify-start" href="/" aria-label="Moonday home">
                        <Image src={logoWhite} alt='Moonday' className='w-4/5 md:scale-90 origin-left' />
                    </Link>
                    <a href={links.telegram} target="_blank" rel="noopener noreferrer" className='text-xs font-medium text-caption hover:text-label'>
                        Quick question? Chat with us on Telegram →
                    </a>
                </div>
                <div className='flex flex-row flex-wrap w-full justify-between lg:justify-end gap-8 sm:gap-20'>
                    <FooterLinks />
                </div>
            </div>
            <p className='text-xs text-placeholder font-medium'>© {new Date().getFullYear()} Moonday. Brand & product design studio.</p>
        </>
    );
}
