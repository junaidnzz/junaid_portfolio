import { motion, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { profile, stats } from '../data/profile';
import { Icon } from '../data/icons';
import GradientText from './ui/GradientText';
import { enterUp, spring } from '../lib/motion';

const socials = [
  { name: 'github', href: profile.github, label: 'GitHub' },
  { name: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
  { name: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
];

// One container drives the entrance ordering, so every child settles on the
// same spring instead of each carrying its own hand-tuned duration.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="min-h-screen flex items-center pt-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        transition={spring}
        className="max-w-6xl mx-auto px-6 w-full"
      >
        <motion.p variants={enterUp} className="font-mono text-accent tracking-micro mb-5">
          Hi, my name is
        </motion.p>

        {/* Display type: negative tracking and tight leading as it grows (§15). */}
        <motion.h1
          variants={enterUp}
          className="font-display text-5xl md:text-7xl font-bold text-white tracking-display leading-[1.03]"
        >
          Junaid <GradientText>Nazir</GradientText>.
        </motion.h1>

        <motion.div
          variants={enterUp}
          className="font-display text-2xl md:text-4xl font-semibold text-muted tracking-heading mt-4 h-12 md:h-14"
        >
          {/* Reduced motion gets the meaning without the animation (§14). */}
          {reduceMotion ? (
            <span>{profile.typingRoles[0]}</span>
          ) : (
            <TypeAnimation
              sequence={profile.typingRoles.flatMap((role) => [role, 2200])}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          )}
        </motion.div>

        <motion.p variants={enterUp} className="max-w-xl text-muted leading-relaxed mt-6">
          {profile.summary}
        </motion.p>

        <motion.div variants={enterUp} className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href="#projects"
            className="press glow-ring rounded-lg px-6 py-3 font-mono text-sm text-accent tracking-micro hover:bg-accent/10 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="press rounded-lg border border-white/15 px-6 py-3 font-mono text-sm text-ink tracking-micro hover:border-accent/40 hover:text-accent transition-colors"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-2 ml-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                // Generous hit area — the icon is small, the target should not be (§10).
                className="press grid place-items-center w-11 h-11 -m-1 rounded-lg text-muted hover:text-accent transition-colors text-xl"
              >
                <Icon name={social.name} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.dl variants={enterUp} className="flex flex-wrap gap-x-12 gap-y-6 mt-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-gradient tracking-heading">
                {stat.value}
              </dd>
              <dd className="font-mono text-xs text-muted tracking-micro mt-1">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
