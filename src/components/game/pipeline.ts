/**
 * A one-button arcade game: fly a packet through a deployment pipeline.
 *
 * The engine is deliberately free of React. It owns numbers and pixels, the
 * component owns the loop and the DOM, and the two only meet through `step`
 * and `draw`. That split is what keeps a 60fps loop from re-rendering a tree
 * sixty times a second.
 *
 * The packet is the same square that travels the connectors in the hero
 * drawing, so the game reads as part of the page rather than a widget dropped
 * onto it.
 */

const GRAVITY = 1500; // px/s²
const FLAP = -430; // px/s, applied as a set rather than an add: taps stay predictable
const PACKET = 14; // px, square
const PACKET_X = 0.28; // fraction of the field width
const GATE_WIDTH = 26;
const GAP_START = 165;
const GAP_MIN = 120;
const GAP_TIGHTEN = 4; // px per gate cleared
const SPEED_START = 190; // px/s
const SPEED_GAIN = 5; // per gate cleared
const SPEED_MAX = 330;
/** Spacing and gap scale with the field: a 250px stride on a 340px phone
    screen leaves no room to react. */
function gateSpacing(width: number) {
  return Math.max(165, Math.min(250, width * 0.5));
}

export interface Gate {
  x: number;
  /** Centre of the gap, in px from the top. */
  gapY: number;
  gap: number;
  passed: boolean;
  label: string;
}

export interface GameState {
  y: number;
  vy: number;
  gates: Gate[];
  score: number;
  status: 'demo' | 'running' | 'over';
  /** Scrolls the background rule so the world reads as moving, not the packet. */
  offset: number;
}

/** The stages a change passes on its way to production, reused in order. */
const STAGES = ['lint', 'types', 'unit', 'build', 'e2e', 'review', 'canary', 'prod'];

export function createState(height: number): GameState {
  return { y: height / 2, vy: 0, gates: [], score: 0, status: 'demo', offset: 0 };
}

export function flap(state: GameState) {
  if (state.status === 'over') return;
  state.status = 'running';
  state.vy = FLAP;
}

/** Taking over from the autopilot starts a clean run, not a mid-air handover. */
export function takeOver(height: number): GameState {
  const fresh = createState(height);
  fresh.status = 'running';
  fresh.vy = FLAP;
  return fresh;
}

function speedFor(score: number) {
  return Math.min(SPEED_MAX, SPEED_START + score * SPEED_GAIN);
}

function gapFor(score: number, height: number) {
  const start = Math.min(GAP_START, height * 0.45);
  return Math.max(Math.min(GAP_MIN, height * 0.34), start - score * GAP_TIGHTEN);
}

function spawn(state: GameState, width: number, height: number) {
  const gap = gapFor(state.score, height);
  // Keep the gap clear of the rails so no gate is unreachable from any height.
  const margin = gap / 2 + Math.min(34, height * 0.09);
  const gapY = margin + Math.random() * (height - margin * 2);
  state.gates.push({
    x: width,
    gapY,
    gap,
    passed: false,
    label: STAGES[state.gates.length % STAGES.length],
  });
}

/**
 * Advance the world by `dt` seconds. Returns true if this step ended the run,
 * so the component can record a best score without polling state every frame.
 */
export function step(state: GameState, dt: number, width: number, height: number): boolean {
  if (state.status === 'over') return false;

  const demo = state.status === 'demo';

  // Attract mode: an autopilot flies the field so the section is never a
  // static box waiting to be understood. It aims at the next gap and taps
  // slightly late, which looks like a person playing rather than a solver.
  if (demo) {
    const next = state.gates.find((gate) => gate.x + GATE_WIDTH > width * PACKET_X);
    const target = next ? next.gapY : height / 2;
    if (state.y > target + 6 && state.vy > -80) state.vy = FLAP * 0.86;
  }

  const speed = speedFor(state.score);
  state.offset = (state.offset + speed * dt) % 40;

  state.vy += GRAVITY * dt;
  state.y += state.vy * dt;

  const last = state.gates[state.gates.length - 1];
  if (!last || width - last.x >= gateSpacing(width)) spawn(state, width, height);

  const x = width * PACKET_X;
  const half = PACKET / 2;

  for (const gate of state.gates) {
    gate.x -= speed * dt;

    const overlapsX = gate.x < x + half && gate.x + GATE_WIDTH > x - half;
    const missesGap = state.y - half < gate.gapY - gate.gap / 2 || state.y + half > gate.gapY + gate.gap / 2;
    if (!demo && overlapsX && missesGap) {
      state.status = 'over';
      return true;
    }

    if (!gate.passed && gate.x + GATE_WIDTH < x - half) {
      gate.passed = true;
      state.score += 1;
    }
  }

  state.gates = state.gates.filter((gate) => gate.x + GATE_WIDTH > -10);

  // The rails are solid. Clipping through the floor is how a flappy game stops
  // being a game. In attract mode nothing can end the run.
  if (demo) {
    state.y = Math.min(Math.max(state.y, half), height - half);
    return false;
  }

  if (state.y + half > height || state.y - half < 0) {
    state.y = Math.min(Math.max(state.y, half), height - half);
    state.status = 'over';
    return true;
  }

  return false;
}

const INK = '#16161A';
const PAPER = '#F7F7F5';
const RULE = '#DDDDD8';
const GRAPHITE = '#6B6B72';
const ACCENT = '#2B44C7';
/** The player. Red because the thing you are flying should be the loudest
    object on the field, and the accent is already spent on the gates. */
const PACKET_COLOR = '#D93025';

export function draw(ctx: CanvasRenderingContext2D, state: GameState, width: number, height: number) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, width, height);

  // Drafting rule, scrolling: the world moves, the packet holds its lane.
  ctx.strokeStyle = RULE;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = -state.offset; x < width; x += 40) {
    ctx.moveTo(Math.round(x) + 0.5, 0);
    ctx.lineTo(Math.round(x) + 0.5, height);
  }
  ctx.stroke();

  ctx.strokeStyle = INK;
  ctx.beginPath();
  ctx.moveTo(0, 0.5);
  ctx.lineTo(width, 0.5);
  ctx.moveTo(0, height - 0.5);
  ctx.lineTo(width, height - 0.5);
  ctx.stroke();

  for (const gate of state.gates) {
    const top = gate.gapY - gate.gap / 2;
    const bottom = gate.gapY + gate.gap / 2;

    ctx.fillStyle = PAPER;
    ctx.strokeStyle = INK;
    ctx.lineWidth = 1.5;

    ctx.fillRect(gate.x, 0, GATE_WIDTH, top);
    ctx.strokeRect(gate.x + 0.5, -1, GATE_WIDTH - 1, top);
    ctx.fillRect(gate.x, bottom, GATE_WIDTH, height - bottom);
    ctx.strokeRect(gate.x + 0.5, bottom + 0.5, GATE_WIDTH - 1, height - bottom);

    // Gap markers, drawn like witness lines on a dimension.
    ctx.strokeStyle = gate.passed ? RULE : ACCENT;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gate.x - 6, top + 0.5);
    ctx.lineTo(gate.x + GATE_WIDTH + 6, top + 0.5);
    ctx.moveTo(gate.x - 6, bottom - 0.5);
    ctx.lineTo(gate.x + GATE_WIDTH + 6, bottom - 0.5);
    ctx.stroke();

    ctx.save();
    ctx.translate(gate.x + GATE_WIDTH / 2, top - 12);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = GRAPHITE;
    ctx.font = '10px ui-monospace, SFMono-Regular, monospace';
    ctx.textAlign = 'left';
    ctx.fillText(gate.label.toUpperCase(), 0, 3);
    ctx.restore();
  }

  const x = width * PACKET_X;
  const half = PACKET / 2;

  // A short trail, so speed is visible even when the packet is level.
  ctx.strokeStyle = PACKET_COLOR;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x - half - 26, state.y);
  ctx.lineTo(x - half - 4, state.y);
  ctx.stroke();

  // The demo packet is dimmed: a preview of the game, not the game.
  ctx.globalAlpha = state.status === 'demo' ? 0.45 : 1;
  ctx.fillStyle = state.status === 'over' ? GRAPHITE : PACKET_COLOR;
  ctx.fillRect(Math.round(x - half), Math.round(state.y - half), PACKET, PACKET);
  ctx.globalAlpha = 1;
}
