import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center bg-white/70 dark:bg-dark-bg/60 backdrop-blur-md">
        <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          Comfort Limata
        </Link>
        <ul className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 dark:bg-white/5 px-2 py-1 shadow-lg shadow-black/10">
          {[
            { href: '#hero', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#skills', label: 'Skills' },
            { href: '#portfolio', label: 'Portfolio' },
            { href: '#testimonials', label: 'Testimonials' },
            { href: '#contact', label: 'Contact' },
          ].map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className="px-3 py-2 text-sm rounded-full text-gray-800 dark:text-gray-200 hover:text-primary hover:bg-primary/10 transition"
              >
                {i.label}
              </Link>
            </li>
          ))}
          <li className="pl-1">
            <button
              onClick={useContext(ThemeContext).toggleTheme}
              className="px-3 py-2 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle theme"
            >
              {useContext(ThemeContext).theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
        {/* Mobile */}
        <div className="md:hidden">
          <ul className="flex items-center gap-3">
            <li>
              <button
                onClick={useContext(ThemeContext).toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Toggle theme"
              >
                {useContext(ThemeContext).theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;