import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { skillCategories } from '../data/skills';
import { Icon } from '../data/icons';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// 03. skills"
      title="Technology Stack"
      intro="The tools I reach for — with AI engineering now a first-class part of the stack."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {skillCategories.map((category, i) => (
          <GlassCard
            key={category.id}
            delay={i * 0.06}
            className={`p-6 ${category.highlight ? 'border-accent/30' : ''}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent text-xl">
                <Icon name={category.icon} />
              </span>
              <h3 className="font-display font-semibold text-white">{category.title}</h3>
              {category.highlight && <Badge label="focus" accent />}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill.name} label={skill.name} icon={skill.icon} accent={category.highlight} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
