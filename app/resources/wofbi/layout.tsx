import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Word of Faith Bible Institute',
  description: 'Register for the Word of Faith Bible Institute (WOFBI) at MFM Peterborough.'
};

export default function WofbiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
