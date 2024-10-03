'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import homeicon from '../../public/icons/home.svg'
import servicesicon from '../../public/icons/services.svg'
import projectsicon from '../../public/icons/projects.svg'
import contacticon from '../../public/icons/contact.svg'

const links = [
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
    name: 'Projects',
    href: '/projects',
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
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group/{icon} transition-all flex p-2 gap-2 items-center justify-start rounded-xl text-sm font-medium text-caption hover:opacity-100 hover:bg-transparentbg hover:text-label md:flex-none",
              {
                'bg-transparentbg text-label opacity-100': pathname === link.href,
              },
            )}

          >
            <Image
              priority
              src={LinkIcon}
              alt=''
              className="opacity-80 group-hover/{icon}:opacity-100"
            />
            <p className="transition-all hidden sm:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}