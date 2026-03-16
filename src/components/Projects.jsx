import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const HOME_LIMIT = 4;

export default function Projects() {
  const featured = projects.slice(0, HOME_LIMIT);

  return (
    <section id="projects">
      <div className="projects-title">
        <h1>Projetos</h1>
      </div>

      <div className="pc-grid pc-grid--home">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length > HOME_LIMIT && (
        <div className="pc-see-more">
          <Link to="/projetos" className="glow-on-hover pc-see-more__btn">
            Ver mais projetos
            <i className="fas fa-arrow-right pc-see-more__icon"></i>
          </Link>
        </div>
      )}
    </section>
  );
}
