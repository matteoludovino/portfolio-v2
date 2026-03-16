import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AllProjects() {
  return (
    <>
      <Navbar />

      <main className="ap-page">
        <div className="ap-header">
          <Link to="/" className="ap-back-link">
            <i className="fas fa-arrow-left"></i>
            Voltar ao início
          </Link>
          <h1 className="ap-title">Todos os Projetos</h1>
          <p className="ap-subtitle">
            {projects.length} projeto{projects.length !== 1 ? 's' : ''} no total
          </p>
        </div>

        <div className="pc-grid pc-grid--all">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
