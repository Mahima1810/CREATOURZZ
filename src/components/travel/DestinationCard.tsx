import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Destination } from '@/lib/types';
import { inr, cn } from '@/lib/format';
import { startingPriceFor, packagesForDestination } from '@/lib/catalogue';

/**
 * Destination tile. `size="feature"` is the taller first card used to break up
 * the homepage grid; everything else uses the standard portrait.
 */
export function DestinationCard({
  destination,
  size = 'standard',
  priority = false,
  className,
}: {
  destination: Destination;
  size?: 'standard' | 'feature';
  priority?: boolean;
  className?: string;
}) {
  const price = startingPriceFor(destination);
  const count = packagesForDestination(destination.slug).length;
  const feature = size === 'feature';

  return (
    <Link
      href={`/packages?destination=${destination.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-3xl bg-ink shadow-card transition-shadow duration-500 ease-creatourzz hover:shadow-lift',
        className,
      )}
    >
      <div className={cn('photo', feature ? 'aspect-[4/5] sm:aspect-[16/13]' : 'aspect-[4/5]')}>
        <Image
          src={destination.hero.src}
          alt={destination.hero.alt}
          fill
          priority={priority}
          sizes={feature ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
          className="object-cover"
        />
      </div>

      <div className="scrim pointer-events-none absolute inset-0" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="flex items-center gap-1.5 text-2xs text-white/70">
          <MapPin className="h-3 w-3" strokeWidth={1.8} />
          <span className="truncate">{destination.region}</span>
        </div>

        <h3 className={cn('display mt-2 text-white', feature ? 'text-3xl sm:text-4xl' : 'text-[1.75rem]')}>
          {destination.name}
        </h3>

        <p
          className={cn(
            'mt-2 max-w-sm text-pretty text-[0.875rem] leading-relaxed text-white/75',
            feature ? '' : 'line-clamp-2',
          )}
        >
          {feature ? destination.blurb : destination.tagline}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-2xs uppercase tracking-eyebrow text-white/55">From</p>
            <p className="font-display text-xl text-white">
              {inr(price)}
              <span className="ml-1 font-sans text-2xs tracking-normal text-white/60">/ person</span>
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-2 text-2xs font-medium text-white backdrop-blur-md transition-all duration-300 ease-creatourzz group-hover:border-white group-hover:bg-white group-hover:text-ink">
            Explore
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-creatourzz group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
          </span>
        </div>

        <p className="mt-3 text-2xs text-white/45">
          {count} {count === 1 ? 'package' : 'packages'} · Best {destination.bestMonths.toLowerCase()}
        </p>
      </div>
    </Link>
  );
}
