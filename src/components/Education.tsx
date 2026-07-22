import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import { useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Education() {
  const tr = useTranslate();

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            {tr(strings.education.heading)}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item) => (
            <div
              key={item.institution}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{tr(item.course)}</h3>
                <p className="text-orange-400 font-medium mb-1">{item.institution}</p>
                <p className="text-gray-300 text-sm">{tr(item.status)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
