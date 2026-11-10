'use client';

import { useEffect, useId, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { validateEnquiry, isValid, MAX_TRAVELLERS, type FieldErrors } from '@/lib/validation';
import type { EnquiryInput, PriceTier } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import { cn } from '@/lib/format';

export const ENQUIRY_SESSION_KEY = 'creatourzz:last-enquiry';

export const TRANSPORT_OPTIONS = [
  'Private car with driver',
  'Private SUV with driver',
  'Chauffeured premium SUV',
  'Shared coach',
  'No preference yet',
];

type Props = {
  packageSlug?: string;
  packageName?: string;
  /** When present, the form collects hotel category and transport preference. */
  tiers?: PriceTier[];
  initialTier?: string;
  /** Rendered above the submit button, e.g. the price recap inside the dialog. */
  summary?: React.ReactNode;
  onSubmitted?: () => void;
  compact?: boolean;
};

const today = () => new Date().toISOString().slice(0, 10);

export function EnquiryForm({
  packageSlug,
  packageName,
  tiers,
  initialTier,
  summary,
  onSubmitted,
  compact = false,
}: Props) {
  const router = useRouter();
  const uid = useId();
  const [values, setValues] = useState<EnquiryInput>({
    name: '',
    email: '',
    phone: '',
    travellers: 2,
    travelDate: '',
    message: '',
    packageSlug,
    packageName,
    hotelCategory: tiers?.length ? (initialTier ?? tiers.find((t) => t.recommended)?.name ?? tiers[0].name) : undefined,
    transport: tiers?.length ? 'No preference yet' : undefined,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'sending'>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  /**
   * The contact page is statically prerendered, so computing "today" during
   * render would bake the build date into the HTML and mismatch on hydration
   * the next day. The browser fills it in after mount instead; the server-side
   * validator rejects past dates regardless.
   */
  const [minDate, setMinDate] = useState('');
  useEffect(() => setMinDate(today()), []);

  const field = <K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key as string]) setErrors(validateEnquiry(next));
  };

  const blur = (key: keyof EnquiryInput) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateEnquiry(values));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const found = validateEnquiry(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, travellers: true, travelDate: true, message: true });

    if (!isValid(found)) {
      // Move focus to the first field that needs attention.
      const firstKey = Object.keys(found)[0];
      document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 422 && data?.errors) {
          setErrors(data.errors as FieldErrors);
          setFormError('Please correct the highlighted fields and try again.');
        } else {
          setFormError(data?.error ?? 'We could not record that enquiry. Please try again in a moment.');
        }
        setStatus('idle');
        return;
      }

      // Keep the details out of the URL; the confirmation page reads them here.
      try {
        sessionStorage.setItem(
          ENQUIRY_SESSION_KEY,
          JSON.stringify({ ...values, reference: data.reference, createdAt: data.createdAt, persisted: data.persisted }),
        );
      } catch {
        // Private browsing can refuse storage — the reference in the URL still works.
      }

      onSubmitted?.();
      router.push(`/enquiry/confirmation?ref=${encodeURIComponent(data.reference)}`);
    } catch {
      setFormError('Network error — your enquiry was not recorded. Please check your connection and retry.');
      setStatus('idle');
    }
  }

  const describe = (key: keyof EnquiryInput) => (errors[key] ? `${uid}-${key}-error` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className={cn('grid gap-4', compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2')}>
        <Field
          id={`${uid}-name`}
          label="Full name"
          required
          error={errors.name}
          errorId={describe('name')}
          className="sm:col-span-2"
        >
          <input
            id={`${uid}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => field('name', e.target.value)}
            onBlur={() => blur('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describe('name')}
            placeholder="Your name"
            className={cn('field', errors.name && 'field-error')}
          />
        </Field>

        <Field id={`${uid}-email`} label="Email address" required error={errors.email} errorId={describe('email')}>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => field('email', e.target.value)}
            onBlur={() => blur('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe('email')}
            placeholder="you@example.com"
            className={cn('field', errors.email && 'field-error')}
          />
        </Field>

        <Field id={`${uid}-phone`} label="Phone number" required error={errors.phone} errorId={describe('phone')}>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => field('phone', e.target.value)}
            onBlur={() => blur('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describe('phone')}
            placeholder="+91 00000 00000"
            className={cn('field', errors.phone && 'field-error')}
          />
        </Field>

        <Field
          id={`${uid}-travellers`}
          label="Number of travellers"
          required
          error={errors.travellers}
          errorId={describe('travellers')}
        >
          <input
            id={`${uid}-travellers`}
            name="travellers"
            type="number"
            min={1}
            max={MAX_TRAVELLERS}
            step={1}
            value={values.travellers}
            onChange={(e) => field('travellers', e.target.value === '' ? ('' as never) : Number(e.target.value))}
            onBlur={() => blur('travellers')}
            aria-invalid={Boolean(errors.travellers)}
            aria-describedby={describe('travellers')}
            className={cn('field', errors.travellers && 'field-error')}
          />
        </Field>

        <Field
          id={`${uid}-travelDate`}
          label="Preferred travel date"
          required
          error={errors.travelDate}
          errorId={describe('travelDate')}
        >
          <input
            id={`${uid}-travelDate`}
            name="travelDate"
            type="date"
            min={minDate || undefined}
            value={values.travelDate}
            onChange={(e) => field('travelDate', e.target.value)}
            onBlur={() => blur('travelDate')}
            aria-invalid={Boolean(errors.travelDate)}
            aria-describedby={describe('travelDate')}
            className={cn('field', errors.travelDate && 'field-error')}
          />
        </Field>

        {tiers?.length ? (
          <>
            <Field id={`${uid}-hotelCategory`} label="Hotel category">
              <select
                id={`${uid}-hotelCategory`}
                name="hotelCategory"
                value={values.hotelCategory ?? ''}
                onChange={(e) => field('hotelCategory', e.target.value)}
                className="field cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23878E97' stroke-width='1.8' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                }}
              >
                {tiers.map((tier) => (
                  <option key={tier.id} value={tier.name}>
                    {tier.name} — {tier.hotels}
                  </option>
                ))}
                <option value="Not decided yet">Not decided yet</option>
              </select>
            </Field>

            <Field id={`${uid}-transport`} label="Transport preference">
              <select
                id={`${uid}-transport`}
                name="transport"
                value={values.transport ?? ''}
                onChange={(e) => field('transport', e.target.value)}
                className="field cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23878E97' stroke-width='1.8' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                }}
              >
                {TRANSPORT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </>
        ) : null}

        <Field
          id={`${uid}-message`}
          label="Additional requirements"
          hint="Optional"
          error={errors.message}
          errorId={describe('message')}
          className="sm:col-span-2"
        >
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={compact ? 3 : 4}
            value={values.message ?? ''}
            onChange={(e) => field('message', e.target.value)}
            onBlur={() => blur('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describe('message')}
            placeholder="Dietary needs, preferred hotel category, anything you want added or dropped…"
            className={cn('field resize-y', errors.message && 'field-error')}
          />
        </Field>
      </div>

      {summary}

      {formError ? (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
          {formError}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === 'sending'} className="mt-1 w-full">
        {status === 'sending' ? (
          <>
            <Spinner />
            Recording your enquiry…
          </>
        ) : (
          <>
            Send enquiry
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </>
        )}
      </Button>

      <p className="flex items-start gap-2 text-2xs leading-relaxed text-ink-mute">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
        <span>
          No payment is taken on this site. This is a demonstration build: your enquiry is saved to this
          deployment&rsquo;s own store and is <strong className="font-medium text-ink-soft">not</strong> emailed or sent
          to a travel company.
        </span>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  required,
  error,
  errorId,
  className,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="text-2xs font-medium uppercase tracking-eyebrow text-ink-soft">
          {label}
          {required ? <span className="ml-1 text-accent">*</span> : null}
        </span>
        {hint ? <span className="text-2xs text-ink-faint">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 flex items-center gap-1.5 text-2xs text-red-600">
          <AlertCircle className="h-3 w-3 shrink-0" strokeWidth={2} />
          {error}
        </p>
      ) : null}
    </div>
  );
}
