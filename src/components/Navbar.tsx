import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { navLinks } from '../data/navigation';
import { profile } from '../data/profile';
import Icon from './ui/Icon';
import RecordingDot from './ui/RecordingDot';
import { spring, springSheet } from '../lib/motion';

/** "Junaid Nazir" -> "JN". Derived so the mark can never disagree with the name. */
const monogram = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Motion owns the scroll subscription. A hand-rolled scroll listener is the
  // thing that ends up unthrottled and fighting the compositor.
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24));

  // Wayfinding: the nav reflects the section actually being read.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'chrome-blur border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-shell items-center justify-between gap-6 px-6">
        {/* The mark carries the identity so the name can stay small; the role
            sits under it because a header is the one place it costs nothing. */}
        <a href="#top" className="press group flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-ink/20 font-mono text-micro tracking-micro transition-colors duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            {monogram}
          </span>
          <span className="leading-tight">
            <span className="block text-small font-medium tracking-heading">{profile.name}</span>
            <span className="hidden text-micro text-graphite sm:block">{profile.title}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = activeId === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active ? 'true' : undefined}
                  className={`press relative isolate block rounded px-3 py-2 text-small transition-colors ${
                    active ? 'text-ink' : 'text-graphite hover:text-ink'
                  }`}
                >
                  {/* One shared element slides between items, on a spring, so
                      it can be redirected mid flight. */}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={spring}
                      className="absolute inset-0 -z-10 rounded bg-ink/[0.06]"
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          {/* Status, not decoration: the dot is the availability line from the
              profile, stated once in the chrome so every section inherits it. */}
          <span className="hidden items-center gap-2 xl:flex">
            <span className="relative grid h-1.5 w-1.5 place-items-center" aria-hidden>
              <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="label">{profile.availabilityShort}</span>
          </span>

          {/* The CV, not "get in touch": Contact is already in the nav, and the
              thing a recruiter reaches for first is a file they can forward. */}
          <a
            href={profile.cv}
            download
            className="press relative hidden items-center gap-2.5 rounded bg-accent px-4 py-2 text-small font-medium text-white transition-colors hover:bg-ink md:inline-flex"
          >
            <RecordingDot />
            Download CV
            <Icon name="download" className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            className="press -mr-2 grid h-11 w-11 place-items-center rounded md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Reading progress, drawn on the header's own edge. Transform only, so
          it never lays out; it is decorative and hidden from assistive tech. */}
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            // Anchored to the chrome it came from, and it materialises: blur
            // and scale together, so it reads as a surface arriving.
            initial={{ opacity: 0, scaleY: 0.94, y: -6, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scaleY: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scaleY: 0.94, y: -6, filter: 'blur(10px)' }}
            transition={springSheet}
            style={{ transformOrigin: 'top center' }}
            className="border-b border-rule bg-paper px-6 pb-5 pt-2 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === link.href ? 'true' : undefined}
                  className={`press block rounded px-2 py-3 text-small transition-colors ${
                    activeId === link.href ? 'text-ink' : 'text-graphite hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* The button is hidden on this breakpoint, so the menu carries it. */}
            <li className="mt-3 border-t border-rule pt-4">
              <a
                href={profile.cv}
                download
                onClick={() => setMenuOpen(false)}
                className="press inline-flex items-center gap-2.5 rounded bg-accent px-4 py-2.5 text-small font-medium text-white"
              >
                <RecordingDot />
                Download CV
                <Icon name="download" className="h-3.5 w-3.5" />
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
