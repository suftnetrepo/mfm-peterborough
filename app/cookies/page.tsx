import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { LegalSection } from '@/components/layout/legal-section';
import { getChurchSettings } from '@/lib/server-data';

export const metadata: Metadata = { title: 'Cookies' };

export const revalidate = 300;

const LAST_UPDATED = 'September 2026';

export default async function CookiesPage() {
  const settings = await getChurchSettings();
  const email = settings?.data?.email || 'mfmpeterborough@gmail.com';

  return (
    <main>
      <PageHeader eyebrow="Legal" title="Cookie policy" description="How we use cookies on this website." />
      <section className="px-8 py-16">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[13px] text-ink-soft mb-10">Last updated: {LAST_UPDATED}</p>

          <LegalSection title="1. What are cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a website. They&apos;re commonly used to remember your
              preferences, keep you signed in, or track how you use a site over time.
            </p>
          </LegalSection>

          <LegalSection title="2. Do we use cookies?">
            <p>
              No — not currently. This website does not use cookies, or similar technologies like local storage or tracking pixels, for
              analytics, advertising, or marketing purposes. We haven&apos;t added any analytics or advertising tools to this site.
            </p>
          </LegalSection>

          <LegalSection title="3. Essential functionality">
            <p>
              This site doesn&apos;t require you to log in and doesn&apos;t remember any personal preferences between visits, so it doesn&apos;t
              need to set any cookies to function.
            </p>
          </LegalSection>

          <LegalSection title="4. Third-party links">
            <p>
              Some pages link out to third-party services — for example, our online giving partner, or a video-conferencing link for our
              prayer line. Once you leave our website and visit one of these external sites, their own cookie and privacy policies apply,
              not ours. We encourage you to review those before you carry on.
            </p>
          </LegalSection>

          <LegalSection title="5. If this changes">
            <p>
              If we ever add analytics, embedded video, or other tools that use cookies, we will update this page and, where the law
              requires it, ask for your consent first.
            </p>
          </LegalSection>

          <LegalSection title="6. Questions">
            <p>
              If you have any questions about this policy, contact us at{' '}
              <a href={`mailto:${email}`} className="text-indigo hover:text-indigo-deep">{email}</a>.
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  );
}
