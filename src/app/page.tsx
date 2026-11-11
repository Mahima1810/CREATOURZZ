import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/travel/Hero';
import { WhyUs } from '@/components/travel/WhyUs';
import { Testimonials } from '@/components/travel/Testimonials';
import { PackageCard } from '@/components/travel/PackageCard';
import { CustomisedTourBand } from '@/components/travel/CustomisedTourBand';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/site/Reveal';
import { signaturePackages } from '@/lib/catalogue';
import { PRICING_NOTE } from '@/lib/pricing';
import { photos } from '@/data/images';

export default function HomePage() {
  // Exactly four. The wider catalogue lives at /packages, deliberately not here —
  // a homepage showing thirteen products makes none of them feel chosen.
  const signature = signaturePackages();

  return (
    <>
      <Hero />

      {/* ───────────── The four signature journeys ───────────── */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Signature journeys"
            title="Explore Our Signature Journeys"
            description="Four thoughtfully curated journeys. Four extraordinary ways to discover India's culture, heritage and natural beauty."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {signature.map((pkg, index) => (
              <Reveal key={pkg.slug} delay={(index % 2) * 80} className="h-full">
                <PackageCard pkg={pkg} priority={index < 2} />
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-2xs text-ink-mute">{PRICING_NOTE}</p>
        </div>
      </section>

      {/* ───────────── Customised tours ───────────── */}
      <section className="pb-20 lg:pb-28">
        <div className="shell">
          <Reveal>
            <CustomisedTourBand />
          </Reveal>
        </div>
      </section>

      <WhyUs />

      <Testimonials />

      {/* ───────────── Closing call to action ───────────── */}
      <section className="pb-24">
        <div className="shell">
          <div className="relative isolate overflow-hidden rounded-4xl bg-ink">
            <Image
              src={photos.heroPackages.src}
              alt={photos.heroPackages.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1240px"
              className="object-cover opacity-45"
            />
            <div className="relative grid gap-8 px-7 py-16 sm:px-12 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:px-16 lg:py-20">
              <div>
                <p className="text-2xs font-semibold uppercase tracking-eyebrow text-white/60">
                  Not sure where to start?
                </p>
                <h2 className="display mt-4 max-w-xl text-[2.25rem] text-white sm:text-[3rem]">
                  Tell us the dates. We will shape the rest.
                </h2>
                <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/70">
                  Send an enquiry with roughly when you want to travel and how many of you there are. You get a
                  costed plan back — no payment is taken anywhere on this site.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button href="/packages" size="lg">
                  Browse all journeys
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Button>
                <Button href="/contact" size="lg" variant="onPhoto">
                  Talk to us
                </Button>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-2xs text-ink-mute">
            CREATOURZZ is a demonstration project.{' '}
            <Link href="/about" className="underline underline-offset-2 transition-colors hover:text-accent">
              Read what that means
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
