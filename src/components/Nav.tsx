import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['home', 'about', 'experience', 'projects', 'contact'] as const;

const NAV_LABELS: Record<(typeof NAV_ITEMS)[number], string> = {
  home: 'Início',
  about: 'Sobre',
  experience: 'Experiência',
  projects: 'Projetos',
  contact: 'Contato',
};

interface NavProps {
  activeSection: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

function Nav({ activeSection, isMenuOpen, onToggleMenu, onNavigate }: NavProps) {
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
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`capitalize transition-colors duration-300 hover:text-orange-500 ${
                  activeSection === item ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`}
              >
                {NAV_LABELS[item]}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={onToggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                {NAV_LABELS[item]}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
