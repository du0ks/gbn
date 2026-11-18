/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      spacing: {
        xs: 'var(--space-xs, 0.5rem)',
        sm: 'var(--space-sm, 1rem)',
        base: 'var(--space-base, 1.5rem)',
        lg: 'var(--space-lg, 2rem)',
        xl: 'var(--space-xl, 3rem)',
        xxl: 'var(--space-xxl, 4rem)',
        xxxl: 'var(--space-xxxl, 6rem)',
      },
      maxWidth: {
        content: 'var(--width-content, 72rem)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
};
