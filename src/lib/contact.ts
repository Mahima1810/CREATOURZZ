/**
 * Contact details and the customised-tour copy.
 *
 * The email below is the one real, working contact channel this site has.
 * Everything else a travel site normally lists — a phone number, a street
 * address, social accounts — is deliberately absent rather than filled with
 * plausible-looking placeholders. An invented number is worse than no number:
 * it looks like a way to reach someone and is not.
 */

export const CONTACT_EMAIL = 'creatourzz@zohomail.in';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** Prefilled subject lines, so an email arrives with context attached. */
export function mailtoFor(subject: string): string {
  return `${CONTACT_MAILTO}?subject=${encodeURIComponent(subject)}`;
}

/* ── Customised tours ──────────────────────────────────────────────────── */

export const CUSTOM_TOUR_HEADLINE = 'Contact us for customised tours.';

export const CUSTOM_TOUR_BODY =
  'Looking for something different? We create personalised travel experiences tailored to your interests, preferences and travel requirements.';

export const CUSTOM_TOUR_CTA = 'Plan Your Customised Tour';
