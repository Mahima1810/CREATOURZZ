import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/lib/format';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onPhoto' | 'dark' | 'heritage';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-creatourzz ' +
  'disabled:cursor-not-allowed disabled:opacity-55 active:scale-[0.985] whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-[0_1px_2px_rgba(15,107,87,0.3)] hover:bg-accent-dark hover:shadow-[0_8px_24px_-10px_rgba(15,107,87,0.6)]',
  secondary: 'border border-line-strong bg-surface text-ink hover:border-ink hover:bg-ink hover:text-white',
  ghost: 'text-ink-soft hover:bg-sand hover:text-ink',
  onPhoto: 'border border-white/35 bg-white/12 text-white backdrop-blur-md hover:border-white/70 hover:bg-white hover:text-ink',
  dark: 'bg-ink text-white hover:bg-accent',
  // Muted-gold CTA used on the heritage package pages.
  heritage:
    'bg-gold text-white shadow-[0_1px_2px_rgba(180,131,60,0.3)] hover:bg-[#92682D] hover:shadow-[0_8px_24px_-10px_rgba(180,131,60,0.6)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-[3.25rem] px-7 text-[0.9375rem]',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps & ComponentPropsWithoutRef<'button'> & { href?: undefined };
type AnchorProps = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<'a'>, 'href'>;

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonProps;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
