import { motion } from 'framer-motion';
import { arenaClub } from '../content/arena-club';
import BuyFlowMetric from './case/BuyFlowMetric';
import CompanyLogo from './ui/CompanyLogo';
import Disclosure from './ui/Disclosure';
import Icon from './ui/Icon';
import { enterUp, spring, stagger, viewportOnce } from '../lib/motion';

/**
 * The Arena Club deep dive, nested inside that role in Career rather than
 * standing alone at the top of the page. Detail belongs next to the job it
 * came from: the reader meets the role first, then the evidence for it.
 *
 * It inverts to ink because it is the one place on the page where a claim is
 * proved rather than stated, and a light page can afford exactly one moment
 * of maximum contrast. Headings start at h4: the role title above is the h3.
 */
export default function CaseStudy() {
  return (
    <motion.article
      id="arena-club"
      variants={enterUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={spring}
      className="mt-9 scroll-mt-28 overflow-hidden rounded-lg bg-ink text-paper"
    >
      <div className="p-6 md:p-10">
        {/* Whose work this is, in their mark rather than in more of my type. */}
        <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-paper/15 pb-6">
          <div className="flex items-center gap-4">
            <CompanyLogo id="arenaclub" tone="ink" className="h-10 md:h-12" />
            <span className="label !text-paper/55">The buy flow rebuild</span>
          </div>
          <a
            href={arenaClub.link}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex items-center gap-2 font-mono text-micro uppercase tracking-micro text-paper/60 transition-colors hover:text-paper"
          >
            arenaclub.com
            <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
          </a>
        </header>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-14">
          {/* The number leads. Everything else on this panel is the reason to
              believe it. */}
          <div className="md:col-span-7">
            <BuyFlowMetric {...arenaClub.metric} tone="ink" />
          </div>

          <div className="md:col-span-5">
            <h4 className="text-h3 tracking-heading font-medium">{arenaClub.claim}</h4>
            <p className="mt-4 text-small text-paper/65">{arenaClub.context}</p>

            <p className="mt-8 font-mono text-micro tracking-micro text-paper/45">
              {arenaClub.stack.join('  ·  ')}
            </p>
          </div>
        </div>

        {/* The structural work, given its own band: it is the reason the
            number moved, and it reads as a footnote squeezed into a column. */}
        <div className="mt-12 grid gap-x-12 gap-y-4 border-t border-paper/15 pt-8 md:grid-cols-12">
          <p className="label !text-paper/45 md:col-span-4">{arenaClub.architecture.claim}</p>
          <p className="max-w-prose text-small text-paper/65 md:col-span-8">
            {arenaClub.architecture.detail}
          </p>
        </div>

        {/* Four levers, always visible in plain language. The engineering
            reasoning sits one level down for whoever wants it. */}
        <div className="mt-12 border-t border-paper/15 pt-10">
          <h5 className="label !text-paper/55">How the 20 seconds came out</h5>

          <ol className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {arenaClub.techniques.map((technique, i) => (
              <motion.li
                key={technique.name}
                variants={enterUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ ...spring, delay: stagger(i, 0.05) }}
                className="flex items-baseline gap-4 border-t border-paper/10 pt-5"
              >
                <span className="font-mono text-micro tabular-nums text-paper/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  {/* Not a heading: these are steps in an ordered list, and
                      pushing to h6 under the role would be depth for its own
                      sake. */}
                  <p className="tracking-heading font-medium">{technique.name}</p>
                  <p className="mt-1.5 text-small text-paper/60">{technique.plain}</p>
                  <div className="mt-3">
                    <Disclosure label="Why it mattered here" openLabel="Close" tone="ink">
                      <p className="max-w-prose text-small text-paper/65">{technique.detail}</p>
                    </Disclosure>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          <p className="mt-10 max-w-prose text-small text-paper/45">
            The 20 seconds is the measured end to end result. It is not split across the four
            levers above, because that breakdown was never measured separately and inventing it
            would make the rest of this page less trustworthy.
          </p>
        </div>
      </div>
    </motion.article>
  );
}
