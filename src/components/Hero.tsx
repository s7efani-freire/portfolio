import { ChevronDown, Download, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { CONTACT } from '../constants/contact';
import { BIRTH_DATE, calculateAge } from '../utils/age';
import { useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
  const age = calculateAge(BIRTH_DATE);
  const tr = useTranslate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
            <img src="/img/logo.png" alt="Logo" width={128} height={128} className="w-full h-full object-contain animate-pulse-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            STÉFANI FREIRE
          </h1>
          <p className="text-xl md:text-2xl text-orange-400 mb-4 font-medium">
            {tr(strings.hero.role)} • {age} {tr(strings.hero.ageSuffix)}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-loose">{tr(strings.hero.subtitle)}</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12">
          <a href={CONTACT.phoneHref} className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
            <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>{CONTACT.phoneDisplay}</span>
          </a>
          <a href={CONTACT.emailHref} className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
            <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>{CONTACT.email}</span>
          </a>
          <a href={CONTACT.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
            <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>{CONTACT.githubHandle}</span>
          </a>
          <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
            <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>{CONTACT.linkedinHandle}</span>
          </a>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 group">
            <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>{CONTACT.instagramHandle}</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/resume.pdf"
            download="Curriculo - Stefani Soares Freire.pdf"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full font-medium hover:opacity-90 transition-opacity duration-300"
          >
            <Download size={18} />
            <span>{tr(strings.hero.downloadResume)}</span>
          </a>
          <a
            href="/resume-en.pdf"
            download="Resume - Stefani Soares Freire.pdf"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-orange-500/50 rounded-full font-medium text-orange-400 hover:bg-orange-500/10 transition-colors duration-300"
          >
            <Download size={18} />
            <span>{tr(strings.hero.downloadResumeEn)}</span>
          </a>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="animate-bounce text-orange-400 hover:text-orange-300 transition-colors duration-300"
          aria-label={tr(strings.hero.scrollToAbout)}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
