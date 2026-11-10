'use client';

import { useEffect, useState } from 'react';
import { ENQUIRY_SESSION_KEY } from './EnquiryForm';

/**
 * The one claim on this page whose truth depends on where the app is deployed.
 *
 * The file-backed demo store is real storage on a local machine or a single
 * long-lived server. On a serverless host (Vercel, Netlify Functions, Cloud
 * Run) the route gets a read-only filesystem instead: `saveEnquiry` catches the
 * write failure and reports `persisted: false`. Printing "saved to the server"
 * there would be a lie, so this renders what actually happened.
 *
 * The server-rendered fallback is the statement that holds either way; the
 * precise one replaces it once the submission result can be read back.
 */
export function StorageNote() {
  const [persisted, setPersisted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(ENQUIRY_SESSION_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { persisted?: boolean };
      if (typeof parsed.persisted === 'boolean') setPersisted(parsed.persisted);
    } catch {
      // Storage unavailable — keep the neutral wording.
    }
  }, []);

  if (persisted === true) {
    return <li>• Your enquiry was saved to this deployment&rsquo;s demo store (a JSON file on the server).</li>;
  }

  if (persisted === false) {
    return (
      <li>
        • Your enquiry was <strong className="font-medium text-ink">not stored</strong>. This deployment has a
        read-only filesystem, so the demo store could not be written — the reference above was issued, but the
        enquiry itself was discarded.
      </li>
    );
  }

  return (
    <li>• Your enquiry was submitted to this deployment&rsquo;s enquiry API, which issued the reference above.</li>
  );
}
