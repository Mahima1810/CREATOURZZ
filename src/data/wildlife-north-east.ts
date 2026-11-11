import type { Package } from '@/lib/types';
import { photos } from './images';
import { COMMON_EXCLUSIONS, COMMON_CANCELLATION, SIGNATURE_GOOD_TO_KNOW } from './shared-policies';

/**
 * Signature journey: Wildlife North East.
 *
 * ── Route reasoning ──────────────────────────────────────────────────────
 * The obvious mistake here is geographic. Manas sits WEST of Guwahati, near the
 * Bhutan border; Kaziranga and the Hollongapar gibbon forest sit EAST, up the
 * Brahmaputra valley. Itineraries that list "Kaziranga, Manas, Majuli" in that
 * order quietly contain a 430 km backtrack. This route runs west first, then
 * turns east and keeps going:
 *
 *   Guwahati 1N → Manas 2N → Kaziranga 3N → Majuli 1N → Jorhat 1N
 *
 *   • Guwahati → Manas is about 150 km, so the first park is reached on an
 *     easy half-day rather than a wasted one.
 *   • Manas → Kaziranga is roughly 290 km and the longest leg of the trip; it
 *     is taken once, in one direction, and never repeated.
 *   • Kaziranga gets three nights because it has four separate safari ranges
 *     and one night buys you one of them.
 *   • Hollongapar is 100 km past Kaziranga on the way to Jorhat airport, so the
 *     gibbon trek costs no extra driving at all.
 *
 * ── Sourcing and honesty ─────────────────────────────────────────────────
 * Kaziranga and Manas are UNESCO World Heritage sites. Safari permits, range
 * allocation and vehicle entry are controlled by the Assam Forest Department,
 * not by us — ranges are allocated on the day and are described here as
 * requested, never as guaranteed. Wildlife sightings are never promised. Park
 * opening is seasonal and the monsoon closure is real. No lodge partnerships,
 * ticket prices or transport guarantees are claimed.
 */

export const wildlifeNorthEast: Package = {
  slug: 'wildlife-north-east',
  destinationSlug: 'north-east',
  name: 'Wildlife North East – Forests, Biodiversity & Nature',
  summary: 'Eight nights up the Brahmaputra valley — Manas, Kaziranga and the only ape in India.',
  overview:
    'Two UNESCO parks and a gibbon forest, sequenced west to east so the long transfer happens once. Three nights at Kaziranga because it has four ranges, and a gibbon trek that costs no extra driving.',
  intro:
    'Kaziranga holds the largest population of greater one-horned rhinoceros anywhere, and most visitors see it through a single morning safari in a single range before moving on. That is a shame, because the park is four quite different landscapes — the central grassland, the western wetlands, the eastern birding country and the forested Panbari block — and a night buys you one of them. This route gives Kaziranga three, puts Manas at the front so the driving runs in one direction, and finishes in the Hollongapar forest with the western hoolock gibbon, the only ape native to India. What it will not do is promise you a tiger, or a rhino, or anything else with a heartbeat.',
  nights: 8,
  days: 9,
  price: 250000,
  priceBasis: 'package',
  hotelCategory: 'Forest lodges and resorts near the park gates',
  bestTime: 'Mid-November to April. Kaziranga and Manas usually close to visitors through the monsoon, roughly May to October.',
  styles: ['Adventure', 'Mountains'],
  featured: true,
  signature: true,
  editorial: true,

  keyExperiences: [
    {
      title: 'Three nights at Kaziranga, not one',
      detail:
        'Four safari ranges — Kohora, Bagori, Agoratoli and Burapahar — each a different habitat. One night only ever shows you one of them.',
    },
    {
      title: 'The only ape in India',
      detail:
        'Hollongapar Gibbon Sanctuary holds the western hoolock gibbon, tracked on foot through a forest patch surrounded by tea.',
    },
    {
      title: 'Two UNESCO World Heritage parks',
      detail:
        'Manas on the Bhutan border and Kaziranga on the Brahmaputra, both inscribed for their natural value.',
    },
    {
      title: 'Majuli, a river island',
      detail:
        'The Brahmaputra’s great inhabited island, reached by ferry — satra monasteries, wetland birding and mask-making.',
    },
  ],

  highlights: [
    'Greater one-horned rhinoceros in the Kaziranga grasslands',
    'Wild Asian elephant herds moving through elephant grass',
    'Western hoolock gibbon at Hollongapar, India’s only ape',
    'Manas National Park, on the Bhutan frontier',
    'Wild water buffalo and swamp deer — both strongholds here',
    'Ferry to Majuli, the Brahmaputra river island',
  ],

  routeStops: [
    { city: 'Guwahati', nights: 1, note: 'Brahmaputra sunset and the Deepor Beel wetland' },
    { city: 'Manas', nights: 2, note: 'UNESCO park on the Bhutan border, river and forest' },
    { city: 'Kaziranga', nights: 3, note: 'Four ranges, rhino grassland, the heart of the trip' },
    { city: 'Majuli', nights: 1, note: 'River island, satras and wetland birds' },
    { city: 'Jorhat', nights: 1, note: 'Hollongapar gibbon forest and the flight home' },
  ],

  itinerary: [
    {
      day: 1,
      destination: 'Guwahati',
      title: 'Arrival on the Brahmaputra',
      summary: 'Land, settle, and get a first look at the river everything here depends on.',
      activities: [],
      morning: ['Arrive Lokpriya Gopinath Bordoloi International Airport', 'Transfer and hotel check-in'],
      afternoon: ['Deepor Beel, the freshwater wetland on the city edge — good first birding', 'Trip and safari briefing'],
      evening: ['Sunset on the Brahmaputra', 'Welcome dinner'],
      exploreTime: 'Deepor Beel — 2 hours in the late afternoon, when the birds come in.',
      stay: 'Guwahati',
      meals: 'Dinner',
    },
    {
      day: 2,
      destination: 'Guwahati → Manas',
      title: 'West to the Bhutan border',
      summary: 'A short transfer, then an afternoon already inside the park.',
      activities: [],
      travelTime: 'Guwahati → Manas · approx. 150 km, 4 hrs by road',
      morning: ['Drive west through Barpeta district'],
      afternoon: ['Arrive and check in near Bansbari', 'Afternoon jeep safari in the Bansbari range, permits allowing'],
      evening: ['Forest lodge. The Bhutan hills close off the northern horizon'],
      exploreTime: 'Afternoon safari — about 3 hours.',
      stay: 'Manas',
      meals: 'Breakfast, dinner',
    },
    {
      day: 3,
      destination: 'Manas',
      title: 'A full day at Manas',
      summary: 'Morning safari, then the Manas river by boat.',
      activities: [],
      morning: ['Early jeep safari — grassland and riverine forest', 'Manas is quieter than Kaziranga and worked slowly'],
      afternoon: ['The Manas river', 'Optional river rafting on the Manas at own cost, water levels permitting'],
      evening: ['Return to the lodge'],
      exploreTime: 'Morning safari — 3 to 3.5 hours. Start is around first light.',
      stay: 'Manas',
      meals: 'Breakfast, dinner',
    },
    {
      day: 4,
      destination: 'Manas → Kaziranga',
      title: 'The long leg, taken once',
      summary: 'The only real driving day. It happens here, and it never repeats.',
      activities: [],
      travelTime: 'Manas → Kaziranga · approx. 290 km, 6 to 7 hrs by road',
      morning: ['Early departure after breakfast', 'East along the north bank, then across to the Kohora side'],
      afternoon: ['Arrive Kaziranga and check in', 'Rest, or the Kaziranga orientation centre'],
      evening: ['Briefing on tomorrow’s ranges and safari timings'],
      stay: 'Kaziranga',
      meals: 'Breakfast, dinner',
    },
    {
      day: 5,
      destination: 'Kaziranga',
      title: 'Central and western ranges',
      summary: 'Kohora in the morning, Bagori in the afternoon — two habitats in a day.',
      activities: [],
      morning: ['Jeep safari in the Kohora (central) range — open grassland and the best rhino density in the park'],
      afternoon: ['Jeep safari in the Bagori (western) range — wetter, with swamp deer and strong elephant movement'],
      evening: ['Lodge. Species list and plan for the eastern range'],
      exploreTime: 'Each safari runs 3 to 3.5 hours. Mornings are cold on an open jeep in winter — bring layers.',
      stay: 'Kaziranga',
      meals: 'Breakfast, dinner',
    },
    {
      day: 6,
      destination: 'Kaziranga',
      title: 'The eastern range, for birds',
      summary: 'Agoratoli is the quiet one, and the best of the four for birdlife.',
      activities: [],
      morning: ['Jeep safari in the Agoratoli (eastern) range — beels, waterfowl, raptors and the Brahmaputra channels'],
      afternoon: ['Free, or a visit to a tea estate on the park fringe', 'Optional Burapahar range safari at own cost'],
      evening: ['Last night at Kaziranga'],
      exploreTime: 'Agoratoli — 3.5 hours, and worth the earlier start. Bring binoculars; this is the birding morning.',
      stay: 'Kaziranga',
      meals: 'Breakfast, dinner',
    },
    {
      day: 7,
      destination: 'Kaziranga → Majuli',
      title: 'Out to the river island',
      summary: 'Drive to Nimati Ghat and cross the Brahmaputra by ferry.',
      activities: [],
      travelTime: 'Kaziranga → Nimati Ghat · approx. 130 km, 3.5 hrs, then a ferry crossing of about 1 hour',
      morning: ['Drive east to Jorhat and on to Nimati Ghat'],
      afternoon: ['Ferry to Majuli', 'Satra monasteries — Kamalabari and Auniati — and the mask-makers at Samaguri'],
      evening: ['Wetland birding on the island at dusk'],
      exploreTime: 'Ferries run to a published but weather-dependent schedule; the crossing is part of the experience.',
      stay: 'Majuli',
      meals: 'Breakfast, dinner',
    },
    {
      day: 8,
      destination: 'Majuli → Jorhat',
      title: 'Gibbons at Hollongapar',
      summary: 'Back across the river, then on foot after India’s only ape.',
      activities: [],
      travelTime: 'Majuli → Jorhat by ferry, then Jorhat → Hollongapar · approx. 25 km',
      morning: ['Morning ferry back to Nimati Ghat', 'Drive to Hollongapar Gibbon Sanctuary'],
      afternoon: [
        'Guided forest walk tracking western hoolock gibbon — found by call, then followed on foot',
        'Capped langur, stump-tailed macaque and the slow loris also occur here',
      ],
      evening: ['Check in at Jorhat', 'Farewell dinner'],
      exploreTime: 'Gibbon tracking — 2 to 3 hours on foot. Flat ground, but leeches after rain.',
      stay: 'Jorhat',
      meals: 'Breakfast, dinner',
    },
    {
      day: 9,
      destination: 'Departure',
      title: 'Onward',
      summary: 'Fly out of Jorhat, or transfer to Guwahati.',
      activities: [],
      morning: ['Transfer to Jorhat airport', 'Trip ends'],
      meals: 'Breakfast',
    },
  ],

  inclusions: [
    '8 nights’ accommodation in forest lodges and resorts near the park gates',
    'Daily breakfast and dinner throughout',
    'Private air-conditioned vehicle for all road transfers',
    'Six scheduled jeep safaris — two at Manas, four across the Kaziranga ranges',
    'Park entry, vehicle entry and forest-department guide fees for the scheduled safaris',
    'Hollongapar Gibbon Sanctuary entry and a guided tracking walk',
    'Majuli ferry crossings and island transport',
    'A naturalist accompanying the group for the full journey',
  ],

  exclusions: [
    'Still-camera and video fees levied by the forest department, where applicable',
    'Elephant-back safaris, additional range safaris and river rafting',
    'Binoculars — bring your own, or ask us to arrange a pair',
    ...COMMON_EXCLUSIONS,
  ],

  cancellationPolicy: COMMON_CANCELLATION,

  goodToKnow: [
    'Wildlife sightings are never guaranteed. Kaziranga has an exceptional density of rhino and you are very likely to see them; tigers are present but rarely seen. Anyone promising you a sighting is selling something.',
    'Safari ranges and jeep slots are allocated by the Assam Forest Department on the day. We request the ranges in this itinerary and they are usually granted, but allocation is not ours to control.',
    'Kaziranga and Manas close to visitors through the monsoon, roughly May to October, when the Brahmaputra floods the park. Exact opening and closing dates are announced each season by the forest department.',
    'Winter mornings on an open jeep are genuinely cold — a windproof layer, gloves and a hat make the difference between a good safari and a long one.',
    'Wear muted colours on safari and on the gibbon walk. Leeches are common at Hollongapar after rain; socks and repellent help.',
    'The Majuli ferry runs to a schedule that weather can overturn. We build slack into that day rather than cut it fine.',
    'Drone use is prohibited in and around the national parks.',
    ...SIGNATURE_GOOD_TO_KNOW,
  ],

  gallery: [
    photos.neHero,
    photos.neElephants,
    photos.neGibbon,
    photos.neWetland,
    photos.neBuffalo,
    photos.neManas,
    photos.neNamdapha,
    photos.neRootBridge,
  ],

  faqs: [
    {
      question: 'Will I definitely see a rhinoceros?',
      answer:
        'Very probably, but we will not promise it. Kaziranga holds the largest population of greater one-horned rhinoceros in the world and the central range in particular has a high density, so across four safaris the odds are strongly in your favour. That is a probability, not a guarantee, and no honest operator describes it as one.',
    },
    {
      question: 'Why three nights at Kaziranga?',
      answer:
        'Because the park has four safari ranges and they are genuinely different places. Kohora is open grassland, Bagori is wetter and better for swamp deer and elephant, Agoratoli is the birding range, and Burapahar is forested. A single night buys you one morning in one range, which is how most people end up thinking Kaziranga is smaller than it is.',
    },
    {
      question: 'Why does the route go west before it goes east?',
      answer:
        'Geography. Manas is about 150 km west of Guwahati near the Bhutan border; Kaziranga and Jorhat are east, up the Brahmaputra valley. Doing Kaziranga first and then Manas means driving the same 290 km twice. This way the long transfer happens once.',
    },
    {
      question: 'How physically demanding is it?',
      answer:
        'Not very. Safaris are in jeeps, and the only walking is the gibbon tracking at Hollongapar — two to three hours on flat forest paths. The demands are early starts, cold open-vehicle mornings in winter, and one long driving day between the parks.',
    },
    {
      question: 'Can I go during the monsoon?',
      answer:
        'No. Kaziranga and Manas close to visitors through the monsoon when the Brahmaputra floods — which is also what makes the grassland what it is. The season runs roughly mid-November to April; exact dates are set by the forest department each year.',
    },
    {
      question: 'What camera gear is worth bringing?',
      answer:
        'A telephoto of 300mm or longer earns its weight, and binoculars matter more than most people expect, especially at Agoratoli and Hollongapar. The forest department levies camera fees separately at some gates, which are not included.',
    },
    {
      question: 'Is the ₹2,50,000 per person or for the trip?',
      answer:
        'It is an indicative package price, not a per-person fare, and it varies with dates, group size and lodge standard. Contact us for detailed pricing and package customisation. Nothing is confirmed until you have a written quote, and no payment is taken on this site.',
    },
  ],
};
