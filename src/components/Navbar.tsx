import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../data/navigation';
import { Icon } from '../data/icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card rounded-none border-x-0 border-t-0 bg-base/70' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-lg text-white">
          junaid<span className="text-accent">.nazir</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group font-mono text-sm text-muted hover:text-accent transition-colors"
              >
                <span className="text-accent mr-1">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-ink text-2xl p-2"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-card rounded-none border-x-0 bg-base/90 px-6 py-4 space-y-3"
          >
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-sm text-muted hover:text-accent transition-colors py-1"
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
