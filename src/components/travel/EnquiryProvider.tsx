'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Package } from '@/lib/types';
import { EnquiryDialog } from './EnquiryDialog';

type EnquiryContextValue = {
  /** Opens the enquiry dialog, optionally pre-selecting a pricing tier. */
  open: (tierName?: string) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

/**
 * Owns the enquiry dialog for a package page so that every call to action on
 * the page — the sticky panel, the mobile bar, each pricing tier — opens the
 * same dialog rather than each keeping its own copy.
 */
export function EnquiryProvider({ pkg, children }: { pkg: Package; children: ReactNode }) {
  const [openTier, setOpenTier] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((tierName?: string) => {
    setOpenTier(tierName ?? null);
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryDialog pkg={pkg} open={isOpen} initialTier={openTier} onClose={() => setIsOpen(false)} />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryContextValue {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error('useEnquiry must be used inside an <EnquiryProvider>');
  return ctx;
}
