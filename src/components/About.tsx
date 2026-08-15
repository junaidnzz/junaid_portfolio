import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { aboutNarrative, coreCompetencies, aboutStats } from '../data/about';
import { Icon } from '../data/icons';

export default function About() {
  return (
    <Section id="about" eyebrow="// 01. about" title="About Me">
      <div className="max-w-3xl space-y-4 mb-14">
        {aboutNarrative.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {coreCompetencies.map((competency, i) => (
          <GlassCard key={competency.id} delay={i * 0.06} className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent text-xl">
                <Icon name={competency.icon} />
              </span>
              <h3 className="font-display font-semibold text-white">{competency.title}</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">{competency.description}</p>
            <div className="flex flex-wrap gap-2">
              {competency.skills.map((skill) => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="glass-card mt-14 px-8 py-6 flex flex-wrap justify-between gap-x-10 gap-y-6">
        {aboutStats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
            <p className="font-mono text-xs text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
