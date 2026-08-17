import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { enterUp, spring, viewportOnce } from '../../lib/motion';

interface SectionProps {
  id: string;
  /**
   * Optional. Eyebrows are rationed: the taste rules cap them at one per three
   * sections, and they must carry real information rather than decorate.
   */
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-shell px-6">
        <motion.div
          variants={enterUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={spring}
          className="mb-12 md:mb-16"
        >
          {eyebrow && <p className="label mb-4">{eyebrow}</p>}
          <h2>{title}</h2>
          {intro && <p className="lede mt-5">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
