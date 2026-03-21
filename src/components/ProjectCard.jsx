import { useState } from 'react';
import { TECH } from '../data/portfolioData';
import ImageModal from './ImageModal';

export default function ProjectCard({ project }) {
  const { name, description, image, imageAlt, liveUrl, repoUrl, stacks } = project;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="pc-card">
        <button
          className="pc-card__image-btn"
          onClick={() => setModalOpen(true)}
          aria-label={`Ver preview de ${name}`}
        >
          <div className="pc-card__image-wrap">
            <img
              src={image}
              alt={imageAlt}
              className="pc-card__image"
              loading="lazy"
            />
            <div className="pc-card__image-overlay">
              <span className="pc-card__image-cta">
                <i className="fas fa-magnifying-glass-plus"></i>
              </span>
            </div>
          </div>
        </button>

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

      {modalOpen && (
        <ImageModal
          image={image}
          alt={imageAlt}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
