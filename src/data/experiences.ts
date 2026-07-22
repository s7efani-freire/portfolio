import { Localized } from '../i18n/LanguageContext';

export interface Experience {
  title: Localized;
  company: string;
  period: Localized;
  description: Localized;
  skills: Localized[];
}

const skill = (pt: string, en: string): Localized => ({ pt, en });

export const experiences: Experience[] = [
  {
    title: { pt: 'Tech Lead', en: 'Tech Lead' },
    company: 'Teiú Indústria e Comércio LTDA',
    period: { pt: 'Julho 2025 - o momento', en: 'July 2025 - present' },
    description: {
      pt: 'Lidero uma equipe de 5 desenvolvedores (incluindo 1 QA), definindo arquiteturas de sistemas, escolhas tecnológicas e boas práticas de engenharia, incluindo code review, mentoria e padronização de APIs REST. Coordenei, desenvolvi e executei mais de 10 sistemas no último ano, incluindo um sistema de rastreabilidade integrado a ERP corporativo (Protheus) e uma plataforma de monitoramento industrial com sensores ESP32 e RFID, unindo integrações críticas, IoT e infraestrutura corporativa.',
      en: 'I lead a team of 5 developers (including 1 QA), defining system architectures, technology choices, and engineering best practices, including code review, mentoring, and REST API standardization. I coordinated, developed, and delivered more than 10 systems in the last year, including a traceability system integrated with a corporate ERP (Protheus) and an industrial monitoring platform with ESP32 sensors and RFID, combining critical integrations, IoT, and corporate infrastructure.',
    },
    skills: [
      skill('Arquitetura de Software', 'Software Architecture'),
      skill('Liderança Técnica', 'Technical Leadership'),
      skill('Code Review', 'Code Review'),
      skill('Mentoria', 'Mentoring'),
      skill('TypeScript', 'TypeScript'),
      skill('Tailwind CSS', 'Tailwind CSS'),
      skill('Laravel', 'Laravel'),
      skill('PHP', 'PHP'),
      skill('SQL', 'SQL'),
      skill('Git', 'Git'),
      skill('IIS Server', 'IIS Server'),
      skill('MySQL', 'MySQL'),
    ],
  },
  {
    title: { pt: 'Desenvolvedora Web', en: 'Web Developer' },
    company: 'Teiú Indústria e Comércio LTDA',
    period: { pt: 'Junho 2024 - Junho 2025', en: 'June 2024 - June 2025' },
    description: {
      pt: 'Desenvolvimento de sistemas web utilizando tecnologias front-end, back-end, banco de dados e gerenciamento de servidores. Foco em criar soluções que fazem a diferença.',
      en: 'Web systems development using front-end, back-end, database, and server management technologies, focused on building solutions that make a difference.',
    },
    skills: [
      skill('JavaScript', 'JavaScript'),
      skill('Bootstrap', 'Bootstrap'),
      skill('Laravel', 'Laravel'),
      skill('PHP', 'PHP'),
      skill('SQL', 'SQL'),
      skill('Git', 'Git'),
      skill('IIS Server', 'IIS Server'),
      skill('MySQL', 'MySQL'),
    ],
  },
  {
    title: { pt: 'Técnica de Eletrônica', en: 'Electronics Technician' },
    company: 'Teiú Indústria e Comércio LTDA',
    period: { pt: 'Junho 2022 - Junho 2024', en: 'June 2022 - June 2024' },
    description: {
      pt: 'Desenvolvimento de sistemas voltados para automação e integração com hardware, incluindo criação de rotinas, apoio em sistemas embarcados e prototipagem de circuitos eletrônicos.',
      en: 'Development of automation and hardware integration systems, including routine creation, embedded systems support, and electronic circuit prototyping.',
    },
    skills: [
      skill('Automação', 'Automation'),
      skill('Esp32', 'Esp32'),
      skill('MicroPython', 'MicroPython'),
      skill('HTML5', 'HTML5'),
      skill('CSS3', 'CSS3'),
      skill('PHP', 'PHP'),
      skill('Ubuntu Server', 'Ubuntu Server'),
      skill('MariaDB', 'MariaDB'),
    ],
  },
];
