import Link from 'next/link';
import { cn } from '@/lib/format';

/**
 * CREATOURZZ mark: a minimal compass needle inside a hairline ring.
 * `tone` lets the same mark sit on photography or on paper.
 */
export function Logo({
  tone = 'ink',
  className,
  href = '/',
}: {
  tone?: 'ink' | 'light';
  className?: string;
  href?: string | null;
}) {
  const content = (
    <span className={cn('group inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={cn('h-7 w-7 shrink-0', tone === 'light' ? 'text-white' : 'text-accent')}
      >
        <circle cx="16" cy="16" r="14.25" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
        <path d="M16 4.5 20.1 16 16 27.5 11.9 16Z" fill="currentColor" opacity="0.92" />
        <path d="M4.5 16h23" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
        <circle cx="16" cy="16" r="2.1" className={tone === 'light' ? 'fill-ink' : 'fill-canvas'} />
      </svg>
      <span
        className={cn(
          // CREATOURZZ is a long wordmark: tighten it on small screens so the
          // mark plus the menu button still fit a 390px bar.
          'font-display text-[1.0625rem] leading-none tracking-[0.15em] sm:text-[1.25rem] sm:tracking-[0.18em]',
          tone === 'light' ? 'text-white' : 'text-ink',
        )}
      >
        CREATOURZZ
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="CREATOURZZ — home" className="rounded-md">
      {content}
    </Link>
  );
}
