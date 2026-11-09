import { WhatsAppIcon, LinkedInIcon, GmailIcon } from '../data/svgIcons';
import { projects } from '../data/portfolioData';

// Same order as the projects section: newest first. Adding a project updates the footer.
const FOOTER_PROJECTS = projects.slice(0, 4);

export default function Footer() {
  return (
    <footer>
      <div className="browse">
        <h3>Navegue</h3>
        <a href="/">Início</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Habilidades</a>
        <a href="#about">Sobre mim</a>
      </div>

      <div className="projects">
        <h3>Projetos</h3>
        {FOOTER_PROJECTS.map(({ id, name, liveUrl }) => (
          <a key={id} href={liveUrl} target="_blank" rel="noreferrer">{name}</a>
        ))}
      </div>

      <div className="contact">
        <h3>Contato</h3>
        <a href="http://wa.me/5521992185472" target="_blank" rel="noreferrer">
          <WhatsAppIcon /> Whatsapp
        </a>
        <a href="https://www.linkedin.com/in/matteoludovino/" target="_blank" rel="noreferrer">
          <LinkedInIcon /> LinkedIn
        </a>
        <a href="mailto:matteoludovino@gmail.com" title="matteoludovino@gmail.com">
          <GmailIcon /> E-mail
        </a>
      </div>
    </footer>
  );
}
