'use client';

import { useCallback, useMemo, useTransition } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { MapPinOff, RotateCcw } from 'lucide-react';
import { searchDestinations } from '@/lib/catalogue';
import { DestinationCard } from './DestinationCard';
import { SearchBar } from './SearchBar';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/site/Reveal';
import { cn } from '@/lib/format';

export function DestinationsExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const q = searchParams.get('q') ?? '';
  const results = useMemo(() => searchDestinations(q), [q]);

  const setQuery = useCallback(
    (value: string) => {
      const next = new URLSearchParams(searchParams.toString());
      if (value) next.set('q', value);
      else next.delete('q');
      const qs = next.toString();
      startTransition(() => router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false }));
    },
    [pathname, router, searchParams],
  );

  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <SearchBar
          variant="inline"
          initialValue={q}
          placeholder="Filter destinations — “islands”, “mountains”, “Goa”"
          onSubmitQuery={setQuery}
        />
      </div>

      <p className="mt-7 text-center text-sm text-ink-soft" aria-live="polite" role="status">
        {isPending ? (
          <span className="text-ink-mute">Updating…</span>
        ) : (
          <>
            <span className="font-medium text-ink">{results.length}</span>{' '}
            {results.length === 1 ? 'destination' : 'destinations'}
            {q ? <> matching “{q}”</> : null}
          </>
        )}
      </p>

      <div className={cn('mt-8 transition-opacity duration-300', isPending && 'opacity-55')}>
        {results.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((destination, index) => (
              <Reveal as="li" key={destination.slug} delay={(index % 3) * 70} className="h-full">
                <DestinationCard destination={destination} priority={index < 3} className="h-full" />
              </Reveal>
            ))}
          </ul>
        ) : (
          <EmptyState
            icon={<MapPinOff className="h-6 w-6" strokeWidth={1.5} />}
            title="No destination by that name — yet"
            description="We currently plan trips across eight regions. Clear the search to see all of them, or tell us where you want to go."
            action={
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="secondary" onClick={() => setQuery('')}>
                  <RotateCcw className="h-4 w-4" strokeWidth={1.8} />
                  Show all destinations
                </Button>
                <Button href="/contact">Request a destination</Button>
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}
