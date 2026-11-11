import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { photos } from '@/data/images';

export const metadata: Metadata = {
  title: 'Photography Credits',
  description: 'Attribution for the openly licensed photography used across CREATOURZZ.',
};

export default function CreditsPage() {
  // De-duplicate: several pages reuse the same photograph.
  const unique = Array.from(new Map(Object.values(photos).map((p) => [p.src, p])).values());

  return (
    <section className="pt-[4.5rem]">
      <div className="shell py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Credits</p>
          <h1 className="display mt-4 text-[2.25rem] sm:text-[3rem]">Photography</h1>
          <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
            Every photograph on this site is an openly licensed image from Wikimedia Commons, used under the terms of
            its licence. Attribution for each is listed below, with a link to the original file and its full licence
            details.
          </p>
          <p className="mt-4 text-2xs leading-relaxed text-ink-mute">
            Licences are abbreviated here (for example “CC BY-SA 4.0”). The linked file page carries the authoritative
            licence text and the author&rsquo;s preferred attribution.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {unique.map((photo, index) => (
            <li
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card"
            >
              {/*
                Unoptimised on purpose. This page renders every photograph on
                the site at once, so routing ~80 thumbnails through the image
                optimiser means ~80 upstream fetches of 1920px originals — it
                saturates and starts answering 500. Commons only serves widths
                it has already rendered, so requesting a smaller source is not
                an option either. Letting the browser fetch each one lazily,
                straight from the Wikimedia CDN, is the fix that actually works.
              */}
              <div className="relative aspect-[16/10] bg-sand">
                <Image
                  src={photo.src}
                  unoptimized
                  alt={photo.alt}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-pretty text-[0.8125rem] leading-relaxed text-ink-soft">{photo.alt}</p>
                <dl className="mt-3 space-y-1 text-2xs text-ink-mute">
                  <div className="flex gap-1.5">
                    <dt className="shrink-0">Author:</dt>
                    <dd className="truncate text-ink-soft">{photo.credit?.author ?? 'Unknown'}</dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="shrink-0">Licence:</dt>
                    <dd className="text-ink-soft">{photo.credit?.license ?? '—'}</dd>
                  </div>
                </dl>
                {photo.credit?.page ? (
                  <a
                    href={photo.credit.page}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex items-center gap-1.5 text-2xs font-medium text-accent transition-colors hover:text-accent-dark"
                  >
                    Original file
                    <ExternalLink className="h-3 w-3" strokeWidth={1.9} />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
