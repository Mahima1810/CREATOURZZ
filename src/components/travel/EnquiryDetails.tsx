'use client';

import { useEffect, useState } from 'react';
import { ENQUIRY_SESSION_KEY } from './EnquiryForm';
import { formatDate } from '@/lib/format';

type Saved = {
  name: string;
  email: string;
  phone: string;
  travellers: number;
  travelDate: string;
  message?: string;
  packageName?: string;
  packageSlug?: string;
  hotelCategory?: string;
  transport?: string;
  reference: string;
};

/**
 * Echoes back what was submitted, read from this tab's sessionStorage.
 * Renders nothing when the copy is absent (a reload in a new tab, or storage
 * blocked) — the server-rendered reference above still stands on its own.
 */
export function EnquiryDetails({ reference }: { reference: string }) {
  const [saved, setSaved] = useState<Saved | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(ENQUIRY_SESSION_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Saved;
      if (parsed.reference === reference) setSaved(parsed);
    } catch {
      // Storage unavailable — leave the section out.
    }
  }, [reference]);

  if (!saved) return null;

  const rows: Array<[string, string]> = [
    ['Name', saved.name],
    ['Email', saved.email],
    ['Phone', saved.phone],
    ['Travellers', String(saved.travellers)],
    ['Preferred travel date', formatDate(saved.travelDate)],
    ...(saved.packageName ? ([['Package', saved.packageName]] as Array<[string, string]>) : []),
    ...(saved.hotelCategory ? ([['Hotel category', saved.hotelCategory]] as Array<[string, string]>) : []),
    ...(saved.transport ? ([['Transport preference', saved.transport]] as Array<[string, string]>) : []),
    ...(saved.message ? ([['Additional requirements', saved.message]] as Array<[string, string]>) : []),
  ];

  return (
    <div className="mt-6 animate-fade-in overflow-hidden rounded-3xl border border-line bg-surface">
      <h2 className="border-b border-line px-6 py-4 text-2xs font-semibold uppercase tracking-eyebrow text-ink-soft sm:px-8">
        What we received
      </h2>
      <dl className="divide-y divide-line">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-6 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4 sm:px-8">
            <dt className="text-2xs uppercase tracking-eyebrow text-ink-mute">{label}</dt>
            <dd className="text-pretty text-[0.9375rem] text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
