'use client';

import { useState } from 'react';
import {
  ChevronDown,
  BedDouble,
  UtensilsCrossed,
  Check,
  MapPin,
  Car,
  Hourglass,
  Sunrise,
  Sun,
  Moon,
} from 'lucide-react';
import type { ItineraryDay } from '@/lib/types';
import { cn } from '@/lib/format';

const SESSIONS = [
  { key: 'morning', label: 'Morning', Icon: Sunrise },
  { key: 'afternoon', label: 'Afternoon', Icon: Sun },
  { key: 'evening', label: 'Evening', Icon: Moon },
] as const;

export function Itinerary({ days, tone = 'default' }: { days: ItineraryDay[]; tone?: 'default' | 'heritage' }) {
  // Day 1 open by default; the rest expand on demand.
  const [open, setOpen] = useState<Set<number>>(new Set([days[0]?.day]));
  const allOpen = open.size === days.length;
  const heritage = tone === 'heritage';

  const toggle = (day: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="display text-[1.75rem] sm:text-[2rem]">Day-wise itinerary</h2>
        <button
          type="button"
          onClick={() => setOpen(allOpen ? new Set() : new Set(days.map((d) => d.day)))}
          className={cn(
            'shrink-0 text-2xs font-medium underline-offset-4 transition-colors hover:underline',
            heritage ? 'text-gold hover:text-ink' : 'text-accent hover:text-accent-dark',
          )}
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <ol className="mt-7">
        {days.map((day, index) => {
          const isOpen = open.has(day.day);
          const isLast = index === days.length - 1;
          const hasSessions = Boolean(day.morning || day.afternoon || day.evening);

          return (
            <li key={day.day} className="relative pl-10 sm:pl-12">
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute left-[0.9375rem] bottom-0 top-9 w-px sm:left-[1.1875rem]',
                    heritage ? 'bg-gold/25' : 'bg-line',
                  )}
                />
              ) : null}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute left-0 top-3.5 grid h-8 w-8 place-items-center rounded-full border text-2xs font-semibold transition-colors duration-300 sm:h-10 sm:w-10',
                  isOpen
                    ? heritage
                      ? 'border-gold bg-gold text-white'
                      : 'border-accent bg-accent text-white'
                    : heritage
                      ? 'border-gold/35 bg-ivory text-ink-soft'
                      : 'border-line bg-surface text-ink-soft',
                )}
              >
                {day.day}
              </span>

              <div className={cn('border-b', heritage ? 'border-gold/20' : 'border-line', isLast && 'border-b-0')}>
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(day.day)}
                    aria-expanded={isOpen}
                    aria-controls={`day-panel-${day.day}`}
                    className="group flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-2xs uppercase tracking-eyebrow text-ink-mute">Day {day.day}</span>
                        {day.destination ? (
                          <span
                            className={cn(
                              'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-2xs',
                              heritage ? 'bg-gold/10 text-gold' : 'bg-accent-soft text-accent-dark',
                            )}
                          >
                            <MapPin className="h-2.5 w-2.5" strokeWidth={2} />
                            {day.destination}
                          </span>
                        ) : null}
                      </span>
                      <span
                        className={cn(
                          'mt-1.5 block text-pretty font-display text-xl transition-colors',
                          heritage ? 'group-hover:text-gold' : 'group-hover:text-accent',
                        )}
                      >
                        {day.title}
                      </span>
                      {!isOpen ? (
                        <span className="mt-1.5 block text-pretty text-[0.875rem] leading-relaxed text-ink-soft">
                          {day.summary}
                        </span>
                      ) : null}
                    </span>
                    <ChevronDown
                      className={cn(
                        'mt-1 h-5 w-5 shrink-0 text-ink-mute transition-transform duration-300 ease-creatourzz',
                        isOpen && (heritage ? 'rotate-180 text-gold' : 'rotate-180 text-accent'),
                      )}
                      strokeWidth={1.7}
                    />
                  </button>
                </h3>

                <div id={`day-panel-${day.day}`} hidden={!isOpen} className={cn(isOpen && 'animate-fade-in pb-7')}>
                  <p className="text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{day.summary}</p>

                  {day.travelTime ? (
                    <p
                      className={cn(
                        'mt-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-2xs',
                        heritage ? 'bg-sandstone text-ink-soft' : 'bg-sand text-ink-soft',
                      )}
                    >
                      <Car className="h-3.5 w-3.5 shrink-0 text-ink-mute" strokeWidth={1.7} />
                      {day.travelTime}
                    </p>
                  ) : null}

                  {hasSessions ? (
                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      {SESSIONS.map(({ key, label, Icon }) => {
                        const items = day[key];
                        if (!items?.length) return null;
                        return (
                          <div
                            key={key}
                            className={cn(
                              'rounded-2xl border p-4',
                              heritage ? 'border-gold/20 bg-ivory' : 'border-line bg-surface',
                            )}
                          >
                            <p className="flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-eyebrow text-ink-mute">
                              <Icon
                                className={cn('h-3.5 w-3.5', heritage ? 'text-gold' : 'text-accent')}
                                strokeWidth={1.8}
                              />
                              {label}
                            </p>
                            <ul className="mt-3 space-y-2">
                              {items.map((item) => (
                                <li key={item} className="text-[0.8125rem] leading-relaxed text-ink-soft">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <ul className="mt-5 space-y-2.5">
                      {day.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed">
                          <Check
                            className={cn('mt-1 h-3.5 w-3.5 shrink-0', heritage ? 'text-gold' : 'text-accent')}
                            strokeWidth={2.4}
                          />
                          <span className="text-ink-soft">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {day.exploreTime ? (
                    <p className="mt-4 flex items-start gap-2 text-2xs leading-relaxed text-ink-soft">
                      <Hourglass className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-mute" strokeWidth={1.7} />
                      {day.exploreTime}
                    </p>
                  ) : null}

                  {day.stay || day.meals ? (
                    <div
                      className={cn(
                        'mt-5 flex flex-wrap gap-x-6 gap-y-2 rounded-2xl px-4 py-3',
                        heritage ? 'bg-sandstone' : 'bg-sand',
                      )}
                    >
                      {day.stay ? (
                        <span className="inline-flex items-center gap-2 text-2xs text-ink-soft">
                          <BedDouble className="h-3.5 w-3.5 text-ink-mute" strokeWidth={1.7} />
                          Overnight: {day.stay}
                        </span>
                      ) : null}
                      {day.meals ? (
                        <span className="inline-flex items-center gap-2 text-2xs text-ink-soft">
                          <UtensilsCrossed className="h-3.5 w-3.5 text-ink-mute" strokeWidth={1.7} />
                          Meals: {day.meals}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
