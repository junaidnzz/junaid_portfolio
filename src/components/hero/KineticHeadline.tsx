import { motion } from 'framer-motion';

interface KineticHeadlineProps {
  lines: string[];
  className?: string;
  /** Delay before the first line moves, in seconds. */
  delay?: number;
}

/**
 * Oversized headline revealed line by line from behind its own baseline.
 *
 * The mask is a real element with overflow hidden rather than an animated
 * clip-path, because masked overflow composites on the GPU and clip-path on
 * text does not, reliably, across browsers.
 *
 * Built on Motion rather than GSAP on purpose: this runs during first paint,
 * and Motion is already in the bundle. Pulling GSAP forward for one reveal
 * would put ~50 kB gzip in front of the hero.
 */

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { delayChildren: delay, staggerChildren: 0.085 },
  }),
};

const line = {
  hidden: { yPercent: 118, opacity: 0 },
  visible: {
    yPercent: 0,
    opacity: 1,
    // Heavy out-ease: fast departure, long settle. Reads as weight.
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function KineticHeadline({
  lines,
  className = '',
  delay = 0,
}: KineticHeadlineProps) {
  return (
    <motion.h1
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {lines.map((text) => (
        // The mask needs its own line box, and the inner span carries the
        // transform so the mask itself never moves.
        <span key={text} className="block overflow-hidden pb-[0.06em]">
          <motion.span variants={line} className="block will-change-transform">
            {text}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
