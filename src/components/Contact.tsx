import { motion } from 'framer-motion';
import Section from './ui/Section';
import { tints } from './ui/SectionMark';
import Icon from './ui/Icon';
import RecordingDot from './ui/RecordingDot';
import { profile } from '../data/profile';
import { enterUp, spring, stagger, viewportOnce } from '../lib/motion';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'junaid-nazir', href: profile.linkedin },
  { label: 'GitHub', value: 'junaid1840', href: profile.github },
  { label: 'Calendly', value: 'Book 30 minutes', href: profile.calendly },
  { label: 'WhatsApp', value: 'Message directly', href: profile.whatsapp },
];

export default function Contact() {
  return (
    <Section id="contact" icon="contact" tint={tints.contact} title="Get in touch" className="pb-16 md:pb-24">
      <div className="grid gap-12 md:grid-cols-12">
        <motion.div
          variants={enterUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={spring}
          className="md:col-span-5"
        >
          <p className="flex items-center gap-2.5 text-small">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availability}
          </p>
          <p className="mt-3 text-small text-graphite">{profile.location}</p>

          {/* One primary CTA. The CV sits beside it as a secondary action
              because a recruiter's first move is often to forward a file, not
              to write. */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="press inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-small font-medium text-white transition-colors hover:bg-ink"
            >
              Email me
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
            <a
              href={profile.cv}
              download
              className="press inline-flex items-center gap-2.5 rounded border border-ink/25 px-5 py-3 text-small font-medium transition-colors hover:border-ink"
            >
              <RecordingDot />
              Download CV
              <Icon name="download" className="h-4 w-4 text-graphite" />
            </a>
          </div>
        </motion.div>

        <div className="md:col-span-6 md:col-start-7">
          <dl>
            {channels.map((channel, i) => (
              <motion.div
                key={channel.label}
                variants={enterUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ ...spring, delay: stagger(i, 0.04) }}
                className="border-t border-rule first:border-ink"
              >
                <a
                  href={channel.href}
                  target={channel.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="press-subtle group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-accent"
                >
                  <dt className="label transition-colors group-hover:text-accent">
                    {channel.label}
                  </dt>
                  <dd className="flex items-baseline gap-2 text-small">
                    {channel.value}
                    <Icon
                      name="arrow-up-right"
                      className="h-3.5 w-3.5 translate-y-px text-graphite transition-colors group-hover:text-accent"
                    />
                  </dd>
                </a>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
