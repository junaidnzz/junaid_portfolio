import { motion } from 'framer-motion';
import Section from './ui/Section';
import CaseStudy from './CaseStudy';
import { experiences } from '../data/experience';
import { enterUp, spring, stagger, viewportOnce } from '../lib/motion';

/**
 * Dense and scannable. Recruiters read this section first and fastest, so
 * bullets stay visible rather than hiding behind a disclosure.
 */
export default function Career() {
  return (
    <Section
      id="career"
      title="Career"
      intro="Four companies across three countries. Two of the roles below overlap, which was deliberate: they ran concurrently."
    >
      <ol>
        {experiences.map((role, i) => (
          <motion.li
            key={role.id}
            variants={enterUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...spring, delay: stagger(i, 0.04) }}
            className="border-t border-rule first:border-ink"
          >
            <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="label">{role.period}</p>
                <p className="mt-2 text-small text-graphite">
                  {role.location}
                  {role.remote && ', remote'}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3>
                  {role.title}
                  <span className="text-graphite"> at </span>
                  {role.company}
                </h3>
                <p className="mt-2 max-w-prose text-graphite">{role.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {role.bullets.map((bullet) => (
                    <li key={bullet.text} className="flex max-w-prose gap-3 text-small">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-graphite/50" />
                      <span>{bullet.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-mono text-micro tracking-micro text-graphite">
                  {role.tech.join('  ·  ')}
                </p>

                {/* The deep dive lives under the role it belongs to, not at the
                    top of the page. Bullets summarise, this proves. */}
                {role.id === 'arena-club' && <CaseStudy />}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
