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
  virtua: { src: '/logos/virtua.png', alt: 'Virtua' },
  kayak: { src: '/logos/kayak.svg', alt: 'KAYAK' },
};

interface CompanyLogoProps {
  /** Project id from `projects`. Ids without an asset render nothing. */
  id: string;
  /** The surface the mark sits on, not the colour of the mark itself. */
  tone?: Tone;
  /** Set the height here; width follows the mark's own proportions. */
  className?: string;
}

export default function CompanyLogo({ id, tone = 'paper', className = '' }: CompanyLogoProps) {
  const logo = logos[id];
  if (!logo) return null;

  const src = tone === 'ink' && logo.onInk ? logo.onInk : logo.src;

  return (
    <img
      src={src}
      alt={logo.alt}
      loading="lazy"
      decoding="async"
      className={`w-auto object-contain ${className}`}
    />
  );
}
