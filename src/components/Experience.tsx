import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experiences';
import { useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Experience() {
  const tr = useTranslate();

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            {tr(strings.experience.heading)}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={tr(exp.title) + exp.company + tr(exp.period)}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{tr(exp.title)}</h3>
                  <p className="text-orange-400 font-medium mb-2">
                    {exp.company} • {tr(exp.period)}
                  </p>
                  <p className="text-gray-200 mb-4 leading-loose">{tr(exp.description)}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skillItem) => (
                      <span
                        key={tr(skillItem)}
                        className="px-3 py-1 bg-gray-800/60 rounded-full text-sm border border-orange-500/40 hover:border-orange-500/80 transition-colors duration-300"
                      >
                        {tr(skillItem)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
