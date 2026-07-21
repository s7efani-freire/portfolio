export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Arquiteta de Soluções de TI',
    company: 'Teiú Indústria e Comércio LTDA',
    period: 'Julho 2025 - o momento',
    description:
      'Liderança técnica de equipe de desenvolvimento de software, atuando na definição de arquiteturas de sistemas, escolhas tecnológicas e boas práticas de engenharia. Responsável por soluções escaláveis e integradas, com foco em performance, manutenção e alinhamento com as necessidades do negócio.',
    skills: ['Arquitetura de Software', 'Liderança Técnica', 'TypeScript', 'Tailwind CSS', 'Laravel', 'PHP', 'SQL', 'Git', 'IIS Server', 'MySQL'],
  },
  {
    title: 'Desenvolvedora Web',
    company: 'Teiú Indústria e Comércio LTDA',
    period: 'Junho 2024 - Junho 2025',
    description:
      'Desenvolvimento de sistemas web utilizando tecnologias front-end, back-end, banco de dados e gerenciamento de servidores. Foco em criar soluções que fazem a diferença.',
    skills: ['JavaScript', 'Bootstrap', 'Laravel', 'PHP', 'SQL', 'Git', 'IIS Server', 'MySQL'],
  },
  {
    title: 'Técnica de Eletrônica',
    company: 'Teiú Indústria e Comércio LTDA',
    period: 'Junho 2022 - Junho 2024',
    description:
      'Desenvolvimento de sistemas voltados para automação e integração com hardware, incluindo criação de rotinas, apoio em sistemas embarcados e prototipagem de circuitos eletrônicos.',
    skills: ['Automação', 'Esp32', 'MicroPython', 'HTML5', 'CSS3', 'PHP', 'Ubuntu Server', 'MariaDB'],
  },
];
