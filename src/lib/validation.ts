import type { EnquiryInput } from './types';

export type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
/** Accepts +91 / 0 prefixes, spaces and hyphens; requires 10–14 digits. */
const PHONE_DIGITS = /^\d{10,14}$/;

export const MAX_TRAVELLERS = 30;

/**
 * Validates an enquiry. Shared by the browser form and the API route so the
 * server never trusts the client's own check.
 */
export function validateEnquiry(input: Partial<EnquiryInput>): FieldErrors {
  const errors: FieldErrors = {};

  const name = (input.name ?? '').trim();
  if (!name) errors.name = 'Please tell us your name.';
  else if (name.length < 2) errors.name = 'That looks too short — please enter your full name.';
  else if (name.length > 80) errors.name = 'Please keep this under 80 characters.';

  const email = (input.email ?? '').trim();
  if (!email) errors.email = 'We need an email address to reply to.';
  else if (!EMAIL.test(email)) errors.email = 'That does not look like a valid email address.';

  const phoneDigits = (input.phone ?? '').replace(/[\s\-()]/g, '').replace(/^\+/, '');
  if (!input.phone?.trim()) errors.phone = 'A phone number helps us reach you faster.';
  else if (!PHONE_DIGITS.test(phoneDigits)) errors.phone = 'Enter a valid phone number with 10 to 14 digits.';

  const travellers = Number(input.travellers);
  if (!input.travellers && input.travellers !== 0) errors.travellers = 'How many people are travelling?';
  else if (!Number.isFinite(travellers) || !Number.isInteger(travellers))
    errors.travellers = 'Enter a whole number of travellers.';
  else if (travellers < 1) errors.travellers = 'At least one traveller is required.';
  else if (travellers > MAX_TRAVELLERS)
    errors.travellers = `For groups over ${MAX_TRAVELLERS}, please use the contact page instead.`;

  const date = (input.travelDate ?? '').trim();
  if (!date) {
    errors.travelDate = 'Pick an approximate travel date.';
  } else {
    const parsed = new Date(`${date}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) {
      errors.travelDate = 'That date could not be read.';
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (parsed < today) errors.travelDate = 'Please choose a date in the future.';
    }
  }

  if ((input.message ?? '').length > 1200) errors.message = 'Please keep this under 1,200 characters.';

  return errors;
}

export function isValid(errors: FieldErrors): boolean {
  return Object.keys(errors).length === 0;
}

/** CTZ-7KQ2M4 — short, readable, unambiguous in speech. */
export function makeReference(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < 6; i += 1) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `CTZ-${out}`;
}

/** Trims and clamps user input before it is persisted. */
export function sanitiseEnquiry(input: Partial<EnquiryInput>): EnquiryInput {
  return {
    name: (input.name ?? '').trim().slice(0, 80),
    email: (input.email ?? '').trim().slice(0, 120).toLowerCase(),
    phone: (input.phone ?? '').trim().slice(0, 24),
    travellers: Math.max(1, Math.min(MAX_TRAVELLERS, Math.round(Number(input.travellers) || 1))),
    travelDate: (input.travelDate ?? '').trim().slice(0, 10),
    packageSlug: input.packageSlug?.trim().slice(0, 60) || undefined,
    packageName: input.packageName?.trim().slice(0, 120) || undefined,
    message: input.message?.trim().slice(0, 1200) || undefined,
    hotelCategory: input.hotelCategory?.trim().slice(0, 80) || undefined,
    transport: input.transport?.trim().slice(0, 80) || undefined,
  };
}
