import Link from 'next/link';
import { Quote } from 'lucide-react';

// NOTE: Jerur currently exposes no GET endpoint for approved testimonies —
// only /api/email/testimony to submit one. Until that read endpoint exists,
// this is manually-curated static content. Swap for a real fetch once available.
const TESTIMONIES = [
  {
    quote: "I walked in during the hardest season of my life. This church didn't just pray for me — they stood with me until I could stand on my own.",
    attribution: 'A member of our church family'
  },
  {
    quote: "I came in desperate for a breakthrough. Within weeks of joining the prayer meetings, doors that had been shut for years began to open.",
    attribution: 'A member of our prayer family'
  },
  {
    quote: "I found more than a church here — I found people who treated my family like their own from the very first Sunday.",
    attribution: 'A new member'
  }
];

export function TestimonyBand() {
  return (
    <section className="text-white px-8 py-[90px]" style={{ background: 'linear-gradient(160deg,#3A0870,#1A0A2E)' }}>
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto mb-[54px]">
          <div className="eyebrow text-gold mb-3.5">Testimony</div>
          <h2 className="font-display text-[32px] text-white">Stories of God&apos;s faithfulness</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[54px]">
          {TESTIMONIES.map(({ quote, attribution }, i) => (
            <div
              key={i}
              className="rounded-lg p-7 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <Quote size={22} className="text-gold mb-4" fill="currentColor" strokeWidth={0} />
              <p className="font-display italic text-[15.5px] leading-[1.75] text-[#F3F1EA] mb-5 flex-1">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="w-8 h-[2px] bg-gold mb-3" />
              <div className="text-[12.5px] text-[#9AA0BC]">— {attribution}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonies" className="text-[13.5px] font-semibold text-gold border-b border-gold pb-[3px]">
            Read more testimonies →
          </Link>
        </div>
      </div>
    </section>
  );
}
