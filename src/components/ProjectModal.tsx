import { useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Project } from '../data/projects';
import { useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const tr = useTranslate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const isConfidential = !project.link && !project.githubUrl;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-gray-900 rounded-xl border border-purple-700/40 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {project.image && (
          <div className="h-56 relative overflow-hidden rounded-t-xl">
            <img
              src={project.image}
              alt={tr(project.title)}
              width={project.imageWidth}
              height={project.imageHeight}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 id="project-modal-title" className="text-2xl font-bold text-white">
              {tr(project.title)}
            </h3>
            <button
              onClick={onClose}
              aria-label={tr(strings.projects.close)}
              className="flex-shrink-0 text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-200 leading-loose mb-6">{tr(project.description)}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-800/60 rounded text-xs border border-orange-500/40 text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {isConfidential && (
            <p className="text-sm text-gray-400 italic mb-6">
              {tr(project.type === 'freelance' ? strings.projects.confidentialFreelance : strings.projects.confidentialCorporate)}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 border border-purple-500/50 rounded-full text-gray-200 hover:border-orange-500/60 hover:text-orange-400 transition-colors duration-300"
              >
                <Github size={16} />
                <span>{tr(strings.projects.viewRepo)}</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 border border-purple-500/50 rounded-full text-gray-200 hover:border-orange-500/60 hover:text-orange-400 transition-colors duration-300"
              >
                <ExternalLink size={16} />
                <span>{tr(strings.projects.viewProject)}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
