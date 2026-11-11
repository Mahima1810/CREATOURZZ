import type { Package } from '@/lib/types';
import { photos } from './images';
import { COMMON_EXCLUSIONS, COMMON_CANCELLATION, SIGNATURE_GOOD_TO_KNOW } from './shared-policies';

/**
 * Signature journey: Tribal Odisha.
 *
 * ── Route reasoning ──────────────────────────────────────────────────────
 * Odisha splits cleanly into two halves that are 500 km apart, and most
 * itineraries pretend otherwise. The coastal belt (Bhubaneswar, Puri, Konark,
 * Raghurajpur) holds the classical temple and craft tradition; the southern
 * highlands (Koraput, Rayagada, Malkangiri) hold the Adivasi communities. This
 * route does the coast first, then moves south once, and stays there — rather
 * than bouncing back and forth across the state.
 *
 *   Bhubaneswar 2N → Puri 2N → Jeypore / Koraput 2N → Rayagada 1N → Visakhapatnam exit
 *
 * ── The weekly markets drive the calendar ────────────────────────────────
 * The haats are the single most important fixture here, and they are
 * day-specific, not daily. The ones this route is built around are generally
 * held as follows:
 *
 *   • Chatikona (Dongria Kondh)      — Wednesday
 *   • Onukudelli (Bonda, Gadaba)     — Thursday
 *   • Kunduli (Paroja, Mali)         — Friday
 *
 * That means departure dates are not arbitrary: the trip is sequenced backwards
 * from the market days, which is why the southern leg sits where it does.
 * Market days do shift for festivals, harvest and local administration, so they
 * are confirmed close to travel rather than promised here.
 *
 * ── How we visit, and why it is written down ─────────────────────────────
 * Tribal tourism in Odisha has a documented history of going badly — intrusive
 * photography, busloads at village markets, and people treated as scenery. The
 * `goodToKnow` list below states the rules this trip runs under instead of
 * leaving them unsaid. They are constraints on the traveller, deliberately.
 *
 * ── Sourcing ─────────────────────────────────────────────────────────────
 * No hotel partnerships, ticket prices, transport guarantees or community
 * endorsements are claimed. Market days, permit requirements and monument
 * access are described as they are generally understood and flagged for
 * confirmation. Pricing is indicative throughout.
 */

export const tribalOdisha: Package = {
  slug: 'tribal-odisha',
  destinationSlug: 'odisha',
  name: 'Tribal Odisha – Culture, Communities & Heritage',
  summary: 'Nine days from the temple coast into the southern highlands, timed around the weekly hill markets.',
  overview:
    'Raghurajpur and Konark on the coast, then south into Koraput and Rayagada for the Adivasi weekly markets — a route sequenced backwards from the market days, because those are the one thing that cannot be moved.',
  intro:
    'Odisha is two states wearing one name. The coast holds the classical tradition — Konark, the Jagannath culture of Puri, and Raghurajpur, where an entire village paints for a living. Five hundred kilometres south, in the hills of Koraput and Rayagada, live communities whose languages, markets and crafts predate all of it. Most itineraries try to do both as an afterthought to each other. This one does the coast properly, moves south once, and then stays long enough that a weekly market is something you arrive early for rather than drive past. It is also a trip with rules attached, which you will find written out rather than implied: how we photograph, what we buy, and where we do not go.',
  nights: 8,
  days: 9,
  price: 250000,
  priceBasis: 'package',
  hotelCategory: 'Comfortable hotels on the coast; simple, clean guesthouses in the highlands',
  bestTime: 'October to March. The southern districts are cool and dry; avoid the June–September monsoon, when hill roads wash out.',
  styles: ['Heritage'],
  featured: true,
  signature: true,
  editorial: true,

  keyExperiences: [
    {
      title: 'Weekly markets, arrived at properly',
      detail:
        'Chatikona, Onukudelli and Kunduli are day-specific haats. We build the dates around them and get there at opening, not at coach time.',
    },
    {
      title: 'Raghurajpur, a village that paints',
      detail:
        'A heritage crafts village where pattachitra, palm-leaf etching and Gotipua dance are all still practised on one street.',
    },
    {
      title: 'Four distinct cultural regions',
      detail:
        'The Jagannath coast, the Buddhist and Jain rock-cut sites near Bhubaneswar, the Koraput highlands and the Niyamgiri foothills.',
    },
    {
      title: 'A stated code of conduct',
      detail:
        'Photography, purchasing and village access rules are agreed before you travel — and we follow what communities ask on the day.',
    },
  ],

  highlights: [
    'Konark Sun Temple, the 13th-century chariot in stone',
    'Raghurajpur — pattachitra, palm-leaf etching and the Gotipua tradition',
    'A Dongria Kondh or Bonda weekly market, reached at opening',
    'Saura wall painting (idital) in the Rayagada villages',
    'Chilika Lake, Asia’s largest brackish lagoon, and its Irrawaddy dolphins',
    'The Odisha State Tribal Museum, which frames everything that follows',
  ],

  routeStops: [
    { city: 'Bhubaneswar', nights: 2, note: 'Tribal and crafts museums, Udayagiri caves, the temple city' },
    { city: 'Puri', nights: 2, note: 'Raghurajpur crafts village, Konark, the Chilika shoreline' },
    { city: 'Jeypore / Koraput', nights: 3, note: 'The highland markets, Kondh and Bonda country' },
    { city: 'Rayagada', nights: 1, note: 'Saura wall painting and the Niyamgiri foothills' },
  ],

  itinerary: [
    {
      day: 1,
      destination: 'Bhubaneswar',
      title: 'Arrival, and the frame for the whole trip',
      summary: 'Start at the museums, so the rest of the journey has context rather than novelty.',
      activities: [],
      morning: ['Arrive Biju Patnaik International Airport', 'Transfer and hotel check-in'],
      afternoon: [
        'Odisha State Tribal Museum — the 62 communities of the state, their housing, tools and dress',
        'Trip briefing, including the photography and village-conduct guidelines',
      ],
      evening: ['Kalabhoomi, the Odisha Crafts Museum, if time allows', 'Welcome dinner'],
      exploreTime: 'Tribal Museum — allow 2 hours. It is the single most useful 2 hours of the trip.',
      stay: 'Bhubaneswar',
      meals: 'Dinner',
    },
    {
      day: 2,
      destination: 'Bhubaneswar',
      title: 'Rock-cut caves and the temple city',
      summary: 'Jain caves, Ashokan edicts and the Kalinga temple style in one day.',
      activities: [],
      morning: [
        'Udayagiri and Khandagiri — rock-cut caves carved for Jain ascetics under Kharavela',
        'Dhauli, where Ashoka’s rock edicts sit above the Daya river',
      ],
      afternoon: [
        'Mukteshwar and Rajarani temples, the clearest examples of the Kalinga idiom',
        'Lingaraj temple from the viewing platform — the inner complex is open to Hindus only',
      ],
      evening: ['Free time, or the Ekamra Haat craft market at own cost'],
      exploreTime: 'Udayagiri — about 1.5 hours. The climb is short but uneven underfoot.',
      stay: 'Bhubaneswar',
      meals: 'Breakfast',
    },
    {
      day: 3,
      destination: 'Bhubaneswar → Puri',
      title: 'Konark, and a village that paints',
      summary: 'The Sun Temple in the morning light, then the craft street at Raghurajpur.',
      activities: [],
      travelTime: 'Bhubaneswar → Konark → Puri · approx. 100 km in total, 3 hrs driving across the day',
      morning: [
        'Drive to Konark along the coastal road',
        'Konark Sun Temple with a guide — the chariot wheels, the plinth friezes, the surviving jagamohana',
      ],
      afternoon: [
        'Raghurajpur heritage crafts village — pattachitra painting, palm-leaf etching, papier-mâché masks',
        'Watch a Gotipua rehearsal if one is running; it is a village practice, not a scheduled show',
      ],
      evening: ['Continue to Puri and check in', 'Walk on the beach at dusk'],
      exploreTime: 'Konark — allow 2 hours with a guide. Raghurajpur — 1.5 to 2 hours, unhurried.',
      stay: 'Puri',
      meals: 'Breakfast',
    },
    {
      day: 4,
      destination: 'Puri & Chilika',
      title: 'The lagoon',
      summary: 'Out onto Chilika early, back for the Jagannath quarter in the afternoon.',
      activities: [],
      morning: [
        'Early drive to Satapada on Chilika Lake',
        'Boat onto the lagoon — Irrawaddy dolphins are resident here, though sightings are never guaranteed',
      ],
      afternoon: [
        'Return to Puri',
        'The streets around the Jagannath temple, and the appliqué workshops at Pipili on the way',
      ],
      evening: ['Free. Overnight train or early drive preparation for the southern leg'],
      exploreTime: 'Chilika boat — 2 to 2.5 hours on the water. Go early; the wind picks up by late morning.',
      stay: 'Puri',
      meals: 'Breakfast',
    },
    {
      day: 5,
      destination: 'Puri → Jeypore',
      title: 'South, into the highlands',
      summary: 'The long move. It is a travel day and the itinerary does not pretend otherwise.',
      activities: [],
      travelTime: 'Puri → Jeypore · approx. 500 km. Overnight train to Koraput, or a full day by road.',
      morning: ['Depart the coast', 'Overnight train from Puri or Bhubaneswar where the schedule suits'],
      afternoon: ['Travel. The landscape turns from paddy to sal forest and hills'],
      evening: ['Arrive Jeypore and check in', 'Briefing on tomorrow’s market and the conduct guidelines'],
      stay: 'Jeypore',
      meals: 'Breakfast',
    },
    {
      day: 6,
      destination: 'Koraput',
      title: 'A weekly market',
      summary: 'The fixture the whole trip is scheduled around.',
      activities: [],
      morning: [
        'Early start for the weekly haat — Onukudelli, Kunduli or Chatikona depending on your travel dates',
        'Two to three hours at the market, arriving as it opens and before any coaches',
      ],
      afternoon: [
        'Koraput town and the Deomali foothills',
        'Local weaving and Dhokra metal-casting workshops where artisans are working and willing',
      ],
      evening: ['Return to Jeypore'],
      exploreTime: 'Markets are busiest from about 8am to 11am. Photography is restricted — see the notes below.',
      travelTime: 'Jeypore → market site · 60 to 120 km depending on which haat falls on your dates',
      stay: 'Jeypore',
      meals: 'Breakfast',
    },
    {
      day: 7,
      destination: 'Koraput → Rayagada',
      title: 'Kondh country',
      summary: 'Hill villages, and the move east to Rayagada.',
      activities: [],
      travelTime: 'Jeypore → Rayagada · approx. 160 km, 4 hrs on hill roads',
      morning: ['Drive east through the Eastern Ghats', 'Kutia Kondh settlements where a visit has been agreed in advance'],
      afternoon: ['Continue to Rayagada', 'Check in and rest'],
      evening: ['Free'],
      stay: 'Rayagada',
      meals: 'Breakfast',
    },
    {
      day: 8,
      destination: 'Rayagada',
      title: 'Saura wall painting and the Niyamgiri foothills',
      summary: 'The idital tradition, painted on house walls rather than sold in galleries.',
      activities: [],
      morning: [
        'Lanjia Saura villages — idital wall paintings made for ritual occasions, not for sale',
        'Time with artists who now also paint on paper and cloth, which is what you can actually buy',
      ],
      afternoon: ['The Niyamgiri foothills', 'Transfer towards Visakhapatnam, or back to Rayagada station'],
      evening: ['Overnight train, or a night in Visakhapatnam before flying'],
      exploreTime: 'Village visits run 1 to 2 hours and are kept small — six travellers maximum at a time.',
      stay: 'Rayagada or in transit',
      meals: 'Breakfast',
    },
    {
      day: 9,
      destination: 'Departure',
      title: 'Onward',
      summary: 'Fly from Visakhapatnam or Bhubaneswar.',
      activities: [],
      morning: ['Arrive the departure city', 'Transfer to the airport'],
      afternoon: ['Trip ends'],
      meals: 'Breakfast where the schedule allows',
    },
  ],

  inclusions: [
    '8 nights’ accommodation — comfortable hotels on the coast, clean and simple guesthouses in the highlands',
    'Daily breakfast, and dinner on the first night',
    'Private air-conditioned vehicle for all road transfers and sightseeing',
    'Reserved rail tickets where the itinerary uses an overnight train',
    'An accompanying guide for the full journey, plus local interpreters in the highland districts',
    'Monument entry at Konark, Udayagiri, Khandagiri and the Bhubaneswar museums',
    'Chilika lagoon boat',
    'A written conduct briefing before departure, covering photography and village access',
  ],

  exclusions: [
    'Camera and video fees at monuments and markets, where levied',
    'Purchases from artisans and market traders',
    ...COMMON_EXCLUSIONS,
  ],

  cancellationPolicy: COMMON_CANCELLATION,

  goodToKnow: [
    'Weekly markets are day-specific — Chatikona is generally Wednesday, Onukudelli Thursday and Kunduli Friday. Dates are built around them, and confirmed close to travel because they can shift for festivals and harvest.',
    'Photography at tribal markets and in villages is restricted and sometimes refused outright. We ask first, every time, and we accept no as the answer. Long lenses pointed at people from a distance are not acceptable on this trip.',
    'Village visits are kept to small groups and arranged in advance with the community, not dropped in on.',
    'Buy directly from the artisan or the trader rather than through an intermediary, and pay the asking price. Haggling over a few rupees at a subsistence market is not a good look.',
    'Highland roads are slow and winding. The distances on this itinerary are honest; the hours are the reason the route moves south only once.',
    'Some districts may require permissions depending on current administration rules. Where a permit is needed we arrange it, and we will tell you if an area is closed rather than substitute quietly.',
    'Guesthouses in Koraput and Rayagada are clean and simple. They are not resorts, and the itinerary is better for it.',
    ...SIGNATURE_GOOD_TO_KNOW,
  ],

  gallery: [
    photos.odishaHero,
    photos.odishaSaura,
    photos.odishaPattachitra,
    photos.odishaMarket,
    photos.odishaArtisan,
    photos.odishaSantal,
    photos.odishaKonark,
    photos.odishaChilika,
    photos.odishaKondhHouse,
  ],

  faqs: [
    {
      question: 'Is it ethical to visit tribal communities at all?',
      answer:
        'It can be, and it can very easily not be. The difference is consent, scale and money. This trip visits communities that have agreed to receive visitors, in groups small enough to be a conversation rather than an audience, and it buys directly from artisans. Weekly markets are public spaces where people are working — we go as customers, not spectators. If a community asks us not to come, or asks us to stop photographing, that settles it. If any of that sounds restrictive, this is probably not the right trip.',
    },
    {
      question: 'Why do the departure dates look inflexible?',
      answer:
        'Because the markets are. Chatikona, Onukudelli and Kunduli each run one day a week, and a tribal Odisha itinerary that misses all three has missed the point. The southern leg is positioned so that at least one major haat falls inside it, which constrains when the trip can start.',
    },
    {
      question: 'Can I photograph people?',
      answer:
        'Ask first, through your guide or interpreter, and accept the answer. Some communities permit it freely, some charge a fee, some refuse. All three are reasonable. Market committees in parts of Koraput have restricted photography specifically because of past visitor behaviour, and those restrictions are enforced.',
    },
    {
      question: 'How difficult is the travelling?',
      answer:
        'The coast is easy. The southern leg involves a 500 km repositioning — usually taken as an overnight train — and then hill roads where 160 km takes four hours. Nothing is strenuous on foot, but there are long vehicle days and early starts for the markets.',
    },
    {
      question: 'What is the accommodation actually like?',
      answer:
        'Good, comfortable hotels in Bhubaneswar and Puri. In Jeypore and Rayagada, clean and simple guesthouses with hot water and reliable power — the best available in those districts rather than anything luxurious. We name the actual properties in your written quote.',
    },
    {
      question: 'Is the ₹2,50,000 per person or for the trip?',
      answer:
        'It is an indicative price for the package, not a per-person fare, and it moves with your dates, group size and the standard of accommodation you choose. Contact us for detailed pricing and package customisation — nothing is fixed until you have a written quote, and no payment is taken on this site.',
    },
    {
      question: 'When should I go?',
      answer:
        'October to March. The highlands are cool and dry, the markets are at their fullest after harvest, and the roads are passable. June to September is the monsoon, when hill routes wash out and the trip is not worth attempting.',
    },
  ],
};
