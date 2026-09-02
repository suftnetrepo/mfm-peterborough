import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PrayerDownloadIllustration } from "@/components/illustrations/prayer-download-illustration";
import { PrayerBookIllustration } from "@/components/illustrations/prayer-book-illustration";
import { SalvationIllustration } from "@/components/illustrations/salvation-illustration";
import { FoodBankIllustration } from "@/components/illustrations/food-bank-illustration";
import { hasFeature } from "@/lib/features";

// Links out to MFM's national resource library (mountainoffire.org.uk) — this
// church doesn't host its own prayer points or salvation content, so these
// point straight at the source rather than duplicating it here.
const allCards = [
  {
    title: "Download PMCH prayer points",
    description:
      "Monthly prayer points and programme pamphlets from Prayer & Miracle Clinic Hour, free to download every month.",
    href: "https://www.mountainoffire.org.uk/index.php/resources/download-pmch-prayer-points",
    cta: "Download now",
    band: "linear-gradient(135deg,#E8B968,#C4832F)",
    Illustration: PrayerDownloadIllustration,
  },
  {
    title: "Prayer points",
    description:
      "Browse MFM's full library of prayer points, searchable by title, for whatever season of prayer you're walking through.",
    href: "https://www.mountainoffire.org.uk/index.php/resources/prayer-points",
    cta: "Browse prayer points",
    band: "linear-gradient(135deg,#232C50,#141830)",
    Illustration: PrayerBookIllustration,
  },
  {
    title: "Salvation in Christ",
    description:
      "New to faith, or ready to start again? Read how to be born again and take your next step with Jesus.",
    href: "https://www.mountainoffire.org.uk/index.php/resources/salvation-in-christ",
    cta: "Read more",
    band: "linear-gradient(135deg,#5B0FA8,#3A0870)",
    Illustration: SalvationIllustration,
  },
  {
    title: "Community food bank",
    description:
      "Practical, no-questions-asked support for families in your community.",
    href: "/food-bank",
    cta: "Learn more",
    band: "linear-gradient(135deg,#71875F,#4A5B40)",
    Illustration: FoodBankIllustration,
    feature: "foodBank" as const,
  },
];

// Filtered once at module scope — church.config.ts doesn't change at
// runtime. A church without the Food Bank feature just gets the three
// resource cards here, not a card linking to a 404.
const cards = allCards.filter((card) => !card.feature || hasFeature(card.feature));

export function GetInvolved() {
  return (
    <section className="bg-paper-alt px-8 py-[90px]">
      <div className="max-w-[1160px] mx-auto mb-[46px]">
        <div className="eyebrow text-sage mb-3.5">Resources</div>
        <h2 className="text-[32px] max-w-[560px]">
          Prayer, downloads, and resources to grow your faith.
        </h2>
      </div>
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[26px]">
        {cards.map(({ title, description, href, cta, band, Illustration }) => {
          const isExternal = href.startsWith("http");
          const linkClass =
            "inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink border-b border-gold pb-0.5";

          return (
            <div
              key={title}
              className="bg-paper border border-ink/10 rounded-md overflow-hidden"
            >
              <div className="h-[150px]" style={{ background: band }}>
                <Illustration />
              </div>
              <div className="p-6 pb-7">
                <h3 className="text-[17px] font-semibold font-sans mb-2.5">
                  {title}
                </h3>
                <p className="text-sm text-ink-soft mb-4">{description}</p>
                {isExternal ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {cta} <ExternalLink size={13} />
                  </a>
                ) : (
                  <Link href={href} className={linkClass}>
                    {cta}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
