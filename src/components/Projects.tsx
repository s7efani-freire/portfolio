import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="h-48 bg-gradient-to-r from-purple-700/30 to-orange-600/30 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  className="h-full w-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-orange-500/15"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/60 rounded text-xs border border-orange-500/40 hover:border-orange-500/80 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                >
                  <ExternalLink size={16} />
                  <span>Ver Projeto</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
