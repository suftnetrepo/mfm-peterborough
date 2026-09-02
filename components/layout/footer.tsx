'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useSettings } from '@/hooks/use-settings';
import { churchConfig } from '@/church.config';

export function Footer() {
  const { settings } = useSettings();

  const address = settings?.address
    ? `${settings.address.addressLine1}, ${settings.address.town}, ${settings.address.postcode}`
    : `${churchConfig.address.line1}, ${churchConfig.address.line2}`;

  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#2D2D2D] px-8 py-10">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image src="/logo.png" alt={churchConfig.name} width={40} height={40} className="object-contain" />
                <span className="text-white text-[13px] font-semibold tracking-wide leading-tight">
                  MOUNTAIN OF FIRE AND MIRACLES MINISTRIES
                </span>
              </div>
              <div className="text-[#B0B0B0] text-[13.5px] leading-[1.8]">
                {address}
              </div>
            </div>
            <div className="sm:flex sm:justify-end sm:items-start">
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded border border-white/20 flex items-center justify-center text-[#B0B0B0] hover:bg-indigo hover:border-indigo hover:text-white transition-colors">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#808080]">
            <span>© {new Date().getFullYear()} {churchConfig.name}</span>
            <div className="flex gap-5 flex-wrap justify-center">
              {[
                { label: 'Privacy', href: '/privacy-policy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Cookies', href: '/cookies' }
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
