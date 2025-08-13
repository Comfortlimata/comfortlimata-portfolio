import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AnimatedPortfolio
 * A polished, accessible, and animated portfolio section.
 * - Cards animate on enter and on hover
 * - Each card exposes a View Details button
 * - A11y-friendly modal (focus trap, ESC to close, ARIA attributes)
 * - Responsive design using Tailwind CSS
 * - Uses Framer Motion for smooth animations
 */

// Example data. Update cover, tech, links, screenshots as needed.
const exampleProjects = [
  {
    id: 'p1',
    title: 'Your Gateway to Seamless Online Education',
    cover: '/images/project/project1.png.png',
    description:
      'A web-based e-learning platform enabling students and instructors to connect seamlessly. Includes authentication, course content delivery, announcements, and admin tooling.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP 8+', 'MySQL'],
    links: {
      live: 'https://github.com/Comfortlimata/school-elearning-system.git',
      repo: 'https://github.com/Comfortlimata/school-elearning-system.git',
    },
    screenshots: ['/images/project/project1.png.png'],
  },
  {
    id: 'p2',
    title: 'Project 2',
    cover: '/images/project/project2.png.png',
    description:
      'Sample description for Project 2. Replace with a concise summary of goals and outcomes.',
    tech: ['React', 'Next.js', 'Tailwind'],
    links: { live: '#', repo: '#' },
    screenshots: ['/images/project/project2.png.png'],
  },
  {
    id: 'p3',
    title: 'e-Clinic Inventory System  Offline & Easy',
    cover: '/images/project/project3.png.png',
    description:
      'The Smart Clinic Inventory System is a lightweight, offline desktop app built with Python (Tkinter + SQLite3) to help rural and small scale health clinics manage medicine stock effortlessly. Fast, simple, and works without the internet.',
    tech: ['Python', 'Tkinter', 'SQLite3'],
    links: { live: 'https://github.com/Comfortlimata/ClinicInventorySystem.git', repo: 'https://github.com/Comfortlimata/ClinicInventorySystem.git' },
    screenshots: ['/images/project/project3.png.png'],
  },
  {
    id: 'p4',
    title: 'Bar Sales and Inventory Management System',
    cover: '/images/project/project4.png.png',
    description:
      'Offline desktop application to manage bar sales, stock, and receipts. Role-based access (admin, staff), fast processing, local SQLite data store, and thermal printer receipts.',
    tech: ['Python', 'Tkinter', 'SQLite3'],
    links: { live: 'https://github.com/Comfortlimata/BarSalesApp.git', repo: 'https://github.com/Comfortlimata/BarSalesApp.git' },
    screenshots: ['/images/project/project4.png.png'],
  },
    ];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// Utility to get focusable elements inside an element
const getFocusable = (container) =>
  container?.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );

export default function AnimatedPortfolio({ projects = exampleProjects }) {
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // Memoize projects for stable mapping and performance
  const items = useMemo(() => projects, [projects]);

  // Open modal with focus management
  const openModal = (project, evt) => {
    lastFocusedRef.current = evt?.currentTarget || document.activeElement;
    setSelected(project);
  };

  const closeModal = () => {
    setSelected(null);
    // Restore focus to the last trigger
    const el = lastFocusedRef.current;
    if (el && typeof el.focus === 'function') el.focus();
  };

  // Focus trap and Escape handling inside modal
  useEffect(() => {
    if (!selected) return;

    const modalEl = modalRef.current;
    const focusables = getFocusable(modalEl);
    // Focus first focusable or fallback to modal
    if (focusables && focusables.length) {
      focusables[0].focus();
    } else {
      modalEl?.focus?.();
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'Tab') {
        // Trap focus within modal
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <section id="portfolio" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-gray-400 mt-2">A showcase of selected work</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((proj, idx) => (
            <motion.article
              key={proj.id || idx}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group rounded-xl overflow-hidden bg-gray-900/40 border border-white/5 shadow-xl shadow-black/20 backdrop-blur-sm"
            >
              {/* Cover */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={proj.cover}
                  alt={proj.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 text-lg font-semibold text-white drop-shadow">
                  {proj.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-sm text-gray-300 line-clamp-3 min-h-[3.5rem]">
                  {proj.description}
                </p>

                {/* Tech chips */}
                {Array.isArray(proj.tech) && proj.tech.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {proj.tech.slice(0, 5).map((t) => (
                      <li
                        key={t}
                        className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Actions */}
                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={(e) => openModal(proj, e)}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  >
                    View Details
                  </button>
                  {proj.links?.live && (
                    <a
                      href={proj.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-600"
                    >
                      Visit Project
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden={!selected}
          >
            {/* Click outside to close */}
            <div
              className="absolute inset-0"
              onClick={closeModal}
              aria-hidden="true"
            />

            {/* Dialog panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-description"
              ref={modalRef}
              tabIndex={-1}
              className="relative z-10 mx-auto w-full max-w-6xl h-[90vh] sm:h-[85vh] overflow-hidden rounded-2xl bg-gray-950 text-white shadow-2xl outline-none flex flex-col"
              initial={{ y: 40, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            >
              {/* Header with cover */}
              <div className="relative h-56 sm:h-60 md:h-72 w-full overflow-hidden shrink-0">
                <img
                  src={selected.cover}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20" />
                <button
                  onClick={closeModal}
                  aria-label="Close details"
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
                >
                  <span aria-hidden>✕</span>
                </button>
                <h3
                  id="project-modal-title"
                  className="absolute bottom-4 left-5 right-16 text-2xl font-semibold"
                >
                  {selected.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div id="project-modal-description" className="prose prose-invert max-w-none">
                  <p className="text-gray-200 text-base leading-relaxed">
                    {selected.description}
                  </p>
                </div>

                {/* Tech Stack */}
                {Array.isArray(selected.tech) && selected.tech.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Tech Stack</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selected.tech.map((t) => (
                        <span key={t} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {(selected.links?.live || selected.links?.repo) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {selected.links?.live && (
                      <a
                        href={selected.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                      >
                        Visit Project
                      </a>
                    )}
                    {selected.links?.repo && (
                      <a
                        href={selected.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-600"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                )}

                {/* Screenshots */}
                {Array.isArray(selected.screenshots) && selected.screenshots.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Screenshots</h4>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selected.screenshots.map((src, i) => (
                        <img
                          key={src + i}
                          src={src}
                          alt={`${selected.title} screenshot ${i + 1}`}
                          className="w-full h-48 object-cover rounded-lg border border-white/10"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
