import { LinkedInIcon, GitHubIcon } from '../data/svgIcons';

export default function Hero() {
  return (
    <section id="person">
      <div className="person-content">
        <div className="person-name">
          <h1>Olá, Meu nome é<span></span></h1>
          <h1>Matteo Ludovino<span></span></h1>
        </div>

        <div className="person-description">
          <p>Tenho 20 anos e sou desenvolvedor Full Stack, saiba mais sobre mim:</p>
        </div>

        <div className="button-container">
          <a
            href="https://www.linkedin.com/in/matteoludovino/"
            className="glow-on-hover"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn
          </a>

          <a
            href="https://github.com/matteoludovino"
            className="glow-on-hover"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> GitHub
          </a>
        </div>

        <a href="#projects" className="scroll-down-link">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
