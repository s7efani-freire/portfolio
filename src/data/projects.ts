export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Meteor Blaster',
    description:
      'Um mini game divertido onde o jogador pilota uma nave para destruir meteoros e acumular pontos. Desenvolvido com foco em lógica de colisão e controle de movimentos.',
    tech: ['React', 'Node.js', 'Typescript', 'Tailwind CSS'],
    image: '/img/meteor_blaster.png',
    imageWidth: 1019,
    imageHeight: 763,
    link: 'https://game-ship.vercel.app',
  },
  {
    title: 'Reserva Florestal',
    description:
      'Site institucional desenvolvido com React + TypeScript, usando Vite e Tailwind CSS. Apresenta informações sobre eventos, horários, atrações e notícias da reserva, com um formulário de contato integrado e layout responsivo.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    image: '/img/reserva_florestal.png',
    imageWidth: 1902,
    imageHeight: 883,
    link: 'https://reserva-florestal.vercel.app',
  },
  {
    title: 'Portfólio - Engenheiro Eletricista',
    description:
      'Website responsivo e moderno para apresentação de portfólio profissional de um Engenheiro Eletricista. Design profissional e performance otimizada.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    image: '/img/portfolio-ac.png',
    imageWidth: 1901,
    imageHeight: 887,
    link: 'https://anderson-csto.vercel.app',
  },
];
