export function PrayerBookIllustration() {
  return (
    <svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of an open prayer book with rising light" className="w-full h-full">
      <path d="M20 26 Q200 4 380 26" stroke="#D9A441" strokeWidth="1.4" fill="none" opacity="0.45" />
      <g fill="#D9A441" opacity="0.88">
        <path d="M200 60 L120 78 L120 118 L200 104 Z" />
        <path d="M200 60 L280 78 L280 118 L200 104 Z" opacity="0.92" />
      </g>
      <g stroke="#F4E3C1" strokeWidth="1.6" opacity="0.6">
        <path d="M132 90 L188 100" />
        <path d="M132 100 L188 110" />
        <path d="M212 100 L268 90" />
        <path d="M212 110 L268 100" />
      </g>
      <g stroke="#F4E3C1" strokeWidth="2" opacity="0.65" strokeLinecap="round">
        <path d="M200 28 V50" />
        <path d="M184 34 L196 48" />
        <path d="M216 34 L204 48" />
      </g>
      <circle cx="70" cy="100" r="2" fill="#F4E3C1" opacity="0.5" />
      <circle cx="330" cy="90" r="2.2" fill="#F4E3C1" opacity="0.45" />
    </svg>
  );
}
