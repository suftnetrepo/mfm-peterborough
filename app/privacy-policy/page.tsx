import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { LegalSection, LegalList } from '@/components/layout/legal-section';
import { getChurchSettings } from '@/lib/server-data';
import { churchConfig } from '@/church.config';

export const metadata: Metadata = { title: 'Privacy Policy' };

export const revalidate = 300;

const LAST_UPDATED = 'September 2026';

export default async function PrivacyPolicyPage() {
  const settings = await getChurchSettings();
  const email = settings?.email || 'mfmpeterborough@gmail.com';
  const phone = settings?.mobile;
  const address = settings?.address
    ? `${settings.address.addressLine1}, ${settings.address.town}, ${settings.address.postcode}`
    : `${churchConfig.address.line1}, ${churchConfig.address.line2}`;

  return (
    <main>
      <PageHeader eyebrow="Legal" title="Privacy policy" description="How we collect, use, and protect your information." />
      <section className="px-8 py-16">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[13px] text-ink-soft mb-10">Last updated: {LAST_UPDATED}</p>

          <LegalSection title="1. Who we are">
            <p>
              {churchConfig.name} (&ldquo;{churchConfig.shortName}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates this
              website. We are the data controller for the personal information described in this policy — the organisation responsible for
              deciding how and why it is used. If you have any questions about this policy or how we handle your information, contact us at{' '}
              <a href={`mailto:${email}`} className="text-indigo hover:text-indigo-deep">{email}</a>.
            </p>
          </LegalSection>

          <LegalSection title="2. Information we collect">
            <p>We only collect personal information that you choose to give us. This includes, where you submit the relevant form on this site:</p>
            <LegalList
              items={[
                'Your name, email address, and message, when you send us a general enquiry.',
                'Your name, email address, and prayer request, when you ask us to pray for you.',
                'Your name, email address, and testimony, when you share what God has done in your life.',
                'Your name, email address, and phone number, when you register for an event.'
              ]}
            />
            <p>We do not require an account or login to use this website, and we do not collect personal information passively as you browse — see our Cookie Policy for more on that.</p>
          </LegalSection>

          <LegalSection title="3. How we use your information">
            <p>We only use what you give us for the reason you gave it to us:</p>
            <LegalList
              items={[
                'To respond to a general enquiry sent through our contact form.',
                'To pray for you and, where appropriate, follow up pastorally on a prayer request.',
                'To review a submitted testimony and, with your agreement, share it on this website.',
                'To register you for an event and send you information related to it.'
              ]}
            />
            <p>Our legal basis for this is your consent in submitting the form, and our legitimate interest in responding to enquiries and running church activities.</p>
          </LegalSection>

          <LegalSection title="4. Sensitive information">
            <p>
              Prayer requests and testimonies can understandably touch on sensitive matters — health, family circumstances, or personal
              struggles. You are always in control of what you choose to share with us. We use this information only for pastoral care, and
              for testimonies, we will always seek your agreement before publishing anything that identifies you.
            </p>
          </LegalSection>

          <LegalSection title="5. Who we share it with">
            <LegalList
              items={[
                <>Messages submitted through our forms are delivered to our church inbox using Brevo, a transactional email provider, acting on our behalf as a data processor.</>,
                <>Event registrations are recorded on the church management platform that also powers our events, fellowship, and service times listings, so our team can plan and manage attendance.</>
              ]}
            />
            <p>We do not sell your information, and we do not share it with third parties for their own marketing purposes.</p>
          </LegalSection>

          <LegalSection title="6. How long we keep it">
            <p>
              We keep enquiry, prayer request, and testimony messages for as long as reasonably needed to respond and provide pastoral
              follow-up, and event registration details for as long as needed to plan, run, and review the event — after which they are
              deleted or anonymised.
            </p>
          </LegalSection>

          <LegalSection title="7. Cookies">
            <p>This website does not use cookies for analytics, advertising, or tracking. See our <a href="/cookies" className="text-indigo hover:text-indigo-deep">Cookie Policy</a> for full details.</p>
          </LegalSection>

          <LegalSection title="8. Your rights">
            <p>Under UK data protection law, you have the right to:</p>
            <LegalList
              items={[
                'ask for a copy of the personal information we hold about you',
                'ask us to correct information that is inaccurate or incomplete',
                'ask us to delete your information',
                'object to, or ask us to restrict, how we use your information',
                'ask for your information to be moved to another organisation'
              ]}
            />
            <p>
              To exercise any of these rights, contact us at <a href={`mailto:${email}`} className="text-indigo hover:text-indigo-deep">{email}</a>.
              If you are not satisfied with our response, you have the right to complain to the Information Commissioner&apos;s Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-indigo hover:text-indigo-deep">ico.org.uk</a>.
            </p>
          </LegalSection>

          <LegalSection title="9. Keeping your information safe">
            <p>
              We take reasonable technical and organisational steps to protect the information you share with us, including using
              reputable, encrypted third-party services for email delivery and data storage.
            </p>
          </LegalSection>

          <LegalSection title="10. Changes to this policy">
            <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised.</p>
          </LegalSection>

          <LegalSection title="11. Contact us">
            <p>
              {churchConfig.name}
              <br />
              {address}
              <br />
              <a href={`mailto:${email}`} className="text-indigo hover:text-indigo-deep">{email}</a>
              {phone && <><br />{phone}</>}
            </p>
          </LegalSection>
        </div>
      </section>
    </main>
  );
}
