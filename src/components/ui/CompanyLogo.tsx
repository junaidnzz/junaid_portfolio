/**
 * Real company marks, taken from each company's own published assets and kept
 * at their native colours. They earn their place by being recognisable, which
 * a redrawn approximation would not be.
 *
 * Arena Club ships two files rather than one CSS filter: the mark is used both
 * on paper and on the ink panel, and inverting a raster mark blurs its edges.
 */

type Tone = 'ink' | 'paper';

const logos: Record<string, { src: string; onInk?: string; alt: string }> = {
  arenaclub: {
    src: '/logos/arena-club-ink.png',
    onInk: '/logos/arena-club-paper.png',
    alt: 'Arena Club',
  },
  hatchpath: { src: '/logos/hatchpath.png', alt: 'HatchPath' },
  // Employer ids from `experiences`. Arena Club appears in both sets.
  'arena-club': {
    src: '/logos/arena-club-ink.png',
    onInk: '/logos/arena-club-paper.png',
    alt: 'Arena Club',
  },
  arbisoft: { src: '/logos/arbisoft.png', alt: 'Arbisoft' },
  mission: { src: '/logos/mission.png', alt: 'Mission' },
  sl2: { src: '/logos/sl2.png', alt: 'SL2 Studio' },
  virtua: { src: '/logos/virtua.png', alt: 'Virtua' },
  kayak: { src: '/logos/kayak.svg', alt: 'KAYAK' },
};

interface CompanyLogoProps {
  /**
   * Every current use sets the mark beside the company's name, so the default
   * is decorative: an alt that repeats the adjacent text is announced twice by
   * a screen reader and copied twice into the clipboard. Pass false only where
   * the mark stands alone.
   */
  decorative?: boolean;
  /** Project id from `projects`. Ids without an asset render nothing. */
  id: string;
  /** The surface the mark sits on, not the colour of the mark itself. */
  tone?: Tone;
  /** Set the height here; width follows the mark's own proportions. */
  className?: string;
}

export default function CompanyLogo({
  id,
  tone = 'paper',
  decorative = true,
  className = '',
}: CompanyLogoProps) {
  const logo = logos[id];
  if (!logo) return null;

  const src = tone === 'ink' && logo.onInk ? logo.onInk : logo.src;

  return (
    <img
      src={src}
      alt={decorative ? '' : logo.alt}
      loading="lazy"
      decoding="async"
      className={`w-auto object-contain ${className}`}
    />
  );
}
