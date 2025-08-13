import { useState } from 'react';
import { projects } from '../data/projects';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-12 bg-dark-bg text-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">My Projects</h2>
        <p className="text-gray-400 mt-2">
          A showcase of my work — click on any project to see more details.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl p-6 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-transform duration-200 hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(project.technologies || []).slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-gray-700/70 text-gray-200 border border-gray-600/60"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-primary text-dark-bg px-4 py-2 rounded-full hover:opacity-90"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
        >
          <div
            className="max-w-2xl w-11/12 md:w-3/4 bg-gray-900 text-white rounded-xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 id="portfolio-modal-title" className="text-xl font-semibold">{selectedProject.title}</h3>
              <button
                aria-label="Close details"
                className="text-gray-400 hover:text-white text-2xl leading-none"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>
            <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
              {selectedProject?.details || selectedProject?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
