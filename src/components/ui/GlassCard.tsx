import { ReactNode, useMemo } from 'react';
import { motion } from 'framer-motion';
import { enterUp, materialize, spring, springQuick, viewportOnce } from '../../lib/motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Clickable cards get a hover lift and press-down response (§1). */
  interactive?: boolean;
  /**
   * Large glass surfaces materialise — blur and scale animate together so the
   * surface reads as a real material arriving (§12). Kept opt-in: blur is the
   * expensive property, so grid cards stay on transform + opacity (§11).
   */
  material?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  interactive = false,
  material = false,
}: GlassCardProps) {
  // The entrance carries its stagger delay on the variant itself, so the
  // press/hover springs stay delay-free — feedback must never wait (§1).
  const variants = useMemo(() => {
    const base = material ? materialize : enterUp;
    return { ...base, visible: { ...base.visible, transition: { ...spring, delay } } };
  }, [material, delay]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      // Gestures live on the motion element, not in CSS: motion owns the
      // inline transform, and a spring can be grabbed and reversed mid-flight
      // where a CSS transition cannot (§3).
      whileHover={interactive ? { y: -3 } : undefined}
      whileTap={interactive ? { scale: 0.985 } : undefined}
      transition={springQuick}
      className={`${material ? 'glass-strong' : 'glass-card'} glass-card-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}
