import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { experiences } from '../data/experience';
import { Icon } from '../data/icons';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="// 04. experience" title="Where I've Worked">
      <ol className="relative border-l border-white/10 ml-3 space-y-10">
        {experiences.map((role, i) => (
          <li key={role.id} className="pl-8 relative">
            <span className="absolute -left-[7px] top-7 w-3.5 h-3.5 rounded-full bg-base border-2 border-accent shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            <GlassCard delay={i * 0.05} className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg font-semibold text-white">
                  {role.title} <span className="text-accent">@ {role.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted">{role.period}</p>
              </div>
              <p className="font-mono text-xs text-muted mb-4 flex items-center gap-1.5">
                <Icon name="map-pin" className="text-accent/70" />
                {role.location}
                {role.remote && ' · Remote'}
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">{role.description}</p>
              <ul className="space-y-2 mb-5">
                {role.bullets.map((bullet) => (
                  <li key={bullet.text} className="flex items-start gap-2.5 text-sm text-ink/90">
                    <span className="text-accent mt-0.5">▸</span>
                    <span>
                      {bullet.text}
                      {bullet.ai && (
                        <span className="ml-2 align-middle inline-flex">
                          <Badge label="AI" icon="sparkles" accent />
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </GlassCard>
          </li>
        ))}
      </ol>
    </Section>
  );
}
