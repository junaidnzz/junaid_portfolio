import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ParticleBackground from './components/ParticleBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // You can switch between 'animated', 'particles', or 'both' to see different effects
  const showAnimated = true;
  const showParticles = true;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300 relative">
        {/* Background Effects */}
        {showAnimated && <AnimatedBackground />}
        {showParticles && (
          <div className="fixed inset-0 pointer-events-none">
            <ParticleBackground />
          </div>
        )}
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
