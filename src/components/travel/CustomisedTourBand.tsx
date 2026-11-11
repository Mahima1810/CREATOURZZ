'use client';

import { Sparkles, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  CUSTOM_TOUR_HEADLINE,
  CUSTOM_TOUR_BODY,
  CUSTOM_TOUR_CTA,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
} from '@/lib/contact';
import { cn } from '@/lib/format';
import { useEnquiry } from './EnquiryProvider';

/**
 * The customised-tour invitation, shown on the homepage and every package page.
 *
 * Two variants of the same promise: on a package page there is an enquiry
 * dialog in context, so the button opens it. On the homepage there is no
 * package selected, so the button routes to the contact form where a package
 * can be chosen from a list.
 */
export function CustomisedTourBand({ tone = 'default' }: { tone?: 'default' | 'heritage' }) {
  return (
    <Band tone={tone}>
      <Button href="/contact" size="lg" variant={tone === 'heritage' ? 'heritage' : 'primary'}>
        {CUSTOM_TOUR_CTA}
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </Button>
    </Band>
  );
}

/** Package-page version: opens the enquiry dialog already bound to this trip. */
export function CustomisedTourBandWithDialog({ tone = 'default' }: { tone?: 'default' | 'heritage' }) {
  const { open } = useEnquiry();
  return (
    <Band tone={tone}>
      <Button size="lg" variant={tone === 'heritage' ? 'heritage' : 'primary'} onClick={() => open()}>
        {CUSTOM_TOUR_CTA}
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </Button>
    </Band>
  );
}

function Band({ tone, children }: { tone: 'default' | 'heritage'; children: React.ReactNode }) {
  const heritage = tone === 'heritage';
  return (
    <section
      aria-labelledby="customised-heading"
      className={cn(
        'overflow-hidden rounded-4xl border px-7 py-12 sm:px-12 sm:py-14',
        heritage ? 'border-gold/25 bg-sandstone' : 'border-line bg-sand',
      )}
    >
      <div className="grid gap-9 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-14">
        <div>
          <Sparkles className={cn('h-6 w-6', heritage ? 'text-gold' : 'text-accent')} strokeWidth={1.6} />
          <h2 id="customised-heading" className="display mt-5 text-[1.875rem] leading-tight sm:text-[2.5rem]">
            {CUSTOM_TOUR_HEADLINE}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-ink-soft">
            {CUSTOM_TOUR_BODY}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          {children}
          <a
            href={CONTACT_MAILTO}
            className="group inline-flex items-center gap-2 text-[0.875rem] text-ink-soft transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4 text-ink-faint" strokeWidth={1.7} />
            <span className="break-all underline-offset-4 group-hover:underline">{CONTACT_EMAIL}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
