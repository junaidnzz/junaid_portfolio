import type { Transition, Variants } from 'framer-motion';

/**
 * Spring presets translated from Apple's designer-facing parameters
 * (damping ratio + response) to Motion's `bounce` + `visualDuration`.
 *
 *   damping 1.0 -> bounce 0    (critically damped, no overshoot)
 *   damping 0.8 -> bounce 0.2  (slight overshoot, momentum-driven only)
 *   response    -> visualDuration (seconds to visually reach the target)
 *
 * Default to `spring` everywhere. Reach for `springMomentum` only when the
 * interaction itself carried momentum (a flick, a throw, a drag release);
 * overshoot on something that merely faded in reads as wrong.
 */
export const spring: Transition = { type: 'spring', bounce: 0, visualDuration: 0.4 };

export const springQuick: Transition = { type: 'spring', bounce: 0, visualDuration: 0.25 };

export const springMomentum: Transition = { type: 'spring', bounce: 0.2, visualDuration: 0.4 };

/** Drawer / sheet: Apple ships damping 0.8, response 0.3. */
export const springSheet: Transition = { type: 'spring', bounce: 0.2, visualDuration: 0.3 };

/** Stagger helper — a single source of truth for entrance ordering. */
export const stagger = (index: number, step = 0.05) => index * step;

/**
 * Entrance for content arriving on scroll. Enter and exit share the same
 * path (§7 spatial consistency); the y offset stays small so the motion
 * reads as settling rather than travelling.
 */
export const enterUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: spring },
};

/**
 * Glass surfaces materialise — blur radius and scale animate together so the
 * surface reads as a real material arriving, not an opacity fade (§12).
 */
export const materialize: Variants = {
  hidden: { opacity: 0, scale: 0.97, filter: 'blur(8px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: spring },
};

export const viewportOnce = { once: true, margin: '-60px' } as const;
