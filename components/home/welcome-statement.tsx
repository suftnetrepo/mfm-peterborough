import Link from 'next/link';
import Image from 'next/image';
import { Heart, ArrowRight } from 'lucide-react';

export function WelcomeStatement() {
  return (
    <section className="bg-[#FAF8F5] py-16 px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">

        {/* Left — text */}
        <div className="relative">
          {/* Decorative background arc */}
          <svg className="absolute -left-16 -top-10 opacity-[0.06] pointer-events-none" width="320" height="260" viewBox="0 0 320 260" fill="none">
            <path d="M160 260 Q-40 200 20 60 Q80 -60 220 20 Q340 90 280 220" stroke="#5B0FA8" strokeWidth="2" fill="none"/>
            <path d="M160 260 Q-20 180 40 60 Q100 -40 230 30 Q340 110 270 240" stroke="#5B0FA8" strokeWidth="2" fill="none"/>
          </svg>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-gold-deep font-medium">
              You&apos;re welcome here
            </span>
          </div>

          <h2 className="font-display text-[38px] font-semibold text-ink leading-[1.1] mb-3">
            A very warm welcome
          </h2>
          <div className="w-8 h-[2px] bg-gold mb-6" />

          <p className="text-[15px] text-ink-soft leading-[1.85] mb-7 max-w-[460px]">
            We are a group of ordinary people who believe that church is a great place to make
            friends and experience God together. We are a family who believe that church should
            not only be great fun but also a place where lives are radically transformed.
          </p>

          <Link href="/new-here"
            className="inline-flex items-center gap-2 text-indigo font-semibold text-[14.5px] hover:text-indigo-deep transition-colors">
            Visitor information <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right — overlapping photos + pill badge + dot pattern */}
        <div className="relative h-[340px] lg:h-[380px]">

          {/* Purple dot pattern — top right */}
          <div className="absolute top-0 right-0 grid grid-cols-5 gap-[7px] opacity-40 pointer-events-none z-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-[5px] h-[5px] rounded-full bg-indigo" />
            ))}
          </div>

          {/* Large background photo — worship/raised hands */}
          <div className="absolute top-4 left-4 right-14 bottom-16 rounded-2xl overflow-hidden shadow-lg z-10">
            <Image
              src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80"
              alt="MFM Peterborough worship"
              fill
              sizes="480px"
              className="object-cover"
            />
          </div>

          {/* Smaller foreground photo — people/community */}
          <div className="absolute bottom-0 right-0 w-[55%] h-[52%] rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
              alt="MFM Peterborough community"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>

          {/* Floating pill — "Real People. Real Faith. Real Impact." */}
          <div className="absolute top-[28%] left-[30%] z-30 bg-white rounded-full shadow-xl px-5 py-4 flex flex-col items-center gap-1.5 w-[120px]"
            style={{ boxShadow: '0 8px 32px rgba(91,15,168,0.18)' }}>
            <Heart size={18} className="text-indigo" />
            <div className="text-center font-semibold text-[11px] leading-[1.5] text-ink">
              Real People.<br />Real Faith.<br />Real Impact.
            </div>
          </div>

          {/* Soft cream blob — decorative */}
          <div className="absolute -right-6 bottom-10 w-24 h-24 rounded-full opacity-50 z-0"
            style={{ background: '#E8DFF5' }} />
        </div>

      </div>
    </section>
  );
}
