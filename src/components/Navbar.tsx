import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../data/navigation';
import { Icon } from '../data/icons';
import { spring, springSheet } from '../lib/motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Wayfinding: every screen should answer "where am I?" (§16). The nav
  // reflects the section you are actually reading, continuously.
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
      // Translucent chrome with content scrolling underneath, and a soft
      // scroll edge instead of a hard 1px divider (§12).
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'scroll-edge bg-base/60 backdrop-blur-xl backdrop-saturate-150' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="press font-mono text-lg text-white">
          junaid<span className="text-accent">.nazir</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => {
            const active = activeId === link.href;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  aria-current={active ? 'true' : undefined}
                  className={`press relative isolate block px-3 py-2 font-mono text-sm tracking-micro transition-colors ${
                    active ? 'text-accent' : 'text-muted hover:text-accent'
                  }`}
                >
                  {/* A single shared element slides between items — a spring,
                      so it can be redirected mid-flight (§3, §4). */}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={spring}
                      className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]"
                    />
                  )}
                  <span className="text-accent mr-1">0{i + 1}.</span>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="press md:hidden text-ink text-2xl grid place-items-center w-11 h-11 -mr-2 rounded-lg"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'x' : 'menu'} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            // Anchored to the chrome it came from and it materialises —
            // blur and scale together, not a plain fade (§7, §12). Enter and
            // exit share one path, so dismissal retraces the arrival.
            initial={{ opacity: 0, scaleY: 0.94, y: -6, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scaleY: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scaleY: 0.94, y: -6, filter: 'blur(10px)' }}
            transition={springSheet}
            style={{ transformOrigin: 'top center' }}
            className="md:hidden glass-strong rounded-none border-x-0 bg-base/90 px-6 py-4 space-y-1"
          >
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === link.href ? 'true' : undefined}
                  className={`press block rounded-lg px-2 py-2.5 font-mono text-sm tracking-micro transition-colors ${
                    activeId === link.href
                      ? 'text-accent bg-white/[0.06]'
                      : 'text-muted hover:text-accent'
                  }`}
                >
                  <span className="text-accent mr-2">0{i + 1}.</span>
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
