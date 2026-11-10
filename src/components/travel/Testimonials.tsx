import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/site/Reveal';
import { Badge } from '@/components/ui/Badge';

function initials(name: string): string {
  return name
    .replace(/&/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Traveller notes"
          title="What people say afterwards"
          description="Illustrative feedback written for this demonstration build — these are not real customer reviews."
          action={<Badge tone="neutral">Sample content</Badge>}
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={(index % 3) * 80}
              className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 shadow-card transition-shadow duration-500 ease-creatourzz hover:shadow-lift"
            >
              <Quote className="h-6 w-6 text-accent/30" strokeWidth={1.4} />

              <blockquote className="mt-4 flex-1 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
                {item.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-soft font-display text-sm text-accent-dark"
                >
                  {initials(item.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-ink">{item.name}</p>
                  <p className="truncate text-2xs text-ink-mute">{item.trip}</p>
                </div>
                <div className="flex shrink-0 items-center gap-0.5" aria-label={`${item.rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={i < item.rating ? 'h-3.5 w-3.5 fill-gold text-gold' : 'h-3.5 w-3.5 text-line-strong'}
                      strokeWidth={1.4}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
