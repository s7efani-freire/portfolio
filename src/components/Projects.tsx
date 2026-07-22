import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Cpu, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage, useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

const TYPE_BADGE_STYLES: Record<string, string> = {
  corporate: 'border-purple-500/40 text-purple-300',
  personal: 'border-orange-500/40 text-orange-300',
  freelance: 'border-emerald-500/40 text-emerald-300',
};

function Projects() {
  const { language } = useLanguage();
  const tr = useTranslate();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>('[data-project-card]');
    const amount = (card?.offsetWidth ?? 320) + 32;
    scroller.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            {tr(strings.projects.heading)}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex items-stretch gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <div
                key={tr(project.title)}
                data-project-card
                className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] flex flex-col bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 group"
              >
                {project.image ? (
                  <div className="h-48 flex-shrink-0 bg-gradient-to-r from-purple-700/30 to-orange-600/30 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={tr(project.title)}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      loading="lazy"
                      className="h-full w-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 to-orange-500/15"></div>
                  </div>
                ) : (
                  <div className="h-48 flex-shrink-0 bg-gradient-to-r from-purple-700/30 to-orange-600/30 flex items-center justify-center">
                    <Cpu size={48} className="text-orange-400/70" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-orange-400 transition-colors duration-300">
                      {tr(project.title)}
                    </h3>
                    <span className={`flex-shrink-0 px-2 py-1 bg-gray-800/60 rounded text-xs border ${TYPE_BADGE_STYLES[project.type]}`}>
                      {tr(strings.projects.types[project.type])}
                    </span>
                  </div>
                  <p className="text-gray-200 mb-4 leading-loose line-clamp-4">{tr(project.description)}</p>
                  <div className="mt-auto">
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
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                      >
                        <ExternalLink size={16} />
                        <span>{tr(strings.projects.viewProject)}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollByCard(-1)}
            aria-label={language === 'pt' ? 'Projeto anterior' : 'Previous project'}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-gray-900/80 border border-purple-700/40 hover:border-orange-500/60 text-orange-400 transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label={language === 'pt' ? 'Próximo projeto' : 'Next project'}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-gray-900/80 border border-purple-700/40 hover:border-orange-500/60 text-orange-400 transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
