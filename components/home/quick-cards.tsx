import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, User, HandHeart } from 'lucide-react';

const CARDS = [
  {
    title: 'Service Times',
    desc: 'Find out when and where our services take place.',
    cta: 'View times',
    href: '/service-times',
    Icon: Clock,
    photo: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80'
  },
  {
    title: 'I Am New',
    desc: 'New to MFM Peterborough? We\'d love to welcome you.',
    cta: 'Get started',
    href: '/new-here',
    Icon: User,
    photo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80'
  },
  {
    title: 'Prayer Hours',
    desc: 'Join us for dedicated times of prayer and intercession.',
    cta: 'View schedule',
    href: '/prayers',
    Icon: HandHeart,
    photo: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80'
  }
];

export function QuickCards() {
  return (
    <section className="bg-[#F5F5F5] px-8 py-14">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
        {CARDS.map(({ title, desc, cta, href, Icon, photo }) => (
          <div key={title} className="bg-white rounded-sm overflow-hidden shadow-sm">
            {/* Photo with circular icon overlapping the bottom edge */}
            <div className="relative h-48">
              <Image src={photo} alt={title} fill sizes="400px" className="object-cover" />
              {/* Circular icon badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-indigo text-white flex items-center justify-center shadow-md z-10">
                <Icon size={20} />
              </div>
            </div>
            {/* Card body */}
            <div className="pt-9 pb-7 px-6 text-center">
              <h3 className="font-display text-[18px] font-semibold text-ink mb-2">{title}</h3>
              <p className="text-[13.5px] text-ink-soft mb-5 leading-[1.7]">{desc}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-indigo font-semibold text-[13.5px] hover:text-indigo-deep transition-colors"
              >
                {cta} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
