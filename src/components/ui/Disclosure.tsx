import { ReactNode, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { AnimatePresence, motion } from 'framer-motion';
import { springSheet } from '../../lib/motion';
import Icon from './Icon';

interface DisclosureProps {
  /** The control's label when closed. Say what opening reveals. */
  label: string;
  /** The control's label when open, if the closed one would read wrong. */
  openLabel?: string;
  /** The surface this sits on. Accent has no contrast against ink. */
  tone?: 'paper' | 'ink';
  children: ReactNode;
}

/**
 * The dual-audience mechanic. The plain-language claim stays visible above;
 * this reveals the engineering depth one level beneath it, so nobody has to
 * declare which audience they belong to.
 *
 * Radix owns the keyboard and ARIA wiring; Motion owns the physics. In print
 * the content is forced open, because paper cannot be expanded.
 */
export default function Disclosure({
  label,
  openLabel,
  tone = 'paper',
  children,
}: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const ink = tone === 'ink';

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <button
          type="button"
          className={`press group -mx-2 flex items-center gap-3 rounded px-2 py-2 font-mono text-micro uppercase tracking-micro transition-colors ${
            ink ? 'text-paper/60 hover:text-paper' : 'text-accent hover:text-ink'
          }`}
        >
          <span
            aria-hidden
            className={`grid h-5 w-5 place-items-center rounded-sm border transition-colors ${
              ink
                ? 'border-paper/30 group-hover:border-paper/70'
                : 'border-accent/40 group-hover:border-ink/40'
            }`}
          >
            <Icon name={open ? 'minus' : 'plus'} className="h-3 w-3" />
          </span>
          {open ? (openLabel ?? label) : label}
        </button>
      </Collapsible.Trigger>

      {/* forceMount keeps the node in the DOM so the print stylesheet can
          reveal it, while AnimatePresence still drives the screen transition. */}
      <Collapsible.Content forceMount data-print-expand>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={springSheet}
              className="overflow-hidden"
            >
              <div className="pt-6">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
