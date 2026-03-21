import { DownloadIcon } from '../data/svgIcons';

export default function About() {
  return (
    <section id="about">
      <div className="about-content">
        <h2>Sobre mim</h2>
        <p>
          Opa! Me chamo Matteo, tenho 20 anos e desde criança eu sempre tive interesse
          em programação, sempre tive esse apreço por tecnologia e computadores. Comecei fazendo bots no
          aplicativo Discord utilizando Node.js.
        </p>
        <p>
          Algum tempo depois comecei a estudar Python e criei alguns programas, também estudei a criação de
          websites, inicialmente utilizando apenas HTML e me apaixonei por isso.
        </p>
        <p>
          Em 2024, comecei a cursar Análise e Desenvolvimento de Sistemas 
          e hoje atuo como desenvolvedor Full Stack, utilizando JavaScript, 
          TypeScript, Node.js e React no desenvolvimento de aplicações web, 
          além de trabalhar com serviços da AWS como EC2, S3, Lambda e CloudWatch, 
          aplicando conceitos de arquitetura serverless, integrações e boas práticas 
          de desenvolvimento.
        </p>
        <p>
          Estou disponível para freelance e busco oportunidade de trabalhar na área.
        </p>
        <div className="button-container">
          <a
            href="./document/Matteo Ludovino - Desenvolvedor.pdf"
            download="Matteo Ludovino - Desenvolvedor"
            aria-label="Download Currículo"
            className="glow-on-hover"
          >
            <DownloadIcon /> Currículo
          </a>
        </div>
      </div>
    </section>
  );
}
