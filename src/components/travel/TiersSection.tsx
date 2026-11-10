'use client';

import type { PriceTier } from '@/lib/types';
import { PricingTiers } from './PricingTiers';
import { useEnquiry } from './EnquiryProvider';

/** Connects the pricing tiers to the page's shared enquiry dialog. */
export function TiersSection({ tiers }: { tiers: PriceTier[] }) {
  const { open } = useEnquiry();
  return <PricingTiers tiers={tiers} onChoose={(tier) => open(tier.name)} />;
}
