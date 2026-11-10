'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/format';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Explore Destinations' },
  { href: '/packages', label: 'Tour Packages' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /** Only the homepage has a full-bleed hero for the bar to float over. */
  const overHero = pathname === '/';
  const solid = scrolled || !overHero || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-creatourzz',
        solid ? 'border-b border-line bg-canvas/85 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <nav className="shell flex h-[4.5rem] items-center justify-between gap-6" aria-label="Primary">
        <Logo tone={solid ? 'ink' : 'light'} />

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-[0.875rem] transition-colors duration-200',
                  solid
                    ? isActive(link.href)
                      ? 'text-accent'
                      : 'text-ink-soft hover:text-ink'
                    : isActive(link.href)
                      ? 'text-white'
                      : 'text-white/75 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 ease-creatourzz',
                    solid ? 'bg-accent' : 'bg-white',
                    isActive(link.href) && 'scale-x-100',
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            href="/packages"
            size="sm"
            variant={solid ? 'primary' : 'onPhoto'}
            className="hidden sm:inline-flex"
          >
            Explore Trips
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden',
              solid ? 'border-line text-ink hover:bg-sand' : 'border-white/30 text-white hover:bg-white/10',
            )}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-line bg-canvas transition-[max-height,opacity] duration-500 ease-creatourzz lg:hidden',
          open ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="shell flex flex-col py-3">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'flex items-center justify-between border-b border-line/70 py-3.5 text-[1.0625rem] transition-colors',
                  isActive(link.href) ? 'text-accent' : 'text-ink',
                )}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 text-ink-faint" strokeWidth={1.5} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="shell pb-6 pt-1">
          <Button href="/packages" size="lg" className="w-full">
            Explore Trips
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </header>
  );
}
