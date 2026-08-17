import { useEffect, useRef } from 'react';
import { createRng } from '../../lib/rng';

/**
 * An ambient architecture drawing: nodes on a grid, orthogonal connectors, and
 * packets moving along them.
 *
 * The headline names the systems behind AI products, so the hero art is a
 * system with traffic
 * running through it rather than a generic particle field. Everything is drawn
 * at hairline weight so the headline stays the loudest thing on screen.
 */

const COLORS = {
  line: '#DDDDD8',
  node: '#6B6B72',
  accent: '#2B44C7',
};

const GRID = 132; // px between grid slots at 1x
const CORNER = 8; // connector corner radius

interface Node {
  x: number;
  y: number;
  size: number;
  /** Phase offset so nodes do not all breathe in unison. */
  phase: number;
}

interface Edge {
  a: number;
  b: number;
  /** true routes horizontal-then-vertical, false the other way. */
  hFirst: boolean;
  length: number;
  packet: { t: number; speed: number; active: boolean };
}

function buildGraph(width: number, height: number) {
  const rng = createRng(20260816);
  const cols = Math.max(3, Math.ceil(width / GRID) + 1);
  const rows = Math.max(3, Math.ceil(height / GRID) + 1);

  const nodes: Node[] = [];
  for (let cx = 0; cx < cols; cx += 1) {
    for (let cy = 0; cy < rows; cy += 1) {
      // Leave gaps. A fully populated grid reads as wallpaper, not a system.
      if (rng() > 0.42) continue;
      nodes.push({
        x: cx * GRID + (rng() - 0.5) * GRID * 0.4,
        y: cy * GRID + (rng() - 0.5) * GRID * 0.4,
        size: rng() > 0.82 ? 7 : 4,
        phase: rng() * Math.PI * 2,
      });
    }
  }

  // Connect each node to a near neighbour to the right or below, so the graph
  // reads as directional flow rather than a cobweb.
  const edges: Edge[] = [];
  nodes.forEach((node, i) => {
    const candidates = nodes
      .map((other, j) => ({ j, other, d: Math.hypot(other.x - node.x, other.y - node.y) }))
      .filter((c) => c.j !== i && c.d < GRID * 1.9 && c.other.x >= node.x)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2);

    candidates.forEach((c) => {
      if (rng() > 0.62) return;
      const dx = Math.abs(c.other.x - node.x);
      const dy = Math.abs(c.other.y - node.y);
      edges.push({
        a: i,
        b: c.j,
        hFirst: rng() > 0.5,
        length: dx + dy,
        packet: { t: rng(), speed: 0.06 + rng() * 0.1, active: rng() > 0.55 },
      });
    });
  });

  return { nodes, edges };
}

/** Manhattan route with a rounded corner, drawn the way a plan would be. */
function traceEdge(ctx: CanvasRenderingContext2D, from: Node, to: Node, hFirst: boolean) {
  const corner = { x: hFirst ? to.x : from.x, y: hFirst ? from.y : to.y };
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.arcTo(corner.x, corner.y, to.x, to.y, CORNER);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
}

/** Position along the L path at progress t. */
function pointOnEdge(from: Node, to: Node, hFirst: boolean, t: number) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const total = Math.abs(dx) + Math.abs(dy);
  if (total === 0) return { x: from.x, y: from.y };
  const travelled = t * total;
  const first = hFirst ? Math.abs(dx) : Math.abs(dy);

  if (travelled <= first) {
    const p = first === 0 ? 0 : travelled / first;
    return hFirst ? { x: from.x + dx * p, y: from.y } : { x: from.x, y: from.y + dy * p };
  }
  const p = (travelled - first) / (total - first || 1);
  return hFirst ? { x: to.x, y: from.y + dy * p } : { x: from.x + dx * p, y: to.y };
}

export default function SystemField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let graph = { nodes: [] as Node[], edges: [] as Edge[] };
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = true;
    let last = performance.now();
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      // Cap at 2x. Beyond that the cost is real and the gain is not visible.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      graph = buildGraph(width, height);
    };

    const draw = (time: number) => {
      const dt = Math.min((time - last) / 1000, 0.05);
      last = time;

      // Ease the pointer so proximity emphasis glides instead of snapping.
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      graph.edges.forEach((edge) => {
        const from = graph.nodes[edge.a];
        const to = graph.nodes[edge.b];
        const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
        const near = 1 - Math.min(Math.hypot(mid.x - pointer.x, mid.y - pointer.y) / 260, 1);

        ctx.strokeStyle = COLORS.line;
        ctx.globalAlpha = 0.55 + near * 0.45;
        traceEdge(ctx, from, to, edge.hFirst);

        if (reduced || !edge.packet.active) return;

        edge.packet.t += edge.packet.speed * dt;
        if (edge.packet.t > 1.35) edge.packet.t = -0.1;
        if (edge.packet.t < 0 || edge.packet.t > 1) return;

        const p = pointOnEdge(from, to, edge.hFirst, edge.packet.t);
        // Fade in and out at the ends so packets arrive rather than pop.
        const fade = Math.min(edge.packet.t, 1 - edge.packet.t) * 6;
        ctx.globalAlpha = Math.min(fade, 1) * (0.5 + near * 0.5);
        ctx.fillStyle = COLORS.accent;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      graph.nodes.forEach((node) => {
        const near = 1 - Math.min(Math.hypot(node.x - pointer.x, node.y - pointer.y) / 220, 1);
        const breathe = reduced ? 0 : Math.sin(time / 1400 + node.phase) * 0.5;
        const s = node.size + breathe + near * 2;

        ctx.globalAlpha = 0.5 + near * 0.5;
        ctx.strokeStyle = near > 0.55 ? COLORS.accent : COLORS.node;
        ctx.strokeRect(node.x - s / 2, node.y - s / 2, s, s);
      });

      ctx.globalAlpha = 1;
      if (running && !reduced) frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.tx = -9999;
      pointer.ty = -9999;
    };

    // Stop the loop whenever the drawing is not on screen. An animation nobody
    // can see is pure battery cost.
    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduced) {
          last = performance.now();
          frame = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0 }
    );

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduced) draw(performance.now());
    });

    resize();
    observer.observe(canvas);
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });

    if (reduced) draw(performance.now());
    else frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
