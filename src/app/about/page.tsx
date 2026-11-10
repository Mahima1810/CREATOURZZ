import type { Metadata } from 'next';
import Image from 'next/image';
import { Compass, PenLine, Route, HandHeart, ArrowRight, Info } from 'lucide-react';
import { PageHeader } from '@/components/site/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/site/Reveal';
import { photos } from '@/data/images';
import { destinations, packages } from '@/lib/catalogue';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'CREATOURZZ is a demonstration travel product: curated journeys, transparent pricing and an enquiry-first booking flow.',
};

const PROCESS = [
  {
    Icon: PenLine,
    step: '01',
    title: 'You tell us the shape of the trip',
    body: 'Dates, rough budget, how many of you, and what you actually want out of the week. One short form — no account, no payment.',
  },
  {
    Icon: Route,
    step: '02',
    title: 'We send back a costed plan',
    body: 'A day-wise itinerary with hotels named, inclusions listed and exclusions listed just as plainly. Change anything before you agree.',
  },
  {
    Icon: Compass,
    step: '03',
    title: 'Everything is booked for you',
    body: 'Stays, transfers, ferries, permits and tickets, confirmed in your name ahead of travel, with the paperwork in one place.',
  },
  {
    Icon: HandHeart,
    step: '04',
    title: 'Someone stays reachable',
    body: 'One named coordinator for the whole trip, including while you are on the road — not a rota that starts again every call.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        photo={photos.heroAbout}
        eyebrow="About us"
        title="Fewer trips, planned properly"
        description="CREATOURZZ exists to make a good holiday easier to buy — by writing down exactly what is in it, what it costs, and what it does not include."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Demo disclosure, stated up front rather than buried */}
      <section className="border-b border-line bg-accent-soft/50">
        <div className="shell flex items-start gap-3 py-5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
          <p className="text-pretty text-[0.875rem] leading-relaxed text-ink-soft">
            <strong className="font-medium text-ink">This is a demonstration project.</strong> CREATOURZZ is not a
            registered travel company. The pricing, itineraries, reviews and contact details on this site are sample
            content built to show how the product works, and nothing on it takes a payment or makes a real booking.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow">The idea</p>
            <h2 className="display mt-4 text-[2rem] sm:text-[2.75rem]">
              Most travel sites sell you a price. The trip arrives later.
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                The headline number rarely survives contact with the booking page. Transfers appear. The breakfast was
                extra. The ferry you assumed was included turns out to be a separate line item paid at a counter on the
                morning you wanted to be at the beach.
              </p>
              <p>
                CREATOURZZ is built the other way round. Every journey on this site shows its day-wise plan, its hotel
                category, what is included and — just as prominently — what is not, before you send a single detail
                about yourself.
              </p>
              <p>
                There is no checkout. You send an enquiry, a human reads it, and you get a plan back that you can argue
                with. That is deliberately slower, and we think it produces better holidays.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                { k: String(destinations.length), v: 'Destinations' },
                { k: String(packages.length), v: 'Itineraries' },
                { k: '0', v: 'Hidden charges' },
              ].map((stat) => (
                <div key={stat.v}>
                  <dt className="font-display text-4xl">{stat.k}</dt>
                  <dd className="mt-1 text-2xs uppercase tracking-eyebrow text-ink-mute">{stat.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="photo group aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
                <Image src={photos.kashmirHero.src} alt={photos.kashmirHero.alt} fill sizes="(max-width:1024px) 50vw, 260px" className="object-cover" />
              </div>
              <div className="photo group mt-10 aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
                <Image src={photos.keralaHero.src} alt={photos.keralaHero.alt} fill sizes="(max-width:1024px) 50vw, 260px" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps, no checkout"
            description="The whole flow, from first enquiry to the drop-off at the airport."
          />

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map(({ Icon, step, title, body }, index) => (
              <Reveal
                as="li"
                key={step}
                delay={index * 80}
                className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-accent-line bg-accent-soft text-accent">
                    <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
                  </span>
                  <span className="font-display text-2xl text-line-strong">{step}</span>
                </div>
                <h3 className="mt-5 text-pretty font-display text-lg leading-snug">{title}</h3>
                <p className="mt-2.5 text-pretty text-[0.875rem] leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="What we will not do"
            title="The short list"
            description="Commitments that are easy to state and easy to check."
            align="center"
          />

          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              'Quote a price that grows at the payment step.',
              'Put a stop on the itinerary because a vendor pays us to.',
              'Hand you to a different coordinator mid-trip.',
              'Publish a review we did not receive from a traveller.',
            ].map((line, index) => (
              <Reveal
                as="li"
                key={line}
                delay={index * 60}
                className="flex items-start gap-3 rounded-2xl border border-line bg-surface px-5 py-4"
              >
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{line}</span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="/packages" size="lg">
              Browse the trips
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Ask us something
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
