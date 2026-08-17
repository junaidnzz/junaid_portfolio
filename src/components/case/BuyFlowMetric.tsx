import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface BuyFlowMetricProps {
  label: string;
  before: number;
  after: number;
  unit: string;
  /** The surface this sits on. `ink` drops the accent, which cannot carry
      contrast against near-black, and uses paper for the measured bar. */
  tone?: 'paper' | 'ink';
}

/**
 * The measurement, drawn the way a drawing would dimension it.
 *
 * The pair of numerals carries it at display scale, and underneath them two
 * bars on one shared scale with a dimension line across the gap that got
 * removed. The saving is annotated as a span rather than stated as a fact,
 * because the point is that it was measured, not asserted.
 *
 * No per-technique attribution appears here: the 20 seconds is a measured
 * total, and slicing it into four invented segments would be fiction.
 */
export default function BuyFlowMetric({
  label,
  before,
  after,
  unit,
  tone = 'paper',
}: BuyFlowMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(before);

  const afterPct = (after / before) * 100;
  const savedPct = 100 - afterPct;
  const ink = tone === 'ink';

  const c = {
    muted: ink ? 'text-paper/45' : 'text-graphite',
    strong: ink ? 'text-paper' : 'text-accent',
    rule: ink ? 'border-paper/20' : 'border-rule',
    line: ink ? 'text-paper/40' : 'text-graphite',
    barBefore: ink ? 'border-paper/25' : 'border-graphite/40',
    barAfter: ink ? 'bg-paper' : 'bg-accent',
    hatch: ink
      ? 'bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,rgba(247,247,245,0.12)_5px,rgba(247,247,245,0.12)_6px)]'
      : 'bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,rgba(107,107,114,0.14)_5px,rgba(107,107,114,0.14)_6px)]',
  };

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setShown(after);
      return;
    }
    const controls = animate(before, after, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setShown(value),
    });
    return () => controls.stop();
  }, [inView, reduced, before, after]);

  return (
    <div ref={ref} className="w-full">
      <p className={`label ${ink ? '!text-paper/50' : ''}`}>{label}</p>

      {/* The pair, at display scale: the old number struck through, the new one
          counting down to what was actually measured. */}
      <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <span
          className={`text-display tracking-display font-semibold tabular-nums line-through ${c.muted}`}
        >
          {before}
          {unit}
        </span>
        <span className={`text-display tracking-display font-semibold tabular-nums ${c.strong}`}>
          {Math.round(shown)}
          {unit}
        </span>
      </div>

      {/* Before: the full width of the scale, outlined rather than filled,
          because it is the thing being replaced. */}
      <div className="mb-5 mt-10">
        <div className="mb-2 flex items-baseline justify-between">
          <span className={`text-small ${c.muted}`}>Before</span>
          <span className={`font-mono text-small tabular-nums ${c.muted}`}>
            {before}
            {unit}
          </span>
        </div>
        <div className={`h-9 w-full rounded-sm border ${c.barBefore} ${c.hatch}`} />
      </div>

      {/* After: solid, and it retracts to its real width on entry so the
          shortening is the thing you actually watch happen. */}
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className={`text-small font-medium ${ink ? 'text-paper' : ''}`}>After</span>
          <span className={`font-mono text-small tabular-nums font-medium ${c.strong}`}>
            {Math.round(shown)}
            {unit}
          </span>
        </div>
        <div className="relative h-9 w-full">
          <div
            className={`h-9 rounded-sm ${c.barAfter}`}
            style={{
              width: `${(shown / before) * 100}%`,
              // Width is not a compositor property, but this animates once,
              // on one element, on entry. The clarity is worth the paint.
              willChange: 'width',
            }}
          />

          {/* The dimension line, in the drafting language the rest of the page
              uses: witness lines at each end, arrows, measurement centred. */}
          <div
            className="absolute inset-y-0 right-0 flex items-center"
            style={{ width: `${savedPct}%` }}
          >
            <svg
              viewBox="0 0 100 36"
              preserveAspectRatio="none"
              className={`absolute inset-0 h-full w-full ${c.line}`}
              aria-hidden
            >
              <path
                d="M1 4v28M99 4v28"
                stroke="currentColor"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <svg
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              className={`absolute left-0 right-0 top-1/2 h-3 w-full -translate-y-1/2 ${c.line}`}
              aria-hidden
            >
              <path
                d="M2 6h96M2 6l5-3M2 6l5 3M98 6l-5-3M98 6l-5 3"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>

        <p
          className={`mt-3 text-right font-mono text-micro uppercase tracking-micro ${c.muted}`}
          style={{ width: `${savedPct}%`, marginLeft: `${afterPct}%` }}
        >
          {before - after}
          {unit} removed
        </p>
      </div>

      {/* The scale the bars are read against. */}
      <div className={`mt-6 flex justify-between border-t pt-2 ${c.rule}`}>
        {[0, before / 2, before].map((tick) => (
          <span key={tick} className={`font-mono text-micro tabular-nums ${c.muted}`}>
            {tick}
            {unit}
          </span>
        ))}
      </div>
    </div>
  );
}
