import { skillCategories } from '../data/skills';
import { useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Skills() {
  const tr = useTranslate();

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            {tr(strings.skills.heading)}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((group) => (
            <div
              key={tr(group.category)}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-700/40 hover:border-orange-500/60 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-orange-400 mb-4">{tr(group.category)}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skillItem) => (
                  <span
                    key={tr(skillItem)}
                    className="px-3 py-1 bg-gray-800/60 rounded-full text-sm border border-orange-500/40 hover:border-orange-500/80 transition-colors duration-300"
                  >
                    {tr(skillItem)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
