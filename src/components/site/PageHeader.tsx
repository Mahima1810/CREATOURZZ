import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Photo } from '@/lib/types';

export type Crumb = { label: string; href?: string };

/**
 * Shared masthead for inner pages: photograph, breadcrumb, title, lede.
 * Sits under the fixed navbar, so it carries its own top padding.
 */
export function PageHeader({
  photo,
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
}: {
  photo: Photo;
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-[4.5rem]">
      <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="scrim absolute inset-0" />

      <div className="shell relative py-14 sm:py-20">
        {crumbs.length ? (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-2xs text-white/60">
              {crumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1">
                  {index > 0 ? <ChevronRight className="h-3 w-3 opacity-50" strokeWidth={2} /> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/85">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="mt-5 text-2xs font-semibold uppercase tracking-eyebrow text-white/65">{eyebrow}</p>
        ) : null}

        <h1 className="display mt-3 max-w-3xl text-[2.5rem] text-white sm:text-[3.25rem] lg:text-[3.75rem]">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-[1.0625rem] leading-relaxed text-white/75">{description}</p>
        ) : null}

        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
