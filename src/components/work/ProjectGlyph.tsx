/**
 * One hand-authored diagram per project, each encoding what that system
 * actually does. Not procedural, not decorative: a marketplace pipeline reads
 * differently from a matching graph, and it should.
 *
 * All six share a 200x140 field and a 1.25 stroke so they read as one set.
 */

import type { ReactElement } from 'react';

type GlyphProps = { className?: string };

const frame = {
  viewBox: '0 0 200 140',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** Arena Club: intake runs a pipeline, and the model hangs off the middle of it. */
function ArenaClubGlyph({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className} aria-hidden>
      {[20, 68, 116, 164].map((x) => (
        <rect key={x} x={x} y={78} width={20} height={20} />
      ))}
      <path d="M40 88h28M88 88h28M136 88h28" />
      {/* the model, set apart and dashed: an external dependency, not a service */}
      <rect x={68} y={26} width={64} height={24} strokeDasharray="3 3" />
      <path d="M78 50v14a4 4 0 0 0 4 4h-4" />
      <path d="M78 50v18h12" strokeDasharray="2 3" />
      <path d="M122 50v18h-12" strokeDasharray="2 3" />
      <circle cx={100} cy={38} r={3} />
    </svg>
  );
}

/** HatchPath: matching. Two populations, edges chosen between them. */
function HatchPathGlyph({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className} aria-hidden>
      {[26, 62, 98].map((y) => (
        <circle key={y} cx={34} cy={y + 4} r={7} />
      ))}
      {[26, 62, 98].map((y) => (
        <rect key={y} x={152} y={y - 4} width={16} height={16} />
      ))}
      <path d="M41 30h60l51 36M41 66h40l71-32M41 102h70l41-32" />
      <path d="M41 66h111" strokeDasharray="3 4" />
    </svg>
  );
}

/** Virtua: a chain. Each block carries the one before it. */
function VirtuaGlyph({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className} aria-hidden>
      {[14, 60, 106, 152].map((x, i) => (
        <g key={x}>
          <rect x={x} y={48} width={34} height={44} />
          <path d={`M${x + 8} 60h18M${x + 8} 70h12`} />
          {i < 3 && <path d={`M${x + 34} 70h12`} />}
        </g>
      ))}
      <path d="M31 48V30h138v18" strokeDasharray="3 4" />
    </svg>
  );
}

/** DesignPro: a hub. Many cursors, one shared document. */
function DesignProGlyph({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className} aria-hidden>
      <rect x={76} y={52} width={48} height={36} />
      {[
        [30, 24],
        [170, 24],
        [24, 112],
        [176, 112],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <path d={`M${x} ${y}l7 18 3-8 8-3z`} />
          <path d={`M${x + 6} ${y + 8}L100 70`} strokeDasharray="2 4" />
        </g>
      ))}
      <path d="M86 64h28M86 74h16" />
    </svg>
  );
}

/** KAYAK: fan-in. Many providers collapse into one ranked answer. */
function KayakGlyph({ className }: GlyphProps) {
  return (
    <svg {...frame} className={className} aria-hidden>
      {[16, 44, 72, 100, 128].map((y) => (
        <rect key={y} x={14} y={y - 6} width={22} height={12} />
      ))}
      <path d="M36 16h40l24 54M36 44h30l34 26M36 72h64M36 100h30l34-30M36 128h40l24-58" />
      <circle cx={104} cy={70} r={6} />
      <path d="M110 70h30" />
      <rect x={140} y={52} width={46} height={36} />
      <path d="M148 62h30M148 70h22M148 78h26" />
    </svg>
  );
}

const glyphs: Record<string, (props: GlyphProps) => ReactElement> = {
  arenaclub: ArenaClubGlyph,
  hatchpath: HatchPathGlyph,
  virtua: VirtuaGlyph,
  designpro: DesignProGlyph,
  kayak: KayakGlyph,
};

export default function ProjectGlyph({ id, className }: { id: string; className?: string }) {
  const Glyph = glyphs[id];
  return Glyph ? <Glyph className={className} /> : null;
}
