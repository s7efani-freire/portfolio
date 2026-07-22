import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const lang = process.argv.includes('--lang=en') ? 'en' : 'pt';
const outputPath = path.join(__dirname, '..', 'public', lang === 'en' ? 'resume-en.pdf' : 'resume.pdf');

const ACCENT = '#c2410c';
const TEXT = '#1f2937';
const MUTED = '#4b5563';

const BIRTH_DATE = new Date(2003, 2, 15);

function calculateAge(birthDate, today = new Date()) {
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}

const age = calculateAge(BIRTH_DATE);

const contact = {
  name: 'Stéfani Soares Freire',
  title: 'Tech Lead',
  location: {
    pt: 'Vitória da Conquista - BA (aberta a vagas remotas)',
    en: 'Vitória da Conquista, Brazil (open to remote roles)',
  },
  phone: '(77) 9 9915-8332',
  email: 'stefani7freire@gmail.com',
  portfolioDisplay: 'stefanifreire.vercel.app',
  portfolioUrl: 'https://stefanifreire.vercel.app',
  githubDisplay: 'github.com/s7efani-freire',
  githubUrl: 'https://github.com/s7efani-freire',
  linkedinDisplay: 'linkedin.com/in/stefani-freire',
  linkedinUrl: 'https://www.linkedin.com/in/stefani-freire/',
};

const headings = {
  summary: { pt: 'Resumo Profissional', en: 'Professional Summary' },
  experience: { pt: 'Experiência Profissional', en: 'Professional Experience' },
  education: { pt: 'Formação Acadêmica', en: 'Education' },
  skills: { pt: 'Stack & Competências', en: 'Stack & Skills' },
  skillsLabel: { pt: 'Habilidades: ', en: 'Skills: ' },
};

const summary = {
  pt: 'Tech Lead com mais de 4 anos de trajetória em desenvolvimento (fullstack PHP/Laravel e React/TypeScript), atuando também com integrações IoT e infraestrutura Linux corporativa. Lidero uma equipe de 5 desenvolvedores (incluindo 1 QA), arquitetando e desenvolvendo sistemas críticos como um sistema de rastreabilidade integrado a ERP corporativo (Protheus) e uma plataforma de monitoramento industrial com sensores ESP32 e RFID. Atuo fortemente em migrações de sistemas legados, refactoring e deploy em ambientes de produção corporativa (Ubuntu Server, IIS, proxy).',
  en: 'Tech Lead with more than 4 years of experience in development (fullstack PHP/Laravel and React/TypeScript), also working with IoT integrations and corporate Linux infrastructure. I lead a team of 5 developers (including 1 QA), architecting and developing critical systems such as a traceability system integrated with a corporate ERP (Protheus) and an industrial monitoring platform with ESP32 sensors and RFID. I am strongly involved in legacy system migrations, refactoring, and deployment in corporate production environments (Ubuntu Server, IIS, proxy).',
};

const experiences = [
  {
    title: { pt: 'Tech Lead', en: 'Tech Lead' },
    company: 'Teiú Indústria e Comércio LTDA',
    period: { pt: 'Julho 2025 - o momento', en: 'July 2025 - present' },
    description: {
      pt: 'Lidero uma equipe de 5 desenvolvedores (incluindo 1 QA), definindo arquiteturas de sistemas, escolhas tecnológicas e boas práticas de engenharia, incluindo code review, mentoria e padronização de APIs REST. Coordenei, desenvolvi e executei mais de 10 sistemas no último ano, incluindo um sistema de rastreabilidade integrado a ERP corporativo (Protheus) que reduziu em cerca de 60% o tempo de conferências e transferências, e uma plataforma de monitoramento industrial com sensores ESP32 e RFID.',
      en: 'I lead a team of 5 developers (including 1 QA), defining system architectures, technology choices, and engineering best practices, including code review, mentoring, and REST API standardization. I coordinated, developed, and delivered more than 10 systems in the last year, including a traceability system integrated with a corporate ERP (Protheus) that cut manual conference and transfer time by about 60%, and an industrial monitoring platform with ESP32 and RFID sensors.',
    },
    skills: {
      pt: 'Arquitetura de Software, Liderança Técnica, Code Review, Mentoria, TypeScript, Tailwind CSS, Laravel, PHP, SQL, Git, IIS Server, MySQL',
      en: 'Software Architecture, Technical Leadership, Code Review, Mentoring, TypeScript, Tailwind CSS, Laravel, PHP, SQL, Git, IIS Server, MySQL',
    },
  },
  {
    title: { pt: 'Desenvolvedora Web', en: 'Web Developer' },
    company: 'Teiú Indústria e Comércio LTDA',
    period: { pt: 'Junho 2024 - Junho 2025', en: 'June 2024 - June 2025' },
    description: {
      pt: 'Desenvolvimento de sistemas web utilizando tecnologias front-end, back-end, banco de dados e gerenciamento de servidores. Foco em criar soluções que fazem a diferença.',
      en: 'Web systems development using front-end, back-end, database, and server management technologies, focused on building solutions that make a difference.',
    },
    skills: { pt: 'JavaScript, Bootstrap, Laravel, PHP, SQL, Git, IIS Server, MySQL', en: 'JavaScript, Bootstrap, Laravel, PHP, SQL, Git, IIS Server, MySQL' },
  },
  {
    title: { pt: 'Técnica de Eletrônica', en: 'Electronics Technician' },
    company: 'Teiú Indústria e Comércio LTDA',
    period: { pt: 'Junho 2022 - Junho 2024', en: 'June 2022 - June 2024' },
    description: {
      pt: 'Desenvolvimento de sistemas voltados para automação e integração com hardware, incluindo criação de rotinas, apoio em sistemas embarcados e prototipagem de circuitos eletrônicos.',
      en: 'Development of automation and hardware integration systems, including routine creation, embedded systems support, and electronic circuit prototyping.',
    },
    skills: { pt: 'Automação, Esp32, MicroPython, HTML5, CSS3, PHP, Ubuntu Server, MariaDB', en: 'Automation, Esp32, MicroPython, HTML5, CSS3, PHP, Ubuntu Server, MariaDB' },
  },
];

const education = [
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

const skillGroups = [
  {
    category: { pt: 'Arquitetura & Liderança', en: 'Architecture & Leadership' },
    items: {
      pt: 'Arquitetura de Software, Liderança Técnica, Code Review, Mentoria, Refactoring de Legado, Design de API REST',
      en: 'Software Architecture, Technical Leadership, Code Review, Mentoring, Legacy Refactoring, REST API Design',
    },
  },
  {
    category: { pt: 'Desenvolvimento & ERP', en: 'Development & ERP' },
    items: {
      pt: 'PHP, Laravel, Laravel Sanctum, TypeScript, JavaScript, React, React Router, TanStack Query, Node.js, Vite, Tailwind CSS, SQL, MySQL, MariaDB, SQLite, REST APIs, TOTVS/Protheus (integração), WebSockets (tempo real), Filas/Jobs (Laravel Queues)',
      en: 'PHP, Laravel, Laravel Sanctum, TypeScript, JavaScript, React, React Router, TanStack Query, Node.js, Vite, Tailwind CSS, SQL, MySQL, MariaDB, SQLite, REST APIs, TOTVS/Protheus (integration), WebSockets (real-time), Queues/Jobs (Laravel Queues)',
    },
  },
  {
    category: { pt: 'IoT & Automação Industrial', en: 'IoT & Industrial Automation' },
    items: {
      pt: 'Automação, Esp32, MicroPython, RFID, Biometria Facial (em desenvolvimento), GPS/Telemetria (em desenvolvimento)',
      en: 'Automation, Esp32, MicroPython, RFID, Facial Biometrics (in development), GPS/Telemetry (in development)',
    },
  },
  {
    category: { pt: 'Dados & IA', en: 'Data & AI' },
    items: { pt: 'Visão Computacional (Python), RBAC, OAuth2', en: 'Computer Vision (Python), RBAC, OAuth2' },
  },
  {
    category: { pt: 'Infraestrutura & Ferramentas', en: 'Infrastructure & Tools' },
    items: {
      pt: 'Linux, Nginx, Apache, IIS Server, Ubuntu Server, Git, GitHub Actions, Insomnia, Figma, Scripts de automação (Bash/PowerShell)',
      en: 'Linux, Nginx, Apache, IIS Server, Ubuntu Server, Git, GitHub Actions, Insomnia, Figma, Automation scripting (Bash/PowerShell)',
    },
  },
  {
    category: { pt: 'Metodologias', en: 'Methodologies' },
    items: { pt: 'Scrum, Kanban, Agile, Jira, Slack', en: 'Scrum, Kanban, Agile, Jira, Slack' },
  },
  {
    category: { pt: 'Idiomas', en: 'Languages' },
    items: {
      pt: 'Português (nativo), Inglês – Leitura e escrita de documentação técnica, Espanhol (intermediário)',
      en: 'Portuguese (native), English – Reading/Writing for Technical Documentation, Spanish (intermediate)',
    },
  },
];

function tr(localized) {
  return localized[lang];
}

const doc = new PDFDocument({ size: 'A4', margins: { top: 26, bottom: 26, left: 50, right: 50 } });
doc.pipe(fs.createWriteStream(outputPath));

function sectionHeading(localizedText) {
  doc.moveDown(0.55);
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(12).text(tr(localizedText).toUpperCase(), { characterSpacing: 1 });
  const y = doc.y + 2;
  doc.moveTo(50, y).lineTo(545, y).strokeColor(ACCENT).lineWidth(1).stroke();
  doc.moveDown(0.5);
  doc.fillColor(TEXT);
}

// Header
doc.fillColor(TEXT).font('Helvetica-Bold').fontSize(24).text(contact.name);
doc.font('Helvetica').fontSize(13).fillColor(ACCENT).text(`${contact.title} • ${age} ${lang === 'pt' ? 'anos' : 'years old'}`);
doc.moveDown(0.4);

doc.fontSize(9.5);
doc.fillColor(MUTED).text(`${tr(contact.location)}  |  ${contact.phone}  |  `, { continued: true });
doc.fillColor(ACCENT).text(contact.email, { underline: true, link: `mailto:${contact.email}` });

doc.moveDown(0.2);
doc.fillColor(MUTED).text(lang === 'pt' ? 'Portfólio: ' : 'Portfolio: ', { continued: true });
doc.fillColor(ACCENT).text(contact.portfolioDisplay, { continued: true, underline: true, link: contact.portfolioUrl });
doc.fillColor(MUTED).text('  |  LinkedIn: ', { continued: true });
doc.fillColor(ACCENT).text(contact.linkedinDisplay, { continued: true, underline: true, link: contact.linkedinUrl });
doc.fillColor(MUTED).text('  |  GitHub: ', { continued: true });
doc.fillColor(ACCENT).text(contact.githubDisplay, { underline: true, link: contact.githubUrl });
doc.fillColor(TEXT);

// Summary
sectionHeading(headings.summary);
doc.font('Helvetica').fontSize(10.5).fillColor(TEXT).text(tr(summary), { align: 'justify', lineGap: 1.5 });

// Experience
sectionHeading(headings.experience);
experiences.forEach((exp, index) => {
  doc.font('Helvetica-Bold').fontSize(11).fillColor(TEXT).text(tr(exp.title), { continued: true });
  doc.font('Helvetica').fontSize(10).fillColor(MUTED).text(` - ${exp.company}`);
  doc.font('Helvetica-Oblique').fontSize(9.5).fillColor(MUTED).text(tr(exp.period));
  doc.moveDown(0.4);
  doc.font('Helvetica').fontSize(10).fillColor(TEXT).text(tr(exp.description), { align: 'justify', lineGap: 1.5 });
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(MUTED).text(tr(headings.skillsLabel), { continued: true });
  doc.font('Helvetica').fontSize(9).fillColor(MUTED).text(tr(exp.skills));
  if (index < experiences.length - 1) doc.moveDown(0.5);
});

// Education
sectionHeading(headings.education);
education.forEach((item, index) => {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(TEXT).text(tr(item.course), { continued: true });
  doc.font('Helvetica').fontSize(10).fillColor(MUTED).text(` - ${item.institution}`);
  doc.font('Helvetica-Oblique').fontSize(9.5).fillColor(MUTED).text(tr(item.status));
  if (index < education.length - 1) doc.moveDown(0.35);
});

// Skills
sectionHeading(headings.skills);
skillGroups.forEach((group, index) => {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT).text(`${tr(group.category)}: `, { continued: true });
  doc.font('Helvetica').fontSize(10).fillColor(MUTED).text(tr(group.items), { lineGap: 2 });
  if (index < skillGroups.length - 1) doc.moveDown(0.12);
});

doc.end();

doc.on('end', () => {
  console.log(`${lang === 'en' ? 'Resume' : 'Currículo'} generated at ${outputPath}`);
});
