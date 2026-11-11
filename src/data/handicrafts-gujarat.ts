import type { Package } from '@/lib/types';
import { photos } from './images';
import { COMMON_EXCLUSIONS, COMMON_CANCELLATION, SIGNATURE_GOOD_TO_KNOW } from './shared-policies';

/**
 * Signature journey: Handicrafts of Gujarat.
 *
 * ── Route reasoning ──────────────────────────────────────────────────────
 * Gujarat's crafts are not evenly spread. Patola weaving is in Patan, in the
 * north of the mainland; almost everything else worth the trip — Ajrakh,
 * bandhani, Rogan, the embroidery traditions, lacquer, bell-metal — is in
 * Kutch, 350 km further west. The route therefore collects the mainland crafts
 * on the way out rather than as a separate excursion, and then stops moving:
 *
 *   Ahmedabad 1N → Patan & Modhera (en route) → Bhuj 4N → Ahmedabad 1N
 *
 *   • Patan and Modhera sit almost exactly on the Ahmedabad–Bhuj line, so the
 *     double-ikat workshops and Rani ki Vav cost no detour at all.
 *   • Four nights in Bhuj because the craft villages radiate from it in three
 *     different directions, and a day of driving in each is how you see them
 *     without repacking every morning.
 *   • The Banni villages north of Bhuj are grouped into one day, and Nirona and
 *     Ajrakhpur into another, because they lie on different roads out of town.
 *
 * ── What we do not claim ─────────────────────────────────────────────────
 * Craft workshops are family businesses and small cooperatives, not attractions
 * with opening hours. Visits are arranged in advance where possible and are
 * described as subject to the artisan being at work — because sometimes they
 * are at a wedding, or a fair, or simply finishing an order. No partnership
 * with any workshop, cooperative or museum is claimed, no ticket prices are
 * quoted, and the Calico Museum's booking conditions are its own.
 */

export const handicraftsGujarat: Package = {
  slug: 'handicrafts-gujarat',
  destinationSlug: 'gujarat',
  name: 'Handicrafts of Gujarat – Art, Crafts & Traditions',
  summary: 'Seven nights from Patan’s double-ikat looms into the craft villages of Kutch.',
  overview:
    'Patola weaving at Patan, then four nights in Bhuj working outward to Ajrakhpur, Nirona and the Banni villages — block printing, bandhani, Rogan painting and mirror-work embroidery, watched at the bench.',
  intro:
    'A patola sari takes two weavers the better part of a year, because both the warp and the weft are tie-dyed to the pattern before a single thread is woven. Watching four inches of it happen is the most persuasive argument for Gujarat’s craft tradition anyone has ever made. This route starts there, at Patan, and then moves west into Kutch, where the density of surviving craft is unlike anywhere else in India: Ajrakh block printing on one road out of Bhuj, Rogan painting and copper bells on another, and the embroidery traditions of the Banni grasslands to the north. It is a trip spent largely in workshops and courtyards, talking to people who make things, and it is paced so you can actually buy from them.',
  nights: 7,
  days: 8,
  price: 250000,
  priceBasis: 'package',
  hotelCategory: 'Comfortable hotels in Ahmedabad and Bhuj, with an optional night in a Banni village stay',
  bestTime: 'November to February. March warms quickly and April to June in Kutch is severe.',
  styles: ['Heritage'],
  featured: true,
  signature: true,
  editorial: true,

  keyExperiences: [
    {
      title: 'Patan patola, at the loom',
      detail:
        'Double-ikat weaving where warp and weft are both resist-dyed to the design before weaving. A few inches a day, by two people.',
    },
    {
      title: 'Ajrakh from the dye pits',
      detail:
        'Natural-dye block printing at Ajrakhpur — the resist, the indigo, the madder, and the many washings most descriptions leave out.',
    },
    {
      title: 'Rogan painting at Nirona',
      detail:
        'Castor-oil paint drawn into thread and laid onto cloth freehand. Practised by very few families anywhere in the world.',
    },
    {
      title: 'Banni embroidery, village by village',
      detail:
        'Ahir, Rabari and Jat traditions differ stitch by stitch — seen in the villages where they are worked, not in a shop.',
    },
  ],

  highlights: [
    'Patan — double-ikat patola weaving, and Rani ki Vav, a UNESCO World Heritage stepwell',
    'The Sun Temple at Modhera',
    'Ajrakhpur — natural-dye Ajrakh block printing from resist to final wash',
    'Nirona — Rogan painting, copper bells and lacquer turning, three crafts in one village',
    'Bhujodi — the weaving village on the edge of Bhuj',
    'The Banni villages — mirror-work embroidery and round mud bhunga houses',
    'The White Rann at dusk, in season',
  ],

  routeStops: [
    { city: 'Ahmedabad', nights: 1, note: 'Textile collections and the old city' },
    { city: 'Patan & Modhera', nights: 0, note: 'Patola looms and the stepwell, on the way west' },
    { city: 'Bhuj', nights: 4, note: 'The base for every Kutch craft village' },
    { city: 'Ahmedabad', nights: 2, note: 'Return, the old city walk and departure' },
  ],

  itinerary: [
    {
      day: 1,
      destination: 'Ahmedabad',
      title: 'Arrival, and the textile canon',
      summary: 'Start with the collections, so the workshops later make sense.',
      activities: [],
      morning: ['Arrive Sardar Vallabhbhai Patel International Airport', 'Transfer and hotel check-in'],
      afternoon: [
        'Calico Museum of Textiles, subject to its own advance-booking rules and limited daily places',
        'Alternatively the Gandhi Ashram and the Sabarmati riverfront',
      ],
      evening: ['Old Ahmedabad on foot — the pols, carved timber facades and Sidi Saiyyed’s stone lattice', 'Welcome dinner'],
      exploreTime: 'The Calico Museum admits a small number of visitors by prior arrangement only; we apply well ahead and tell you early if places are not available.',
      stay: 'Ahmedabad',
      meals: 'Dinner',
    },
    {
      day: 2,
      destination: 'Ahmedabad → Patan → Bhuj',
      title: 'Patola, a stepwell, and west into Kutch',
      summary: 'The two mainland stops sit on the road west, so neither costs a detour.',
      activities: [],
      travelTime: 'Ahmedabad → Patan → Bhuj · approx. 450 km across the day, 8 to 9 hrs including both stops',
      morning: [
        'Drive north to Patan',
        'A patola weaving workshop — the tie-dyed warp and weft, and the loom itself',
        'Rani ki Vav, the 11th-century stepwell inscribed by UNESCO in 2014',
      ],
      afternoon: ['Modhera Sun Temple and its stepped tank', 'Continue west towards Kutch'],
      evening: ['Arrive Bhuj and check in'],
      exploreTime: 'Rani ki Vav — allow 1 to 1.5 hours; the sculpture runs seven storeys down. Patola workshop — about an hour.',
      stay: 'Bhuj',
      meals: 'Breakfast',
    },
    {
      day: 3,
      destination: 'Bhuj → Ajrakhpur & Bhujodi',
      title: 'Printing and weaving',
      summary: 'Two villages on the same road out of Bhuj, and two entirely different crafts.',
      activities: [],
      travelTime: 'Bhuj → Ajrakhpur → Bhujodi · under 40 km in total',
      morning: [
        'Ajrakhpur — Ajrakh block printing, built village by village after the 2001 earthquake displaced the craft from Dhamadka',
        'The full sequence where printing is in progress: resist paste, indigo, madder, and the repeated washing',
      ],
      afternoon: [
        'Bhujodi — pit-loom weaving in wool and cotton, shawls and blankets',
        'Time to buy directly from the weavers’ own premises',
      ],
      evening: ['Return to Bhuj'],
      exploreTime: 'Allow 2 hours at Ajrakhpur. Printing is seasonal and washing depends on water — we tell you honestly what stage is running.',
      stay: 'Bhuj',
      meals: 'Breakfast',
    },
    {
      day: 4,
      destination: 'Bhuj → Nirona & Khavda',
      title: 'Three crafts in one village',
      summary: 'Nirona in the morning, then north towards the Rann.',
      activities: [],
      travelTime: 'Bhuj → Nirona → Khavda · approx. 80 km each way on the northern road',
      morning: [
        'Nirona — Rogan painting, where castor-oil paint is drawn into a thread and laid onto cloth freehand',
        'Copper-coated bell making, tuned by hammer and ear',
        'Lacquer turning on a hand lathe',
      ],
      afternoon: ['North towards Khavda and the pottery tradition of the Banni edge', 'The White Rann at dusk, in season'],
      evening: ['Return to Bhuj, or an optional village stay in Banni'],
      exploreTime: 'Nirona takes a full morning if you want all three crafts. Rogan is practised by very few families — allow unhurried time.',
      stay: 'Bhuj',
      meals: 'Breakfast',
    },
    {
      day: 5,
      destination: 'Banni villages',
      title: 'Embroidery, stitch by stitch',
      summary: 'The grassland villages, where the differences between traditions become obvious.',
      activities: [],
      travelTime: 'Bhuj → Banni villages · 60 to 90 km depending on which settlements are visited',
      morning: [
        'Hodka, Ludiya and neighbouring settlements',
        'Ahir, Rabari and Jat embroidery compared in person — different stitches, different mirrors, different rules',
      ],
      afternoon: [
        'Round mud-and-mirror bhunga houses, and why they survived the 2001 earthquake',
        'Craft documentation centres in the Bhuj area, subject to opening',
      ],
      evening: ['Return to Bhuj'],
      exploreTime: 'Village visits are kept small and arranged ahead. Artisans are working, not performing.',
      stay: 'Bhuj',
      meals: 'Breakfast',
    },
    {
      day: 6,
      destination: 'Bhuj',
      title: 'The town itself',
      summary: 'Bhuj’s own palaces and bazaar, and a last unhurried morning for buying.',
      activities: [],
      morning: [
        'Aina Mahal and Prag Mahal — both badly damaged in the 2001 earthquake and partially restored; access varies',
        'The Bhuj bazaar and bandhani tying workshops, where the cloth is knotted before dyeing',
      ],
      afternoon: ['Free time to return to any workshop and buy properly', 'Optional Kutch Museum, India’s oldest museum in the state'],
      evening: ['Last night in Kutch'],
      exploreTime: 'Bandhani tying is extraordinary close up — thousands of individual knots tied by fingernail.',
      stay: 'Bhuj',
      meals: 'Breakfast',
    },
    {
      day: 7,
      destination: 'Bhuj → Ahmedabad',
      title: 'Back east',
      summary: 'The return leg, with the afternoon free in Ahmedabad.',
      activities: [],
      travelTime: 'Bhuj → Ahmedabad · approx. 330 km, 6 to 7 hrs by road, or by train where the schedule suits',
      morning: ['Depart Bhuj'],
      afternoon: ['Arrive Ahmedabad and check in', 'Free time, or the Sarkhej Roza complex'],
      evening: ['Farewell dinner'],
      stay: 'Ahmedabad',
      meals: 'Breakfast, dinner',
    },
    {
      day: 8,
      destination: 'Departure',
      title: 'Onward',
      summary: 'Transfer to the airport.',
      activities: [],
      morning: ['Transfer to Ahmedabad airport', 'Trip ends'],
      meals: 'Breakfast',
    },
  ],

  inclusions: [
    '7 nights’ accommodation in comfortable hotels in Ahmedabad and Bhuj',
    'Daily breakfast, welcome dinner and farewell dinner',
    'Private air-conditioned vehicle for all transfers and village days',
    'An accompanying guide for the full journey, plus local craft interpreters in Kutch',
    'Workshop visits arranged in advance at Patan, Ajrakhpur, Bhujodi, Nirona and the Banni villages',
    'Monument entry at Rani ki Vav, Modhera and the Bhuj palaces',
    'White Rann permit and entry, in season',
  ],

  exclusions: [
    'Craft purchases — budget separately, because you will buy something',
    'Calico Museum entry, which is booked under the museum’s own conditions and cannot be guaranteed',
    'Camera fees where levied at monuments',
    ...COMMON_EXCLUSIONS,
  ],

  cancellationPolicy: COMMON_CANCELLATION,

  goodToKnow: [
    'Craft workshops are family businesses, not attractions with opening hours. We arrange visits in advance, but whether a particular stage of a process is running on the day depends on orders, weather and water.',
    'Ajrakh printing is seasonal and water-dependent. In some months you will see printing but not washing. We would rather tell you that in advance than let you discover it there.',
    'Buy directly from the artisan wherever possible, and expect to pay fairly. The price of a hand-tied bandhani or a true double-ikat patola reflects months of work.',
    'The Calico Museum admits a limited number of visitors by prior arrangement only, under its own rules. We apply early and will tell you as soon as we know whether a place is available.',
    'The White Rann is seasonal — it is under water through the monsoon and takes time to dry. Access requires a permit, which we arrange.',
    'Kutch is hot from March onward and severe from April to June. November to February is the window, and the Rann Utsav period in particular books out early.',
    'Aina Mahal and Prag Mahal were badly damaged in the 2001 Bhuj earthquake. Restoration is ongoing and access to particular rooms changes.',
    ...SIGNATURE_GOOD_TO_KNOW,
  ],

  gallery: [
    photos.gujaratHero,
    photos.gujaratEmbroidery,
    photos.gujaratRogan,
    photos.gujaratPatola,
    photos.gujaratBandhani,
    photos.gujaratRoganArt,
    photos.gujaratBhujodi,
    photos.gujaratMaldhari,
  ],

  faqs: [
    {
      question: 'Will I actually see people working, or just shops?',
      answer:
        'Working, as far as it is in anyone’s power to arrange. Visits are set up in advance with artisans at the bench, and the itinerary is paced in half-days rather than quick stops so there is time to watch a process through. The honest caveat is that these are family workshops — occasionally an artisan is away, or the stage of the process you hoped to see is not running that week. We tell you what is actually happening rather than substitute a showroom and call it the same thing.',
    },
    {
      question: 'Why four nights in Bhuj?',
      answer:
        'Because the craft villages radiate from Bhuj on three different roads — Ajrakhpur and Bhujodi east, Nirona and Khavda north, the Banni villages north-east. Basing in one place and driving out each day means you see them all without repacking every morning.',
    },
    {
      question: 'Is Patan worth the stop?',
      answer:
        'Yes, and it costs almost nothing in driving because Patan sits on the Ahmedabad–Bhuj line. Patola double ikat is among the most technically demanding weaving anywhere — both warp and weft are tie-dyed to the pattern before weaving begins — and Rani ki Vav, a short distance away, is a UNESCO World Heritage stepwell with seven storeys of sculpture.',
    },
    {
      question: 'How much should I budget for buying things?',
      answer:
        'More than you think, and it is deliberately not included in the package. A hand-tied bandhani, a naturally dyed Ajrakh length or a Rogan piece represents weeks or months of work. We do not take any commission from workshops, which is why we are comfortable telling you to buy directly.',
    },
    {
      question: 'Can I see the White Rann?',
      answer:
        'In season, yes, and the permit is included. It is under water during the monsoon and needs time to dry out afterwards, so the window is broadly November to February. If your dates fall outside it we will say so rather than promise a salt flat you cannot stand on.',
    },
    {
      question: 'Is the ₹2,50,000 per person or for the whole package?',
      answer:
        'It is an indicative package price rather than a per-person fare, and it moves with dates, group size and the standard of accommodation. Contact us for detailed pricing and package customisation. Nothing is confirmed until you have a written quote, and no payment is taken on this site.',
    },
    {
      question: 'How much driving is there?',
      answer:
        'One long day at the front — about 450 km from Ahmedabad to Bhuj with the Patan and Modhera stops built in — and one long day back at the end. In between, the Kutch village days are 40 to 90 km of relaxed driving each.',
    },
  ],
};
