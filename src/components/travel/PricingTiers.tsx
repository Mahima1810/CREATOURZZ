'use client';

import { Check, BedDouble, Car, Info } from 'lucide-react';
import type { PriceTier } from '@/lib/types';
import { cn } from '@/lib/format';
import { PRICING_NOTE } from '@/lib/pricing';
import { Button } from '@/components/ui/Button';

/**
 * Three ways to travel the same route.
 *
 * These cards carry no prices of their own — the package headline figure is the
 * only number quoted, and a second per-tier set would contradict it. Choosing a
 * tier pre-fills the hotel category on the enquiry form.
 */
export function PricingTiers({
  tiers,
  onChoose,
}: {
  tiers: PriceTier[];
  onChoose?: (tier: PriceTier) => void;
}) {
  return (
    <section aria-labelledby="tiers-heading">
      <div className="max-w-2xl">
        <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold">Choose your level</p>
        <h2 id="tiers-heading" className="display mt-3 text-[1.75rem] sm:text-[2.25rem]">
          Same route, three ways to travel it
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
          The itinerary does not change between tiers — the hotels, the vehicle and the level of guiding do.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={cn(
              'relative flex h-full flex-col rounded-3xl border bg-ivory p-6 transition-shadow duration-500 ease-creatourzz sm:p-7',
              tier.recommended ? 'border-gold shadow-lift' : 'border-gold/25 hover:shadow-card',
            )}
          >
            {tier.recommended ? (
              <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-2xs font-medium text-white">
                Most chosen
              </span>
            ) : null}

            <h3 className="font-display text-2xl">{tier.name}</h3>

            <p className="mt-3 text-pretty text-[0.875rem] leading-relaxed text-ink-soft">
              Costed against the single indicative package price above. What moves between tiers is the stay, the
              vehicle and the guiding — never the route.
            </p>

            <dl className="mt-5 space-y-3 border-y border-gold/20 py-4">
              <div className="flex items-start gap-2.5">
                <BedDouble className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.7} />
                <div>
                  <dt className="text-2xs uppercase tracking-eyebrow text-ink-mute">Hotels</dt>
                  <dd className="mt-0.5 text-pretty text-[0.8125rem] leading-relaxed text-ink">{tier.hotels}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Car className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.7} />
                <div>
                  <dt className="text-2xs uppercase tracking-eyebrow text-ink-mute">Transport</dt>
                  <dd className="mt-0.5 text-pretty text-[0.8125rem] leading-relaxed text-ink">{tier.transport}</dd>
                </div>
              </div>
            </dl>

            <ul className="mt-5 flex-1 space-y-2.5">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.8125rem] leading-relaxed text-ink-soft">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              variant={tier.recommended ? 'heritage' : 'secondary'}
              size="md"
              className="mt-7 w-full"
              onClick={() => onChoose?.(tier)}
            >
              Enquire — {tier.name}
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-6 flex items-start gap-2.5 rounded-2xl border border-gold/25 bg-sandstone/60 px-5 py-4 text-[0.875rem] leading-relaxed text-ink-soft">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
        <span>
          <strong className="font-medium text-ink">The package price is indicative.</strong> It moves with your
          dates, your group size, the tier you choose and live hotel rates. {PRICING_NOTE} Nothing is confirmed until
          you have a written quote naming the actual properties — and no payment is taken on this site.
        </span>
      </p>
    </section>
  );
}
