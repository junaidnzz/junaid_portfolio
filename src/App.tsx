import { MotionConfig } from 'framer-motion';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AIEngineering from './components/AIEngineering';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen relative">
        <AmbientBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <AIEngineering />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
