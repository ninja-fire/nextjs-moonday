'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links } from './nav-links';

// Mobile only (the rail takes over from md): no hover on touch, so the labels are always shown.
export default function TabBar() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[.08] bg-[#121212]/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
    >
      <ul className="grid grid-cols-4">
        {links.map((link) => {
          const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={clsx(
                  'flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition-colors',
                  active ? 'text-label' : 'text-placeholder',
                )}
              >
                <span className={clsx('flex h-8 w-12 items-center justify-center rounded-full transition-colors', active && 'bg-transparentbg')}>
                  <Image src={link.icon} alt="" className={clsx('h-5 w-5', !active && 'opacity-70')} />
                </span>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
