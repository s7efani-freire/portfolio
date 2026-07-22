import { Localized } from '../i18n/LanguageContext';

export type ProjectType = 'corporate' | 'personal' | 'freelance';

export interface Project {
  title: Localized;
  description: Localized;
  tech: string[];
  type: ProjectType;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  link?: string;
}

export const projects: Project[] = [
  {
    title: { pt: 'Portfólio - Engenheiro Eletricista', en: 'Portfolio - Electrical Engineer' },
    description: {
      pt: 'Website responsivo e moderno para apresentação de portfólio profissional de um Engenheiro Eletricista. Design profissional e performance otimizada.',
      en: "Responsive, modern website showcasing an Electrical Engineer's professional portfolio. Professional design and optimized performance.",
    },
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    type: 'personal',
    image: '/img/portfolio-ac.png',
    imageWidth: 1901,
    imageHeight: 887,
    link: 'https://anderson-csto.vercel.app',
  },
  {
    title: { pt: 'EcoFluid MES', en: 'EcoFluid MES' },
    description: {
      pt: 'Sistema MES (Manufacturing Execution System) desenvolvido como freelancer para uma fábrica de mangueiras de irrigação recicladas e resinas PEAD/PEBD. Controla execução de ordens de produção, apontamentos, paradas e KPIs (OEE) em tempo real, com integração via OAuth2 ao ERP Bling.',
      en: 'Manufacturing Execution System (MES) built as a freelancer for a recycled irrigation-hose and PEAD/PEBD resin manufacturer. Controls real-time production order execution, output logging, downtime, and OEE KPIs, with OAuth2 integration to the Bling ERP.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'TanStack Query', 'Laravel', 'Laravel Sanctum', 'SQLite', 'MySQL', 'OAuth2'],
    type: 'freelance',
    image: '/img/mesecofluid.png',
    imageWidth: 1888,
    imageHeight: 858,
  },
  {
    title: { pt: 'Site Institucional Ecofluid Plásticos', en: 'Ecofluid Plásticos Institutional Website' },
    description: {
      pt: 'Site institucional desenvolvido como freelancer para a Ecofluid, fabricante de mangueiras de irrigação recicladas e resinas PEAD/PEBD, com páginas de empresa, produtos, suporte, localização e contato.',
      en: 'Institutional website built as a freelancer for Ecofluid, a manufacturer of recycled irrigation hoses and PEAD/PEBD resins, featuring company, products, support, location, and contact pages.',
    },
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    type: 'freelance',
    image: '/img/siteecofluid.png',
    imageWidth: 1580,
    imageHeight: 859,
    link: 'https://www.ecofluidplasticos.com/',
  },
  {
    title: { pt: 'Sistema de Rastreabilidade Industrial', en: 'Industrial Traceability System' },
    description: {
      pt: 'Sistema corporativo de rastreabilidade integrado a ERP (Protheus/TOTVS), cobrindo o fluxo de produção com geração de relatórios e trilha de auditoria em tempo real.',
      en: 'Corporate traceability system integrated with an ERP (Protheus/TOTVS), covering the production flow with real-time reporting and audit trail.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'TOTVS/Protheus (integração)', 'Figma'],
    type: 'corporate',
    image: '/img/rastreabilidade.webp',
    imageWidth: 666,
    imageHeight: 347,
  },
  {
    title: { pt: 'Plataforma de Monitoramento Industrial (IoT)', en: 'Industrial Monitoring Platform (IoT)' },
    description: {
      pt: 'Painel em tempo real para acompanhamento de produção, substituindo o acompanhamento manual por leitura automática via sensores ESP32 e leitores RFID.',
      en: 'Real-time production monitoring dashboard, replacing manual tracking with automatic readings from ESP32 sensors and RFID readers.',
    },
    tech: ['React', 'JavaScript', 'Laravel', 'Laravel Sanctum', 'Vite', 'MySQL', 'Esp32', 'MicroPython', 'RFID', 'Figma'],
    type: 'corporate',
  },
  {
    title: { pt: 'Site Institucional Corporativo', en: 'Corporate Institutional Website' },
    description: {
      pt: 'SPA em React com CMS próprio para gestão de conteúdo institucional, comunicação e marketing da empresa.',
      en: "React SPA with a custom CMS for managing the company's institutional content, communications, and marketing.",
    },
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
    type: 'corporate',
    image: '/img/siteteiu.png',
    imageWidth: 1888,
    imageHeight: 858,
    link: 'https://teiu.com.br/',
  },
  {
    title: { pt: 'Plataforma de Gestão de Documentos e RH', en: 'Document Management & HR Platform' },
    description: {
      pt: 'Plataforma corporativa para gestão de documentos e assinaturas digitais, com fluxos de aprovação para processos de RH (admissão, movimentação, desligamento), integrada a ERP corporativo (Protheus).',
      en: 'Corporate platform for document management and digital signatures, with approval workflows for HR processes (onboarding, transfers, terminations), integrated with a corporate ERP (Protheus).',
    },
    tech: ['PHP', 'React', 'Tailwind CSS', 'MySQL', 'TOTVS/Protheus (integração)', 'Figma'],
    type: 'corporate',
    image: '/img/gestaocorp.jpeg',
    imageWidth: 764,
    imageHeight: 401,
  },
  {
    title: { pt: 'Plataforma de Votação com Biometria Facial', en: 'Facial Biometrics Voting Platform' },
    description: {
      pt: 'Plataforma para gestão do ciclo eleitoral de comitês internos de segurança do trabalho, com cadastro biométrico facial, votação com autenticação facial e apuração em tempo real.',
      en: 'Platform for managing internal workplace-safety committee elections, with facial biometric registration, face-authenticated voting, and real-time results.',
    },
    tech: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'Python', 'OpenCV', 'face_recognition (dlib)', 'Figma'],
    type: 'corporate',
    image: '/img/votacaobiometrioca.png',
    imageWidth: 992,
    imageHeight: 708,
  },
];
