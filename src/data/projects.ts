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
  githubUrl?: string;
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
    githubUrl: 'https://github.com/s7efani-freire/anderson-csto',
  },
  {
    title: { pt: 'Sistema de Gestão de Condomínios', en: 'Condominium Management System' },
    description: {
      pt: 'Sistema para escritórios de advocacia gerenciarem ações judiciais e extrajudiciais relacionadas a condomínios, com backend em Laravel e frontend em React (Vite). A versão de demonstração publicada é apenas o frontend; o backend completo está disponível no repositório, na branch main.',
      en: 'System for law firms to manage judicial and extrajudicial legal actions related to condominiums, with a Laravel backend and a React (Vite) frontend. The published demo is frontend-only; the full backend is available in the repository, on the main branch.',
    },
    tech: ['PHP', 'Laravel', 'React', 'Vite', 'MySQL'],
    type: 'personal',
    image: '/img/condominios.png',
    imageWidth: 1896,
    imageHeight: 888,
    link: 'https://legal-management-system-gamma.vercel.app',
    githubUrl: 'https://github.com/s7efani-freire/legal-management-system',
  },
  {
    title: { pt: 'Meteor Blaster', en: 'Meteor Blaster' },
    description: {
      pt: 'Shooter espacial simples feito em React, onde você pilota uma nave, desvia de meteoros e atira neles para fazer pontos. É uma homenagem/versão livre de um jogo que eu jogava muito na infância, sem grandes ambições técnicas: puramente nostalgia e valor emocional, uma forma de recriar a sensação de sentar e jogar aquele clássico de nave x meteoros. O objetivo é destruir meteoros para ganhar pontos e sobreviver o máximo possível; encostar em um meteoro encerra a partida, e o recorde (high score) fica salvo no navegador.',
      en: "Simple space shooter built in React, where you pilot a ship, dodge meteors, and shoot them for points. It's a tribute/free version of a game I played a lot as a kid, with no big technical ambitions: pure nostalgia and emotional value, a way to recreate the feeling of sitting down to play that classic ship-vs-meteors game. The goal is to destroy meteors to score points and survive as long as possible; touching a meteor ends the run, and the high score is saved in the browser.",
    },
    tech: ['React', 'TypeScript', 'Vite'],
    type: 'personal',
    image: '/img/meteor.png',
    imageWidth: 1912,
    imageHeight: 899,
    link: 'https://game-ship.vercel.app/',
    githubUrl: 'https://github.com/s7efani-freire/game-ship',
  },
  {
    title: { pt: 'Scriva', en: 'Scriva' },
    description: {
      pt: 'Aplicação web que grava reuniões pelo navegador, transcreve o áudio com Whisper (Groq) e gera automaticamente uma ATA estruturada com LLaMA 3.3, rodando de forma local e gratuita.',
      en: 'Web app that records meetings in the browser, transcribes audio with Whisper (Groq), and automatically generates a structured meeting minutes document with LLaMA 3.3, running fully local and free.',
    },
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Groq API (Whisper)', 'Groq API (LLaMA 3.3)', 'SQLite'],
    type: 'personal',
    image: '/img/scriva.png',
    imageWidth: 1901,
    imageHeight: 857,
    githubUrl: 'https://github.com/s7efani-freire/scriva',
  },
  {
    title: { pt: 'EcoFluid MES', en: 'EcoFluid MES' },
    description: {
      pt: 'Sistema MES (Manufacturing Execution System) desenvolvido como freelancer para uma fábrica de mangueiras de irrigação recicladas e resinas PEAD/PEBD. Controla execução de ordens de produção, apontamentos, paradas e KPIs (OEE) em tempo real, com integração via OAuth2 ao ERP Bling. A versão de demonstração publicada é apenas o frontend; o backend completo está disponível no repositório, na branch main.',
      en: 'Manufacturing Execution System (MES) built as a freelancer for a recycled irrigation-hose and PEAD/PEBD resin manufacturer. Controls real-time production order execution, output logging, downtime, and OEE KPIs, with OAuth2 integration to the Bling ERP. The published demo is frontend-only; the full backend is available in the repository, on the main branch.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'TanStack Query', 'Laravel', 'Laravel Sanctum', 'SQLite', 'MySQL', 'OAuth2'],
    type: 'freelance',
    image: '/img/mesecofluid.png',
    imageWidth: 1888,
    imageHeight: 858,
    link: 'https://mes-ecofluid.vercel.app',
    githubUrl: 'https://github.com/s7efani-freire/mes-ecofluid',
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
    githubUrl: 'https://github.com/s7efani-freire/ecofluid',
  },
  {
    title: { pt: 'Sistema de Rastreabilidade Industrial', en: 'Industrial Traceability System' },
    description: {
      pt: 'Sistema corporativo de rastreabilidade integrado a ERP (Protheus/TOTVS), cobrindo o fluxo de produção com geração de relatórios e trilha de auditoria em tempo real. Processa mais de 200 paletes de produtos acabados expedidos por dia, além de 50 matérias-primas diferentes recebidas diariamente em quantidades variadas, para mais de 70 usuários, reduzindo em cerca de 60% o tempo de conferências e transferências que antes eram manuais.',
      en: 'Corporate traceability system integrated with an ERP (Protheus/TOTVS), covering the production flow with real-time reporting and audit trail. Processes more than 200 pallets of finished goods shipped per day, plus 50 different raw materials received daily in varying quantities, for more than 70 users, cutting manual conference and transfer time by about 60%.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'TOTVS/Protheus (integração)', 'Figma'],
    type: 'corporate',
    image: '/img/rastreabilidade.png',
    imageWidth: 1894,
    imageHeight: 806,
  },
  {
    title: { pt: 'Plataforma de Monitoramento Industrial (IoT)', en: 'Industrial Monitoring Platform (IoT)' },
    description: {
      pt: 'Painel em tempo real para acompanhamento de produção, substituindo o acompanhamento manual por leitura automática via sensores ESP32 e leitores RFID. Cobre 12 linhas de produção com 24 sensores, usado por 20 operadores.',
      en: 'Real-time production monitoring dashboard, replacing manual tracking with automatic readings from ESP32 sensors and RFID readers. Covers 12 production lines with 24 sensors, used by 20 operators.',
    },
    tech: ['React', 'JavaScript', 'Laravel', 'Laravel Sanctum', 'Vite', 'MySQL', 'Esp32', 'MicroPython', 'RFID', 'Figma'],
    type: 'corporate',
    image: '/img/monitoramento.png',
    imageWidth: 1942,
    imageHeight: 860,
  },
  {
    title: { pt: 'Site Institucional Corporativo', en: 'Corporate Institutional Website' },
    description: {
      pt: 'Site institucional corporativo customizável por um CMS próprio (desenvolvido também por mim e pela equipe), que permite editar e pré-visualizar todo o conteúdo antes da publicação, com fluxo de aprovação para qualquer alteração no site.',
      en: 'Corporate institutional website customizable through a custom CMS (also built by me and the team), which lets the team edit and preview all content before publishing, with an approval workflow for any change to the site.',
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
      pt: 'Plataforma corporativa para gestão de documentos e assinaturas digitais, com fluxos de aprovação para processos de RH (admissão, movimentação, desligamento), integrada a ERP corporativo (Protheus). Usada por 30 pessoas entre times administrativos e lideranças, gerenciando documentos de mais de 700 funcionários.',
      en: 'Corporate platform for document management and digital signatures, with approval workflows for HR processes (onboarding, transfers, terminations), integrated with a corporate ERP (Protheus). Used by 30 people across administrative teams and leadership, managing documents for more than 700 employees.',
    },
    tech: ['PHP', 'React', 'Tailwind CSS', 'MySQL', 'TOTVS/Protheus (integração)', 'Figma'],
    type: 'corporate',
    image: '/img/gestaocorp.png',
    imageWidth: 1776,
    imageHeight: 683,
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
