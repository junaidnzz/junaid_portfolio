/**
 * Hand-drawn line glyphs at the same 1.5px stroke weight as the architecture
 * drawing, so the icons read as part of the same hand.
 *
 * This replaces `react-icons`, which reached 51 glyphs through barrel imports
 * out of an 85 MB package. The redesign lists the stack as text rather than
 * badge soup, so brand marks are no longer needed at all.
 */

import type { ReactElement } from 'react';

export type IconName =
  | 'arrow-up-right'
  | 'arrow-down'
  | 'plus'
  | 'minus'
  | 'menu'
  | 'close'
  | 'download'
  | 'work'
  | 'approach'
  | 'career'
  | 'game'
  | 'contact';

const paths: Record<IconName, ReactElement> = {
  'arrow-up-right': (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  'arrow-down': (
    <>
      <path d="M12 5v14" />
      <path d="m5 12 7 7 7-7" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  menu: (
    <>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),

  /* Section marks. Each one is the shape of what the section contains, drawn
     at the same weight as the architecture glyphs so the set reads as one
     hand: panels of work, a drafting square, a timeline, a packet, a reply. */
  work: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1" />
      <rect x="3" y="14" width="11" height="6" rx="1" />
      <path d="M17 17h4" />
    </>
  ),
  approach: (
    <>
      <path d="M4 20V6a2 2 0 0 1 2-2h4" />
      <path d="M4 20h16" />
      <path d="m10 4 10 16" />
      <path d="M8 20v-4" />
    </>
  ),
  career: (
    <>
      <path d="M4 20h16" />
      <path d="M8 20v-4" />
      <path d="M12 20v-8" />
      <path d="M16 20v-12" />
    </>
  ),
  game: (
    <>
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M2 12h5M17 12h5" />
      <path d="M12 2v5M12 17v5" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  /** Icons that carry meaning on their own need a label; decorative ones do not. */
  title?: string;
}

export default function Icon({ name, className = 'w-4 h-4', title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {paths[name]}
    </svg>
  );
}
