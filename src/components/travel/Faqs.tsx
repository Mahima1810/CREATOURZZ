'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Faq } from '@/lib/types';
import { cn } from '@/lib/format';

export function Faqs({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading">
      <div className="max-w-2xl">
        <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold">Before you ask</p>
        <h2 id="faq-heading" className="display mt-3 text-[1.75rem] sm:text-[2.25rem]">
          Frequently asked questions
        </h2>
      </div>

      <dl className="mt-10 border-t border-gold/20">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div key={faq.question} className="border-b border-gold/20">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={cn(
                      'text-pretty font-display text-lg transition-colors sm:text-xl',
                      isOpen ? 'text-gold' : 'group-hover:text-gold',
                    )}
                  >
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      'mt-1 h-5 w-5 shrink-0 text-ink-mute transition-transform duration-300 ease-creatourzz',
                      isOpen && 'rotate-45 text-gold',
                    )}
                    strokeWidth={1.6}
                  />
                </button>
              </dt>
              <dd id={`faq-${index}`} hidden={!isOpen} className={cn(isOpen && 'animate-fade-in pb-6')}>
                <p className="max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{faq.answer}</p>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
