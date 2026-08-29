'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSettings } from '@/hooks/use-settings';
import type { Slider } from '@/types/church';

const FALLBACK_FLYERS: Slider[] = [
  { title: 'MFM Peterborough', message: '', status: true, imageOnly: true,
    secure_url: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80' },
  { title: 'Prayer Warriors', message: '', status: true, imageOnly: true,
    secure_url: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80' },
  { title: 'Revival Fire', message: '', status: true, imageOnly: true,
    secure_url: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800&q=80' },
];

export function Hero() {
  const { settings } = useSettings();
  const sliders = settings?.sliders ?? [];
  const flyers = sliders.filter(s => s.status).length > 0
    ? sliders.filter(s => s.status)
    : FALLBACK_FLYERS;

  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (lightbox) return;
    timer.current = setInterval(() => setIdx(i => (i + 1) % flyers.length), 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [flyers.length, lightbox]);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  function openLightbox(i: number) {
    setLbIdx(i);
    setLightbox(true);
  }

  function lbPrev() { setLbIdx(i => (i - 1 + flyers.length) % flyers.length); }
  function lbNext() { setLbIdx(i => (i + 1) % flyers.length); }

  const current = flyers[idx];
  const lbCurrent = flyers[lbIdx];

  return (
    <>
      {/* Hero — real photo bg with dark purple overlay, two columns */}
      <div className="w-full relative">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=1600&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Heavy dark purple overlay — left side very dark for text, right fades slightly */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(10,4,26,0.94) 0%, rgba(10,4,26,0.88) 50%, rgba(10,4,26,0.80) 100%)' }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-gold mb-6">
              Mountain of Fire and Miracles Ministries — Peterborough
            </div>
            <h1 className="font-display text-white font-semibold leading-[1.06] mb-5"
              style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}>
              Encounter God.
              <br />Grow in faith.
              <br /><em className="not-italic italic font-medium" style={{ color: '#E05A00' }}>
                Walk in miracles.
              </em>
            </h1>
            <p className="text-[15px] leading-[1.85] mb-9 max-w-[440px]"
              style={{ color: 'rgba(197,184,224,0.9)' }}>
              A warm, Bible-believing community devoted to revival, answered prayer, and the
              unlimited demonstration of God&apos;s power. Come and experience it for yourself.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/new-here"
                className="bg-gold hover:bg-gold-deep font-semibold text-sm px-7 py-3 rounded transition-colors"
                style={{ color: '#1A0A2E' }}>
                Plan your visit
              </Link>
              <Link href="/service-times"
                className="font-semibold text-sm px-7 py-3 rounded transition-colors text-white"
                style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}>
                Service times
              </Link>
            </div>
          </div>

          {/* Right — bigger flyer carousel with lightbox */}
          <div className="relative flex items-center justify-center">
            {/* Shadow depth layer */}
            <div className="absolute rounded-md opacity-60"
              style={{
                width: '78%', aspectRatio: '3/4',
                background: '#2D1060',
                transform: 'rotate(5deg) translate(18px, 12px)',
                boxShadow: '0 28px 50px rgba(0,0,0,0.7)'
              }} />

            {/* Main flyer card — bigger, clickable */}
            <button
              onClick={() => openLightbox(idx)}
              className="relative rounded-md overflow-hidden cursor-zoom-in focus:outline-none"
              style={{
                width: '78%', aspectRatio: '3/4',
                transform: 'rotate(-2deg)',
                boxShadow: '0 28px 50px rgba(0,0,0,0.7)'
              }}
              aria-label="View full flyer"
            >
              {current.secure_url ? (
                <Image
                  key={current.secure_url}
                  src={current.secure_url}
                  alt={current.title || 'MFM flyer'}
                  fill
                  sizes="360px"
                  className="object-cover"
                  priority={idx === 0}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#3A0870,#1A0A2E)' }}>
                  <span className="font-display text-white/50 text-lg px-4 text-center">{current.title}</span>
                </div>
              )}
              {/* Subtle "click to enlarge" hint */}
              <div className="absolute bottom-0 inset-x-0 py-2 text-center text-[11px] font-medium text-white/60"
                style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.55))' }}>
                Click to view
              </div>
            </button>

            {/* Dots */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {flyers.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all ${i === idx ? 'w-5 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(8,3,20,0.92)', backdropFilter: 'blur(6px)' }}
          onClick={e => { if (e.target === e.currentTarget) setLightbox(false); }}
        >
          {/* Close */}
          <button onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-10"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            aria-label="Close">
            <X size={20} />
          </button>

          {/* Prev */}
          <button onClick={lbPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white z-10 transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            aria-label="Previous">
            <ChevronLeft size={22} />
          </button>

          {/* Full-size flyer */}
          <div className="relative rounded-md overflow-hidden shadow-2xl"
            style={{ maxHeight: '88vh', maxWidth: '520px', width: '90vw', aspectRatio: '3/4' }}>
            {lbCurrent.secure_url && (
              <Image
                src={lbCurrent.secure_url}
                alt={lbCurrent.title || 'MFM flyer'}
                fill
                sizes="520px"
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Next */}
          <button onClick={lbNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white z-10 transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            aria-label="Next">
            <ChevronRight size={22} />
          </button>

          {/* Lightbox dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {flyers.map((_, i) => (
              <button key={i} onClick={() => setLbIdx(i)} aria-label={`Flyer ${i + 1}`}
                className={`rounded-full transition-all ${i === lbIdx ? 'w-5 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
