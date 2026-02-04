import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
            <span className="text-3xl font-display font-bold text-white">L</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-muted-foreground text-sm"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Preload the profile image
    const img = new Image();
    img.src = '/profile-photo.jpg';
    img.onload = () => {
      setIsReady(true);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {(isLoading || !isReady) && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
