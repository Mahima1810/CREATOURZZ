import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_EMAIL, CONTACT_MAILTO, CUSTOM_TOUR_HEADLINE } from '@/lib/contact';

const explore = [
  { href: '/destinations', label: 'Explore Destinations' },
  { href: '/packages', label: 'All Tour Packages' },
  { href: '/packages?duration=short', label: 'Short Breaks' },
  { href: '/packages?style=Honeymoon', label: 'Honeymoon Journeys' },
];

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/credits', label: 'Photography Credits' },
];

const legal = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white/70">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-white/55">
              Thoughtfully curated journeys across India and beyond — planned by people who have walked the route
              first.
            </p>
            <p className="mt-6 font-display text-lg text-white/85">Discover More. Travel Better.</p>
          </div>

          <FooterColumn title="Explore" links={explore} />
          <FooterColumn title="Company" links={company} />

          <div>
            <h3 className="text-2xs font-semibold uppercase tracking-eyebrow text-white/45">Get in touch</h3>
            <a
              href={CONTACT_MAILTO}
              className="mt-5 inline-flex items-start gap-3 text-sm transition-colors hover:text-white"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" strokeWidth={1.6} />
              <span className="break-all underline-offset-4 hover:underline">{CONTACT_EMAIL}</span>
            </a>
            <p className="mt-4 text-2xs leading-relaxed text-white/40">
              Email is the only way to reach us — we do not list a phone number or office address we cannot answer.
            </p>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-white/70">{CUSTOM_TOUR_HEADLINE}</p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center rounded-full border border-white/25 px-4 py-2 text-2xs font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
            >
              Plan Your Customised Tour
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-4 text-2xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p suppressHydrationWarning>
              © {new Date().getFullYear()} CREATOURZZ — a demonstration project. Not a real travel company.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-2xs leading-relaxed text-white/30">
            Pricing shown is indicative and itineraries and reviews are sample content created to demonstrate the
            product. No bookings or payments are processed here.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-2xs font-semibold uppercase tracking-eyebrow text-white/45">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors duration-200 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
