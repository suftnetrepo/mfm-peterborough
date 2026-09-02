import type { Metadata } from 'next';
import { MapPin, Phone, Mail, HeartHandshake, MessageCircle, Clock, type LucideIcon } from 'lucide-react';
import { ContactFormSection } from './contact-form-section';
import { AddressValue, PhoneValue, EmailValue } from './contact-info';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach MFM Peterborough — general enquiries, prayer requests, and counselling.'
};

const WAYS = [
  {
    Icon: MessageCircle,
    title: 'General Enquiry',
    desc: 'Questions about our services, location, or anything else.',
    action: 'Send a message below',
    href: '#form'
  },
  {
    Icon: HeartHandshake,
    title: 'Prayer Request',
    desc: 'Submit a personal prayer request to our prayer team.',
    action: 'Use our prayer form',
    href: '/prayers'
  },
  {
    Icon: Clock,
    title: 'Counselling',
    desc: 'Speak to a pastor in confidence. We are here for you.',
    action: 'Contact via email',
    href: 'mailto:mfmpeterborough@gmail.com'
  }
];

export default function ContactPage() {
  return (
    <main>
      {/* Dark purple header banner — distinctly different from page-header */}
      <div className="bg-indigo-deep text-white py-16 px-8 text-center">
        <div className="max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-gold text-[11px] font-mono font-medium tracking-[0.12em] uppercase">Get in touch</span>
          </div>
          <h1 className="font-display text-[42px] font-semibold text-white mb-4">Contact Us</h1>
          <p className="text-[#C5B8E0] text-[16px] leading-[1.75]">
            We would love to hear from you. Whether you have a question, a prayer need, or simply
            want to find out more about MFM Peterborough, we&apos;re here to help.
          </p>
        </div>
      </div>

      {/* Three ways to reach us */}
      <div className="bg-paper-alt px-8 py-12">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {WAYS.map(({ Icon, title, desc, action, href }) => (
            <div key={title} className="bg-white rounded-lg p-7 border border-[rgba(91,15,168,0.1)] flex flex-col">
              <div className="w-12 h-12 rounded-full bg-sage-soft flex items-center justify-center mb-5">
                <Icon size={22} className="text-indigo" />
              </div>
              <h3 className="font-display text-[17px] font-semibold text-ink mb-2">{title}</h3>
              <p className="text-[13.5px] text-ink-soft leading-[1.7] mb-4 flex-1">{desc}</p>
              <a href={href} className="text-indigo font-semibold text-[13px] hover:text-indigo-deep">
                {action} →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Two-column: contact details left, form right */}
      <section id="form" className="px-8 py-16 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14">
          <div>
            <h2 className="font-display text-[26px] font-semibold text-ink mb-8">Visit or reach us</h2>
            <div className="flex flex-col gap-7">
              <ContactRow Icon={MapPin} label="Address">
                <AddressValue />
              </ContactRow>
              <ContactRow Icon={Phone} label="Phone">
                <PhoneValue />
              </ContactRow>
              <ContactRow Icon={Mail} label="Email">
                <EmailValue />
              </ContactRow>
            </div>
          </div>
          <ContactFormSection />
        </div>
      </section>
    </main>
  );
}

function ContactRow({ Icon, label, children }: { Icon: LucideIcon; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-sage-soft flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={18} className="text-indigo" />
      </div>
      <div>
        <div className="text-[11.5px] font-semibold font-mono uppercase tracking-[0.1em] text-ink-soft mb-1">{label}</div>
        {children}
      </div>
    </div>
  );
}
