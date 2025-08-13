import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="container mx-auto px-6">
        <ReviewSection />
      </div>
    </section>
  );
};

import ReviewSection from './ReviewSection';

export default Testimonials;