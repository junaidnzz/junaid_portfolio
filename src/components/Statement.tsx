import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { experiences } from '../data/experience';
import Icon from './ui/Icon';
import CompanyLogo from './ui/CompanyLogo';
import SystemField from './hero/SystemField';
import KineticHeadline from './hero/KineticHeadline';
import { enterUp, spring } from '../lib/motion';

/** Periods are authored as "07/2022 – 12/2024". Take the opening year. */
const startYear = (period: string) => period.split('/')[1]?.slice(0, 4) ?? '';

const container = {
  hidden: {},
  visible: { transition: { delayChildren: 0.75, staggerChildren: 0.08 } },
};

export default function Statement() {
  const [current, ...previous] = experiences;

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      {/* The drawing sits behind everything and fades out under the type, so
          the headline never has to fight it for contrast. */}
      <SystemField className="pointer-events-none absolute inset-0 h-full w-full" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 12% 42%, #F7F7F5 32%, rgba(247,247,245,0.72) 55%, rgba(247,247,245,0) 78%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-shell px-6 pb-14 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="label mb-6 flex items-center gap-2.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {profile.availability}
        </motion.p>

        <KineticHeadline
          lines={['The systems', 'behind', 'AI products.']}
          delay={0.15}
          className="text-hero tracking-display font-semibold"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          transition={spring}
          className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12"
        >
          <motion.div variants={enterUp} className="md:col-span-6 lg:col-span-5">
            {/* The years figure comes from `profile`, never computed. A number
                derived at runtime will eventually disagree with the resume. */}
            <p className="text-lede text-graphite">
              {profile.title}. {profile.yearsExperience} years across e-commerce, travel,
              healthcare and Web3. Currently building AI into a live marketplace at{' '}
              {current.company}.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#arena-club"
                className="press inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-small font-medium text-paper transition-colors hover:bg-accent"
              >
                See the Arena Club rebuild
                <Icon name="arrow-down" className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="press inline-flex items-center gap-2 rounded border border-ink/25 px-5 py-3 text-small font-medium text-ink transition-colors hover:border-ink"
              >
                Email me
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Where the work has run. Recruiters scan employers before prose,
              and this reads faster than a wall of mismatched brand marks. */}
          <motion.dl
            variants={enterUp}
            className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
          >
            <div className="flex items-center justify-between gap-4 border-b border-ink/20 py-3">
              <dt className="flex items-center gap-3 text-small font-medium">
                <CompanyLogo id={current.id} className="h-6 w-6 rounded-sm object-contain" />
                {current.company}
              </dt>
              <dd className="label text-ink">Now</dd>
            </div>
            {previous.map((role) => (
              <div
                key={role.id}
                className="flex items-center justify-between gap-4 border-b border-rule py-3"
              >
                <dt className="flex items-center gap-3 text-small">
                  <CompanyLogo id={role.id} className="h-6 w-6 rounded-sm object-contain" />
                  {role.company}
                </dt>
                <dd className="label">{startYear(role.period)}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
