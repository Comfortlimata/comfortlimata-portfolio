import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-bg to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me & Skills
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="about-me md:w-1/2">
            <p className="text-lg mb-6">
              I’m Comfort Limata, an Information Systems and Technology student from Zambia, who started university in 2022 with a clear goal: to master technology and use it to make a real impact.
            </p>
            <p className="text-lg mb-6">
              Over the years, I have built strong foundations in software development, web technologies, and system troubleshooting  both software and hardware. I thrive on solving problems, whether it’s debugging complex code, optimizing web performance, or diagnosing hardware issues to keep systems running smoothly.
            </p>
            <p className="text-lg mb-6">
              Beyond coding, I have hands on experience with cloud hosting, continuous integration, and automated deployment, ensuring the applications I build are scalable, reliable, and accessible globally. My skills extend to working with modern version control workflows and collaborating efficiently on projects that demand agility and precision.
            </p>
            <p className="text-lg mb-6">
              Continuous learning is my mantra. I leverage access to premium developer tools, cloud platforms, and security resources, constantly sharpening my skills in cybersecurity, DevOps, and cloud infrastructure management. This holistic approach empowers me to deliver high-quality, production-ready software solutions.
            </p>
          </div>
          <div className="skills md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Technical Skills & Expertise</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Programming Languages:</strong> Java, PHP, JavaScript (ES6+), Python</li>
              <li><strong>Web Development:</strong> React, AJAX, HTML5, CSS3, Bootstrap, WordPress</li>
              <li><strong>Database Technologies:</strong> MySQL, SQLite, SQL Query Optimization, Data Normalization</li>
              <li><strong>Version Control & Collaboration:</strong> Git, GitHub workflows, branching, pull requests, issue tracking</li>
              <li><strong>Cloud & Hosting Platforms:</strong> Microsoft Azure, DigitalOcean, GitHub Pages, Netlify, Heroku  deploying scalable web applications with automated CI/CD pipelines</li>
              <li><strong>DevOps & Automation:</strong> Continuous Integration (CI) using GitHub Actions, automated testing and deployment</li>
              <li><strong>Cybersecurity & System Tools:</strong> Penetration testing basics, vulnerability scanning, Kali Linux tools, secure coding practices</li>
              <li><strong>Troubleshooting:</strong> Debugging software issues, optimizing application performance, diagnosing hardware problems, system maintenance</li>
              <li><strong>Soft Skills:</strong> Problem solving, effective communication, teamwork, adaptability, continuous learning mindset</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;