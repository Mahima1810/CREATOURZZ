/** ₹ formatting — no decimals, Indian digit grouping. */
export function inr(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** "5 Nights / 6 Days" */
export function duration(nights: number, days: number): string {
  return `${nights} ${nights === 1 ? 'Night' : 'Nights'} / ${days} ${days === 1 ? 'Day' : 'Days'}`;
}

/** "5N / 6D" for tight spaces such as card meta rows. */
export function durationShort(nights: number, days: number): string {
  return `${nights}N / ${days}D`;
}

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}
