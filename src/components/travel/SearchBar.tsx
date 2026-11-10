'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Compass, CornerDownLeft, X } from 'lucide-react';
import { quickSearch } from '@/lib/catalogue';
import { inr, durationShort, cn } from '@/lib/format';
import { Button } from '@/components/ui/Button';

type Props = {
  variant?: 'hero' | 'inline';
  initialValue?: string;
  placeholder?: string;
  className?: string;
  /** Called instead of navigating — used by the packages page to filter in place. */
  onSubmitQuery?: (value: string) => void;
};

export function SearchBar({
  variant = 'hero',
  initialValue = '',
  placeholder = 'Search a destination, or a trip — try “Andaman”',
  className,
  onSubmitQuery,
}: Props) {
  const router = useRouter();
  const listId = useId();
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(() => (value.trim().length >= 2 ? quickSearch(value, 6) : []), [value]);

  useEffect(() => setValue(initialValue), [initialValue]);
  useEffect(() => setActive(-1), [value]);

  // Dismiss the suggestion list on an outside click.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const submit = (raw?: string) => {
    const term = (raw ?? value).trim();
    setOpen(false);
    if (onSubmitQuery) {
      onSubmitQuery(term);
      return;
    }
    go(term ? `/packages?q=${encodeURIComponent(term)}` : '/packages');
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (!open || suggestions.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((i) => (i + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (event.key === 'Enter' && active >= 0) {
      event.preventDefault();
      const hit = suggestions[active];
      go(hit.kind === 'destination' ? `/packages?destination=${hit.item.slug}` : `/packages/${hit.item.slug}`);
    }
  };

  const hero = variant === 'hero';

  return (
    <div ref={wrapRef} className={cn('relative w-full', className)}>
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className={cn(
          'flex items-center gap-2 transition-shadow duration-300',
          hero
            ? 'rounded-full border border-white/25 bg-white/12 p-2 pl-5 shadow-[0_18px_60px_-24px_rgba(0,0,0,0.65)] backdrop-blur-xl focus-within:border-white/50 focus-within:bg-white/18'
            : 'rounded-full border border-line bg-surface p-1.5 pl-4 shadow-card focus-within:border-accent',
        )}
      >
        <Search
          className={cn('h-[1.15rem] w-[1.15rem] shrink-0', hero ? 'text-white/70' : 'text-ink-mute')}
          strokeWidth={1.75}
        />
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          aria-label="Search destinations and tour packages"
          aria-expanded={open && suggestions.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          role="combobox"
          className={cn(
            'min-w-0 flex-1 bg-transparent text-[0.9375rem] outline-none [&::-webkit-search-cancel-button]:hidden',
            hero ? 'py-3 text-white placeholder:text-white/55' : 'py-2.5 text-ink placeholder:text-ink-faint',
          )}
        />
        {value ? (
          <button
            type="button"
            onClick={() => {
              setValue('');
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className={cn(
              'grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors',
              hero ? 'text-white/60 hover:bg-white/15 hover:text-white' : 'text-ink-faint hover:bg-sand hover:text-ink',
            )}
          >
            <X className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        ) : null}
        <Button type="submit" size={hero ? 'md' : 'sm'} className="shrink-0">
          <span className={hero ? '' : 'hidden sm:inline'}>Search</span>
          <Search className={cn('h-4 w-4', hero && 'hidden')} strokeWidth={2} />
        </Button>
      </form>

      {open && suggestions.length > 0 ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-30 animate-scale-in overflow-hidden rounded-2xl border border-line bg-surface py-1.5 shadow-panel"
        >
          {suggestions.map((hit, index) => {
            const isDestination = hit.kind === 'destination';
            const href = isDestination ? `/packages?destination=${hit.item.slug}` : `/packages/${hit.item.slug}`;
            return (
              <li key={`${hit.kind}-${hit.item.slug}`} role="option" aria-selected={index === active}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onClick={() => go(href)}
                  className={cn(
                    'flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors',
                    index === active ? 'bg-accent-soft' : 'hover:bg-sand',
                  )}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand text-accent">
                    {isDestination ? (
                      <MapPin className="h-4 w-4" strokeWidth={1.6} />
                    ) : (
                      <Compass className="h-4 w-4" strokeWidth={1.6} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-ink">
                      {isDestination ? hit.item.name : hit.item.name}
                    </span>
                    <span className="block truncate text-2xs text-ink-mute">
                      {isDestination
                        ? `Destination · ${hit.item.region}`
                        : `${durationShort(hit.item.nights, hit.item.days)} · from ${inr(hit.item.pricePerPerson)}`}
                    </span>
                  </span>
                  {index === active ? (
                    <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-ink-faint" strokeWidth={1.75} />
                  ) : null}
                </button>
              </li>
            );
          })}
          <li className="mt-1 border-t border-line px-4 pb-1 pt-2">
            <button
              type="button"
              onClick={() => submit()}
              className="text-2xs font-medium text-accent transition-colors hover:text-accent-dark"
            >
              See all results for “{value.trim()}”
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
