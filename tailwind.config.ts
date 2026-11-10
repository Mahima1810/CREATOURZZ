import type { Config } from 'tailwindcss';

/**
 * CREATOURZZ design tokens.
 * One accent (deep sea-green), warm paper neutrals, restrained elevation.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.25rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        canvas: '#FBFAF8',
        sand: '#F3EFE9',
        surface: '#FFFFFF',
        line: '#E8E3DB',
        'line-strong': '#D8D1C6',
        ink: {
          DEFAULT: '#15181C',
          soft: '#4C535B',
          mute: '#878E97',
          faint: '#B4B9BF',
        },
        accent: {
          DEFAULT: '#0F6B57',
          dark: '#0A5244',
          soft: '#E9F3F0',
          line: '#C6E0D8',
        },
        gold: '#B4833C',
        // Heritage accents — used by the flagship Rajasthan package page.
        sandstone: '#F3E7D6',
        ivory: '#FDFAF4',
        terracotta: '#9C4A2F',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: { eyebrow: '0.18em' },
      borderRadius: { '4xl': '1.75rem' },
      maxWidth: { shell: '78rem' },
      boxShadow: {
        card: '0 1px 2px rgba(21,24,28,0.04), 0 10px 30px -18px rgba(21,24,28,0.25)',
        lift: '0 2px 4px rgba(21,24,28,0.04), 0 24px 50px -26px rgba(21,24,28,0.32)',
        panel: '0 1px 2px rgba(21,24,28,0.05), 0 18px 48px -28px rgba(21,24,28,0.3)',
      },
      transitionTimingFunction: { creatourzz: 'cubic-bezier(0.22, 0.61, 0.36, 1)' },
      keyframes: {
        'fade-up': { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'none' } },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'scale-in': { from: { opacity: '0', transform: 'translateY(8px) scale(0.985)' }, to: { opacity: '1', transform: 'none' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,0.61,0.36,1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'scale-in': 'scale-in 0.28s cubic-bezier(0.22,0.61,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
