import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Info, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/site/PageHeader';
import { EnquiryForm } from '@/components/travel/EnquiryForm';
import { photos } from '@/data/images';
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CUSTOM_TOUR_HEADLINE,
  CUSTOM_TOUR_BODY,
} from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Send CREATOURZZ a travel enquiry or email ${CONTACT_EMAIL}. Customised tours on request — no payment is taken.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        photo={photos.heroContact}
        eyebrow="Contact"
        title="Tell us where you want to go"
        description="Send the shape of the trip and we will come back with a costed plan. No payment is taken anywhere on this site."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-14 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          {/* Form */}
          <div className="order-2 min-w-0 lg:order-1">
            <h2 className="display text-[1.75rem] sm:text-[2rem]">General enquiry</h2>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-ink-soft">
              Not tied to a specific package — describe what you have in mind and we will suggest something. To enquire
              about a particular trip,{' '}
              <Link href="/packages" className="text-accent underline underline-offset-2 hover:text-accent-dark">
                open its package page
              </Link>{' '}
              and use Enquire Now there.
            </p>

            <div className="mt-8 rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
              <EnquiryForm />
            </div>
          </div>

          {/* Details */}
          <aside className="order-1 lg:order-2">
            <div className="rounded-3xl border border-line bg-surface p-6 shadow-card">
              <h2 className="text-2xs font-semibold uppercase tracking-eyebrow text-ink-soft">Reach us</h2>

              <a href={CONTACT_MAILTO} className="group mt-5 flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.7} />
                <span className="min-w-0">
                  <span className="block text-2xs uppercase tracking-eyebrow text-ink-mute">Email</span>
                  <span className="mt-0.5 block break-all text-[0.9375rem] text-accent underline-offset-4 group-hover:underline">
                    {CONTACT_EMAIL}
                  </span>
                </span>
              </a>

              <p className="mt-5 border-t border-line pt-5 text-2xs leading-relaxed text-ink-soft">
                Email is our only contact channel. We do not publish a phone number or office address, because we
                will not list one we cannot answer.
              </p>
            </div>

            {/* Customised tours */}
            <div className="mt-5 rounded-3xl border border-accent-line bg-accent-soft/60 p-6">
              <Sparkles className="h-5 w-5 text-accent" strokeWidth={1.7} />
              <p className="mt-3 font-display text-xl leading-snug text-ink">{CUSTOM_TOUR_HEADLINE}</p>
              <p className="mt-2.5 text-pretty text-[0.875rem] leading-relaxed text-ink-soft">{CUSTOM_TOUR_BODY}</p>
              <p className="mt-3 text-2xs leading-relaxed text-ink-mute">
                Use the form alongside, or write to us directly — either reaches the same place.
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-3xl border border-line bg-sand p-5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute" strokeWidth={1.8} />
              <p className="text-2xs leading-relaxed text-ink-soft">
                CREATOURZZ is a demonstration project, not a registered travel company. Messages sent from this form
                are stored by the app rather than emailed to anyone — to actually reach a person, use the email
                address above.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
