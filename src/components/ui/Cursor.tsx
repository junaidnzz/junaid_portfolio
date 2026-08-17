import { useEffect, useRef } from 'react';

/**
 * A drafting reticle rather than a blob.
 *
 * The page's visual language is engineering drawing, so the cursor is a
 * crosshair that brackets whatever it can act on. Fine pointers only: on touch
 * there is no cursor to replace, and on coarse pointers it would just lag.
 *
 * Position is written straight to the element inside rAF. Routing pointer
 * movement through React state would re-render the tree on every mouse event.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    const el = dotRef.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let frame = 0;
    let hovering = false;

    document.body.style.cursor = 'none';

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;

      const overInteractive = Boolean(
        (event.target as Element | null)?.closest?.('a, button, [role="button"], input, summary')
      );
      if (overInteractive !== hovering) {
        hovering = overInteractive;
        el.dataset.hover = String(hovering);
      }
    };

    const render = () => {
      // A little lag gives the reticle weight. Reduced motion pins it exactly.
      const ease = reduced ? 1 : 0.22;
      pos.x += (target.x - pos.x) * ease;
      pos.y += (target.y - pos.y) * ease;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };

    const onLeave = () => {
      el.style.opacity = '0';
    };
    const onEnter = () => {
      el.style.opacity = '1';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerenter', onEnter);
    frame = requestAnimationFrame(render);

    return () => {
      document.body.style.cursor = '';
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerenter', onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="no-print pointer-events-none fixed left-0 top-0 z-[70] hidden [@media(pointer:fine)]:block"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        stroke="#2B44C7"
        strokeWidth="1"
        className="transition-transform duration-200 ease-out [[data-hover='true']_&]:scale-[1.55]"
      >
        {/* Corner brackets close in on an interactive target. */}
        <path d="M5 12V5h7" />
        <path d="M22 5h7v7" />
        <path d="M29 22v7h-7" />
        <path d="M12 29H5v-7" />
        <circle cx="17" cy="17" r="1" fill="#2B44C7" stroke="none" />
      </svg>
    </div>
  );
}
