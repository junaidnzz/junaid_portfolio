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
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        drift: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        drift: 'drift 60s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
