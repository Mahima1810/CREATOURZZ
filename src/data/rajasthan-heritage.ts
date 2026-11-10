import type { Package } from '@/lib/types';
import { photos } from './images';

/**
 * Flagship editorial package: Royal Rajasthan.
 *
 * ── Route reasoning ──────────────────────────────────────────────────────
 * The obvious brief is "Jaipur, Jodhpur, Jaisalmer, Udaipur, Chittorgarh,
 * Kumbhalgarh, Pushkar, Mount Abu, Bikaner". Driven in that order it is a
 * punishing amount of road. This route keeps the historically strongest sites
 * and sequences them so no transfer except one exceeds about six hours:
 *
 *   Jaipur 2N → Jodhpur 2N → Jaisalmer 2N → Kumbhalgarh 1N → Udaipur 2N
 *
 *   • Jaipur → Jodhpur breaks at Ajmer/Pushkar, turning a 6 hr drive into a
 *     day with something in the middle of it.
 *   • Jaisalmer → Udaipur direct is roughly 490 km. Stopping a night at
 *     Kumbhalgarh splits it and buys the second-longest wall in the world and
 *     Ranakpur on the way, instead of a day staring at NH-62.
 *   • Bikaner and Mount Abu are dropped: both add a night of driving for
 *     monuments that do not outrank what is already on the list.
 *   • Chittorgarh is offered as an optional day from Udaipur (115 km each
 *     way) rather than forced on everyone, because it is a 4–5 hour site and
 *     deserves a whole day or none.
 *
 * ── Sourcing ─────────────────────────────────────────────────────────────
 * Historical claims below are drawn from UNESCO's World Heritage listing for
 * the Hill Forts of Rajasthan and the cited encyclopaedia articles. Where a
 * claim rests on chronicle, folklore or bardic tradition rather than record,
 * it is listed under `traditional` and the page labels it as such. No hotel
 * partnerships, ticket prices, customer reviews or company credentials are
 * invented; pricing is marked indicative throughout.
 */

const UNESCO_247 = { label: 'UNESCO World Heritage List — Hill Forts of Rajasthan', url: 'https://whc.unesco.org/en/list/247/' };

export const rajasthanHeritage: Package = {
  slug: 'rajasthan-heritage',
  destinationSlug: 'rajasthan',
  name: 'Royal Rajasthan – Forts, Palaces & Heritage',
  summary: 'Ten days through four Rajput capitals and the hill forts that defended them.',
  overview:
    'Jaipur, Jodhpur, Jaisalmer and Udaipur, connected by a route built around driving time rather than a wish list — with a night at Kumbhalgarh so the longest leg becomes two short ones.',
  intro:
    'Most Rajasthan itineraries are a list of cities with the driving quietly left out. This one is built the other way round: the route was drawn first, around how far a person can comfortably travel in a day, and the stops were chosen to survive that test. What remains is four Rajput capitals — Amber, Marwar, Jaisalmer and Mewar — and the hill forts that made them possible, read in the order the history actually moves. You get a guide at each major monument and enough time inside it to understand what you are looking at, rather than forty minutes and a photograph from the car park.',
  nights: 9,
  days: 10,
  pricePerPerson: 42999,
  hotelCategory: 'Three tiers — from 3-star hotels to palace properties',
  bestTime: 'October to March. April and May regularly pass 40°C in the desert districts.',
  styles: ['Heritage'],
  featured: true,
  editorial: true,

  highlights: [
    'Amer Fort at opening time, before the coaches arrive',
    'Mehrangarh standing 122 m above the blue city at Jodhpur',
    'Two nights at Jaisalmer — one of the few forts in the world still lived in',
    'Kumbhalgarh, whose perimeter wall is among the longest continuous walls anywhere',
    'The City Palace and a boat on Lake Pichola at Udaipur',
  ],

  routeStops: [
    { city: 'Jaipur', nights: 2, note: 'Amer Fort, Jantar Mantar, the walled pink city' },
    { city: 'Jodhpur', nights: 2, note: 'Mehrangarh, Jaswant Thada, the blue quarter' },
    { city: 'Jaisalmer', nights: 2, note: 'The living fort, the havelis, the Sam dunes' },
    { city: 'Kumbhalgarh', nights: 1, note: 'The great wall, and Ranakpur on the way in' },
    { city: 'Udaipur', nights: 2, note: 'City Palace, Lake Pichola, optional Chittorgarh' },
  ],

  itinerary: [
    {
      day: 1,
      destination: 'Jaipur',
      title: 'Arrival in Jaipur',
      summary: 'Land, settle, and take the walled city at dusk when the sandstone warms up.',
      activities: [],
      morning: ['Arrival at Jaipur International Airport or Jaipur Junction', 'Private transfer and hotel check-in'],
      afternoon: ['Rest, or an unhurried first walk', 'Trip briefing with your coordinator'],
      evening: ['Hawa Mahal facade from Hawa Mahal Road at golden hour', 'Johari Bazaar and Bapu Bazaar on foot', 'Welcome dinner'],
      exploreTime: 'Hawa Mahal exterior — 30 to 40 minutes is enough; the interior is a separate visit.',
      stay: 'Jaipur',
      meals: 'Dinner',
    },
    {
      day: 2,
      destination: 'Jaipur',
      title: 'Amer Fort and the observatory city',
      summary: 'The fort first thing, the Kachwaha city after lunch.',
      activities: [],
      morning: ['Depart for Amer at opening time to beat the coaches', 'Amer Fort with a licensed guide — Jaleb Chowk, Diwan-i-Aam, Ganesh Pol, Sheesh Mahal, Sukh Niwas', 'Panna Meena ka Kund stepwell'],
      afternoon: ['Jal Mahal photo stop on the way back', 'Jantar Mantar, the Jai Singh II observatory', 'City Palace museum and Chandra Mahal courtyards'],
      evening: ['Free, or an optional block-printing or puppetry workshop at own cost'],
      exploreTime: 'Amer Fort — allow 2.5 to 3 hours. Jantar Mantar — 1 hour with a guide, who is genuinely worth it here.',
      stay: 'Jaipur',
      meals: 'Breakfast',
    },
    {
      day: 3,
      destination: 'Jaipur → Jodhpur',
      title: 'West to Marwar, by way of Pushkar',
      summary: 'The long transfer, broken in the middle so it does not feel like one.',
      activities: [],
      travelTime: 'Jaipur → Jodhpur · approx. 340 km, 6 hrs driving, 7–8 hrs with the Pushkar stop',
      morning: ['Early departure after breakfast', 'Drive to Ajmer, then on to Pushkar'],
      afternoon: ['Pushkar lake and the ghats', 'Lunch in Pushkar', 'Continue to Jodhpur'],
      evening: ['Arrive Jodhpur and check in', 'Dinner at the hotel'],
      exploreTime: 'Pushkar — about 1.5 hours at the lake and bazaar. Shoes come off at the ghats.',
      stay: 'Jodhpur',
      meals: 'Breakfast',
    },
    {
      day: 4,
      destination: 'Jodhpur',
      title: 'Mehrangarh and the blue city',
      summary: 'A full morning in the fort, then the lanes underneath it.',
      activities: [],
      morning: ['Mehrangarh Fort with a guide — the gates, the courtyards, the museum galleries', 'Views over the blue quarter from the ramparts'],
      afternoon: ['Jaswant Thada, the marble cenotaph', 'Toorji Ka Jhalra stepwell', 'Walk through the blue houses of Navchokiya'],
      evening: ['Clock Tower and Sardar Market', 'Free evening'],
      exploreTime: 'Mehrangarh — allow 3 hours. The audio guide is unusually good if you prefer to go alone.',
      stay: 'Jodhpur',
      meals: 'Breakfast',
    },
    {
      day: 5,
      destination: 'Jodhpur → Jaisalmer',
      title: 'Into the Thar',
      summary: 'A straightforward drive west, arriving in time for the lake at sunset.',
      activities: [],
      travelTime: 'Jodhpur → Jaisalmer · approx. 285 km, 5 hrs by road',
      morning: ['Depart after breakfast', 'Optional stop at Osian and its 8th–12th century temple group'],
      afternoon: ['Arrive Jaisalmer and check in', 'Rest through the heat of the afternoon'],
      evening: ['Gadisar Lake at sunset', 'Dinner overlooking the fort'],
      stay: 'Jaisalmer',
      meals: 'Breakfast',
    },
    {
      day: 6,
      destination: 'Jaisalmer',
      title: 'The living fort and the dunes',
      summary: 'Inside the walls in the morning; out on the sand by evening.',
      activities: [],
      morning: ['Jaisalmer Fort with a guide — the gates, Dussehra Chowk, the Jain temple group', 'The fort is still inhabited, so this is a walk through a neighbourhood as much as a monument'],
      afternoon: ['Patwon Ki Haveli and Nathmal Ki Haveli', 'Salim Singh Ki Haveli from the street', 'Transfer to the Sam dunes in the late afternoon'],
      evening: ['Camel ride on the dunes at sunset', 'Folk music and dinner at a desert camp', 'Return to Jaisalmer, or overnight at camp on request'],
      exploreTime: 'Jaisalmer Fort — 2.5 to 3 hours including the Jain temples. Patwon Ki Haveli — about an hour.',
      stay: 'Jaisalmer',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 7,
      destination: 'Jaisalmer → Kumbhalgarh',
      title: 'South to the Aravalli',
      summary: 'The one genuinely long day — and the reason the next one is short.',
      activities: [],
      travelTime: 'Jaisalmer → Kumbhalgarh · approx. 370 km, 6.5 hrs by road, with a lunch halt',
      morning: ['Early departure from Jaisalmer', 'Drive south-east out of the desert districts'],
      afternoon: ['Lunch en route', 'Arrive in the Kumbhalgarh area and check in', 'Free afternoon'],
      evening: ['Sunset from the hotel over the Aravalli', 'Dinner'],
      stay: 'Kumbhalgarh',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 8,
      destination: 'Kumbhalgarh → Udaipur',
      title: 'The great wall, and the marble at Ranakpur',
      summary: 'Two of the finest sites in Mewar, and only two hours of driving.',
      activities: [],
      travelTime: 'Kumbhalgarh → Ranakpur → Udaipur · approx. 110 km in total, 2.5 hrs of driving',
      morning: ['Kumbhalgarh Fort with a guide — the ramparts, Badal Mahal, the temple groups inside the walls'],
      afternoon: ['Ranakpur Jain temple — the 15th-century marble hall and its forest of carved pillars', 'Continue to Udaipur'],
      evening: ['Check in at Udaipur', 'Ambrai Ghat for the view across to the City Palace'],
      exploreTime: 'Kumbhalgarh — 2 to 2.5 hours; the wall walk is the point. Ranakpur — about an hour, and it closes to visitors during midday worship.',
      stay: 'Udaipur',
      meals: 'Breakfast',
    },
    {
      day: 9,
      destination: 'Udaipur',
      title: 'Mewar from the water',
      summary: 'The City Palace in the morning, the lake in the late afternoon.',
      activities: [],
      morning: ['City Palace complex with a guide — Badi Mahal, Mor Chowk, the Sheesh Mahal', 'Jagdish Temple'],
      afternoon: ['Saheliyon Ki Bari', 'Free time in the old city lanes', 'Optional: swap this whole day for the Chittorgarh extension (115 km each way) if you would rather have the fort'],
      evening: ['Sunset boat on Lake Pichola, past the Lake Palace and Jag Mandir', 'Farewell dinner'],
      exploreTime: 'City Palace — 2 hours. The Chittorgarh alternative needs the full day: the fort is 280 hectares and the drive is 2.5 hrs each way.',
      stay: 'Udaipur',
      meals: 'Breakfast, Dinner',
    },
    {
      day: 10,
      destination: 'Udaipur',
      title: 'Departure',
      summary: 'Breakfast, then the airport at Dabok.',
      activities: [],
      morning: ['Breakfast and check-out', 'Private transfer to Maharana Pratap Airport, Udaipur (approx. 40 mins)'],
      afternoon: [],
      evening: [],
      stay: '—',
      meals: 'Breakfast',
    },
  ],

  heritage: [
    {
      id: 'amer',
      name: 'Amer Fort',
      location: 'Amer, 11 km north of Jaipur',
      built: 'Begun 1592; the Man Singh I palace completed 1599',
      dynasty: 'Kachwaha Rajputs',
      unesco: 'Inscribed 2013, as part of the Hill Forts of Rajasthan',
      photo: photos.amerFort,
      background:
        'Amer was the seat of the Kachwaha rulers of Dhundhar long before Jaipur existed. The hill had been held by a Meena polity before the Kachwahas took it. Construction of the fort as it now stands began in 1592 under Raja Man Singh I, a general in Akbar’s service, and the palace kept growing for roughly a century and a half afterwards. In 1727 Sawai Jai Singh II moved the capital down to the new planned city of Jaipur, which froze Amer in the form it has today.',
      architecture:
        'Four courtyards stepping up the hillside. The second holds the Diwan-i-Aam, a raised platform on 27 colonnades with elephant capitals. The Ganesh Pol — credited on site to Mirza Raja Jai Singh — divides the public fort from the private palace. Beyond it, the Jai Mandir or Sheesh Mahal is set with mirror mosaic and coloured glass, and the Sukh Niwas opposite was cooled by water running through an open channel in the floor. The idiom is Rajput massing with Mughal detail, which is what you would expect from a Kachwaha commander at the Mughal court.',
      military:
        'Amer is the palace; the military work is Jaigarh, on the ridge directly above it, and the two are connected by a fortified passage. The hill position commands the pass into the Dhundhar valley, which is why the site was fought over before the Kachwahas held it.',
      documented: [
        'Construction began in 1592 under Raja Man Singh I; the Man Singh palace was completed in 1599.',
        'Jai Singh I expanded the complex in the early 1600s; additions continued for about 150 years.',
        'The Kachwaha capital moved to Jaipur under Sawai Jai Singh II in 1727.',
        'Inscribed by UNESCO in 2013 under criteria (ii) and (iii), at the 37th session in Phnom Penh.',
      ],
      traditional: [
        'That the name comes from the goddess Amba rather than the Ambikeshwar temple — both accounts circulate and neither is settled.',
        'The origin story of the Sila Devi image, told as both a dream and a gift of black stone.',
        'The claim that Man Singh kept twelve queens with a room apiece — repeated widely, unsupported.',
        'That the passage to Jaigarh was an escape tunnel; its wartime use is intent, not record.',
      ],
      exploreTime: '2.5 to 3 hours',
      sources: [
        UNESCO_247,
        { label: 'Amer Fort — Wikipedia', url: 'https://en.wikipedia.org/wiki/Amer_Fort' },
      ],
    },
    {
      id: 'mehrangarh',
      name: 'Mehrangarh Fort',
      location: 'Jodhpur',
      built: 'Founded 12 May 1459; most standing fabric 17th century',
      dynasty: 'Rathore dynasty of Marwar',
      unesco: 'Not a UNESCO site; it is a state-protected monument run by a private trust',
      photo: photos.rajasthan3,
      background:
        'Rao Jodha founded Mehrangarh in 1459 when he moved the Rathore capital from Mandore to a more defensible hill six miles away. The city of Jodhpur grew up underneath it. Very little of the 15th-century fort survives in view: most of what a visitor walks through dates from the reign of Maharaja Jaswant Singh in the mid-17th century, with later gates added on top of that.',
      architecture:
        'The fort sits on a rock about 122 m above the plain, inside walls that reach 36 m high and 21 m thick. A sequence of gates climbs the approach: Jai Pol, built by Maharaja Man Singh in 1806 for victories over Jaipur and Bikaner; Fateh Pol, marking Ajit Singh’s victory over the Mughals; Dedh Kangra Pol, which still carries cannonball damage from Jaipur’s guns; and Loha Pol, the last gate into the palace courts.',
      military:
        'The scale of the walls is the argument. Mehrangarh was never taken by storm, and the cannonball scarring at Dedh Kangra Pol is the most direct evidence on site of what that cost an attacker. The gates are angled and stacked so that a charge cannot build momentum.',
      documented: [
        'Rao Jodha began the fort on 12 May 1459.',
        'Most of the surviving structure dates from the reign of Maharaja Jaswant Singh, 1638–78.',
        'Jai Pol was built by Maharaja Man Singh in 1806 to mark victories over the Jaipur and Bikaner armies.',
        'The walls reach roughly 36 m in height and 21 m in width; the hill stands about 122 m above the plains.',
      ],
      traditional: [
        'The hermit Cheeria Nathji’s curse on Rao Jodha after being moved off the hill — recorded as legend.',
        'Karni Mata’s role in the founding, a religious account rather than a documented one.',
        'The burial of a man in the foundations to make the site auspicious; widely repeated, poorly sourced.',
        'The handprints near Loha Pol are shown as sati marks of royal widows; the attribution is traditional.',
      ],
      exploreTime: '3 hours',
      sources: [{ label: 'Mehrangarh — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mehrangarh' }],
    },
    {
      id: 'jaisalmer',
      name: 'Jaisalmer Fort',
      location: 'Jaisalmer',
      built: 'Traditionally dated 1156 CE',
      dynasty: 'Bhati Rajputs',
      unesco: 'Inscribed 2013, as part of the Hill Forts of Rajasthan',
      photo: photos.rajasthan2,
      background:
        'Jaisalmer Fort is the rarest thing on this route: a fort that was never emptied out. Roughly a quarter of the old city’s population still lives inside the walls, in houses that have been continuously occupied for centuries. The founding is dated to 1156 CE and attributed to Rawal Jaisal of the Bhati clan, who is said to have abandoned the older seat at Lodhruva for this triangular hill of yellow sandstone.',
      architecture:
        'The whole fort is built of the local honey-coloured sandstone, which is why it reads as a single mass from a distance and dissolves into carved detail up close. Inside are palaces, a notable group of Jain temples, and the ordinary houses and lanes of a working settlement. The havelis below the fort — Patwon Ki Haveli above all — carry the same stone-carving tradition into merchant architecture.',
      military:
        'A triangular hill in open desert, with a long fortified approach and 99 bastions along the wall. Its real strategic value was commercial: it sat on the caravan routes running between India and Central Asia, and controlling it meant controlling the traffic.',
      documented: [
        'Construction is dated to 1156 CE.',
        'Approximately a quarter of the old city’s population still lives within the fort walls.',
        'Inscribed by UNESCO in 2013 as a component of the Hill Forts of Rajasthan.',
        'The fort superseded an earlier seat at Lodhruva.',
      ],
      traditional: [
        'The founding by Rawal Jaisal is transmitted through legend rather than contemporary record.',
        'The account of his dissatisfaction with Lodhruva as the reason for the move is part of the same tradition.',
      ],
      exploreTime: '2.5 to 3 hours, including the Jain temple group',
      sources: [
        UNESCO_247,
        { label: 'Hill Forts of Rajasthan — Wikipedia', url: 'https://en.wikipedia.org/wiki/Hill_Forts_of_Rajasthan' },
      ],
    },
    {
      id: 'kumbhalgarh',
      name: 'Kumbhalgarh Fort',
      location: 'Rajsamand district, Aravalli range',
      built: '15th century, under Rana Kumbha',
      dynasty: 'Sisodia Rajputs of Mewar',
      unesco: 'Inscribed 2013, as part of the Hill Forts of Rajasthan',
      photo: photos.kumbhalgarh,
      background:
        'Kumbhalgarh is Mewar’s fallback. Built in the 15th century under Rana Kumbha — who is credited with 32 of the 84 forts of Mewar, working with the architect Mandan — it was the refuge the Sisodias withdrew to when Chittorgarh could not be held. The early history of the site cannot be established for want of evidence; a tradition puts an earlier fort here, called Matsyaendra Durg, under the Mauryan king Samprati.',
      architecture:
        'The defining feature is the perimeter wall, which runs for kilometres along the ridgeline and is among the longest continuous walls anywhere in the world. Inside the enclosure are more than seventy Jain and Hindu temples, and Badal Mahal — the "palace of clouds" — at the highest point.',
      military:
        'Altitude and the wall. The fort sits high in the Aravalli with a walled perimeter that cannot be flanked, and an interior large enough to hold a population and its livestock through a siege. It was the strategic answer to Chittorgarh’s exposure, and the Mewar rulers used it exactly that way.',
      documented: [
        'The fort as it stands was built under Rana Kumbha in the 15th century.',
        'Rana Kumbha is credited with building 32 of his 84 forts, assisted by the architect Mandan.',
        'More than 70 Jain and Hindu temples stand within the walls.',
        'Inscribed by UNESCO in 2013 as a component of the Hill Forts of Rajasthan.',
      ],
      traditional: [
        'The earlier fort attributed to the Mauryan king Samprati — tradition, not evidence; the early history of the site is undocumented.',
      ],
      exploreTime: '2 to 2.5 hours',
      sources: [
        UNESCO_247,
        { label: 'Hill Forts of Rajasthan — Wikipedia', url: 'https://en.wikipedia.org/wiki/Hill_Forts_of_Rajasthan' },
      ],
    },
    {
      id: 'chittorgarh',
      name: 'Chittorgarh Fort',
      location: 'Chittorgarh · 115 km from Udaipur — optional day on this itinerary',
      built: 'First hill fort 5th–12th century; major defensive phase 15th century',
      dynasty: 'Mori Rajputs, then the Guhilas and Sisodias of Mewar',
      unesco: 'Inscribed 2013; Chittorgarh had been separately recognised since 1981',
      photo: photos.chittorgarh,
      background:
        'Chittorgarh is the largest fort on this route and the most consequential. It was the capital of Mewar and the seat from which the Sisodias held out against successive invasions, and it is where the idea of Rajput resistance was largely formed. Originally called Chitrakut, the fort is attributed to the Mori ruler Chitrangada Mori. The first hill fort dates somewhere between the 5th and 12th centuries; the serious defensive construction, including the seven gates, belongs to the 15th century under Rana Kumbha.',
      architecture:
        'Roughly 280 hectares on a hill standing about 180 m above the plain — this is a fortified town, not a castle, and it needs most of a day. The Vijaya Stambha, built by Rana Kumbha between 1458 and 1468, rises about 37 m over nine storeys. The older Kirti Stambha, around 22 m and probably 12th century, was raised by the Jain merchant Jijaji Rathod and dedicated to Adinath. Rana Kumbha’s palace survives as ruins near the entrance.',
      military:
        'Three major sieges are documented, and the fort fell in all three. Alauddin Khalji took it in 1303 after eight months. Bahadur Shah of Gujarat sacked it in 1535. Akbar besieged it for around four months in 1567–68; it fell in February 1568, defended to the end by Jaimal and Patta. After that the Mewar capital moved to Udaipur, and Chittorgarh was never rebuilt as a working seat.',
      documented: [
        '1303 — Alauddin Khalji captured the fort from the Guhila king Ratnasimha after an eight-month siege.',
        '1535 — Bahadur Shah, Sultan of Gujarat, besieged and sacked the fort.',
        '1567–68 — Akbar besieged it for about four months; it fell in February 1568.',
        'The Vijaya Stambha was built between 1458 and 1468 under Rana Kumbha; it stands about 37.2 m over nine storeys.',
        'The fort covers about 280 hectares on a hill roughly 180 m above the plains.',
      ],
      traditional: [
        'The Padmini legend attached to the 1303 siege: most modern historians reject it, and the palace shown as hers is a 19th-century reconstruction.',
        'That Rani Karnavati led 13,000 women into jauhar in 1535 — transmitted as "it is said", not as record.',
        'Bappa Rawal’s capture of the fort in 728 or 734 CE, which some historians doubt.',
        'The attribution of the original fort to Chitrangada Mori, and the folk account crediting Bhima with the Bhimlat Kund.',
      ],
      exploreTime: '4 to 5 hours — treat it as a full day from Udaipur',
      sources: [
        UNESCO_247,
        { label: 'Chittorgarh Fort — Wikipedia', url: 'https://en.wikipedia.org/wiki/Chittorgarh_Fort' },
      ],
    },
  ],

  tiers: [
    {
      id: 'budget',
      name: 'Budget',
      pricePerPerson: 42999,
      hotels: 'Clean 3-star hotels, centrally located',
      transport: 'Private air-conditioned sedan with driver',
      includes: [
        '9 nights, twin sharing, 3-star category',
        'Daily breakfast',
        'Private sedan for all transfers and sightseeing',
        'Licensed guides at Amer, Mehrangarh and Kumbhalgarh',
        'Monument entry for the sites listed in the itinerary',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      pricePerPerson: 68999,
      recommended: true,
      hotels: '4-star hotels, with two nights in heritage-style properties',
      transport: 'Private air-conditioned SUV with driver',
      includes: [
        '9 nights, twin sharing, 4-star category',
        'Two nights in heritage-style properties (Jodhpur and Udaipur)',
        'Daily breakfast and 4 dinners',
        'Private SUV for all transfers and sightseeing',
        'Licensed guides at every major monument',
        'Sunset boat on Lake Pichola and the Sam dunes camel ride',
      ],
    },
    {
      id: 'luxury',
      name: 'Luxury',
      pricePerPerson: 124999,
      hotels: '5-star and palace-category properties throughout',
      transport: 'Chauffeured premium SUV, with an airport meet-and-greet',
      includes: [
        '9 nights, twin sharing, 5-star and palace category',
        'Lake-facing or fort-facing rooms wherever the property offers them',
        'Daily breakfast and all dinners',
        'Chauffeured premium SUV and a travelling escort for the full trip',
        'Private art-historian-led tours at Amer, Mehrangarh and Chittorgarh',
        'One private dining experience and one spa treatment per person',
      ],
    },
  ],

  accommodation: [
    { tier: 'Budget', detail: '3-star hotels chosen for location over frontage — within reach of the old city in each stop. Air conditioning, hot water and breakfast included; no pool guaranteed.' },
    { tier: 'Premium', detail: '4-star hotels throughout, with two nights in heritage-style properties — converted havelis or similar — at Jodhpur and Udaipur. Pools at most stops.' },
    { tier: 'Luxury', detail: '5-star and palace-category hotels, with lake- or fort-facing rooms wherever the property has them. Several of Rajasthan’s palace hotels sell out months ahead in high season.' },
  ],

  faqs: [
    {
      question: 'Is the price fixed?',
      answer:
        'No. Every figure on this page is indicative, per person on twin sharing, and quoted to show the shape of the three tiers. A firm price depends on your dates, group size, room configuration and live hotel rates, and is confirmed in writing before anything is booked.',
    },
    {
      question: 'Which hotels will we actually stay in?',
      answer:
        'We do not publish hotel names here, because we are not going to claim partnerships we have not confirmed for your dates. The tier tells you the category and standard; the named properties come back with your quote, and you can change them before you agree to anything.',
    },
    {
      question: 'Why is Bikaner or Mount Abu not on the route?',
      answer:
        'Both would add a night that is mostly driving. Bikaner sits well north of the Jodhpur–Jaisalmer line and pulls the route out of shape; Mount Abu is a long climb for a hill station rather than a fort. If you want either, we will re-plan around them and tell you honestly what it costs in road hours.',
    },
    {
      question: 'How much driving is there really?',
      answer:
        'Five transfer days. Four of them are between two and five hours. One — Jaisalmer to Kumbhalgarh on day 7 — is about 6.5 hours including a lunch stop, and it exists so that day 8 can be short enough to fit both Kumbhalgarh and Ranakpur.',
    },
    {
      question: 'Can we do Chittorgarh as well?',
      answer:
        'Yes, in place of the Udaipur sightseeing on day 9. It is 115 km each way, the fort covers 280 hectares, and it wants four to five hours on site, so it is a full day rather than an add-on. Tell us at enquiry and we will build the day around it.',
    },
    {
      question: 'Are monument tickets included?',
      answer:
        'Entry to the monuments listed in the itinerary is included. We do not publish individual ticket rates on this page because they are set by the Archaeological Survey of India, the state department and private trusts, and they change; the current rates are confirmed with your quote. Camera and video fees, where they apply, are not included.',
    },
    {
      question: 'When should we travel?',
      answer:
        'October to March. November to February is the most comfortable and the busiest. April and May regularly pass 40°C in Jaisalmer and Jodhpur, and the desert portion of this route is genuinely unpleasant in that heat.',
    },
    {
      question: 'Do I pay anything on this website?',
      answer:
        'No. There is no payment gateway anywhere on this site. The enquiry form sends us your requirements; everything after that happens over email.',
    },
  ],

  inclusions: [
    'Accommodation for 9 nights in your chosen tier, on twin sharing',
    'Daily breakfast; dinners as specified by tier',
    'All transfers, intercity drives and sightseeing by private air-conditioned vehicle',
    'Driver allowance, fuel, tolls, parking and interstate permits',
    'Licensed local guides at the major monuments',
    'Monument entry for the sites listed in the itinerary',
    'Camel ride at the Sam dunes and a sunset boat on Lake Pichola',
    'A single named coordinator for the whole trip, reachable while you travel',
  ],

  exclusions: [
    'Flights and train fares to Jaipur and out of Udaipur',
    'Camera and video fees at monuments, where they apply',
    'The optional Chittorgarh day, which is quoted separately',
    'Lunches throughout, and dinners not listed in your tier',
    'Personal expenses — laundry, telephone, tips, minibar',
    'Travel insurance and medical cover',
    'Anything not explicitly listed under inclusions',
  ],

  cancellationPolicy: [
    'More than 45 days before departure — 90% of the trip cost refunded',
    '45 to 21 days before departure — 50% of the trip cost refunded',
    '20 to 8 days before departure — 25% of the trip cost refunded',
    'Under 7 days before departure, or no-show — no refund',
    'Palace-category hotels and festive-period bookings often carry stricter terms set by the property; where they do, those terms are stated in your written quote before you confirm',
  ],

  goodToKnow: [
    'Prices on this page are indicative and confirmed in writing before any booking is made',
    'Monuments observe conservation closures and local holidays; the itinerary is re-sequenced rather than shortened when one falls on your date',
    'Jain temples at Jaisalmer and Ranakpur restrict entry during worship and ask that leather items are left outside',
    'Ranakpur closes to visitors during midday worship',
    'Desert nights between November and February are cold — carry layers even though the days are warm',
    'A valid government photo ID is required at every hotel check-in',
  ],

  gallery: [
    photos.amerFort,
    photos.rajasthanHero,
    photos.rajasthan3,
    photos.rajasthan2,
    photos.kumbhalgarh,
    photos.chittorgarh,
    photos.rajasthan4,
    photos.patwonHaveli,
  ],
};
