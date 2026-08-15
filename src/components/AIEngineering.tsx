import Section from './ui/Section';
import GlassCard from './ui/GlassCard';
import { aiHighlights, terminalLines } from '../data/ai';
import { Icon } from '../data/icons';

export default function AIEngineering() {
  return (
    <Section
      id="ai"
      eyebrow="// 02. ai engineering"
      title="Building With AI, Every Day"
      intro="Not AI hype — shipped software. I integrate LLMs into production products and run an AI-augmented engineering workflow end to end."
    >
      <div className="grid lg:grid-cols-[1fr_minmax(0,380px)] gap-10 items-start">
        <div className="space-y-5">
          {aiHighlights.map((highlight, i) => (
            <GlassCard key={highlight.title} delay={i * 0.08} className="p-6">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center shrink-0 w-11 h-11 rounded-lg bg-accent/10 text-accent text-xl">
                  <Icon name={highlight.icon} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">{highlight.description}</p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1">
                    {highlight.points.map((point) => (
                      <li key={point} className="font-mono text-xs text-accent/80 flex items-center gap-1.5">
                        <span className="text-accent">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard delay={0.15} className="overflow-hidden lg:sticky lg:top-24">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-xs text-muted">junaid@dev ~ %</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-2.5">
            {terminalLines.map((line) => (
              <p key={line.text} className={line.prompt ? 'text-ink' : 'text-muted'}>
                {line.prompt ? (
                  <>
                    <span className="text-accent">$ </span>
                    {line.text}
                  </>
                ) : (
                  <span className="text-emerald-400/80">{line.text}</span>
                )}
              </p>
            ))}
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}
