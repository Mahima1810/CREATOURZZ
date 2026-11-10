import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Info } from 'lucide-react';
import { PageHeader } from '@/components/site/PageHeader';
import { EnquiryForm } from '@/components/travel/EnquiryForm';
import { photos } from '@/data/images';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Send CREATOURZZ a travel enquiry, or reach the team. A demonstration project — no payment is taken.',
};

const CHANNELS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'hello@creatourzz.example',
    note: 'Placeholder address for this demo — not monitored',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 00000 00000',
    note: 'Placeholder number for this demo — not connected',
  },
  {
    Icon: MapPin,
    label: 'Studio',
    value: 'Sample Studio Address, Bengaluru 560001',
    note: 'Placeholder address — no physical office exists',
  },
  {
    Icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat, 9:30am – 7:00pm IST',
    note: 'Indicative hours for the demo scenario',
  },
];

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
              <dl className="mt-5 space-y-5">
                {CHANNELS.map(({ Icon, label, value, note }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" strokeWidth={1.6} />
                    <div className="min-w-0">
                      <dt className="text-2xs uppercase tracking-eyebrow text-ink-mute">{label}</dt>
                      <dd className="mt-0.5 text-pretty text-[0.9375rem] text-ink">{value}</dd>
                      <dd className="mt-0.5 text-2xs text-ink-faint">{note}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-3xl border border-accent-line bg-accent-soft/60 p-5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
              <p className="text-2xs leading-relaxed text-ink-soft">
                Every contact detail on this page is a clearly marked placeholder. CREATOURZZ is a demonstration project,
                not a registered travel company, and messages sent from this form are stored locally by the app rather
                than delivered to anyone.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
