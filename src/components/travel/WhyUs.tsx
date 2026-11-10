import Image from 'next/image';
import { Map, ReceiptText, UserRoundCog, LifeBuoy } from 'lucide-react';
import { photos } from '@/data/images';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/site/Reveal';

const PILLARS = [
  {
    Icon: Map,
    title: 'Carefully curated itineraries',
    body: 'Every day is sequenced around ferry times, light and opening hours — not around filling a brochure. If a stop is not worth your morning, it is not on the list.',
  },
  {
    Icon: ReceiptText,
    title: 'Transparent pricing',
    body: 'One number, per person, with inclusions and exclusions written out in full before you commit. What you approve is what you pay.',
  },
  {
    Icon: UserRoundCog,
    title: 'Personalised travel experiences',
    body: 'Trips are a starting point. Add a day, drop a fort, move the houseboat to the end — we re-plan around how you actually want to travel.',
  },
  {
    Icon: LifeBuoy,
    title: 'Dedicated travel assistance',
    body: 'One named coordinator from first enquiry to the drop-off, reachable while you are on the road, not just while you are deciding.',
  },
];

export function WhyUs() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Why travel with us"
          title="Planned properly, priced plainly"
          description="Four things we hold ourselves to on every trip we put together."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-16">
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {PILLARS.map(({ Icon, title, body }, index) => (
              <Reveal as="li" key={title} delay={index * 70}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent-line bg-accent-soft text-accent">
                  <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-xl">{title}</h3>
                <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120} className="relative">
            <div className="photo group aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
              <Image
                src={photos.heroAbout.src}
                alt={photos.heroAbout.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-2xs text-ink-mute">
              The Western Himalayas — one of eight regions we currently plan for.
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
