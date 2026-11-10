import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { photos } from '@/data/images';
import { destinations, packages } from '@/lib/catalogue';
import { SearchBar } from './SearchBar';

const QUICK_LINKS = [
  { label: 'Andaman', href: '/packages/andaman' },
  { label: 'Kashmir', href: '/packages/kashmir' },
  { label: 'Kerala', href: '/packages/kerala' },
  { label: 'Rajasthan', href: '/packages/rajasthan' },
  { label: 'Bali', href: '/packages/bali' },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[42rem] overflow-hidden bg-ink pb-16 pt-[4.5rem] sm:min-h-[46rem] lg:min-h-[48rem]">
      <Image
        src={photos.heroHome.src}
        alt={photos.heroHome.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      {/* Two layers: a flat wash for overall contrast, a scrim for the lower text. */}
      <div className="absolute inset-0 bg-ink/35" />
      <div className="scrim absolute inset-0" />

      <div className="shell relative flex min-h-[36rem] flex-col justify-center py-16 sm:min-h-[40rem]">
        <div className="max-w-3xl">
          <p className="animate-fade-in text-2xs font-semibold uppercase tracking-eyebrow text-white/70">
            Discover More. Travel Better.
          </p>

          <h1 className="display mt-5 animate-fade-up text-[2.75rem] text-white sm:text-[4rem] lg:text-[4.75rem]">
            Your Next Journey Starts Here.
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-pretty text-[1.0625rem] leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: '90ms' }}
          >
            Discover thoughtfully curated journeys and unforgettable experiences — planned end to end, priced
            without surprises.
          </p>

          <div className="mt-9 max-w-2xl animate-fade-up" style={{ animationDelay: '180ms' }}>
            <SearchBar />
          </div>

          <div
            className="mt-6 flex animate-fade-up flex-wrap items-center gap-2"
            style={{ animationDelay: '260ms' }}
          >
            <span className="mr-1 text-2xs uppercase tracking-eyebrow text-white/50">Popular</span>
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[0.8125rem] text-white/80 backdrop-blur-sm transition-all duration-300 ease-creatourzz hover:border-white/50 hover:bg-white/15 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.8125rem] text-white/70 transition-colors hover:text-white"
            >
              All destinations
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 ease-creatourzz group-hover:translate-x-0.5"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Credibility strip, phrased honestly for a demo product. */}
      <div className="shell relative">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/15 pt-8 sm:grid-cols-4">
          {[
            { k: String(destinations.length), v: 'Destinations curated' },
            { k: String(packages.length), v: 'Itineraries ready to book' },
            { k: '0', v: 'Hidden charges' },
            { k: '24/7', v: 'Trip-day assistance' },
          ].map((stat) => (
            <div key={stat.v}>
              <dt className="font-display text-3xl text-white">{stat.k}</dt>
              <dd className="mt-1 text-2xs uppercase tracking-eyebrow text-white/55">{stat.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
