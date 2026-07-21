import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { CONTACT } from '../constants/contact';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
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
          <p className="text-xl md:text-2xl text-orange-400 mb-4 font-medium">Tech Lead</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Arquitetura de soluções de Tecnologia da Informação.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
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
        </div>

        <button
          onClick={() => onNavigate('about')}
          className="animate-bounce text-orange-400 hover:text-orange-300 transition-colors duration-300"
          aria-label="Rolar para a seção Sobre"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
