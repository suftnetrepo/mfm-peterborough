import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/layout/page-header';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Welcome to MFM Peterborough — the Peterborough branch of the Mountain of Fire and Miracles Ministries UK.'
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About us"
        title="About MFM Peterborough"
        description="The Peterborough branch of Mountain of Fire and Miracles Ministries UK."
      />

      {/* Real "About MFM UK" copy, sourced from mountainoffire.org.uk */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <div className="eyebrow text-gold-deep mb-4">Who we are</div>
            <h2 className="font-display text-[30px] mb-8 max-w-[520px]">
              Welcome to MFM Peterborough
            </h2>
            <div className="flex flex-col gap-5 text-[15.5px] text-ink-soft leading-[1.9]">
              <p>
                Welcome to the Peterborough branch of Mountain of Fire and Miracles Ministries
                International, the UK arm of the Mountain of Fire and Miracles Ministries Worldwide.
              </p>
              <p>
                We are a groundbreaking non-denominational fellowship committed to raising up an army
                of prayer warriors fully geared up to totally expose the activities of darkness
                preparatory to the coming of the end-time revival.
              </p>
              <p>
                We are deeply committed to absolute holiness as the greatest spiritual germicide and
                as a pre-condition for heaven.
              </p>
              <p>
                Our tested and proven D-I-Y approach to prayer warfare continues to provoke
                dumb-founding miracles and attract divine intervention in situations which hitherto
                had proven intractable. Testimonies abound as to the manifestation of the awesome
                greatness of the Almighty God in our services.
              </p>
              <p>
                MFM International as a hub supports a network of over 50 branches all over the UK,
                and provides administrative support and backing to an ever expanding web of branches
                in Europe.
              </p>
              <p className="font-semibold text-ink">
                We look forward to welcoming and championing you to victory in one of our services.
                Your battle is the Lord's!
              </p>
            </div>
          </div>

          {/* Right column — photo + statement of belief card */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80"
                alt="MFM Peterborough congregation in worship"
                fill
                sizes="480px"
                className="object-cover"
              />
            </div>
            {/* Statement of belief teaser card */}
            <div className="bg-paper-alt rounded-lg p-7 border border-[rgba(91,15,168,0.1)]">
              <h3 className="font-display text-[18px] font-semibold text-ink mb-3">Statement of Belief</h3>
              <p className="text-[13.5px] text-ink-soft leading-[1.75] mb-4">
                We believe in the Holy Trinity, in the absolute authority of Scripture, in salvation
                through Jesus Christ alone, and in the present-day operation of the gifts of the
                Holy Spirit.
              </p>
              <a
                href="https://www.mountainoffire.org.uk/index.php/about-us/who-we-are/statement-of-belief"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo font-semibold text-[13.5px] hover:text-indigo-deep inline-flex items-center gap-1.5"
              >
                Read the full statement →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
