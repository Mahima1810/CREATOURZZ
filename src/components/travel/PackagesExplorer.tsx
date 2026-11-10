'use client';

import { useCallback, useMemo, useState, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { SlidersHorizontal, X, RotateCcw, Compass } from 'lucide-react';
import {
  BUDGET_BANDS,
  DURATION_BANDS,
  SORT_OPTIONS,
  TRAVEL_STYLES,
  destinations,
  filterPackages,
  describeQuery,
  hasActiveFilters,
  type PackageQuery,
} from '@/lib/catalogue';
import { PackageCard } from './PackageCard';
import { SearchBar } from './SearchBar';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { Reveal } from '@/components/site/Reveal';
import { cn } from '@/lib/format';

const FILTER_KEYS = ['q', 'destination', 'budget', 'duration', 'style', 'sort'] as const;

export function PackagesExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [sheetOpen, setSheetOpen] = useState(false);

  const query: PackageQuery = useMemo(
    () => ({
      q: searchParams.get('q') ?? undefined,
      destination: searchParams.get('destination') ?? undefined,
      budget: searchParams.get('budget') ?? undefined,
      duration: searchParams.get('duration') ?? undefined,
      style: searchParams.get('style') ?? undefined,
      sort: searchParams.get('sort') ?? undefined,
    }),
    [searchParams],
  );

  const results = useMemo(() => filterPackages(query), [query]);
  const active = hasActiveFilters(query);
  const described = describeQuery(query);

  /** Writes one filter into the URL so results are shareable and back works. */
  const setParam = useCallback(
    (key: (typeof FILTER_KEYS)[number], value: string | undefined) => {
      const next = new URLSearchParams(searchParams.toString());
      if (value) next.set(key, value);
      else next.delete(key);
      const qs = next.toString();
      startTransition(() => {
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      });
    },
    [pathname, router, searchParams],
  );

  const resetAll = useCallback(() => {
    startTransition(() => router.replace(pathname, { scroll: false }));
  }, [pathname, router]);

  const selects = (
    <>
      <FilterSelect
        label="Destination"
        value={query.destination ?? ''}
        onChange={(v) => setParam('destination', v || undefined)}
        options={[
          { value: '', label: 'Anywhere' },
          ...destinations.map((d) => ({ value: d.slug, label: d.name })),
        ]}
      />
      <FilterSelect
        label="Budget"
        value={query.budget ?? ''}
        onChange={(v) => setParam('budget', v || undefined)}
        options={[{ value: '', label: 'Any budget' }, ...BUDGET_BANDS.map((b) => ({ value: b.id, label: b.label }))]}
      />
      <FilterSelect
        label="Duration"
        value={query.duration ?? ''}
        onChange={(v) => setParam('duration', v || undefined)}
        options={[
          { value: '', label: 'Any length' },
          ...DURATION_BANDS.map((d) => ({ value: d.id, label: d.label })),
        ]}
      />
      <FilterSelect
        label="Travel style"
        value={query.style ?? ''}
        onChange={(v) => setParam('style', v || undefined)}
        options={[{ value: '', label: 'All styles' }, ...TRAVEL_STYLES.map((s) => ({ value: s, label: s }))]}
      />
    </>
  );

  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <SearchBar
          variant="inline"
          initialValue={query.q ?? ''}
          placeholder="Search packages — “Andaman”, “honeymoon”, “tea”"
          onSubmitQuery={(value) => setParam('q', value || undefined)}
        />
      </div>

      {/* Desktop filter bar */}
      <div className="mt-8 hidden flex-wrap items-end justify-between gap-4 border-y border-line py-5 lg:flex">
        <div className="flex flex-wrap items-end gap-3">{selects}</div>
        <div className="flex items-end gap-3">
          <FilterSelect
            label="Sort by"
            value={query.sort ?? 'recommended'}
            onChange={(v) => setParam('sort', v === 'recommended' ? undefined : v)}
            options={SORT_OPTIONS.map((s) => ({ value: s.id, label: s.label }))}
          />
          {active ? (
            <button
              type="button"
              onClick={resetAll}
              className="mb-0.5 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-2xs font-medium text-ink-soft transition-colors hover:bg-sand hover:text-ink"
            >
              <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.8} />
              Reset
            </button>
          ) : null}
        </div>
      </div>

      {/* Mobile filter trigger */}
      <div className="mt-6 flex items-center justify-between gap-3 border-y border-line py-4 lg:hidden">
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2.5 text-sm transition-colors hover:border-ink"
        >
          <SlidersHorizontal className="h-4 w-4" strokeWidth={1.7} />
          Filters
          {described.length ? (
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1.5 text-2xs text-white">
              {described.length}
            </span>
          ) : null}
        </button>

        <FilterSelect
          label=""
          srLabel="Sort by"
          value={query.sort ?? 'recommended'}
          onChange={(v) => setParam('sort', v === 'recommended' ? undefined : v)}
          options={SORT_OPTIONS.map((s) => ({ value: s.id, label: s.label }))}
        />
      </div>

      {/* Active filter chips */}
      {active ? (
        <ul className="mt-5 flex flex-wrap items-center gap-2">
          {(
            [
              ['q', query.q && `“${query.q}”`],
              ['destination', query.destination && destinations.find((d) => d.slug === query.destination)?.name],
              ['budget', query.budget && BUDGET_BANDS.find((b) => b.id === query.budget)?.label],
              ['duration', query.duration && DURATION_BANDS.find((d) => d.id === query.duration)?.label],
              ['style', query.style],
            ] as const
          )
            .filter(([, label]) => Boolean(label))
            .map(([key, label]) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => setParam(key as (typeof FILTER_KEYS)[number], undefined)}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-accent-line bg-accent-soft py-1.5 pl-3 pr-2 text-2xs font-medium text-accent-dark transition-colors hover:border-accent"
                >
                  {label}
                  <X className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" strokeWidth={2.2} />
                </button>
              </li>
            ))}
          <li>
            <button
              type="button"
              onClick={resetAll}
              className="rounded-full px-2.5 py-1.5 text-2xs text-ink-mute underline underline-offset-2 transition-colors hover:text-ink"
            >
              Clear all
            </button>
          </li>
        </ul>
      ) : null}

      {/* Results */}
      <p className="mt-7 text-sm text-ink-soft" aria-live="polite" role="status">
        {isPending ? (
          <span className="text-ink-mute">Updating results…</span>
        ) : (
          <>
            <span className="font-medium text-ink">{results.length}</span>{' '}
            {results.length === 1 ? 'package' : 'packages'}
            {described.length ? <> matching {described.join(' · ')}</> : null}
          </>
        )}
      </p>

      <div className={cn('mt-6 transition-opacity duration-300', isPending && 'opacity-55')}>
        {results.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((pkg, index) => (
              <Reveal as="li" key={pkg.slug} delay={Math.min(index, 5) * 60} className="h-full">
                <PackageCard pkg={pkg} priority={index < 3} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <EmptyState
            icon={<Compass className="h-6 w-6" strokeWidth={1.5} />}
            title="Nothing matches that combination"
            description="Try widening the budget, clearing a filter, or searching for a destination by name instead."
            action={
              <Button variant="secondary" onClick={resetAll}>
                <RotateCcw className="h-4 w-4" strokeWidth={1.8} />
                Clear all filters
              </Button>
            }
          />
        )}
      </div>

      {/* Mobile filter sheet */}
      {sheetOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setSheetOpen(false)}
            className="absolute inset-0 animate-fade-in bg-ink/45 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85dvh] animate-scale-in overflow-y-auto rounded-t-3xl border-t border-line bg-canvas p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]">
            <div className="flex items-center justify-between">
              <h2 className="display text-2xl">Filters</h2>
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                aria-label="Close filters"
                className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:bg-sand"
              >
                <X className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4">{selects}</div>

            <div className="mt-7 flex gap-3">
              <Button variant="secondary" className="flex-1" onClick={resetAll}>
                Reset
              </Button>
              <Button className="flex-1" onClick={() => setSheetOpen(false)}>
                Show {results.length} {results.length === 1 ? 'result' : 'results'}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FilterSelect({
  label,
  srLabel,
  value,
  onChange,
  options,
}: {
  label: string;
  srLabel?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block min-w-0 flex-1 lg:flex-none">
      <span className={cn('mb-1.5 block text-2xs uppercase tracking-eyebrow text-ink-mute', !label && 'sr-only')}>
        {label || srLabel}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full cursor-pointer appearance-none rounded-full border border-line bg-surface bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat py-2.5 pl-4 pr-9 text-sm text-ink transition-colors hover:border-line-strong focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 lg:w-auto"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23878E97' stroke-width='1.8' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
