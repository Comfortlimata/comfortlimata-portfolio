import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials & Reflections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-xl text-lg italic flex flex-col justify-between">
            <p>
              Comfort is a highly motivated learner with a sharp eye for problem solving. Their dedication to mastering both software development and hardware troubleshooting is evident in every project they tackle. They combine creativity with technical skill, always pushing to deliver solutions that work smoothly and efficiently.
            </p>
            <footer className="mt-4 text-right font-semibold"> Mentor & Instructor</footer>
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-xl text-lg italic flex flex-col justify-between">
            <p>
              Even as an emerging professional, Comfort shows a maturity and passion that’s rare. They embrace challenges head-on, learning from each experience and constantly improving. Their ability to adapt to new technologies and environments makes them a reliable partner for any tech project.
            </p>
            <footer className="mt-4 text-right font-semibold"> Peer & Collaborator</footer>
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-xl text-lg italic flex flex-col justify-between">
            <p>
              Currently building my portfolio with a focus on real world applications, I’m committed to growing my skills every day—whether through coding, cloud hosting, or troubleshooting. I welcome opportunities to collaborate and feedback to sharpen my craft and create impact.
            </p>
            <footer className="mt-4 text-right font-semibold">— Comfort Limata</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;