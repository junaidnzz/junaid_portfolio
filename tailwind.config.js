/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Six named values, one accent. Light-only and theme-locked: the page
      // commits to a single look rather than shipping a half-considered dark
      // counterpart. Contrast against `paper` is noted per value.
      colors: {
        paper: '#F7F7F5', // page ground, cool off-white
        surface: '#FFFFFF', // raised cards, the only value lighter than ground
        ink: '#16161A', // primary text, 16:1
        graphite: '#6B6B72', // secondary text and functional borders, 4.86:1
        rule: '#DDDDD8', // decorative hairlines only, never load-bearing
        accent: '#2B44C7', // 7.08:1 on paper, 7.6:1 as white-on-accent
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      // Tracking is a function of size, never a single global value (§15).
      letterSpacing: {
        display: '-0.03em',
        heading: '-0.022em',
        body: '0em',
        micro: '0.06em',
      },
      fontSize: {
        micro: ['0.75rem', { lineHeight: '1.4' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
        body: ['1rem', { lineHeight: '1.6' }],
        lede: ['1.125rem', { lineHeight: '1.6' }],
        h3: ['1.25rem', { lineHeight: '1.3' }],
        h2: ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1' }],
        display: ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.02' }],
        // The hero runs edge to edge. Extreme scale is where a restrained
        // palette gets its impact from.
        // Capped at 8rem, not larger: three lines plus the supporting block
        // has to clear a 1280x800 laptop without pushing the CTA off screen.
        hero: ['clamp(2.5rem, 9vw, 8rem)', { lineHeight: '0.94' }],
      },
      // One radius scale, applied everywhere.
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '16px',
      },
      maxWidth: {
        prose: '68ch', // measure for long-form reading
        shell: '72rem',
      },
    },
  },
  plugins: [],
};
