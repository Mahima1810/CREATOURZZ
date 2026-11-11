/**
 * Policy text shared by every package.
 *
 * Kept in its own module rather than exported from `packages.ts`, because the
 * signature packages live in their own files and `packages.ts` imports them —
 * exporting from there would make the import graph circular.
 */

export const COMMON_EXCLUSIONS = [
  'Flights and train fares to and from the start point',
  'Personal expenses — laundry, telephone, tips, minibar',
  'Optional activities and anything marked "at own cost"',
  'Travel insurance and medical cover',
  'Anything not explicitly listed under inclusions',
];

export const COMMON_CANCELLATION = [
  'More than 30 days before departure — 90% of the trip cost refunded',
  '30 to 15 days before departure — 50% of the trip cost refunded',
  '14 to 8 days before departure — 25% of the trip cost refunded',
  'Under 7 days before departure, or no-show — no refund',
  'Third-party charges already paid (flights, ferries, permits) follow the operator’s own policy',
];

/** For the signature journeys, which are quoted as a whole package. */
export const SIGNATURE_GOOD_TO_KNOW = [
  'The price shown is an indicative package price and moves with your dates, group size and live rates',
  'Contact us for detailed pricing and package customisation — nothing is fixed until you have a written quote',
  'A valid government photo ID is required at every hotel check-in',
  'Itineraries may be re-sequenced for weather, permit timings or local advisories',
  'No payment is taken on this site',
];
