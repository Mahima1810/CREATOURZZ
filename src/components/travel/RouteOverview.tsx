import { MapPin, MoveRight, Plane } from 'lucide-react';
import type { RouteStop } from '@/lib/types';

/**
 * Horizontal city rail for a multi-stop journey.
 * Scrolls sideways on narrow screens rather than wrapping into a muddle.
 */
export function RouteOverview({ stops }: { stops: RouteStop[] }) {
  const totalNights = stops.reduce((sum, stop) => sum + stop.nights, 0);

  return (
    <section aria-labelledby="route-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold">The route</p>
          <h2 id="route-heading" className="display mt-3 text-[1.75rem] sm:text-[2rem]">
            {stops.map((s) => s.city).join(' · ')}
          </h2>
        </div>
        <p className="text-2xs uppercase tracking-eyebrow text-ink-mute">
          {stops.length} stops · {totalNights} nights
        </p>
      </div>

      <ol className="no-scrollbar mask-fade-r mt-8 flex gap-3 overflow-x-auto pb-2 sm:mask-none">
        {stops.map((stop, index) => (
          <li key={stop.city} className="flex shrink-0 items-stretch gap-3">
            <div className="flex w-56 flex-col rounded-2xl border border-gold/25 bg-ivory p-5 sm:w-60">
              <span className="flex items-center gap-1.5 text-2xs uppercase tracking-eyebrow text-gold">
                <MapPin className="h-3 w-3" strokeWidth={2} />
                Stop {index + 1}
              </span>
              <span className="mt-2.5 font-display text-xl">{stop.city}</span>
              <span className="mt-1 text-2xs text-ink-mute">
                {stop.nights} {stop.nights === 1 ? 'night' : 'nights'}
              </span>
              <span className="mt-3 text-pretty text-[0.8125rem] leading-relaxed text-ink-soft">{stop.note}</span>
            </div>

            {index < stops.length - 1 ? (
              <span aria-hidden="true" className="flex items-center text-gold/50">
                <MoveRight className="h-5 w-5" strokeWidth={1.5} />
              </span>
            ) : (
              <span aria-hidden="true" className="flex items-center text-gold/50">
                <Plane className="h-4 w-4 rotate-45" strokeWidth={1.5} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
