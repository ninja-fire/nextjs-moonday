'use client';

import Link from 'next/link';

const links = [
    {
        name: 'Services',
        href: '/services',
        sublinks: [
            {
                name: "Branding",
                href: '/services/branding',
            },
            {
                name: "UX/UI Design",
                href: '/services/uxuidesign',
            },
            {
                name: "Consulting",
                href: '/services/consulting',
            },
        ]
    },
    {
        name: 'Projects',
        href: '/projects',
        sublinks: [
            {
                name: "Coinhouse",
                href: '/projects/coinhouse',
            },
            {
                name: "Linxo",
                href: '/projects/linxo',
            },
            {
                name: "Looter",
                href: '/projects/looter',
            },
            {
                name: "Trooper",
                href: '/projects/trooper',
            },
        ]
    },
    {
        name: 'Contact',
        href: '/contact',
        sublinks: [
            {
                name: "Book a Call",
                href: '/contact',
            },
            {
                name: "Write us!",
                href: '/contact',
            },
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
                            key={link.name}
                            href={link.href}
                            className="text-label hover:text-caption text-sm font-semibold">{link.name}
                        </Link>
                        <div key={link.name} className='flex flex-col justify-start items-start gap-1'>
                        {link.sublinks.map((sublink) => {
                            return (
                                    <Link
                                    key={sublink.name}
                                    href={sublink.href}
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