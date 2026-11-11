'use client';

import { useEffect, useRef } from 'react';
import { X, CalendarDays, MapPin } from 'lucide-react';
import type { Package } from '@/lib/types';
import { inr, duration } from '@/lib/format';
import { priceBasisShort, PRICING_NOTE } from '@/lib/pricing';
import { EnquiryForm } from './EnquiryForm';

export function EnquiryDialog({
  pkg,
  open,
  onClose,
  initialTier,
}: {
  pkg: Package;
  open: boolean;
  onClose: () => void;
  /** Pre-selects the hotel category when opened from a pricing tier. */
  initialTier?: string | null;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the first control once the panel is painted.
    const raf = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>('input, textarea, button')?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      // Keep Tab inside the dialog.
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', onKeyDown, true);
      document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-ink/55 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative max-h-[92dvh] w-full max-w-2xl animate-scale-in overflow-y-auto rounded-t-3xl border border-line bg-canvas shadow-panel sm:rounded-3xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-canvas/95 px-6 py-5 backdrop-blur-xl sm:px-8">
          <div className="min-w-0">
            <p className="text-2xs uppercase tracking-eyebrow text-accent">Booking enquiry</p>
            <h2 id="enquiry-title" className="display mt-1.5 truncate text-2xl">
              {pkg.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-colors hover:bg-sand"
          >
            <X className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-7">
          <EnquiryForm
            compact
            key={initialTier ?? 'default'}
            packageSlug={pkg.slug}
            packageName={pkg.name}
            tiers={pkg.tiers}
            initialTier={initialTier ?? undefined}
            onSubmitted={onClose}
            summary={
              <div className="rounded-2xl border border-line bg-surface p-4">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-2xs text-ink-soft">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.7} />
                    {duration(pkg.nights, pkg.days)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-ink-faint" strokeWidth={1.7} />
                    {pkg.hotelCategory}
                  </span>
                </div>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-line pt-3">
                  <span className="font-display text-2xl">{inr(pkg.price)}</span>
                  <span className="text-2xs text-ink-mute">
                    {priceBasisShort(pkg)}
                    {initialTier ? ` · ${initialTier} tier` : ''}
                  </span>
                </p>
                <p className="mt-2 text-2xs leading-relaxed text-ink-mute">{PRICING_NOTE}</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
