import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://creatourzz.example'),
  title: {
    default: 'CREATOURZZ — Discover More. Travel Better.',
    template: '%s · CREATOURZZ',
  },
  description:
    'Thoughtfully curated journeys across India and beyond. Explore destinations, compare tour packages and send a booking enquiry. A demonstration project.',
  openGraph: {
    title: 'CREATOURZZ — Discover More. Travel Better.',
    description: 'Thoughtfully curated journeys across India and beyond.',
    type: 'website',
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: '#FBFAF8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${display.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
