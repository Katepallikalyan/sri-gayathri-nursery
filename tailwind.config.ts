import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          2: 'var(--color-paper-2)',
          3: 'var(--color-paper-3)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          2: 'var(--color-ink-2)',
          muted: 'var(--color-muted)',
        },
        rule: {
          DEFAULT: 'var(--color-rule)',
          2: 'var(--color-rule-2)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          2: 'var(--color-accent-2)',
          ink: 'var(--color-accent-ink)',
        },
        focus: 'var(--color-focus)',
        moss: 'var(--tint-moss)',
        clay: 'var(--tint-clay)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Vollkorn', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Hanken Grotesk', 'system-ui', 'sans-serif'],
        outlier: ['var(--font-outlier)', 'Newsreader', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        pill: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
};

export default config;
