import { TECH } from '../data/portfolioData';

export default function ProjectCard({ project }) {
  const { name, description, image, imageAlt, liveUrl, repoUrl, stacks } = project;

  return (
    <div className="pc-card">
      <a
        href={liveUrl}
        target="_blank"
        rel="noreferrer"
        className="pc-card__image-link"
        aria-label={`Abrir ${name}`}
      >
        <div className="pc-card__image-wrap">
          <img src={image} alt={imageAlt} className="pc-card__image" loading="lazy" />
          <div className="pc-card__image-overlay">
            <span className="pc-card__image-cta">
              <i className="fas fa-arrow-up-right-from-square"></i>
            </span>
          </div>
        </div>
      </a>

      <div className="pc-card__body">
        <h3 className="pc-card__name">{name}</h3>
        <p className="pc-card__desc">{description}</p>

        <div className="pc-card__stacks">
          {stacks.map((key) => {
            const tech = TECH[key];
            if (!tech) return null;
            return (
              <span key={key} className="pc-stack-badge">
                <tech.Icon />
                {tech.label}
              </span>
            );
          })}
        </div>

        <div className="pc-card__actions button-container">
          <a href={liveUrl} target="_blank" rel="noreferrer" className="glow-on-hover">
            Abrir projeto
          </a>
          <a href={repoUrl} target="_blank" rel="noreferrer" className="glow-on-hover">
            Repositório
          </a>
        </div>
      </div>
    </div>
  );
}
