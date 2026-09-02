import type { Metadata } from 'next';
import { Playfair_Display, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SwrProvider } from '@/components/providers/swr-provider';
import { getChurchSettings, getRegularServices } from '@/lib/server-data';
import { churchConfig } from '@/church.config';

const displayFont = Playfair_Display({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600'] });
const sansFont = Inter({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] });
const monoFont = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['500'] });

// Set NEXT_PUBLIC_SITE_URL once the site has a real production domain —
// it backs canonical links, Open Graph/Twitter cards, and sitemap.xml/robots.txt.
// Falls back to localhost so metadata resolution doesn't break in dev.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';
const OG_IMAGE = 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=1200&h=630&fit=crop&q=80';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Every page's <title> reads "<Page> — MFM Peterborough"; the home page,
    // which sets no page-specific title, falls back to just "MFM Peterborough".
    default: churchConfig.shortName,
    template: `%s — ${churchConfig.shortName}`
  },
  description: churchConfig.tagline,
  keywords: [
    'MFM Peterborough',
    'Mountain of Fire and Miracles Ministries',
    'MFM UK',
    'Church in Peterborough',
    'Pentecostal church Peterborough',
    'Prayer meeting Peterborough',
    'Sunday service Peterborough',
    'Deliverance ministry UK'
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png'
  },
  openGraph: {
    title: churchConfig.shortName,
    description: churchConfig.tagline,
    siteName: churchConfig.shortName,
    type: 'website',
    locale: 'en_GB',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: churchConfig.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: churchConfig.shortName,
    description: churchConfig.tagline,
    images: [OG_IMAGE]
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [settings, services] = await Promise.all([getChurchSettings(), getRegularServices()]);
  const fallback: Record<string, unknown> = {};
  if (settings) fallback['/api/settings'] = settings;
  if (services) fallback['/api/regular-services'] = services;

  // Local-business structured data for search engines (Google's rich results,
  // knowledge panels). Address/phone/email come from the live backend where
  // available so this stays accurate without a separate edit.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: churchConfig.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    ...(settings?.data?.address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: settings.data.address.addressLine1,
        addressLocality: settings.data.address.town,
        postalCode: settings.data.address.postcode,
        addressCountry: 'GB'
      }
    }),
    ...(settings?.data?.mobile && { telephone: settings.data.mobile }),
    ...(settings?.data?.email && { email: settings.data.email })
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* eslint-disable-next-line react/no-danger */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SwrProvider fallback={fallback}>
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </SwrProvider>
      </body>
    </html>
  );
}
