import { NextResponse } from 'next/server';
import { saveEnquiry, readEnquiries, storeLocation } from '@/lib/enquiry-store';
import { validateEnquiry, isValid, sanitiseEnquiry, makeReference } from '@/lib/validation';
import type { StoredEnquiry } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/enquiries — record a booking enquiry.
 *
 * Returns `delivered: false` on purpose. The enquiry is stored, but nothing is
 * emailed or sent to a travel company, and the UI says exactly that.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ ok: false, error: 'Request body must be an object.' }, { status: 400 });
  }

  const input = sanitiseEnquiry(body as Record<string, never>);
  const errors = validateEnquiry(input);

  if (!isValid(errors)) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry: StoredEnquiry = {
    ...input,
    reference: makeReference(),
    createdAt: new Date().toISOString(),
  };

  const { persisted } = await saveEnquiry(enquiry);

  return NextResponse.json(
    {
      ok: true,
      reference: enquiry.reference,
      createdAt: enquiry.createdAt,
      /** Written to the demo store on this server. */
      persisted,
      /** No email, CRM or notification integration is configured in this build. */
      delivered: false,
    },
    { status: 201 },
  );
}

/**
 * GET /api/enquiries — a health check for the demo store.
 *
 * Returns counts only. The stored enquiries contain personal details, so they
 * are deliberately not served over HTTP; read the JSON file directly instead.
 */
export async function GET() {
  const all = await readEnquiries();
  return NextResponse.json({
    ok: true,
    count: all.length,
    storeFile: storeLocation(),
    note: 'Enquiry contents are not exposed over HTTP. Open the file above to inspect them.',
  });
}
