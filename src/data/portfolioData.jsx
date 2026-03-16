import { JSIcon, HTMLIcon, CSSIcon, DatabaseIcon, PHPIcon } from './svgIcons';

export const TECH = {
  html:       { label: 'HTML',       Icon: HTMLIcon     },
  css:        { label: 'CSS',        Icon: CSSIcon      },
  js:         { label: 'JavaScript', Icon: JSIcon       },
  node:       { label: 'Node.js',    Icon: JSIcon       },
  php:        { label: 'PHP',        Icon: PHPIcon      },
  mysql:      { label: 'MySQL',      Icon: DatabaseIcon },
  tailwind:   { label: 'Tailwind',   Icon: CSSIcon      },
};

export const projects = [
  {
    id: 1,
    name: 'Barber of War',
    description: 'Site completo para barbearia com agendamento, galeria e integração com banco de dados.',
    image: '/img/barberofwar.png',
    imageAlt: 'Barber of War Mockup',
    liveUrl: 'https://barber-of-war.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/Barber-of-War',
    stacks: ['html', 'css', 'js', 'mysql', 'php'],
  },
  {
    id: 2,
    name: 'Saúde+',
    description: 'Plataforma responsiva de descontos para clínica ambulatorial com catálogo de serviços.',
    image: '/img/saudemais.png',
    imageAlt: 'Saúde+ Mockup',
    liveUrl: 'https://saude-mais.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/SaudeMais',
    stacks: ['html', 'css', 'js'],
  },
  {
    id: 3,
    name: 'VitalCare',
    description: 'Site institucional responsivo para clínica médica, com foco em acessibilidade e UX.',
    image: '/img/vitalcare.png',
    imageAlt: 'VitalCare Mockup',
    liveUrl: 'https://clinica-vitalcare.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/VitalCare',
    stacks: ['html', 'css', 'js'],
  },
  {
    id: 4,
    name: 'Seu Burguer',
    description: 'Cardápio online responsivo para hamburgueria, com navegação intuitiva e design atraente.',
    image: '/img/seuburguer.png',
    imageAlt: 'Seu Burguer Mockup',
    liveUrl: 'https://seu-burguer.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/Seu-Burguer',
    stacks: ['html', 'css', 'js'],
  },
  {
    id: 5,
    name: 'Linktree',
    description: 'Plataforma de links úteis para redes sociais, com design responsivo e navegação simples.',
    image: '/img/linktree.png',
    imageAlt: 'Linktree Mockup',
    liveUrl: 'https://linktree-matteoludovino.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/Linktree',
    stacks: ['html', 'css'],
  },
];

export const skills = [
  { id: 1, name: 'JavaScript', Icon: JSIcon  },
  { id: 2, name: 'HTML',       Icon: HTMLIcon },
  { id: 3, name: 'CSS',        Icon: CSSIcon  },
];
