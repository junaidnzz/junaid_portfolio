import { motion } from 'framer-motion';
import Icon, { type IconName } from './Icon';
import { spring, viewportOnce } from '../../lib/motion';

/**
 * The mark beside a section heading: a tinted tile whose colour wipes up from
 * the base as the section arrives, then fills solid on hover.
 *
 * Each section gets its own hue so a fast scroll has distinct landmarks rather
 * than five identical grey squares. The tints are dark enough to clear 3:1
 * against paper, which is the bar for a graphic that carries meaning.
 */

export const tints = {
  work: '#2B44C7',
  approach: '#7C3AED',
  career: '#B45309',
  game: '#0F766E',
  contact: '#0B6E9E',
} as const;

const wipe = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { ...spring, delay: 0.12 } },
};

const pop = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: spring },
};

export default function SectionMark({ icon, tint }: { icon: IconName; tint: string }) {
  return (
    <motion.span
      variants={pop}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="group/mark relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded border transition-colors duration-200"
      style={{ borderColor: `${tint}40`, color: tint }}
    >
      <motion.span
        aria-hidden
        variants={wipe}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="absolute inset-0 origin-bottom transition-colors duration-200 group-hover/mark:opacity-0"
        style={{ backgroundColor: `${tint}1A` }}
      />
      {/* The solid state lives underneath and is revealed on hover, so the
          colour change is one transition rather than two fighting. */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover/mark:opacity-100"
        style={{ backgroundColor: tint }}
      />
      <Icon
        name={icon}
        className="relative h-5 w-5 transition-colors duration-200 group-hover/mark:text-paper"
      />
    </motion.span>
  );
}
