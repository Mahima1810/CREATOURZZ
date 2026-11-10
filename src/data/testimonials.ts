import type { Testimonial } from '@/lib/types';

/**
 * DEMO CONTENT.
 *
 * These are illustrative reviews written for this prototype. They are not real
 * customer feedback, and the names are invented. Every surface that renders
 * them also labels them as sample content.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya R.',
    trip: 'Kerala Backwaters & Hills',
    quote:
      'The houseboat night was the part I expected to like, and it was good — but the thing I keep telling people about is that the driver knew exactly which tea estate road to take at six in the morning. Small decisions, made well.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Imran S.',
    trip: 'Andaman Island Escape',
    quote:
      'Ferries in the Andamans are where plans usually fall apart. Ours were booked, confirmed and re-confirmed before we landed. We never once stood in a queue wondering what was happening.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Meera & Vikram',
    trip: 'Maldives Overwater Serenity',
    quote:
      'We asked for fewer activities and more nothing, and that is precisely what we were sent. The itinerary came back with half the things removed and a note explaining why the rest were worth keeping.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Rohit D.',
    trip: 'Rajasthan Royal Circuit',
    quote:
      'Seven days, three cities, zero surprises on the bill. The quote we approved is the number we paid, including the camp night at Sam.',
    rating: 4,
  },
  {
    id: 't5',
    name: 'Shalini K.',
    trip: 'Himachal Mountain Trail',
    quote:
      'Rohtang was closed the week we travelled. We were told before we left, offered an alternative day around Sissu, and nobody tried to pretend it was still happening.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Joseph M.',
    trip: 'Bali Island Immersion',
    quote:
      'Three nights in Ubud and three on the coast was the right split, and I would not have worked that out on my own. The cooking class was the surprise of the trip.',
    rating: 5,
  },
];
