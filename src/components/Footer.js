import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <p>&copy; {new Date().getFullYear()} Comfort Limata. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6 text-lg">
          <Link href="https://github.com" target="_blank" aria-label="GitHub" className="hover:text-primary transition flex items-center gap-2">
            <span role="img" aria-hidden>🐙</span>
            <span>GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-primary transition flex items-center gap-2">
            <span role="img" aria-hidden>💼</span>
            <span>LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-primary transition flex items-center gap-2">
            <span role="img" aria-hidden>🐦</span>
            <span>Twitter</span>
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;