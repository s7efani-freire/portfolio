import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

export interface Localized<T = string> {
  pt: T;
  en: T;
}

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'pt';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = () => setLanguage((current) => (current === 'pt' ? 'en' : 'pt'));

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function t<T>(localized: Localized<T>, language: Language): T {
  return localized[language];
}

export function useTranslate() {
  const { language } = useLanguage();
  return <T,>(localized: Localized<T>) => t(localized, language);
}
