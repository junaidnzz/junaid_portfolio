import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CompanyLogo from './ui/CompanyLogo';
import SectionMark, { tints } from './ui/SectionMark';
import Icon from './ui/Icon';
import ProjectGlyph from './work/ProjectGlyph';
import { projects } from '../data/projects';
import { enterUp, spring, viewportOnce } from '../lib/motion';

/**
 * Art-directed panels rather than a card grid. Each project owns a full band,
 * carries its own system glyph, and the lead project inverts to accent so the
 * section has one point of maximum contrast instead of six equal ones.
 */
export default function Work() {
  const root = useRef<HTMLElement>(null);

  // GSAP arrives in its own chunk, after first paint. Scroll choreography is
  // worth ~50 kB gzip, but not worth it sitting in front of the hero.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    import('../lib/gsap').then(({ gsap }) => {
      if (cancelled || !root.current) return;

      ctx = gsap.context(() => {
        // Each glyph drifts against its panel as it passes. Parallax here is
        // doing a job: it separates the drawing layer from the type layer.
        // Hidden on phones, so there is nothing to parallax there either.
        const glyphs = gsap.utils
          .toArray<HTMLElement>('[data-glyph]')
          .filter((glyph) => glyph.offsetParent !== null);

        glyphs.forEach((glyph) => {
          gsap.fromTo(
            glyph,
            { yPercent: -9 },
            {
              yPercent: 9,
              ease: 'none',
              scrollTrigger: { trigger: glyph, start: 'top bottom', end: 'bottom top', scrub: 1 },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>('[data-panel]').forEach((panel) => {
          gsap.from(panel.querySelectorAll('[data-panel-item]'), {
            yPercent: 60,
            opacity: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.06,
            scrollTrigger: { trigger: panel, start: 'top 78%' },
          });
        });
      }, root);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const [lead, ...rest] = projects;

  return (
    <section ref={root} id="work" className="scroll-mt-20 py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <motion.div
          variants={enterUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={spring}
          className="mb-8 flex items-center gap-4 md:mb-10"
        >
          <SectionMark icon="work" tint={tints.work} />
          <h2>Selected work</h2>
        </motion.div>
      </div>

      {/* The lead panel is the section's loudest moment: full bleed, inverted. */}
      <article data-panel className="bg-accent text-white">
        <div className="mx-auto max-w-shell px-6 py-12 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p data-panel-item className="font-mono text-micro uppercase tracking-micro text-white/70">
                {lead.category} · {lead.year}
              </p>
              {/* The company's own mark sits on the name's line, not on one of
                  its own: it is identification, not a banner. */}
              <h3
                data-panel-item
                className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4 text-display tracking-display font-semibold leading-[0.95]"
              >
                <CompanyLogo id={lead.id} tone="ink" className="h-14 shrink-0 md:h-16" />
                {lead.title}
              </h3>
              <p data-panel-item className="mt-5 text-lede text-white/90">
                {lead.subtitle}
              </p>
              <p data-panel-item className="mt-5 max-w-prose text-white/80">
                {lead.description}
              </p>
              <p
                data-panel-item
                className="mt-8 font-mono text-micro tracking-micro text-white/70"
              >
                {lead.technologies.join('  ·  ')}
              </p>
              {lead.link && (
                <a
                  data-panel-item
                  href={lead.link}
                  target="_blank"
                  rel="noreferrer"
                  className="press mt-9 inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-small font-medium text-accent transition-colors hover:bg-ink hover:text-white"
                >
                  Visit {lead.title}
                  <Icon name="arrow-up-right" className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* The system drawings are hidden on phones: at that width they
                shrink to an unreadable tangle and push the copy down a screen
                for no gain. */}
            <div data-glyph className="hidden md:col-span-5 md:block">
              <ProjectGlyph id={lead.id} className="w-full text-white/70" />
            </div>
          </div>
        </div>
      </article>

      <div className="mx-auto max-w-shell px-6">
        {rest.map((project, i) => (
          <article
            data-panel
            key={project.id}
            className="grid items-center gap-8 border-b border-rule py-12 md:grid-cols-12 md:gap-12"
          >
            {/* Alternating sides, but the glyph never sits on the same side
                more than twice running. */}
            <div
              data-glyph
              className={`hidden md:block md:col-span-4 ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
            >
              <ProjectGlyph id={project.id} className="w-full max-w-[280px] text-graphite" />
            </div>

            <div className={`md:col-span-8 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <p data-panel-item className="label">
                {project.category} · {project.year}
              </p>
              <h3
                data-panel-item
                className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-h2 tracking-heading font-semibold"
              >
                <CompanyLogo id={project.id} className="h-9 shrink-0" />
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline gap-2 transition-colors hover:text-accent"
                  >
                    {project.title}
                    <Icon
                      name="arrow-up-right"
                      className="h-5 w-5 translate-y-px text-graphite transition-colors group-hover:text-accent"
                    />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p data-panel-item className="mt-3 text-lede text-ink">
                {project.subtitle}
              </p>
              <p data-panel-item className="mt-4 max-w-prose text-graphite">
                {project.description}
              </p>
              <p data-panel-item className="mt-6 font-mono text-micro tracking-micro text-graphite">
                {project.technologies.join('  ·  ')}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
