import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.to('.hero-bg', { duration: 2, opacity: 1, scale: 1.1, ease: 'power2.out' });
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 scale-105" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10"
      >
        <h1 className="relative inline-block text-6xl font-display font-bold mb-4">
          <span className="relative z-10">
            <span className="text-gray-100">Com</span>
            <span className="text-primary">Limata</span>
          </span>
          <motion.span
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md"
            animate={{ left: ['-50%', '120%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
          />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl mb-8 font-sans"
        >
          <span className="bg-gradient-to-r from-gray-100 via-primary to-gray-100 bg-clip-text text-transparent">
            Creative Developer & Designer
          </span>
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => document?.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="relative overflow-hidden bg-primary text-dark-bg px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition"
          aria-label="Explore my work section"
        >
          <span className="relative z-10">Explore My Work →</span>
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-120%]"></span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;