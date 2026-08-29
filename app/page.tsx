import type { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { InfoBar } from '@/components/home/info-bar';
import { WelcomeStatement } from '@/components/home/welcome-statement';
import { QuickCards } from '@/components/home/quick-cards';
import { GetInvolved } from '@/components/home/get-involved';
import { TestimonyBand } from '@/components/home/testimony-band';
import { churchConfig } from '@/church.config';

export const metadata: Metadata = {
  title: 'Home',
  description: churchConfig.tagline
};

export default function Home() {
  return (
    <main>
      <Hero />
      <InfoBar />
      <WelcomeStatement />
      <QuickCards />
      <GetInvolved />
      <TestimonyBand />
    </main>
  );
}
