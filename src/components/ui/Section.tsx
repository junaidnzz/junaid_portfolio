import { ReactNode } from 'react';
import { motion } from 'framer-motion';

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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-accent mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{title}</h2>
          {intro && <p className="mt-4 max-w-2xl text-muted leading-relaxed">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
