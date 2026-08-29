'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { churchConfig } from '@/church.config';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/fellowship', label: 'Fellowship' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact Us' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[rgba(0,0,0,0.08)] sticky top-0 z-50">
      {/* content capped at 1200px, centred — full-width background */}
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between h-[70px]">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.png" alt={churchConfig.name} width={48} height={48} className="object-contain" priority />
          <div>
            <div className="font-display text-[16px] font-semibold text-ink leading-tight">{churchConfig.shortName}</div>
            <div className="font-mono text-[9px] tracking-[0.1em] text-ink-soft uppercase">Peterborough</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className="text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors relative group pb-1">
              {label}
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-indigo transition-all duration-200" />
            </Link>
          ))}
        </div>

        <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[rgba(0,0,0,0.06)] px-8 py-5 flex flex-col gap-4 bg-white">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[15px] font-medium text-ink" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
