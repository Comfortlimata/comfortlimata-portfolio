import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { title: 'Your Gateway to Seamless Online Education', description: '', image: '/images/project/project1.png.png', link: 'https://github.com/Comfortlimata/school-elearning-system.git', details: 'Your Gateway to Seamless Online Education.\n\nOur Web-Based E-Learning Platform, built as part of an Information Systems and Technology project, makes learning and teaching seamless. Students can register, log in, access and download course materials, and stay updated through announcements. Instructors and admins can upload resources, post updates, and manage user accounts with ease. Powered by HTML5, CSS3, JavaScript, PHP 8+, and MySQL, it’s designed for efficiency, simplicity, and a modern learning experience that connects students and educators anytime, anywhere.' },
  { title: 'Project 2', description: 'Description of project 2', image: '/images/project/project2.png.png', link: '#' },
  { title: 'e-Clinic Inventory System  Offline & Easy', description: '', image: '/images/project/project3.png.png', link: 'https://github.com/Comfortlimata/ClinicInventorySystem.git', details: 'Smart Clinic Inventory System Offline & Easy\n\nThe **Smart Clinic Inventory System** is a lightweight, offline desktop app built with **Python (Tkinter + SQLite3)** to help rural and small scale health clinics manage medicine stock effortlessly.  \nIt’s **fast, simple, and works without the internet** perfect for low-resource environments.\n\n### ✨ Key Features\n\n*   **Add & Update Medicines** record name, quantity, batch number, and expiry date.\n    \n*   **Search & Filter Stock** find medicines instantly by name or expiry date.\n    \n*   **Track Expiring Medicines** calendar view highlighting drugs expiring in the next 30 days.\n    \n*   **Full Inventory Table** sortable, searchable, and easy to navigate.\n    \n*   **Expiry Alerts** so no medicine goes to waste.\n    \n\nBuilt to **bridge the technology gap**, this system empowers clinics to keep accurate, up to date records and reduce wastage while improving patient care all without relying on internet connectivity.' },
  { title: 'Bar Sales and Inventory Management System', description: '', image: '/images/project/project4.png.png', link: 'https://github.com/Comfortlimata/BarSalesApp.git', details: 'The Bar Sales and Inventory Management System is an offline desktop application built with Python, Tkinter, and SQLite, created to help bar owners manage sales, stock, and receipts efficiently without relying on internet access. It supports two user roles: admin, who manages products and stock, and staff, who process sales and print receipts. Users log in with a username and password, and access is determined by their role.\n\nAdmins can add, edit, or remove products, each with a name, price, and stock quantity. When staff process sales, they select products and quantities, and the system automatically calculates the total, deducts the sold stock, and prevents overselling. Low-stock alerts notify admins when products drop below ten units. Sales records can be exported as daily, weekly, or monthly reports in CSV or TXT format. Receipts are printed via a connected thermal printer using a simple, clear template.\n\nThe system is designed to be fast and intuitive, processing sales in under two seconds. All data is stored locally in an SQLite database, ensuring it remains intact even after restarts or crashes. It runs smoothly on Windows 10 or later with minimal hardware requirements and offers a practical solution for bars that need reliable inventory and sales tracking without internet dependency.' },
  { title: 'Project 5', description: 'Description of project 5', image: '/images/project5.jpg', link: '#', details: 'More about Project 5 goes here.' },
  { title: 'Project 6', description: 'Description of project 6', image: '/images/project6.jpg', link: '#', details: 'More about Project 6 goes here.' },
  // Add more projects
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer"
      >
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <span className="text-primary hover:underline">View Details</span>
          <a
            href={project.link}
            className="block mt-4 bg-primary text-white text-center px-4 py-2 rounded hover:bg-primary-dark transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
          </a>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-lg w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-4" />
            <p className="mb-4">{project.details || project.description}</p>
            <a href={project.link} className="text-primary hover:underline">Visit Project</a>
            <button onClick={() => setIsOpen(false)} className="mt-4 bg-primary text-white px-4 py-2 rounded">Close</button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Portfolio;