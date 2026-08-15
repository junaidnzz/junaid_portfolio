/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#05070f',
        surface: '#0b0f1c',
        raised: '#111827',
        ink: '#e5e9f0',
        muted: '#8b93a7',
        accent: '#22d3ee',
        'accent-2': '#8b5cf6',
      },
      // Tracking is a function of size, never a single global value (§15).
      letterSpacing: {
        display: '-0.03em',
        heading: '-0.022em',
        body: '0em',
        micro: '0.04em',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        // Compositor-friendly drift: transform only, never background-position,
        // which repaints the whole viewport every frame (§11).
        drift: {
          '0%': { transform: 'translate3d(-1.5%, -1%, 0)' },
          '100%': { transform: 'translate3d(1.5%, 1%, 0)' },
        },
      },
      animation: {
        drift: 'drift 60s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
