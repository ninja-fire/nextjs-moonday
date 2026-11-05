'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import homeicon from '../../public/icons/home.svg'
import servicesicon from '../../public/icons/services.svg'
import projectsicon from '../../public/icons/projects.svg'
import contacticon from '../../public/icons/contact.svg'

export const links = [
  {
    name: 'Home',
    href: '/',
    icon: homeicon
  },
  {
    name: 'Services',
    href: '/services',
    icon: servicesicon,
  },
  {
    name: 'Work',
    href: '/work',
    icon: projectsicon
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: contacticon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={active ? 'page' : undefined}
            aria-label={link.name}
            className={clsx(
              "group/icon transition-all flex p-2.5 gap-3 items-center justify-start rounded-xl text-sm font-medium text-caption hover:opacity-100 hover:bg-transparentbg hover:text-label",
              {
                'bg-transparentbg text-label opacity-100': active,
              },
            )}

          >
            <Image
              src={LinkIcon}
              alt=''
              className="shrink-0 opacity-80 group-hover/icon:opacity-100"
            />
            {/* Label shows only while the rail is open; aria-label carries the name otherwise. */}
            <p className="whitespace-nowrap [text-shadow:0_1px_10px_rgba(0,0,0,0.7)] opacity-0 transition-opacity duration-200 group-hover/nav:opacity-100 group-has-[:focus-visible]/nav:opacity-100">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}