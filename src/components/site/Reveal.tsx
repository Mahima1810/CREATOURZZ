'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/format';

/**
 * Fades content up the first time it scrolls into view.
 * Falls back to visible immediately when IntersectionObserver is unavailable
 * or the user prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={shown ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-creatourzz motion-reduce:transition-none',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
