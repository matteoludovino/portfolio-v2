import { WhatsAppIcon, LinkedInIcon, GmailIcon } from '../data/svgIcons';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-text">
        <h1>Contato</h1>
        <p>Caso tenha interesse entre em contato comigo:</p>
      </div>
      <div className="contact-buttons">
        <a
          href="http://wa.me/5521992185472"
          className="contact-button"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          <span>Whatsapp</span>
        </a>
        <a
          href="https://www.linkedin.com/in/matteoludovino/"
          className="contact-button"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:matteoludovino@gmail.com"
          className="contact-button"
          target="_blank"
          rel="noreferrer"
        >
          <GmailIcon />
          <span>matteoludovino@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
