import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/travel/Hero';
import { WhyUs } from '@/components/travel/WhyUs';
import { Testimonials } from '@/components/travel/Testimonials';
import { DestinationCard } from '@/components/travel/DestinationCard';
import { PackageCard } from '@/components/travel/PackageCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/site/Reveal';
import { FlagshipBand } from '@/components/travel/FlagshipBand';
import { destinations, featuredPackages } from '@/lib/catalogue';
import { photos } from '@/data/images';

const FLAGSHIP = 'rajasthan-heritage';

export default function HomePage() {
  // The flagship gets its own band above the grid, so keep it out of the grid.
  const featured = featuredPackages(12)
    .filter((pkg) => pkg.slug !== FLAGSHIP)
    .slice(0, 6);

  return (
    <>
      <Hero />

      {/* ───────────── Popular destinations ───────────── */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Popular destinations"
            title="Eight places worth the time off"
            description="Islands, mountains, backwaters and forts — each with trips already costed and sequenced."
            action={
              <Button href="/destinations" variant="secondary" size="md">
                All destinations
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Button>
            }
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination, index) => (
              <Reveal
                key={destination.slug}
                delay={(index % 3) * 70}
                className={index === 0 ? 'sm:col-span-2' : undefined}
              >
                <DestinationCard
                  destination={destination}
                  size={index === 0 ? 'feature' : 'standard'}
                  priority={index === 0}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Featured packages ───────────── */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured tour packages"
            title="Trips you can book this season"
            description="Day-wise itineraries, stated inclusions and one per-person price. Nothing revealed later."
            action={
              <Button href="/packages" variant="secondary" size="md">
                All packages
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Button>
            }
          />

          <Reveal className="mt-14 block">
            <FlagshipBand slug={FLAGSHIP} />
          </Reveal>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((pkg, index) => (
              <Reveal key={pkg.slug} delay={(index % 3) * 70} className="h-full">
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
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
                  Browse packages
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
