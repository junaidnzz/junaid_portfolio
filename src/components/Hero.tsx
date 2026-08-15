import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { profile, stats } from '../data/profile';
import { Icon } from '../data/icons';
import GradientText from './ui/GradientText';

const socials = [
  { name: 'github', href: profile.github, label: 'GitHub' },
  { name: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
  { name: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="font-mono text-accent mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Junaid <GradientText>Nazir</GradientText>.
        </motion.h1>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-2xl md:text-4xl font-semibold text-muted mt-4 h-12 md:h-14"
        >
          <TypeAnimation
            sequence={profile.typingRoles.flatMap((role) => [role, 2200])}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl text-muted leading-relaxed mt-6"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <a
            href="#projects"
            className="glow-ring rounded-lg px-6 py-3 font-mono text-sm text-accent hover:bg-accent/10 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 px-6 py-3 font-mono text-sm text-ink hover:border-accent/40 hover:text-accent transition-colors"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-4 ml-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-muted hover:text-accent transition-colors text-xl"
              >
                <Icon name={social.name} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.dl
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-x-12 gap-y-6 mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-gradient">{stat.value}</dd>
              <dd className="font-mono text-xs text-muted mt-1">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
