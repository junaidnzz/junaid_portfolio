import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import { profile } from '../data/profile';
import { Icon } from '../data/icons';

const channels = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'linkedin', label: 'LinkedIn', value: 'junaid-nazir', href: profile.linkedin },
  { icon: 'github', label: 'GitHub', value: 'junaid1840', href: profile.github },
  { icon: 'message-circle', label: 'WhatsApp', value: 'Chat directly', href: profile.whatsapp },
  { icon: 'calendar', label: 'Calendly', value: 'Book 30 minutes', href: profile.calendly },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="// 06. contact"
      title="Let's Build Something Intelligent"
      intro="I'm open to interesting products, AI feature work, and senior engineering roles. My inbox is always open."
    >
      <div className="flex items-center gap-2 mb-10 font-mono text-sm text-emerald-400">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
        Available for new projects
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {channels.map((channel, i) => (
          <GlassCard key={channel.label} delay={i * 0.05} className="p-0">
            <a
              href={channel.href}
              target={channel.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="flex items-center gap-4 p-5 group"
            >
              <span className="grid place-items-center w-11 h-11 rounded-lg bg-accent/10 text-accent text-xl">
                <Icon name={channel.icon} />
              </span>
              <span>
                <span className="block font-display font-semibold text-white group-hover:text-accent transition-colors">
                  {channel.label}
                </span>
                <span className="block font-mono text-xs text-muted mt-0.5">{channel.value}</span>
              </span>
            </a>
          </GlassCard>
        ))}
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="inline-block glow-ring rounded-lg px-8 py-4 font-mono text-accent hover:bg-accent/10 transition-colors"
      >
        Say hello →
      </a>
    </Section>
  );
}
