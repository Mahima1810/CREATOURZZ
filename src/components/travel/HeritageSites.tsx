import Image from 'next/image';
import { Landmark, Hammer, Crown, Swords, ScrollText, Sparkle, Hourglass, ExternalLink, Award } from 'lucide-react';
import type { HeritageSite } from '@/lib/types';
import { Reveal } from '@/components/site/Reveal';

/**
 * Interpretive dossier for each monument on the route.
 *
 * The two-column fact split at the bottom is the point of this component:
 * what the record supports sits apart from what is tradition, and both are
 * labelled, so a reader can tell which is which.
 */
export function HeritageSites({ sites }: { sites: HeritageSite[] }) {
  return (
    <section aria-labelledby="heritage-heading">
      <div className="max-w-2xl">
        <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold">The monuments</p>
        <h2 id="heritage-heading" className="display mt-3 text-[1.75rem] sm:text-[2.25rem]">
          What you are actually looking at
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
          A short dossier on each major site, written so you arrive knowing what the building was for. Documented
          history and local tradition are kept in separate columns on purpose — Rajasthan&rsquo;s forts attract a great
          deal of both.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {sites.map((site, index) => (
          <Reveal key={site.id} delay={index === 0 ? 0 : 60}>
            <article id={`site-${site.id}`} className="overflow-hidden rounded-3xl border border-gold/25 bg-ivory">
              <div className="grid lg:grid-cols-[22rem_1fr]">
                <div className="relative aspect-[16/10] bg-sandstone lg:aspect-auto lg:min-h-[22rem]">
                  <Image
                    src={site.photo.src}
                    alt={site.photo.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 352px"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="display text-[1.625rem]">{site.name}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-2xs text-ink-mute">
                        <Landmark className="h-3 w-3" strokeWidth={1.8} />
                        {site.location}
                      </p>
                    </div>
                    {site.unesco ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 text-2xs text-gold">
                        <Award className="h-3 w-3" strokeWidth={1.9} />
                        UNESCO
                      </span>
                    ) : null}
                  </div>

                  <dl className="mt-5 grid gap-x-8 gap-y-3 border-y border-gold/20 py-4 sm:grid-cols-2">
                    <Fact Icon={Hammer} label="Built" value={site.built} />
                    <Fact Icon={Crown} label="Dynasty" value={site.dynasty} />
                    <Fact Icon={Hourglass} label="Allow" value={site.exploreTime} />
                    {site.unesco ? <Fact Icon={Award} label="Status" value={site.unesco} /> : null}
                  </dl>

                  <div className="mt-6 space-y-5">
                    <Para title="Historical background" body={site.background} />
                    <Para title="Architectural significance" body={site.architecture} />
                    <Para title="Military importance" body={site.military} Icon={Swords} />
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <FactList
                      Icon={ScrollText}
                      tone="documented"
                      title="On the record"
                      caption="Supported by the cited sources"
                      items={site.documented}
                    />
                    <FactList
                      Icon={Sparkle}
                      tone="traditional"
                      title="Tradition and legend"
                      caption="Widely told, not established"
                      items={site.traditional}
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gold/20 pt-4">
                    <span className="text-2xs uppercase tracking-eyebrow text-ink-mute">Sources</span>
                    {site.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-2xs text-ink-soft underline-offset-4 transition-colors hover:text-gold hover:underline"
                      >
                        {source.label}
                        <ExternalLink className="h-3 w-3" strokeWidth={1.9} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Fact({
  Icon,
  label,
  value,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.7} />
      <div className="min-w-0">
        <dt className="text-2xs uppercase tracking-eyebrow text-ink-mute">{label}</dt>
        <dd className="mt-0.5 text-pretty text-[0.8125rem] leading-relaxed text-ink">{value}</dd>
      </div>
    </div>
  );
}

function Para({
  title,
  body,
  Icon,
}: {
  title: string;
  body: string;
  Icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-eyebrow text-ink-soft">
        {Icon ? <Icon className="h-3.5 w-3.5 text-ink-mute" strokeWidth={1.7} /> : null}
        {title}
      </h4>
      <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

function FactList({
  Icon,
  title,
  caption,
  items,
  tone,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  caption: string;
  items: string[];
  tone: 'documented' | 'traditional';
}) {
  if (!items.length) return null;
  const documented = tone === 'documented';
  return (
    <div
      className={
        documented
          ? 'rounded-2xl border border-accent-line bg-accent-soft/50 p-4'
          : 'rounded-2xl border border-gold/25 bg-sandstone/60 p-4'
      }
    >
      <h4 className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-eyebrow text-ink">
        <Icon className={documented ? 'h-3.5 w-3.5 text-accent' : 'h-3.5 w-3.5 text-gold'} strokeWidth={1.8} />
        {title}
      </h4>
      <p className="mt-1 text-2xs text-ink-mute">{caption}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-[0.8125rem] leading-relaxed text-ink-soft">
            <span
              aria-hidden="true"
              className={
                documented
                  ? 'mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent'
                  : 'mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold'
              }
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
