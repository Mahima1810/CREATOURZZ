import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Check,
  X,
  Sparkles,
  CalendarDays,
  MapPin,
  BedDouble,
  Sun,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { packages, packageBySlug, destinationFor, packagesForDestination } from '@/lib/catalogue';
import { inr, duration, cn } from '@/lib/format';
import type { Package } from '@/lib/types';
import { Gallery } from '@/components/travel/Gallery';
import { Itinerary } from '@/components/travel/Itinerary';
import { BookingPanel } from '@/components/travel/BookingPanel';
import { PackageCard } from '@/components/travel/PackageCard';
import { EnquiryProvider } from '@/components/travel/EnquiryProvider';
import { RouteOverview } from '@/components/travel/RouteOverview';
import { HeritageSites } from '@/components/travel/HeritageSites';
import { TiersSection } from '@/components/travel/TiersSection';
import { Faqs } from '@/components/travel/Faqs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/site/Reveal';

type Props = { params: Promise<{ slug: string }> };

/**
 * The catalogue is fully known at build time, so every valid slug is
 * prerendered and anything else is a genuine 404 rather than an on-demand
 * render that would answer 200.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packageBySlug.get(slug);
  if (!pkg) return { title: 'Package not found' };
  return {
    title: pkg.name,
    description: `${duration(pkg.nights, pkg.days)} · from ${inr(pkg.pricePerPerson)} per person. ${pkg.summary}`,
  };
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = packageBySlug.get(slug);
  if (!pkg) notFound();

  const destination = destinationFor(pkg);
  const editorial = Boolean(pkg.editorial);

  const related = packagesForDestination(pkg.destinationSlug)
    .filter((p) => p.slug !== pkg.slug)
    .concat(packages.filter((p) => p.destinationSlug !== pkg.destinationSlug && p.featured))
    .slice(0, 3);

  const metaRow = [
    { Icon: CalendarDays, text: duration(pkg.nights, pkg.days) },
    { Icon: MapPin, text: destination?.name ?? '' },
    { Icon: BedDouble, text: pkg.hotelCategory },
    { Icon: Sun, text: `Best: ${pkg.bestTime}` },
  ].filter((item) => item.text);

  const crumbs = (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          'flex flex-wrap items-center gap-1 text-2xs',
          editorial ? 'text-white/60' : 'text-ink-mute',
        )}
      >
        <li>
          <Link href="/" className={editorial ? 'transition-colors hover:text-white' : 'transition-colors hover:text-accent'}>
            Home
          </Link>
        </li>
        <li className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3 opacity-50" strokeWidth={2} />
          <Link
            href="/packages"
            className={editorial ? 'transition-colors hover:text-white' : 'transition-colors hover:text-accent'}
          >
            Tour Packages
          </Link>
        </li>
        {destination ? (
          <li className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3 opacity-50" strokeWidth={2} />
            <Link
              href={`/packages?destination=${destination.slug}`}
              className={editorial ? 'transition-colors hover:text-white' : 'transition-colors hover:text-accent'}
            >
              {destination.name}
            </Link>
          </li>
        ) : null}
        <li className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3 opacity-50" strokeWidth={2} />
          <span className={editorial ? 'text-white/85' : 'text-ink-soft'}>{pkg.name}</span>
        </li>
      </ol>
    </nav>
  );

  return (
    <EnquiryProvider pkg={pkg}>
      {editorial ? (
        /* ───────── Immersive masthead (flagship packages) ───────── */
        <section className="relative isolate overflow-hidden bg-ink pt-[4.5rem]">
          <Image
            src={pkg.gallery[0].src}
            alt={pkg.gallery[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="scrim absolute inset-0" />

          <div className="shell relative flex min-h-[32rem] flex-col justify-end py-14 sm:min-h-[38rem] sm:py-20">
            {crumbs}
            <div className="mt-6 flex flex-wrap gap-2">
              {pkg.styles.map((style) => (
                <Badge key={style} tone="onPhoto">
                  {style}
                </Badge>
              ))}
              <Badge tone="onPhoto">{duration(pkg.nights, pkg.days)}</Badge>
              <Badge tone="onPhoto">From {inr(pkg.pricePerPerson)} pp · indicative</Badge>
            </div>

            <h1 className="display mt-5 max-w-4xl text-[2.25rem] text-white sm:text-[3.25rem] lg:text-[4rem]">
              {pkg.name}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-[1.0625rem] leading-relaxed text-white/80">
              {pkg.summary}
            </p>
          </div>
        </section>
      ) : (
        /* ───────── Standard title block ───────── */
        <section className="border-b border-line bg-sand pt-[4.5rem]">
          <div className="shell py-10 lg:py-12">
            {crumbs}
            <div className="mt-6 flex flex-wrap gap-2">
              {pkg.styles.map((style) => (
                <Badge key={style} tone="accent">
                  {style}
                </Badge>
              ))}
            </div>
            <h1 className="display mt-4 max-w-3xl text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem]">{pkg.name}</h1>
            <p className="mt-4 max-w-2xl text-pretty text-[1.0625rem] leading-relaxed text-ink-soft">{pkg.summary}</p>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {metaRow.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-[0.875rem] text-ink-soft">
                  <Icon className="h-4 w-4 text-ink-faint" strokeWidth={1.6} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───────── Main body ───────── */}
      <section className={cn('py-12 lg:py-16', editorial && 'bg-canvas')}>
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <div className="min-w-0">
              {editorial ? (
                <div className="mb-12">
                  <p className="text-pretty font-display text-[1.375rem] leading-relaxed text-ink sm:text-[1.5rem]">
                    {pkg.intro ?? pkg.overview}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-y border-gold/25 py-5">
                    {metaRow.map(({ Icon, text }) => (
                      <li key={text} className="flex items-center gap-2 text-[0.875rem] text-ink-soft">
                        <Icon className="h-4 w-4 text-gold" strokeWidth={1.6} />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <Gallery photos={pkg.gallery} title={pkg.name} />

              {pkg.routeStops?.length ? (
                <div className="mt-14">
                  <RouteOverview stops={pkg.routeStops} />
                </div>
              ) : null}

              {!editorial ? (
                <div className="mt-14">
                  <h2 className="display text-[1.75rem] sm:text-[2rem]">Trip overview</h2>
                  <p className="mt-4 text-pretty text-[1.0625rem] leading-relaxed text-ink-soft">{pkg.overview}</p>
                </div>
              ) : null}

              {/* Highlights */}
              <div
                className={cn(
                  'mt-10 rounded-3xl border p-6 sm:p-7',
                  editorial ? 'border-gold/25 bg-ivory' : 'border-accent-line bg-accent-soft/60',
                )}
              >
                <h3
                  className={cn(
                    'flex items-center gap-2 text-2xs font-semibold uppercase tracking-eyebrow',
                    editorial ? 'text-gold' : 'text-accent',
                  )}
                >
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={1.9} />
                  Trip highlights
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed">
                      <Check
                        className={cn('mt-1 h-3.5 w-3.5 shrink-0', editorial ? 'text-gold' : 'text-accent')}
                        strokeWidth={2.4}
                      />
                      <span className="text-ink-soft">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <Itinerary days={pkg.itinerary} tone={editorial ? 'heritage' : 'default'} />
              </div>

              <InclusionsExclusions pkg={pkg} editorial={editorial} />

              <OtherInformation pkg={pkg} editorial={editorial} />
            </div>

            <BookingPanel pkg={pkg} />
          </div>
        </div>
      </section>

      {/* ───────── Heritage dossiers ───────── */}
      {pkg.heritage?.length ? (
        <section className="border-y border-gold/20 bg-sandstone/40 py-16 lg:py-24">
          <div className="shell">
            <HeritageSites sites={pkg.heritage} />
          </div>
        </section>
      ) : null}

      {/* ───────── Pricing tiers ───────── */}
      {pkg.tiers?.length ? (
        <section className="py-16 lg:py-24">
          <div className="shell">
            <TiersSection tiers={pkg.tiers} />
          </div>
        </section>
      ) : null}

      {/* ───────── Accommodation + FAQs ───────── */}
      {pkg.accommodation?.length || pkg.faqs?.length ? (
        <section className="border-t border-gold/20 bg-ivory py-16 lg:py-24">
          <div className="shell grid gap-16 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
            {pkg.accommodation?.length ? (
              <div>
                <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold">Where you stay</p>
                <h2 className="display mt-3 text-[1.75rem] sm:text-[2.25rem]">Accommodation</h2>
                <dl className="mt-8 space-y-6">
                  {pkg.accommodation.map((entry) => (
                    <div key={entry.tier} className="border-l-2 border-gold/40 pl-5">
                      <dt className="font-display text-lg">{entry.tier}</dt>
                      <dd className="mt-1.5 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
                        {entry.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-8 rounded-2xl border border-gold/25 bg-sandstone/60 px-5 py-4 text-2xs leading-relaxed text-ink-soft">
                  Specific properties are named in your written quote rather than on this page. We do not advertise
                  hotel partnerships we have not confirmed for your dates.
                </p>
              </div>
            ) : null}

            {pkg.faqs?.length ? <Faqs faqs={pkg.faqs} /> : null}
          </div>
        </section>
      ) : null}

      {/* ───────── Related ───────── */}
      {related.length ? (
        <section className="border-t border-line bg-sand py-16 lg:py-20">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow">Keep looking</p>
                <h2 className="display mt-3 text-[1.75rem] sm:text-[2.25rem]">You may also like these</h2>
              </div>
              <Button href="/packages" variant="secondary" size="md">
                All packages
              </Button>
            </div>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal as="li" key={item.slug} delay={index * 70} className="h-full">
                  <PackageCard pkg={item} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </EnquiryProvider>
  );
}

function InclusionsExclusions({ pkg, editorial }: { pkg: Package; editorial: boolean }) {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2">
      <div
        className={cn(
          'rounded-3xl border p-6 shadow-card',
          editorial ? 'border-gold/25 bg-ivory' : 'border-line bg-surface',
        )}
      >
        <h2 className="flex items-center gap-2 font-display text-xl">
          <span
            className={cn(
              'grid h-7 w-7 place-items-center rounded-full',
              editorial ? 'bg-gold/15 text-gold' : 'bg-accent-soft text-accent',
            )}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
          </span>
          Package inclusions
        </h2>
        <ul className="mt-5 space-y-3">
          {pkg.inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ink-soft">
              <Check
                className={cn('mt-1 h-3.5 w-3.5 shrink-0', editorial ? 'text-gold' : 'text-accent')}
                strokeWidth={2.4}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          'rounded-3xl border p-6 shadow-card',
          editorial ? 'border-gold/25 bg-ivory' : 'border-line bg-surface',
        )}
      >
        <h2 className="flex items-center gap-2 font-display text-xl">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-sand text-ink-mute">
            <X className="h-3.5 w-3.5" strokeWidth={2.6} />
          </span>
          Package exclusions
        </h2>
        <ul className="mt-5 space-y-3">
          {pkg.exclusions.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[0.875rem] leading-relaxed text-ink-soft">
              <X className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-faint" strokeWidth={2.4} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function OtherInformation({ pkg, editorial }: { pkg: Package; editorial: boolean }) {
  return (
    <div className="mt-14">
      <h2 className="display text-[1.75rem] sm:text-[2rem]">Other information</h2>

      <dl
        className={cn(
          'mt-7 grid gap-x-10 gap-y-5 border-y py-6 sm:grid-cols-2',
          editorial ? 'border-gold/25' : 'border-line',
        )}
      >
        {[
          [
            'Price per person',
            `${inr(pkg.pricePerPerson)} on twin sharing${pkg.tiers?.length ? ' — lowest tier, indicative' : ''}`,
          ],
          ['Hotel category', pkg.hotelCategory],
          ['Trip duration', duration(pkg.nights, pkg.days)],
          ['Best time to visit', pkg.bestTime],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-2xs uppercase tracking-eyebrow text-ink-mute">{label}</dt>
            <dd className="mt-1 text-pretty text-[0.9375rem] text-ink">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg">
            <ShieldAlert className="h-4 w-4 text-ink-mute" strokeWidth={1.7} />
            Cancellation policy
          </h3>
          <ul className="mt-4 space-y-2.5">
            {pkg.cancellationPolicy.map((line) => (
              <li key={line} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-lg">
            <Info className="h-4 w-4 text-ink-mute" strokeWidth={1.7} />
            Important travel information
          </h3>
          <ul className="mt-4 space-y-2.5">
            {pkg.goodToKnow.map((line) => (
              <li key={line} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className={cn(
          'mt-8 rounded-2xl px-5 py-4 text-2xs leading-relaxed text-ink-soft',
          editorial ? 'border border-gold/25 bg-sandstone/60' : 'bg-sand',
        )}
      >
        This is a demonstration project. Pricing, itineraries, hotel categories and policies shown here are sample or
        indicative content, and no booking or payment is processed anywhere on this site.
      </p>
    </div>
  );
}
