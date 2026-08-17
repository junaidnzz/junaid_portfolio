import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import SectionMark from './SectionMark';
import { type IconName } from './Icon';
import { enterUp, spring, viewportOnce } from '../../lib/motion';

interface SectionProps {
  id: string;
  /**
   * Optional. Eyebrows are rationed: the taste rules cap them at one per three
   * sections, and they must carry real information rather than decorate.
   */
  eyebrow?: string;
  /** A mark for the section, tinted so a fast scroll has distinct landmarks. */
  icon?: IconName;
  tint?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  icon,
  tint = '#2B44C7',
  title,
  intro,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-shell px-6">
        <motion.div
          variants={enterUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={spring}
          className="mb-8 md:mb-10"
        >
          {eyebrow && <p className="label mb-3">{eyebrow}</p>}
          <div className="flex items-center gap-4">
            {icon && <SectionMark icon={icon} tint={tint} />}
            <h2>{title}</h2>
          </div>
          {intro && <p className="lede mt-4">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
