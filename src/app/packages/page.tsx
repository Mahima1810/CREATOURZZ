import { Suspense } from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/site/PageHeader';
import { PackagesExplorer } from '@/components/travel/PackagesExplorer';
import { photos } from '@/data/images';
import { packages } from '@/lib/catalogue';

export const metadata: Metadata = {
  title: 'All Tour Packages',
  description:
    'Browse every CREATOURZZ journey. Filter by destination, budget, duration and travel style, then sort by price.',
};

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        photo={photos.heroPackages}
        eyebrow="Tour packages"
        title="Every journey, in one place"
        description={`${packages.length} itineraries across eight destinations — each with day-wise plans, stated inclusions and a single per-person price.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Tour Packages' }]}
      />

      <section className="py-14 lg:py-20">
        <div className="shell">
          <Suspense fallback={<ExplorerSkeleton />}>
            <PackagesExplorer />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function ExplorerSkeleton() {
  return (
    <div>
      <div className="mx-auto h-[3.25rem] max-w-2xl skeleton rounded-full" />
      <div className="mt-8 h-16 w-full skeleton rounded-2xl" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="skeleton h-[26rem] rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
