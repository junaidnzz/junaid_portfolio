import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { tints } from './ui/SectionMark';
import { createState, draw, flap, step, takeOver, type GameState } from './game/pipeline';
import { enterUp, spring, viewportOnce } from '../lib/motion';

const BEST_KEY = 'ship-it-best';
/** Named for the reader, not the engine: "failed at e2e" means something. */
const STAGES = ['lint', 'type-check', 'unit test', 'build', 'end-to-end test', 'review', 'canary', 'production'];
/** Field height follows the width: tall enough to fly on a laptop, short
    enough that a phone still shows the HUD and the caption without scrolling. */
function fieldHeight(width: number) {
  return Math.round(Math.min(380, Math.max(240, width * 0.42)));
}

/** localStorage throws in private mode in some browsers; a high score is not
    worth a crash. */
function readBest() {
  try {
    return Number(window.localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeBest(value: number) {
  try {
    window.localStorage.setItem(BEST_KEY, String(value));
  } catch {
    /* ignore */
  }
}

export default function ShipIt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ width: 0, height: 300 });
  const stateRef = useRef<GameState>(createState(300));
  const frameRef = useRef<number | undefined>(undefined);

  // Score and status are mirrored into React only when they change, never per
  // frame: the loop must not re-render the tree sixty times a second.
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<GameState['status']>('demo');
  const [best, setBest] = useState(0);
  // Mirrored only so the canvas element reserves the right height before paint.
  const [fieldPx, setFieldPx] = useState(300);

  useEffect(() => setBest(readBest()), []);

  const press = useCallback(() => {
    const state = stateRef.current;
    if (state.status !== 'running') {
      // Both the attract loop and a finished run start fresh, so nobody
      // inherits an autopilot's altitude or a crash.
      stateRef.current = takeOver(sizeRef.current.height);
      setScore(0);
      setStatus('running');
      return;
    }
    flap(state);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw in CSS pixels; the transform handles the device ratio, so hairlines
    // stay hairlines on a retina screen.
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = fieldHeight(width);
      sizeRef.current = { width, height };
      canvas.style.height = `${height}px`;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      // A resize mid-flight must not leave the packet outside the new field.
      stateRef.current.y = Math.min(stateRef.current.y, height - 8);
      setFieldPx(height);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let last = performance.now();
    const loop = (now: number) => {
      // Clamped: a backgrounded tab returns with a huge delta, and an
      // unclamped delta teleports the packet through a gate.
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;

      const { width, height } = sizeRef.current;
      const state = stateRef.current;
      const ended = step(state, dt, width, height);
      draw(ctx, state, width, height);

      if (ended) {
        setStatus('over');
        setScore(state.score);
        setBest((current) => {
          if (state.score <= current) return current;
          writeBest(state.score);
          return state.score;
        });
      } else if (state.score !== score) {
        setScore(state.score);
      }

      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
    // The loop reads state through refs; `score` is only compared, so a stale
    // closure would at worst skip one HUD update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Space and the arrow keys scroll the page by default, which is not what you
  // want mid-flight. Only claim them while the canvas has focus.
  const failedStage = STAGES[Math.min(score, STAGES.length - 1)];

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'ArrowUp') {
      event.preventDefault();
      press();
    }
  };

  return (
    <Section
      id="ship-it"
      className="no-print"
      eyebrow="Mini game · 30 seconds"
      icon="game"
      tint={tints.game}
      title="Get a deploy to production"
      intro="A one-button game: keep the deploy in the air and slip it through every stage of the pipeline."
    >
      <motion.div
        variants={enterUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={spring}
      >
        <div className="mb-4 flex items-baseline justify-between">
          <p className="label">
            {status === 'over' ? 'Build failed' : status === 'running' ? 'Deploying' : 'Autopilot'}
          </p>
          <p className="font-mono text-micro tracking-micro tabular-nums text-graphite">
            SHIPPED {String(score).padStart(2, '0')} · BEST {String(best).padStart(2, '0')}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-ink/15">
          <canvas
            ref={canvasRef}
            onPointerDown={press}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="application"
            aria-label="Ship it: press space to fly a deploy through the pipeline"
            className="block w-full cursor-pointer touch-none outline-none"
            style={{ height: fieldPx }}
          />

          {/* Overlays are DOM, not canvas text: they need to be readable by a
              screen reader and selectable by a cursor. */}
          {status !== 'running' && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-paper/55">
              <div className="text-center">
                {status === 'over' && (
                  <p className="text-h3 tracking-heading font-medium">
                    Failed at the {failedStage} stage
                  </p>
                )}
                {/* Styled as the button it behaves like: the whole field is the
                    control, so this is the affordance, not a decoration. */}
                <span className="relative mt-3 inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-small font-medium text-paper">
                  <span
                    aria-hidden
                    className="rec-ring absolute inset-0 rounded"
                    style={{ backgroundColor: '#16161A' }}
                  />
                  <span className="relative">
                    {status === 'over' ? 'Play again' : 'Take over — tap to play'}
                  </span>
                </span>
                <p className="mt-3 text-small text-graphite">
                  {status === 'over'
                    ? score > 0 && score >= best
                      ? `A personal best: ${score} shipped.`
                      : `${score} shipped. Tap the field to try again.`
                    : 'Tap the field, or press space.'}
                </p>
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 max-w-prose text-small text-graphite">
          It is already flying itself — tap the field to take over. Eight gates, tightening as you
          go: lint, types, unit, build, end-to-end, review, canary, production, the same run a
          change makes on its way to users.
        </p>
      </motion.div>
    </Section>
  );
}
