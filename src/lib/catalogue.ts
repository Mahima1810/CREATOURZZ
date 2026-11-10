import { destinations, destinationBySlug } from '@/data/destinations';
import { packages, packageBySlug } from '@/data/packages';
import type { Destination, Package, TravelStyle } from './types';

export { destinations, packages, destinationBySlug, packageBySlug };

/* ─────────────────────────── filter vocabularies ─────────────────────────── */

export const BUDGET_BANDS = [
  { id: 'under-15000', label: 'Under ₹15,000', min: 0, max: 14999 },
  { id: '15000-30000', label: '₹15,000 – ₹30,000', min: 15000, max: 29999 },
  { id: '30000-60000', label: '₹30,000 – ₹60,000', min: 30000, max: 59999 },
  { id: 'above-60000', label: 'Above ₹60,000', min: 60000, max: Number.POSITIVE_INFINITY },
] as const;

export const DURATION_BANDS = [
  { id: 'short', label: 'Up to 3 nights', min: 0, max: 3 },
  { id: 'medium', label: '4 – 6 nights', min: 4, max: 6 },
  { id: 'long', label: '7 nights or more', min: 7, max: Number.POSITIVE_INFINITY },
] as const;

export const SORT_OPTIONS = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'duration-asc', label: 'Duration: short to long' },
  { id: 'duration-desc', label: 'Duration: long to short' },
] as const;

export const TRAVEL_STYLES: TravelStyle[] = ['Beach', 'Mountains', 'Heritage', 'Honeymoon', 'Adventure', 'Island'];

export type BudgetId = (typeof BUDGET_BANDS)[number]['id'];
export type DurationId = (typeof DURATION_BANDS)[number]['id'];
export type SortId = (typeof SORT_OPTIONS)[number]['id'];

export type PackageQuery = {
  q?: string;
  destination?: string;
  budget?: string;
  duration?: string;
  style?: string;
  sort?: string;
};

/* ───────────────────────────── derived helpers ───────────────────────────── */

export function packagesForDestination(slug: string): Package[] {
  return packages.filter((p) => p.destinationSlug === slug);
}

/** Lowest live package price for a destination, falling back to its own figure. */
export function startingPriceFor(destination: Destination): number {
  const prices = packagesForDestination(destination.slug).map((p) => p.pricePerPerson);
  return prices.length ? Math.min(...prices) : destination.startingPrice;
}

export function destinationFor(pkg: Package): Destination | undefined {
  return destinationBySlug.get(pkg.destinationSlug);
}

export function featuredPackages(limit = 6): Package[] {
  const featured = packages.filter((p) => p.featured);
  return (featured.length ? featured : packages).slice(0, limit);
}

/* ───────────────────────────────── search ───────────────────────────────── */

const normalise = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function tokens(value: string): string[] {
  const n = normalise(value);
  return n ? n.split(' ') : [];
}

/**
 * Relevance score for one package against the search terms.
 * Returns 0 when any term is unmatched, so results stay precise rather than broad.
 */
function scorePackage(pkg: Package, terms: string[]): number {
  const destination = destinationFor(pkg);
  const fields: Array<[string, number]> = [
    [pkg.name, 10],
    [destination?.name ?? '', 9],
    [pkg.slug.replace(/-/g, ' '), 8],
    [destination?.region ?? '', 5],
    [pkg.summary, 4],
    [pkg.styles.join(' '), 4],
    [(destination?.keywords ?? []).join(' '), 4],
    [pkg.highlights.join(' '), 2],
    [pkg.overview, 2],
    [pkg.itinerary.map((d) => `${d.title} ${d.activities.join(' ')}`).join(' '), 1],
  ];

  let total = 0;
  for (const term of terms) {
    let best = 0;
    for (const [raw, weight] of fields) {
      const haystack = normalise(raw);
      if (!haystack) continue;
      if (haystack === term) best = Math.max(best, weight * 2);
      else if (haystack.startsWith(term) || haystack.includes(` ${term}`)) best = Math.max(best, weight * 1.5);
      else if (haystack.includes(term)) best = Math.max(best, weight);
    }
    if (best === 0) return 0; // every term must land somewhere
    total += best;
  }
  return total;
}

function scoreDestination(destination: Destination, terms: string[]): number {
  const fields: Array<[string, number]> = [
    [destination.name, 10],
    [destination.slug.replace(/-/g, ' '), 9],
    [destination.region, 6],
    [destination.keywords.join(' '), 5],
    [destination.tagline, 3],
    [destination.blurb, 2],
  ];

  let total = 0;
  for (const term of terms) {
    let best = 0;
    for (const [raw, weight] of fields) {
      const haystack = normalise(raw);
      if (!haystack) continue;
      if (haystack === term) best = Math.max(best, weight * 2);
      else if (haystack.includes(term)) best = Math.max(best, weight);
    }
    if (best === 0) return 0;
    total += best;
  }
  return total;
}

export function searchDestinations(query: string): Destination[] {
  const terms = tokens(query);
  if (!terms.length) return destinations;
  return destinations
    .map((d) => ({ d, score: scoreDestination(d, terms) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.d);
}

/* ────────────────────────── filtering and sorting ────────────────────────── */

export function filterPackages(query: PackageQuery): Package[] {
  const terms = tokens(query.q ?? '');
  const budget = BUDGET_BANDS.find((b) => b.id === query.budget);
  const durationBand = DURATION_BANDS.find((d) => d.id === query.duration);
  const style = TRAVEL_STYLES.find((s) => s.toLowerCase() === (query.style ?? '').toLowerCase());

  const scored = packages
    .map((pkg) => ({ pkg, score: terms.length ? scorePackage(pkg, terms) : 1 }))
    .filter(({ pkg, score }) => {
      if (score === 0) return false;
      if (query.destination && pkg.destinationSlug !== query.destination) return false;
      if (budget && (pkg.pricePerPerson < budget.min || pkg.pricePerPerson > budget.max)) return false;
      if (durationBand && (pkg.nights < durationBand.min || pkg.nights > durationBand.max)) return false;
      if (style && !pkg.styles.includes(style)) return false;
      return true;
    });

  const sort = (SORT_OPTIONS.find((s) => s.id === query.sort)?.id ?? 'recommended') as SortId;

  switch (sort) {
    case 'price-asc':
      scored.sort((a, b) => a.pkg.pricePerPerson - b.pkg.pricePerPerson);
      break;
    case 'price-desc':
      scored.sort((a, b) => b.pkg.pricePerPerson - a.pkg.pricePerPerson);
      break;
    case 'duration-asc':
      scored.sort((a, b) => a.pkg.nights - b.pkg.nights || a.pkg.pricePerPerson - b.pkg.pricePerPerson);
      break;
    case 'duration-desc':
      scored.sort((a, b) => b.pkg.nights - a.pkg.nights || a.pkg.pricePerPerson - b.pkg.pricePerPerson);
      break;
    default:
      // Relevance first when searching, otherwise featured trips lead.
      scored.sort(
        (a, b) =>
          b.score - a.score ||
          Number(Boolean(b.pkg.featured)) - Number(Boolean(a.pkg.featured)) ||
          a.pkg.pricePerPerson - b.pkg.pricePerPerson,
      );
  }

  return scored.map((r) => r.pkg);
}

/** Describes the active filters in words, for the results summary line. */
export function describeQuery(query: PackageQuery): string[] {
  const parts: string[] = [];
  if (query.q) parts.push(`“${query.q}”`);
  if (query.destination) parts.push(destinationBySlug.get(query.destination)?.name ?? query.destination);
  if (query.budget) parts.push(BUDGET_BANDS.find((b) => b.id === query.budget)?.label ?? query.budget);
  if (query.duration) parts.push(DURATION_BANDS.find((d) => d.id === query.duration)?.label ?? query.duration);
  if (query.style) parts.push(query.style);
  return parts;
}

export function hasActiveFilters(query: PackageQuery): boolean {
  return Boolean(query.q || query.destination || query.budget || query.duration || query.style);
}

/** Lightweight combined search used by the hero search bar's suggestion list. */
export function quickSearch(query: string, limit = 6) {
  const terms = tokens(query);
  if (!terms.length) return [];

  const destinationHits = destinations
    .map((d) => ({ kind: 'destination' as const, item: d, score: scoreDestination(d, terms) }))
    .filter((r) => r.score > 0);

  const packageHits = packages
    .map((p) => ({ kind: 'package' as const, item: p, score: scorePackage(p, terms) }))
    .filter((r) => r.score > 0);

  return [...destinationHits, ...packageHits].sort((a, b) => b.score - a.score).slice(0, limit);
}
