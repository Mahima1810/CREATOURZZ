import { Suspense } from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/site/PageHeader';
import { DestinationsExplorer } from '@/components/travel/DestinationsExplorer';
import { FlagshipBand } from '@/components/travel/FlagshipBand';
import { photos } from '@/data/images';

export const metadata: Metadata = {
  title: 'Explore Destinations',
  description:
    'Eight destinations across India and beyond — islands, mountains, backwaters, deserts and forts, each with costed itineraries.',
};

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        photo={photos.heroDestinations}
        eyebrow="Explore destinations"
        title="Where would you like to wake up?"
        description="Eight regions we know well enough to plan honestly — what is worth your time, what is not, and when to go."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Explore Destinations' }]}
      />

      <section className="pt-14 lg:pt-20">
        <div className="shell">
          <FlagshipBand />
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="shell">
          <Suspense fallback={<GridSkeleton />}>
            <DestinationsExplorer />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function GridSkeleton() {
  return (
    <div>
      <div className="mx-auto h-[3.25rem] max-w-2xl skeleton rounded-full" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="skeleton aspect-[4/5] rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
