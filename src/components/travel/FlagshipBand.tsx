import Image from 'next/image';
import { ArrowRight, MapPin, CalendarDays, Landmark } from 'lucide-react';
import { packageBySlug } from '@/lib/catalogue';
import { inr, duration } from '@/lib/format';
import { Button } from '@/components/ui/Button';

/**
 * Editorial feature strip for the flagship journey.
 * Renders nothing if the package is removed from the catalogue.
 */
export function FlagshipBand({ slug = 'rajasthan-heritage' }: { slug?: string }) {
  const pkg = packageBySlug.get(slug);
  if (!pkg) return null;

  const stops = pkg.routeStops?.map((s) => s.city).join(' · ');

  return (
    <article className="relative isolate overflow-hidden rounded-4xl border border-gold/25 bg-ink">
      <Image
        src={pkg.gallery[0].src}
        alt={pkg.gallery[0].alt}
        fill
        sizes="(max-width: 1280px) 100vw, 1240px"
        className="object-cover opacity-55"
      />
      <div className="scrim absolute inset-0" />

      <div className="relative grid gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1.5 text-2xs font-semibold uppercase tracking-eyebrow text-white backdrop-blur-md">
            <Landmark className="h-3 w-3" strokeWidth={2} />
            Flagship journey
          </p>

          <h2 className="display mt-5 max-w-2xl text-[2rem] text-white sm:text-[2.75rem]">{pkg.name}</h2>

          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-white/75">{pkg.summary}</p>

          {stops ? (
            <p className="mt-5 flex items-start gap-2 text-2xs text-white/65">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
              {stops}
            </p>
          ) : null}

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-2xs text-white/70">
            <li className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.7} />
              {duration(pkg.nights, pkg.days)}
            </li>
            <li>From {inr(pkg.pricePerPerson)} per person · indicative</li>
            <li>{pkg.tiers?.length ?? 0} price tiers</li>
          </ul>
        </div>

        <div className="lg:justify-self-end">
          <Button href={`/packages/${pkg.slug}`} size="lg" variant="heritage">
            View the journey
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </article>
  );
}
