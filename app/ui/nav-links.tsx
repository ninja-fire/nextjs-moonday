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
  { name: 'Home',
  href: '/',
  icon: homeicon },
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
            
          >
            <Image
            priority
            src={LinkIcon} 
            alt=''
            />
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}