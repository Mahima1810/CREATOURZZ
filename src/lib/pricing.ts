import type { Package } from './types';

/**
 * One place for every statement the site makes about money.
 *
 * Price copy is the easiest thing on a travel site to let drift — a card says
 * "per person", the detail page says "per package", and the enquiry form quotes
 * a third thing. Keeping the wording here means a package's basis is declared
 * once in its data and read identically everywhere.
 */

/** Required wherever a price appears. */
export const PRICING_NOTE = 'Contact us for detailed pricing and package customisation.';

export function isPackagePriced(pkg: Pick<Package, 'priceBasis'>): boolean {
  return pkg.priceBasis === 'package';
}

/** Long form, for detail pages and panels. */
export function priceBasisLabel(pkg: Pick<Package, 'priceBasis'>): string {
  return isPackagePriced(pkg) ? 'Indicative package price' : 'Per person, twin sharing';
}

/** Short form, for cards and compact bars where space is tight. */
export function priceBasisShort(pkg: Pick<Package, 'priceBasis'>): string {
  return isPackagePriced(pkg) ? 'indicative package price' : 'per person';
}

/**
 * The label above the figure. Package-priced journeys are not "from" prices —
 * calling them that would imply a cheaper entry point that does not exist.
 */
export function priceHeading(pkg: Pick<Package, 'priceBasis'>): string {
  return isPackagePriced(pkg) ? 'Indicative price' : 'Starting from';
}
