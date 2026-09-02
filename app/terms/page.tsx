import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { LegalSection, LegalList } from '@/components/layout/legal-section';
import { getChurchSettings } from '@/lib/server-data';
import { churchConfig } from '@/church.config';

export const metadata: Metadata = { title: 'Terms' };

export const revalidate = 300;

const LAST_UPDATED = 'September 2026';

export default async function TermsPage() {
  const settings = await getChurchSettings();
  const email = settings?.data?.email || 'mfmpeterborough@gmail.com';

  return (
    <main>
      <PageHeader eyebrow="Legal" title="Terms & conditions" description="Terms and conditions for using this website." />
      <section className="px-8 py-16">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[13px] text-ink-soft mb-10">Last updated: {LAST_UPDATED}</p>

          <LegalSection title="1. Acceptance of these terms">
            <p>By using this website, you agree to these terms. If you do not agree with any part of them, please do not use the site.</p>
          </LegalSection>

          <LegalSection title="2. About us">
            <p>This website is operated by {churchConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a local congregation of Mountain of Fire and Miracles Ministries.</p>
          </LegalSection>

          <LegalSection title="3. Using this website">
            <p>You are welcome to browse this website and use the contact, prayer request, testimony, and event registration forms for their intended purpose. You agree not to:</p>
            <LegalList
              items={[
                'use this website in any way that is unlawful, fraudulent, or harmful to us or anyone else',
                'attempt to gain unauthorised access to this website, or any account, system, or network connected to it',
                'copy, scrape, or reproduce content from this site for commercial purposes without our permission',
                'submit false, misleading, or abusive information through any form on this site'
              ]}
            />
          </LegalSection>

          <LegalSection title="4. Content and intellectual property">
            <p>
              Unless otherwise stated, the text, images, and design of this website belong to {churchConfig.shortName} or are used with
              permission. You may view and print pages for your own personal, non-commercial use, but you may not otherwise copy,
              reproduce, or distribute our content without our written consent.
            </p>
          </LegalSection>

          <LegalSection title="5. Submissions">
            <p>
              When you submit a message, prayer request, testimony, or event registration, you confirm that the information you provide is
              accurate and that you have the right to share it. We may edit testimonies for length or clarity before sharing them, and we
              will always seek your agreement before publishing anything that identifies you.
            </p>
          </LegalSection>

          <LegalSection title="6. Giving and donations">
            <p>
              Details of ways to give — including our online giving link and bank transfer details — are provided on our{' '}
              <a href="/give" className="text-indigo hover:text-indigo-deep">Give</a> page for your convenience. Donations are made
              voluntarily and at your own discretion. While we take care to keep this information accurate and up to date, please
              double-check payment details before transferring funds, and contact us directly if you are ever unsure. We are not
              responsible for payments made to incorrect details as a result of fraud or a third party impersonating us.
            </p>
          </LegalSection>

          <LegalSection title="7. Third-party links">
            <p>
              This website may link to third-party services — such as our online giving partner, video-conferencing tools, or social media
              pages. We are not responsible for the content, accuracy, or privacy practices of those third-party sites, and linking to them
              does not imply our endorsement of everything they contain.
            </p>
          </LegalSection>

          <LegalSection title="8. Availability of this website">
            <p>
              We try to keep this website available, accurate, and up to date, but we do not guarantee it will always be available,
              uninterrupted, or error-free. We may suspend, withdraw, or change any part of this site at any time without notice.
            </p>
          </LegalSection>

          <LegalSection title="9. Limitation of liability">
            <p>
              We provide this website &ldquo;as is&rdquo; and, to the extent permitted by law, we are not liable for any loss or damage
              arising from your use of it. Nothing in these terms limits our liability where it would be unlawful to do so.
            </p>
          </LegalSection>

          <LegalSection title="10. Governing law">
            <p>These terms are governed by the laws of England and Wales, and any dispute relating to them will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </LegalSection>

          <LegalSection title="11. Changes to these terms">
            <p>We may update these terms from time to time. The date at the top of this page shows when they were last revised.</p>
          </LegalSection>

          <LegalSection title="12. Contact us">
            <p>
              If you have any questions about these terms, contact us at{' '}
              <a href={`mailto:${email}`} className="text-indigo hover:text-indigo-deep">{email}</a>.
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  );
}
