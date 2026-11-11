import type { Testimonial } from '@/lib/types';

/**
 * DEMO CONTENT.
 *
 * These are illustrative reviews written for this prototype. They are not real
 * customer feedback, and the names are invented. Every surface that renders
 * them also labels them as sample content.
 *
 * They reference the four signature journeys rather than the wider catalogue,
 * so the homepage does not quietly advertise trips it no longer features.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya R.',
    trip: 'Tribal Odisha',
    quote:
      'We were sent the conduct guidelines a fortnight before we flew, and I will admit I thought they were overkill. At the market on the second morning I understood exactly why they existed. Nobody felt like an exhibit, including us.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Imran S.',
    trip: 'Wildlife North East',
    quote:
      'Four safaris across three different ranges, and each one felt like a different park. Nobody promised us a tiger, which I appreciated more than if they had.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Meera & Vikram',
    trip: 'Handicrafts Gujarat',
    quote:
      'The Ajrakh washing was not running the week we visited and we were told so a month ahead rather than discovering it in Kutch. They offered to move our dates. That one email told us everything.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Rohit D.',
    trip: 'Heritage Rajasthan',
    quote:
      'Ten days, five forts, and the longest drive was broken by a night at Kumbhalgarh I would never have thought to ask for. The route was clearly designed by someone who has actually driven it.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Shalini K.',
    trip: 'Tribal Odisha',
    quote:
      'Starting at the tribal museum in Bhubaneswar reframed the whole trip. By the time we reached Koraput we knew what we were looking at instead of just photographing it.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Joseph M.',
    trip: 'Handicrafts Gujarat',
    quote:
      'Four nights in Bhuj sounded like too many until we did it. Driving out and back each day beat repacking every morning, and we got to return to a weaver we had met on day one.',
    rating: 4,
  },
];
