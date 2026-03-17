# Matteo Ludovino — Portfólio (React + Vite)

Migração do portfólio original (HTML/CSS/JS puro) para React com Vite.
100% idêntico visualmente — apenas a estrutura foi refatorada.

## Tecnologias

- React 19
- Vite 8
- CSS puro (sem CSS-in-JS ou frameworks de UI)
- Font Awesome (CDN)

## Estrutura do projeto

```
src/
├── components/
│   ├── Navbar.jsx      # Menu com toggle mobile (useState)
│   ├── Hero.jsx        # Seção principal com animações CSS
│   ├── Projects.jsx    # Carrossel de projetos (useState + useRef)
│   ├── Skills.jsx      # Grid de habilidades
│   ├── About.jsx       # Seção sobre mim
│   ├── Contact.jsx     # Botões de contato
│   └── Footer.jsx      # Rodapé com links
├── pages/
│   └── Home.jsx        # Página principal
├── data/
│   ├── svgIcons.jsx    # Todos os SVGs como componentes React
│   └── portfolioData.jsx
├── styles/
│   └── global.css      # CSS original sem alterações
├── App.jsx             # Theme toggle com localStorage
└── main.jsx
```

## Instalação e execução

```bash
npm install
npm run dev
npm run build
```

## Assets necessários em /public

```
public/
├── img/
│   ├── seuburguer.png
│   ├── vitalcare.png
│   ├── saudemais.png
│   ├── barberofwar.png
│   └── image.ico
└── document/
    └── Matteo Ludovino - Desenvolvedor.pdf
```
