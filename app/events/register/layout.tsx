import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register for an upcoming event at MFM Peterborough.'
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
