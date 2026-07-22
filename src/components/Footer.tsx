import { useTranslate } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

function Footer() {
  const tr = useTranslate();

  return (
    <footer className="py-8 border-t border-purple-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-300">{tr(strings.footer.copyright)}</p>
        <p className="text-orange-400 text-sm mt-2 italic">{tr(strings.footer.quote)}</p>
      </div>
    </footer>
  );
}

export default Footer;
