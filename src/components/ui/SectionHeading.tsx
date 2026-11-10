import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  action?: ReactNode;
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        centered && 'md:flex-col md:items-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', centered && 'text-center')}>
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h2 className="display text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">{title}</h2>
        {description ? (
          <p className="mt-4 text-pretty text-[1.0625rem] leading-relaxed text-ink-soft">{description}</p>
        ) : null}
      </div>
      {action ? <div className={cn('shrink-0', centered && 'md:mt-2')}>{action}</div> : null}
    </div>
  );
}
