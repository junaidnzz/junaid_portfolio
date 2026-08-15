import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { enterUp, spring, viewportOnce } from '../../lib/motion';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={enterUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={spring}
          className="mb-14"
        >
          {/* Small mono text takes slightly positive tracking (§15). */}
          <p className="font-mono text-sm text-accent tracking-micro mb-3">{eyebrow}</p>
          {/* Hierarchy from weight + size + leading as a set, not size alone. */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-heading">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-muted leading-relaxed">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
