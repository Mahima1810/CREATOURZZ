import Link from 'next/link';
import { Info } from 'lucide-react';

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

/** Shared shell for the Terms and Privacy pages. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="pt-[4.5rem]">
      <div className="shell py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-4 text-[2.25rem] sm:text-[3rem]">{title}</h1>
          <p className="mt-3 text-2xs uppercase tracking-eyebrow text-ink-mute">Last updated {updated}</p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent-line bg-accent-soft/60 px-5 py-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
            <p className="text-pretty text-[0.875rem] leading-relaxed text-ink-soft">
              <strong className="font-medium text-ink">Sample document.</strong> CREATOURZZ is a demonstration project and
              not a registered travel company. This page is placeholder text written to show where a real policy would
              sit. It is not legal advice and creates no agreement between anyone.
            </p>
          </div>

          <p className="mt-8 text-pretty text-[1.0625rem] leading-relaxed text-ink-soft">{intro}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-2xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-pretty leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-14 border-t border-line pt-6 text-2xs text-ink-mute">
            Questions about this page?{' '}
            <Link href="/contact" className="underline underline-offset-2 transition-colors hover:text-accent">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
