import { Localized } from '../i18n/LanguageContext';

export interface SkillCategory {
  category: Localized;
  items: Localized[];
}

const item = (pt: string, en: string): Localized => ({ pt, en });

export const skillCategories: SkillCategory[] = [
  {
    category: { pt: 'Arquitetura & Liderança', en: 'Architecture & Leadership' },
    items: [
      item('Arquitetura de Software', 'Software Architecture'),
      item('Liderança Técnica', 'Technical Leadership'),
      item('Code Review', 'Code Review'),
      item('Mentoria', 'Mentoring'),
      item('Refactoring de Legado', 'Legacy Refactoring'),
      item('Design de API REST', 'REST API Design'),
    ],
  },
  {
    category: { pt: 'Desenvolvimento & ERP', en: 'Development & ERP' },
    items: [
      item('PHP', 'PHP'),
      item('Laravel', 'Laravel'),
      item('Laravel Sanctum', 'Laravel Sanctum'),
      item('TypeScript', 'TypeScript'),
      item('JavaScript', 'JavaScript'),
      item('React', 'React'),
      item('React Router', 'React Router'),
      item('TanStack Query', 'TanStack Query'),
      item('Node.js', 'Node.js'),
      item('Vite', 'Vite'),
      item('Tailwind CSS', 'Tailwind CSS'),
      item('SQL', 'SQL'),
      item('MySQL', 'MySQL'),
      item('MariaDB', 'MariaDB'),
      item('SQLite', 'SQLite'),
      item('REST APIs', 'REST APIs'),
      item('TOTVS/Protheus (integração)', 'TOTVS/Protheus (integration)'),
      item('WebSockets (tempo real)', 'WebSockets (real-time)'),
      item('Filas/Jobs (Laravel Queues)', 'Queues/Jobs (Laravel Queues)'),
    ],
  },
  {
    category: { pt: 'IoT & Automação Industrial', en: 'IoT & Industrial Automation' },
    items: [
      item('Automação', 'Automation'),
      item('Esp32', 'Esp32'),
      item('MicroPython', 'MicroPython'),
      item('RFID', 'RFID'),
      item('Biometria Facial (em desenvolvimento)', 'Facial Biometrics (in development)'),
      item('GPS/Telemetria (em desenvolvimento)', 'GPS/Telemetry (in development)'),
    ],
  },
  {
    category: { pt: 'Dados & IA', en: 'Data & AI' },
    items: [item('Visão Computacional (Python)', 'Computer Vision (Python)'), item('RBAC', 'RBAC'), item('OAuth2', 'OAuth2')],
  },
  {
    category: { pt: 'Infraestrutura & Ferramentas', en: 'Infrastructure & Tools' },
    items: [
      item('Linux', 'Linux'),
      item('Nginx', 'Nginx'),
      item('Apache', 'Apache'),
      item('IIS Server', 'IIS Server'),
      item('Ubuntu Server', 'Ubuntu Server'),
      item('Git', 'Git'),
      item('GitHub Actions', 'GitHub Actions'),
      item('Insomnia', 'Insomnia'),
      item('Figma', 'Figma'),
      item('Scripts de automação (Bash/PowerShell)', 'Automation scripting (Bash/PowerShell)'),
    ],
  },
  {
    category: { pt: 'Metodologias', en: 'Methodologies' },
    items: [item('Scrum', 'Scrum'), item('Kanban', 'Kanban'), item('Agile', 'Agile'), item('Jira', 'Jira'), item('Slack', 'Slack')],
  },
  {
    category: { pt: 'Idiomas', en: 'Languages' },
    items: [
      item('Português (nativo)', 'Portuguese (native)'),
      item('Inglês – (Técnico)', 'English – Reading/Writing for Technical Documentation'),
      item('Espanhol (intermediário)', 'Spanish (intermediate)'),
    ],
  },
];
