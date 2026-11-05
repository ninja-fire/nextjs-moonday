import Link from 'next/link';
import { links as siteLinks, packages } from '../data/site';
import { projects } from '../data/projects';

const links = [
    {
        name: 'Services',
        href: '/services',
        sublinks: packages.map((p) => ({ name: p.title, href: '/services' })),
    },
    {
        name: 'Work',
        href: '/work',
        sublinks: projects.slice(0, 4).map((p) => ({ name: p.title, href: `/work/${p.slug}` })),
    },
    {
        name: 'Contact',
        href: '/contact',
        sublinks: [
            { name: "Book a call", href: '/contact#book' },
            { name: "Send a brief", href: '/contact#brief' },
            { name: "Chat on Telegram", href: siteLinks.telegram },
        ]
    },
];

export default function FooterLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <div key={link.name} className='flex flex-col justify-start items-start gap-2 w-full md:w-auto'>
                        <Link
                            href={link.href}
                            className="text-label hover:text-caption text-sm font-semibold">{link.name}
                        </Link>
                        <div className='flex flex-col justify-start items-start gap-1'>
                            {link.sublinks.map((sublink) => {
                                const external = sublink.href.startsWith('http');
                                return (
                                    <Link
                                        key={sublink.name}
                                        href={sublink.href}
                                        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                                        className="text-caption hover:text-placeholder text-xs font-medium">{sublink.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
}
