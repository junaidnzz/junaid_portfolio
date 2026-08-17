import { motion } from 'framer-motion';
import Section from './ui/Section';
import { claims, stack } from '../data/approach';
import { enterUp, spring, stagger, viewportOnce } from '../lib/motion';

export default function Approach() {
  return (
    <Section
      id="approach"
      title="How I work"
      intro="Three things I will claim in an interview, each with the work that backs it."
    >
      <div className="space-y-0">
        {claims.map((item, i) => (
          <motion.article
            key={item.id}
            variants={enterUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ ...spring, delay: stagger(i, 0.05) }}
            className="grid gap-6 border-t border-rule py-10 first:border-ink md:grid-cols-12 md:gap-8"
          >
            <h3 className="md:col-span-5">{item.claim}</h3>

            <div className="md:col-span-7">
              <p className="max-w-prose text-graphite">{item.detail}</p>

              <ul className="mt-6 space-y-3">
                {item.evidence.map((proof) => (
                  <li key={proof.what} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <span className="label pt-0.5">{proof.where}</span>
                    <span className="text-small">{proof.what}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        variants={enterUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={spring}
        className="border-t border-ink pt-10"
      >
        <h3 className="mb-6">Stack</h3>
        <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(stack).map(([group, items]) => (
            <div key={group}>
              <dt className="label mb-1.5">{group}</dt>
              <dd className="text-small text-graphite">{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </Section>
  );
}
