import { Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="pt-[4.5rem]">
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-sand text-accent">
          <Compass className="h-7 w-7" strokeWidth={1.4} />
        </span>
        <p className="eyebrow mt-7">Error 404</p>
        <h1 className="display mt-3 text-[2.5rem] sm:text-[3.25rem]">We do not run that route</h1>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-soft">
          There is no page or package at this address. It may have been retired, or the link may be mistyped.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/packages" size="lg">
            Browse tour packages
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Button>
          <Button href="/" size="lg" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
