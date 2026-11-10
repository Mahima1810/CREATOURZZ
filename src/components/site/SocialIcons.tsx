/**
 * Minimal social glyphs.
 *
 * lucide-react v1 no longer ships brand icons, so these are drawn here at the
 * same 24px grid and stroke weight as the rest of the icon set.
 */
type IconProps = { className?: string };

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.53 3h3.04l-6.64 7.59L21.75 21h-5.9l-4.62-6.04L5.94 21H2.9l7.1-8.12L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.07 16.2h1.68L7.6 4.7H5.8l10.66 14.5Z" />
    </svg>
  );
}

export function FacebookGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.63A22 22 0 0 0 14.3 3.5c-2.38 0-4.02 1.46-4.02 4.13V9.9H7.6V13h2.68v8h3.22Z" />
    </svg>
  );
}

export function LinkedInGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.6H3.9V21h3.04V8.6ZM5.42 3a1.78 1.78 0 1 0 0 3.55 1.78 1.78 0 0 0 0-3.55ZM20.1 21v-6.8c0-3.64-1.94-5.33-4.53-5.33-2.09 0-3.02 1.15-3.55 1.96V8.6H9v12.4h3.03v-6.93c0-1.67.32-3.29 2.39-3.29 2.04 0 2.07 1.9 2.07 3.4V21H20.1Z" />
    </svg>
  );
}
