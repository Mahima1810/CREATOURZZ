import type { ReactNode } from 'react';
import { SearchX } from 'lucide-react';

export function EmptyState({
  title,
  description,
  action,
  icon,
}: {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-line-strong bg-surface/60 px-6 py-20 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sand text-ink-mute">
        {icon ?? <SearchX className="h-6 w-6" strokeWidth={1.5} />}
      </div>
      <h3 className="display text-2xl">{title}</h3>
      <p className="mt-2 max-w-md text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">{description}</p>
      {action ? <div className="mt-7">{action}</div> : null}
    </div>
  );
}
