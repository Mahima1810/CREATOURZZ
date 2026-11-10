import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Info, FileWarning } from 'lucide-react';
import { EnquiryDetails } from '@/components/travel/EnquiryDetails';
import { StorageNote } from '@/components/travel/StorageNote';
import { CopyReference } from '@/components/travel/CopyReference';
import { Button } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';

export const metadata: Metadata = {
  title: 'Enquiry received',
  description: 'Your CREATOURZZ booking enquiry reference and what happens next.',
};

/**
 * The reference comes from the URL and is rendered on the server, so the
 * confirmation is legible even before (or without) hydration. The submitted
 * details are a progressive enhancement layered on top by a client component.
 */
export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const reference = typeof ref === 'string' ? ref.trim().slice(0, 20) : '';

  if (!reference) {
    return (
      <section className="pt-[4.5rem]">
        <div className="shell py-16 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <EmptyState
              icon={<FileWarning className="h-6 w-6" strokeWidth={1.5} />}
              title="No enquiry reference here"
              description="This page shows the confirmation for an enquiry you have just sent. Start from a package page to send one."
              action={
                <Button href="/packages">
                  Browse packages
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-[4.5rem]">
      <div className="shell py-16 lg:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center text-center">
            <span className="grid h-16 w-16 animate-scale-in place-items-center rounded-full bg-accent-soft text-accent">
              <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
            </span>
            <p className="eyebrow mt-6">Enquiry received</p>
            <h1 className="display mt-3 text-[2.25rem] sm:text-[3rem]">Thank you.</h1>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-ink-soft">
              Your enquiry has been recorded. Keep the reference below — it identifies this request.
            </p>
          </div>

          <div className="mt-9 flex flex-col items-center gap-3 rounded-3xl border border-line bg-surface px-6 py-7 shadow-card sm:flex-row sm:justify-between sm:px-8">
            <div className="text-center sm:text-left">
              <p className="text-2xs uppercase tracking-eyebrow text-ink-mute">Your reference</p>
              <p className="mt-1.5 font-display text-3xl tracking-wide">{reference}</p>
            </div>
            <CopyReference reference={reference} />
          </div>

          <EnquiryDetails reference={reference} />

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-sand px-5 py-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute" strokeWidth={1.7} />
            <div className="text-[0.875rem] leading-relaxed text-ink-soft">
              <p className="font-medium text-ink">What actually happened just now</p>
              <ul className="mt-2 space-y-1.5 text-2xs">
                <StorageNote />
                <li>• No email, SMS or CRM notification was sent, because no such integration is configured.</li>
                <li>• No travel company has been contacted, and no payment was taken.</li>
                <li>
                  • See <code className="rounded bg-surface px-1 py-0.5">README.md</code> for how to connect a real
                  backend.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/packages" size="lg">
              Keep exploring
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button href="/" size="lg" variant="secondary">
              Back to home
            </Button>
          </div>

          <p className="mt-8 text-center text-2xs text-ink-mute">
            Questions about this enquiry?{' '}
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
