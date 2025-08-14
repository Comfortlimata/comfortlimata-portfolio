import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center relative inline-block"
        >
          <span className="relative z-10">About Me</span>
          {/* Shine effect */}
          <motion.span
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-md"
            animate={{ left: ['-50%', '120%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: -3 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px 3px #14b8a6' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
              default: { duration: 0.8, type: 'spring', stiffness: 160 }
            }}
            className="mb-8 md:mb-0 md:mr-12 -mt-6 md:-mt-12 flex items-center justify-center relative overflow-hidden rounded-xl shadow-2xl w-64 h-80"
          >
            <img
              src="/images/profile.png.jpg"
              alt="Comfort Kakumbi Limata"
              className="w-full h-full object-cover rounded-xl"
            />
                        {/* Subtle glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3, scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 70%)' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl shadow-black/20"
          >
            <p className="text-lg mb-6">
            I’m Comfort Limata, a BSc Information Systems and Technology student at the University of Lusaka (2022–2026). Passionate about tech innovation in Africa and beyond, I’ve been deep into software development, web design, and system troubleshooting since day one building skills to make a real impact.
            </p>
            <p className="text-lg mb-6">
              I’m powered by the GitHub Student Pack, which hooked me up with top-tier tools and platforms that sharpen my coding, cloud, and cybersecurity skills. This pack isn’t just freebies; it’s a launchpad that helped me build real-world projects, collaborate smarter, and solve problems faster.
            </p>
            <p className="text-lg mb-6">
              Troubleshooting? That’s my zone. Whether it’s a stubborn software bug or tricky hardware glitch, I bring the patience, knowledge, and creativity needed to find solutions and keep things running smooth.
            </p>
            <p className="text-lg mb-6">
              I’m all about using tech as a tool to empower, innovate, and create impact  and this portfolio showcases just a slice of my journey so far. Let’s connect and build the future!
            </p>
            {/* Key Skills */}
            <div className="mt-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-300 mb-3">Key Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {['React','Next.js','Tailwind CSS','Framer Motion','Node.js','Python','PHP','MySQL'].map((s) => (
                  <li key={s} className="text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-primary text-dark-bg px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;