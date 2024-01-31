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
              "flex p-2 gap-2 grow items-center justify-center rounded-xl text-sm font-medium text-caption opacity-80 hover:opacity-100 hover:bg-transparentbg hover:text-label md:flex-none md:justify-start",
              {
                'bg-transparentbg text-label opacity-100': pathname === link.href,
              },
            )}
            
          >
            <Image
            priority
            src={LinkIcon} 
            alt=''
            className="opacity-90"
            />
            <p className="transition-all text-label hidden group-hover:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}