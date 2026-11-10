import type { Destination } from '@/lib/types';
import { photos } from './images';

/**
 * Destination catalogue.
 *
 * `startingPrice` is kept in sync with the cheapest package for the destination
 * by `lib/catalogue.ts` at read time, so adding a cheaper package here needs no
 * manual edit. All pricing is sample data for this demo.
 */
export const destinations: Destination[] = [
  {
    slug: 'andaman',
    name: 'Andaman & Nicobar',
    region: 'Bay of Bengal, India',
    country: 'India',
    tagline: 'Coral shallows and empty white sand',
    blurb:
      'Slow island days between Port Blair, Havelock and Neil — reef snorkelling in the morning, nothing at all in the afternoon.',
    startingPrice: 24999,
    bestMonths: 'October – May',
    hero: photos.andamanHero,
    gallery: [photos.andaman2, photos.andaman3, photos.andaman4, photos.andaman5, photos.andaman6, photos.andaman7],
    keywords: ['andaman', 'nicobar', 'havelock', 'neil island', 'port blair', 'radhanagar', 'island', 'beach', 'scuba', 'snorkelling'],
  },
  {
    slug: 'kashmir',
    name: 'Kashmir',
    region: 'Himalayas, India',
    country: 'India',
    tagline: 'Shikaras, saffron valleys and snow',
    blurb:
      'Dal Lake at first light, meadows above Pahalgam, and the gondola up Apharwat when the whole range turns white.',
    startingPrice: 27499,
    bestMonths: 'March – October, December for snow',
    hero: photos.kashmirHero,
    gallery: [photos.kashmir2, photos.kashmir3, photos.kashmir4, photos.kashmir5, photos.kashmir6],
    keywords: ['kashmir', 'srinagar', 'dal lake', 'gulmarg', 'pahalgam', 'shikara', 'houseboat', 'snow', 'mountains', 'tulip'],
  },
  {
    slug: 'goa',
    name: 'Goa',
    region: 'Konkan Coast, India',
    country: 'India',
    tagline: 'Long beaches and Portuguese quarters',
    blurb:
      'The quieter south for sunsets and seafood, the old quarter for laterite churches, and as little of a schedule as you like.',
    startingPrice: 14999,
    bestMonths: 'November – February',
    hero: photos.goaHero,
    gallery: [photos.goa2, photos.goa3, photos.goa4, photos.goa5, photos.goa6],
    keywords: ['goa', 'palolem', 'baga', 'beach', 'old goa', 'dudhsagar', 'konkan', 'shack', 'party', 'weekend'],
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    region: 'Malabar Coast, India',
    country: 'India',
    tagline: 'Backwaters, tea country, coast',
    blurb:
      'A houseboat night on the Alleppey canals, tea hills above Munnar, and an evening of Kathakali in Fort Kochi.',
    startingPrice: 13999,
    bestMonths: 'September – March',
    hero: photos.keralaHero,
    gallery: [photos.kerala2, photos.kerala3, photos.kerala4, photos.kerala5, photos.kerala6],
    keywords: ['kerala', 'alleppey', 'alappuzha', 'backwaters', 'houseboat', 'munnar', 'tea', 'kochi', 'varkala', 'ayurveda'],
  },
  {
    slug: 'himachal',
    name: 'Himachal Pradesh',
    region: 'Western Himalayas, India',
    country: 'India',
    tagline: 'Deodar valleys and high passes',
    blurb:
      'Kullu valley mornings, the meadow at Solang, and — if you have the days — the cold desert road into Spiti.',
    startingPrice: 18999,
    bestMonths: 'March – June, September – November',
    hero: photos.himachalHero,
    gallery: [photos.himachal2, photos.himachal3, photos.himachal4, photos.himachal5, photos.himachal6],
    keywords: ['himachal', 'manali', 'solang', 'spiti', 'kullu', 'mountains', 'snow', 'trek', 'adventure', 'monastery'],
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    region: 'North-West India',
    country: 'India',
    tagline: 'Forts, lake palaces, dunes',
    blurb:
      'Jaipur’s pink streets, the blue city below Mehrangarh, and a night on the Sam dunes outside Jaisalmer.',
    startingPrice: 11999,
    bestMonths: 'October – March',
    hero: photos.rajasthanHero,
    gallery: [photos.rajasthan2, photos.rajasthan3, photos.rajasthan4, photos.rajasthan5, photos.rajasthan6],
    keywords: ['rajasthan', 'jaipur', 'jodhpur', 'jaisalmer', 'udaipur', 'fort', 'palace', 'desert', 'heritage', 'camel'],
  },
  {
    slug: 'bali',
    name: 'Bali',
    region: 'Indonesia',
    country: 'International',
    tagline: 'Rice terraces and cliff temples',
    blurb:
      'Ubud’s terraced green, the lake temple at Bratan, and sunset on the Uluwatu cliffs with the kecak drums going.',
    startingPrice: 58999,
    bestMonths: 'April – October',
    hero: photos.baliHero,
    gallery: [photos.bali2, photos.bali3, photos.bali4, photos.bali5, photos.bali6],
    keywords: ['bali', 'indonesia', 'ubud', 'tegallalang', 'uluwatu', 'kuta', 'rice terrace', 'temple', 'international', 'honeymoon'],
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    region: 'Indian Ocean',
    country: 'International',
    tagline: 'Overwater villas on a quiet lagoon',
    blurb:
      'One island, one lagoon, and very little else to do — which is the entire point of going.',
    startingPrice: 74999,
    bestMonths: 'November – April',
    hero: photos.maldivesHero,
    gallery: [photos.maldives2, photos.maldives3, photos.maldives4, photos.maldives5, photos.maldives6],
    keywords: ['maldives', 'overwater', 'water villa', 'atoll', 'lagoon', 'island', 'honeymoon', 'luxury', 'international', 'reef'],
  },
];

export const destinationBySlug = new Map(destinations.map((d) => [d.slug, d]));
