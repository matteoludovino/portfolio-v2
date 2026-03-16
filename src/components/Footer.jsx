import { WhatsAppIcon, LinkedInIcon, GmailIcon } from '../data/svgIcons';

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
        <a href="https://seu-burguer.vercel.app/" target="_blank" rel="noreferrer">Seu Burguer</a>
        <a href="https://clinica-vitalcare.vercel.app/" target="_blank" rel="noreferrer">VitalCare</a>
        <a href="https://barber-of-war.vercel.app/" target="_blank" rel="noreferrer">Barber of War</a>
        <a href="https://saude-mais.vercel.app/" target="_blank" rel="noreferrer">SaúdeMais</a>
      </div>

      <div className="contact">
        <h3>Contato</h3>
        <a href="http://wa.me/5521992185472" target="_blank" rel="noreferrer">
          <WhatsAppIcon /> Whatsapp
        </a>
        <a href="https://www.linkedin.com/in/matteoludovino/" target="_blank" rel="noreferrer">
          <LinkedInIcon /> LinkedIn
        </a>
        <a href="mailto:matteoludovino@gmail.com" target="_blank" rel="noreferrer">
          <GmailIcon /> matteoludovino@gmail.com
        </a>
      </div>
    </footer>
  );
}
