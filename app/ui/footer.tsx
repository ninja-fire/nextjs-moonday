import Link from 'next/link';
import FooterLinks from '../ui/footer-links'
import Mark from './mark';
import { links } from '../data/site';

export default function Footer() {
    return (
        <>
            <div className='flex flex-col lg:flex-row gap-10 justify-between items-start w-full border-t border-white/[.07] pt-12'>
                <div className='flex flex-col gap-4 max-w-xs'>
                    <Link className="flex items-center gap-2.5" href="/" aria-label="Moonday home">
                        <Mark className="h-6 w-auto" />
                        <span className="text-xl font-bold tracking-tight text-label">moonday</span>
                    </Link>
                    <p className='text-sm font-medium text-caption leading-6'>Brand & product design studio. Day of the moon, start of the week.</p>
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
