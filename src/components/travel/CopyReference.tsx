'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CopyReference({ reference }: { reference: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard permission can be refused; the reference is on screen anyway.
      setCopied(false);
    }
  };

  return (
    <Button variant="secondary" size="md" onClick={copy}>
      {copied ? (
        <>
          <Check className="h-4 w-4" strokeWidth={2} />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" strokeWidth={1.8} />
          Copy reference
        </>
      )}
    </Button>
  );
}
