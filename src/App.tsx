import { MotionConfig } from 'framer-motion';
import Intro from './components/ui/Intro';
import Cursor from './components/ui/Cursor';
import Navbar from './components/Navbar';
import Statement from './components/Statement';
import Work from './components/Work';
import Approach from './components/Approach';
import Career from './components/Career';
import ShipIt from './components/ShipIt';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Intro />
      <Cursor />
      <a
        href="#work"
        className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-small focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Statement />
        <Work />
        <Approach />
        <ShipIt />
        <Career />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
