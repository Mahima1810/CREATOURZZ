import type { ReactNode } from 'react';
import { cn } from '@/lib/format';

type Tone = 'neutral' | 'accent' | 'onPhoto' | 'gold';

const tones: Record<Tone, string> = {
  neutral: 'border-line bg-surface/90 text-ink-soft',
  accent: 'border-accent-line bg-accent-soft text-accent-dark',
  onPhoto: 'border-white/25 bg-black/35 text-white backdrop-blur-md',
  gold: 'border-gold/30 bg-gold/10 text-gold',
};

export function Badge({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-2xs font-medium',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
