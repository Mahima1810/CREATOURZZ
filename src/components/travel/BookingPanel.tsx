'use client';

import { CalendarDays, BedDouble, Sun, Users, MessageSquare, Info } from 'lucide-react';
import type { Package } from '@/lib/types';
import { inr, duration, cn } from '@/lib/format';
import { priceHeading, priceBasisShort, priceBasisLabel, isPackagePriced, PRICING_NOTE } from '@/lib/pricing';
import { Button } from '@/components/ui/Button';
import { useEnquiry } from './EnquiryProvider';

export function BookingPanel({ pkg }: { pkg: Package }) {
  const { open } = useEnquiry();
  const saving = pkg.compareAtPrice ? pkg.compareAtPrice - pkg.price : 0;
  const tiered = Boolean(pkg.tiers?.length);

  const facts = [
    { Icon: CalendarDays, label: 'Duration', value: duration(pkg.nights, pkg.days) },
    { Icon: BedDouble, label: 'Hotel category', value: pkg.hotelCategory },
    { Icon: Sun, label: 'Best time to visit', value: pkg.bestTime },
    { Icon: Users, label: 'Pricing basis', value: priceBasisLabel(pkg) },
  ];

  return (
    <>
      {/* Desktop sticky panel */}
      <aside className="hidden lg:block">
        <div className="sticky top-[5.5rem] overflow-hidden rounded-3xl border border-line bg-surface shadow-panel">
          <div className="border-b border-line px-6 py-6">
            <p className="text-2xs uppercase tracking-eyebrow text-ink-mute">{priceHeading(pkg)}</p>
            <p className="mt-2 flex items-baseline gap-2.5">
              <span className="font-display text-[2.5rem] leading-none">{inr(pkg.price)}</span>
              {pkg.compareAtPrice ? (
                <span className="text-sm text-ink-faint line-through">{inr(pkg.compareAtPrice)}</span>
              ) : null}
            </p>
            {/* priceBasisShort already says "indicative" for package pricing —
                don't append it twice. */}
            <p className="mt-2 text-2xs text-ink-mute">
              {priceBasisShort(pkg)}
              {saving > 0 ? ` · you save ${inr(saving)}` : ''}
              {isPackagePriced(pkg) ? '' : ' · indicative'}
            </p>

            <Button size="lg" variant={tiered ? 'heritage' : 'primary'} className="mt-5 w-full" onClick={() => open()}>
              <MessageSquare className="h-4 w-4" strokeWidth={1.9} />
              Enquire Now
            </Button>

            <p className="mt-3 text-center text-2xs leading-relaxed text-ink-mute">
              {PRICING_NOTE} No payment is taken — this sends a planning request.
            </p>
          </div>

          <dl className="divide-y divide-line">
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 px-6 py-3.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" strokeWidth={1.6} />
                <div className="min-w-0 flex-1">
                  <dt className="text-2xs uppercase tracking-eyebrow text-ink-mute">{label}</dt>
                  <dd className="mt-0.5 text-pretty text-[0.875rem] text-ink">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className={cn('flex items-start gap-2.5 border-t px-6 py-4', tiered ? 'border-gold/20 bg-sandstone' : 'border-line bg-sand')}>
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-mute" strokeWidth={1.7} />
            <p className="text-2xs leading-relaxed text-ink-soft">
              {tiered
                ? 'Indicative pricing, confirmed in writing before anything is booked. Demonstration project.'
                : 'Demonstration project. Prices, inclusions and policies are sample content.'}
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pt-3 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-2xs text-ink-mute">{priceBasisShort(pkg)}</p>
            <p className="font-display text-xl leading-tight">{inr(pkg.price)}</p>
          </div>
          <Button size="md" variant={tiered ? 'heritage' : 'primary'} className="shrink-0" onClick={() => open()}>
            <MessageSquare className="h-4 w-4" strokeWidth={1.9} />
            Enquire Now
          </Button>
        </div>
      </div>
      {/* Spacer so the fixed bar never covers the footer content */}
      <div aria-hidden="true" className="h-20 lg:hidden" />
    </>
  );
}
