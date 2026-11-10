export type Photo = {
  /** Remote image URL (Wikimedia Commons thumbnail endpoint). */
  src: string;
  /** Alt text — always describes the scene, never repeats the destination name alone. */
  alt: string;
  /** Attribution shown on /credits, required by the CC licences these photos carry. */
  credit?: { author: string; license: string; page: string };
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  country: 'India' | 'International';
  tagline: string;
  blurb: string;
  /** Lowest per-person price across this destination's packages, in INR. */
  startingPrice: number;
  bestMonths: string;
  hero: Photo;
  gallery: Photo[];
  /** Free-text keywords that feed search. */
  keywords: string[];
};

export type ItineraryDay = {
  day: number;
  title: string;
  summary: string;
  activities: string[];
  stay?: string;
  meals?: string;
  /** City or site the day is based in — shown as the day's location chip. */
  destination?: string;
  /** Split-by-session plan. When present it replaces the flat activity list. */
  morning?: string[];
  afternoon?: string[];
  evening?: string[];
  /** e.g. "Jaipur → Jodhpur · approx. 335 km, 6 hrs by road" */
  travelTime?: string;
  /** Suggested time on site, e.g. "Amer Fort — allow 2.5 to 3 hours" */
  exploreTime?: string;
};

/** A stop on the route-overview rail. */
export type RouteStop = {
  city: string;
  nights: number;
  note: string;
};

/**
 * Interpretive material for a monument.
 * `documented` and `traditional` are kept apart on purpose: the page labels
 * which claims rest on record and which are legend.
 */
export type HeritageSite = {
  id: string;
  name: string;
  location: string;
  built: string;
  dynasty: string;
  unesco?: string;
  photo: Photo;
  background: string;
  architecture: string;
  military: string;
  documented: string[];
  traditional: string[];
  exploreTime: string;
  sources: { label: string; url: string }[];
};

export type PriceTier = {
  id: 'budget' | 'premium' | 'luxury';
  name: string;
  /** Indicative, per person, twin sharing, in INR. */
  pricePerPerson: number;
  hotels: string;
  transport: string;
  includes: string[];
  recommended?: boolean;
};

export type Faq = { question: string; answer: string };

export type TravelStyle = 'Beach' | 'Mountains' | 'Heritage' | 'Honeymoon' | 'Adventure' | 'Island';

export type Package = {
  slug: string;
  destinationSlug: string;
  name: string;
  /** One-line hook used on cards. */
  summary: string;
  /** Two or three sentences used on the detail page. */
  overview: string;
  nights: number;
  days: number;
  /** Per person, INR, twin-sharing. Sample pricing for this demo. */
  pricePerPerson: number;
  /** Optional struck-through reference price, also sample data. */
  compareAtPrice?: number;
  hotelCategory: string;
  bestTime: string;
  styles: TravelStyle[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  cancellationPolicy: string[];
  goodToKnow: string[];
  gallery: Photo[];
  featured?: boolean;

  /* ── Optional editorial extras. Present on flagship packages only; the
        package page renders each section when its data exists. ── */
  /** Longer, essay-style introduction used in place of `overview` when set. */
  intro?: string;
  routeStops?: RouteStop[];
  heritage?: HeritageSite[];
  tiers?: PriceTier[];
  faqs?: Faq[];
  accommodation?: { tier: string; detail: string }[];
  /** Switches the detail page to the warm sandstone heritage treatment. */
  editorial?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  trip: string;
  quote: string;
  rating: number;
};

export type EnquiryInput = {
  name: string;
  email: string;
  phone: string;
  travellers: number;
  travelDate: string;
  packageSlug?: string;
  packageName?: string;
  message?: string;
  /** Collected only for packages that offer tiers. */
  hotelCategory?: string;
  transport?: string;
};

export type StoredEnquiry = EnquiryInput & {
  reference: string;
  createdAt: string;
};
