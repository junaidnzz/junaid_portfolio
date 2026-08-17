import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * A short opening sequence: a plan being surveyed before the drawing appears.
 *
 * Deliberately constrained. An intro that makes a recruiter wait is a cost, so
 * this one runs ~850ms, never blocks the content underneath (which is already
 * in the DOM and readable by crawlers), and skips itself entirely on a repeat
 * visit within the session or when reduced motion is requested.
 */
export default function Intro() {
  const [done, setDone] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('intro-seen') === '1';
    if (reduced || seen) return;

    setDone(false);
    const started = performance.now();
    const DURATION = 850;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - started) / DURATION, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem('intro-seen', '1');
        setDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="no-print fixed inset-0 z-[80] flex items-end justify-between bg-paper px-6 pb-6"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-small font-medium tracking-heading">Junaid Nazir</span>
          <span className="font-mono text-small tabular-nums text-graphite">
            {String(count).padStart(3, '0')}
          </span>

          {/* A rule drawing itself across the foot of the screen, so the wait
              is doing something rather than just being a wait. */}
          <motion.span
            aria-hidden
            className="absolute inset-x-6 bottom-0 h-px origin-left bg-ink"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
