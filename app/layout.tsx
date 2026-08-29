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

export const metadata: Metadata = {
  title: {
    default: churchConfig.name,
    template: `%s — ${churchConfig.shortName}`
  },
  description: churchConfig.tagline
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [settings, services] = await Promise.all([getChurchSettings(), getRegularServices()]);
  const fallback: Record<string, unknown> = {};
  if (settings) fallback['/api/settings'] = settings;
  if (services) fallback['/api/regular-services'] = services;

  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <body>
        <SwrProvider fallback={fallback}>
          <Navbar />
          {children}
          <Footer />
        </SwrProvider>
      </body>
    </html>
  );
}
