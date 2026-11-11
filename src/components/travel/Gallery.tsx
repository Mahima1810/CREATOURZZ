'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import type { Photo } from '@/lib/types';
import { cn } from '@/lib/format';

export function Gallery({ photos, title }: { photos: Photo[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const count = photos.length;
  const go = useCallback((delta: number) => setIndex((i) => (i + delta + count) % count), [count]);

  useEffect(() => {
    if (!lightbox) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(false);
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightbox, go]);

  const current = photos[index];

  return (
    <>
      <figure>
        <div className="group relative overflow-hidden rounded-3xl bg-sand">
          <div className="relative aspect-[16/10] sm:aspect-[16/9]">
            {photos.map((photo, i) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 820px"
                className={cn(
                  'object-cover transition-opacity duration-500 ease-creatourzz',
                  i === index ? 'opacity-100' : 'opacity-0',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setLightbox(true)}
            aria-label="Open full-size gallery"
            className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/35 px-3 py-2 text-2xs text-white backdrop-blur-md transition-colors hover:bg-black/60"
          >
            <Expand className="h-3.5 w-3.5" strokeWidth={1.8} />
            View all {count}
          </button>

          {count > 1 ? (
            <>
              <GalleryArrow side="left" onClick={() => go(-1)} />
              <GalleryArrow side="right" onClick={() => go(1)} />
            </>
          ) : null}
        </div>

        <figcaption className="mt-3 flex items-start justify-between gap-4 text-2xs text-ink-mute">
          <span className="text-pretty">{current.alt}</span>
          <span className="shrink-0 tabular-nums">
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>

      {count > 1 ? (
        <ul className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1">
          {photos.map((photo, i) => (
            <li key={photo.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}: ${photo.alt}`}
                aria-current={i === index}
                className={cn(
                  'relative block h-16 w-24 overflow-hidden rounded-xl ring-offset-2 ring-offset-canvas transition-all duration-300 ease-creatourzz sm:h-[4.5rem] sm:w-28',
                  i === index ? 'ring-2 ring-accent' : 'opacity-65 hover:opacity-100',
                )}
              >
                <Image src={photo.src} alt="" fill sizes="112px" unoptimized className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {lightbox ? (
        <div className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${title} — gallery`}>
          <div className="flex items-center justify-between px-5 py-4 sm:px-8">
            <p className="text-2xs uppercase tracking-eyebrow text-white/60">
              {title} · {index + 1} of {count}
            </p>
            <button
              type="button"
              onClick={() => setLightbox(false)}
              aria-label="Close gallery"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>

          <div className="relative flex-1">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="animate-fade-in object-contain p-4 sm:p-8"
            />
            {count > 1 ? (
              <>
                <GalleryArrow side="left" onClick={() => go(-1)} variant="dark" />
                <GalleryArrow side="right" onClick={() => go(1)} variant="dark" />
              </>
            ) : null}
          </div>

          <p className="px-5 pb-6 text-center text-2xs text-white/60 sm:px-8">{current.alt}</p>
        </div>
      ) : null}
    </>
  );
}

function GalleryArrow({
  side,
  onClick,
  variant = 'light',
}: {
  side: 'left' | 'right';
  onClick: () => void;
  variant?: 'light' | 'dark';
}) {
  const Icon = side === 'left' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous image' : 'Next image'}
      className={cn(
        'absolute top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border transition-all duration-300 ease-creatourzz',
        side === 'left' ? 'left-3 sm:left-4' : 'right-3 sm:right-4',
        variant === 'light'
          ? 'border-white/30 bg-black/35 text-white opacity-0 backdrop-blur-md hover:bg-black/60 focus-visible:opacity-100 group-hover:opacity-100'
          : 'border-white/25 bg-white/5 text-white hover:bg-white/15',
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />
    </button>
  );
}
