import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_9ggldv8',
      'template_au0y0qs',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'WlWP5Tw23jHBYKUCj'
    )
    .then((result) => {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full mb-4 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full mb-4 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full mb-4 p-3 bg-gray-800 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full bg-primary text-dark-bg p-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;