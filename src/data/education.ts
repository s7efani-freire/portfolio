import { Localized } from '../i18n/LanguageContext';

export interface Education {
  course: Localized;
  institution: string;
  status: Localized;
}

export const education: Education[] = [
  {
    course: { pt: 'Engenharia de Software', en: 'Software Engineering' },
    institution: 'Faculdade Anhanguera',
    status: { pt: 'Cursando (conclusão prevista para 2028)', en: 'Ongoing (expected completion in 2028)' },
  },
  {
    course: { pt: 'Engenharia Civil', en: 'Civil Engineering' },
    institution: 'Faculdade Independente do Nordeste (FAINOR)',
    status: { pt: 'Conclusão prevista para 2026.2', en: 'Expected completion in the second half of 2026' },
  },
  {
    course: { pt: 'Técnico em Eletrônica', en: 'Electronics Technical Course' },
    institution: 'Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA)',
    status: { pt: 'Concluído', en: 'Completed' },
  },
];
