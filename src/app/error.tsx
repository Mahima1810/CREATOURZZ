'use client';

import { useEffect } from 'react';
import { TriangleAlert, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Surface the failure in the console so it is debuggable in development.
    console.error('[creatourzz] page error:', error);
  }, [error]);

  return (
    <section className="pt-[4.5rem]">
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-sand text-gold">
          <TriangleAlert className="h-7 w-7" strokeWidth={1.4} />
        </span>
        <p className="eyebrow mt-7">Something went wrong</p>
        <h1 className="display mt-3 text-[2.25rem] sm:text-[3rem]">We could not load this page</h1>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-soft">
          An unexpected error interrupted the page. Trying again usually resolves it.
        </p>
        {error.digest ? (
          <p className="mt-3 text-2xs text-ink-faint">
            Reference: <code className="rounded bg-sand px-1.5 py-0.5">{error.digest}</code>
          </p>
        ) : null}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={reset}>
            <RotateCcw className="h-4 w-4" strokeWidth={1.9} />
            Try again
          </Button>
          <Button href="/" size="lg" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
