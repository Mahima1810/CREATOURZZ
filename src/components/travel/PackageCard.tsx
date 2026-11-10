import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import type { Package } from '@/lib/types';
import { inr, duration, cn } from '@/lib/format';
import { destinationFor } from '@/lib/catalogue';
import { Badge } from '@/components/ui/Badge';

export function PackageCard({
  pkg,
  priority = false,
  className,
}: {
  pkg: Package;
  priority?: boolean;
  className?: string;
}) {
  const destination = destinationFor(pkg);
  const saving = pkg.compareAtPrice ? pkg.compareAtPrice - pkg.pricePerPerson : 0;

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-all duration-500 ease-creatourzz hover:-translate-y-1 hover:border-line-strong hover:shadow-lift',
        className,
      )}
    >
      <div className="relative">
        <div className="photo aspect-[16/11]">
          <Image
            src={pkg.gallery[0].src}
            alt={pkg.gallery[0].alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover"
          />
        </div>
        <div className="scrim-soft pointer-events-none absolute inset-0" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {pkg.styles.slice(0, 2).map((style) => (
            <Badge key={style} tone="onPhoto">
              {style}
            </Badge>
          ))}
        </div>
        {saving > 0 ? (
          <div className="absolute right-4 top-4">
            <Badge tone="onPhoto">Save {inr(saving)}</Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {destination ? (
          <p className="flex items-center gap-1.5 text-2xs uppercase tracking-eyebrow text-ink-mute">
            <MapPin className="h-3 w-3" strokeWidth={1.8} />
            {destination.name}
          </p>
        ) : null}

        <h3 className="mt-2.5 text-pretty font-display text-[1.375rem] leading-snug">
          <Link
            href={`/packages/${pkg.slug}`}
            className="transition-colors duration-200 after:absolute after:inset-0 hover:text-accent"
          >
            {pkg.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-pretty text-[0.875rem] leading-relaxed text-ink-soft">{pkg.summary}</p>

        <p className="mt-4 flex items-center gap-1.5 text-[0.8125rem] text-ink-soft">
          <CalendarDays className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.6} />
          {duration(pkg.nights, pkg.days)}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="text-2xs uppercase tracking-eyebrow text-ink-mute">Starting from</p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-[1.625rem] leading-none text-ink">{inr(pkg.pricePerPerson)}</span>
              {pkg.compareAtPrice ? (
                <span className="text-2xs text-ink-faint line-through">{inr(pkg.compareAtPrice)}</span>
              ) : null}
            </p>
            <p className="mt-1 text-2xs text-ink-mute">per person</p>
          </div>

          <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2.5 text-2xs font-medium text-ink transition-all duration-300 ease-creatourzz group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            View Package
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-creatourzz group-hover:translate-x-0.5" strokeWidth={2} />
          </span>
        </div>
      </div>
    </article>
  );
}
