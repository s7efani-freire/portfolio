import { Menu, X } from 'lucide-react';
import { useLanguage, useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

const NAV_ITEMS = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'] as const;

interface NavProps {
  activeSection: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

function Nav({ activeSection, isMenuOpen, onToggleMenu, onNavigate }: NavProps) {
  const { language, toggleLanguage } = useLanguage();
  const tr = useTranslate();

  const LanguageSwitch = (
    <div className="flex items-center rounded-full border border-purple-700/40 overflow-hidden text-xs font-semibold">
      <button
        onClick={() => language !== 'pt' && toggleLanguage()}
        className={`px-2.5 py-1 transition-colors duration-300 ${language === 'pt' ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-orange-400'}`}
        aria-pressed={language === 'pt'}
      >
        PT
      </button>
      <button
        onClick={() => language !== 'en' && toggleLanguage()}
        className={`px-2.5 py-1 transition-colors duration-300 ${language === 'en' ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-orange-400'}`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/img/logo.png" alt="Logo" width={48} height={48} className="w-full h-full object-contain animate-pulse-slow" />
            </div>
            <span className="text-xl font-bold">Stéfani Freire</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`capitalize transition-colors duration-300 hover:text-orange-500 ${
                  activeSection === item ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`}
              >
                {tr(strings.nav[item])}
              </button>
            ))}
            {LanguageSwitch}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            {LanguageSwitch}
            <button
              onClick={onToggleMenu}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-purple-800/40">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className="block w-full text-left py-2 capitalize hover:text-orange-500 transition-colors duration-300"
              >
                {tr(strings.nav[item])}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
