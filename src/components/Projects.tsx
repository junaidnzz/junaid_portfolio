import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import Badge from './ui/Badge';
import { projects } from '../data/projects';
import { Icon } from '../data/icons';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// 05. projects"
      title="Things I've Built"
      intro="A selection of products I've shipped — AI-powered work first."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <GlassCard key={project.id} delay={i * 0.05} className="overflow-hidden flex flex-col">
            <div
              className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-end justify-between px-6 pb-4`}
            >
              <span className="font-mono text-xs text-muted tracking-micro">{project.category}</span>
              <span className="font-mono text-xs text-muted tracking-micro">{project.year}</span>
              {project.ai && (
                <span className="absolute top-4 left-6">
                  <Badge label="AI" icon="sparkles" accent />
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="press grid place-items-center w-10 h-10 -m-2 rounded-lg text-muted hover:text-accent transition-colors"
                  >
                    <Icon name="external-link" className="text-lg" />
                  </a>
                )}
              </div>
              <p className="font-mono text-xs text-accent/80 mb-3">{project.subtitle}</p>
              <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
