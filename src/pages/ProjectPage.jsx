import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { academicHighlights } from '../data/siteContent';

function ProjectPage() {
  const { projectSlug } = useParams();
  const project = academicHighlights.find((item) => item.slug === projectSlug);

  if (!project) {
    return (
      <section className="inner-page">
        <div className="container inner-empty">
          <h1>Proyecto no encontrado</h1>
          <Link to="/" className="button">
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="inner-page">
      <div className="container">
        <a href="/#proyectos" className="back-link">
          <ArrowLeft size={16} />
          Volver a trabajos destacados
        </a>

        <div className="project-detail-hero" style={{ '--accent-block': project.accent }}>
          <div className="project-brand-panel detail">
            <span className="project-brand-mark">{project.shortLabel}</span>
            <small>{project.category}</small>
          </div>
          <div className="project-detail-copy">
            <span className="eyebrow">{project.cycleLine}</span>
            <h1>{project.title}</h1>
            <p>{project.longDescription}</p>
          </div>
        </div>

        <div className="detail-grid project">
          <section className="detail-panel">
            <h2>Objetivos</h2>
            <div className="bullet-list">
              {project.goals.map((item) => (
                <article key={item}>{item}</article>
              ))}
            </div>
          </section>

          <section className="detail-panel">
            <h2>Entregables y valor</h2>
            <div className="bullet-list">
              {project.deliverables.map((item) => (
                <article key={item}>{item}</article>
              ))}
            </div>
          </section>
        </div>

        <section className="detail-panel">
          <h2>Tecnologias empleadas</h2>
          <div className="tag-row">
            {project.technologies.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProjectPage;