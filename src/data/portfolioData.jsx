import { JSIcon, HTMLIcon, CSSIcon, DatabaseIcon, PHPIcon, NodeIcon, HTTPSIcon } from './svgIcons';

export const TECH = {
  html:       { label: 'HTML',       Icon: HTMLIcon     },
  css:        { label: 'CSS',        Icon: CSSIcon      },
  js:         { label: 'JavaScript', Icon: JSIcon       },
  node:       { label: 'Node.js',    Icon: JSIcon       },
  php:        { label: 'PHP',        Icon: PHPIcon      },
  mysql:      { label: 'MySQL',      Icon: DatabaseIcon },
  tailwind:   { label: 'Tailwind',   Icon: CSSIcon      },
  nodejs:     { label: 'Node.js',    Icon: NodeIcon     }, 
  https:      { label: 'HTTPS',      Icon: HTTPSIcon    }
};

export const projects = [
  {
    id: 1,
    name: 'API de Gerenciamento de Pedidos',
    description: 'API RESTful para gerenciamento de pedidos em uma loja online.',
    image: '/img/apipedidos.png',
    imageAlt: 'API de Gerenciamento de Pedidos',
    liveUrl: 'http://localhost:3000',
    repoUrl: 'https://github.com/matteoludovino/api-gerenciamento-pedidos',
    stacks: ['nodejs', 'https', 'mysql'],
  },
  {
    id: 2,
    name: 'Barber of War',
    description: 'Site completo para barbearia com agendamento, galeria e integração com banco de dados.',
    image: '/img/barberofwar.png',
    imageAlt: 'Barber of War',
    liveUrl: 'https://barber-of-war.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/Barber-of-War',
    stacks: ['html', 'css', 'js', 'mysql', 'php'],
  },
  {
    id: 3,
    name: 'Saúde+',
    description: 'Plataforma responsiva de descontos para clínica ambulatorial com catálogo de serviços.',
    image: '/img/saudemais.png',
    imageAlt: 'Saúde+',
    liveUrl: 'https://saude-mais.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/SaudeMais',
    stacks: ['html', 'css', 'js'],
  },
  {
    id: 4,
    name: 'VitalCare',
    description: 'Site institucional responsivo para clínica médica, com foco em acessibilidade e UX.',
    image: '/img/vitalcare.png',
    imageAlt: 'VitalCare',
    liveUrl: 'https://clinica-vitalcare.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/VitalCare',
    stacks: ['html', 'css', 'js'],
  },
  {
    id: 5,
    name: 'Seu Burguer',
    description: 'Cardápio online responsivo para hamburgueria, com navegação intuitiva e design atraente.',
    image: '/img/seuburguer.png',
    imageAlt: 'Seu Burguer',
    liveUrl: 'https://seu-burguer.vercel.app/',
    repoUrl: 'https://github.com/matteoludovino/Seu-Burguer',
    stacks: ['html', 'css', 'js'],
  },
  {
    id: 6,
    name: 'Linktree',
    description: 'Plataforma de links úteis para redes sociais, com design responsivo e navegação simples.',
    image: '/img/linktree.png',
    imageAlt: 'Linktree',
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
