/**
 * A recording light for the CV buttons. The one place on the page that uses a
 * colour outside the palette, because a pulsing red dot is a signal everyone
 * already reads without being taught, and the CV is the single thing here
 * worth interrupting for.
 *
 * The colours are inline rather than utility classes: this has to stay red on
 * an accent-filled button no matter what else lands in the cascade.
 */

const REC_RED = '#FF4A4A';

export default function RecordingDot({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative grid h-2.5 w-2.5 shrink-0 place-items-center ${className}`}
    >
      <span
        className="rec-ring absolute h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: REC_RED }}
      />
      <span
        className="rec-dot relative h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: REC_RED }}
      />
    </span>
  );
}
