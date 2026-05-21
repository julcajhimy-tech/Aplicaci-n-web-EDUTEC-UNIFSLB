import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { cycles, getProjectsByCycleId } from '../data/siteContent';

function CyclePage() {
  const { cycleId } = useParams();
  const cycle = cycles.find((item) => item.id === cycleId);

  if (!cycle) {
    return (
      <section className="inner-page">
        <div className="container inner-empty">
          <h1>Ciclo no encontrado</h1>
          <Link to="/" className="button">
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  const relatedProjects = getProjectsByCycleId(cycle.id);
  const Icon = cycle.icon;

  return (
    <section className="inner-page">
      <div className="container">
        <a href="/#ciclos" className="back-link">
          <ArrowLeft size={16} />
          Volver a ciclos
        </a>

        <div className="inner-hero">
          <div className="inner-mark">
            <Icon size={34} />
          </div>
          <span className="eyebrow">{cycle.title}</span>
          <h1>{cycle.headline}</h1>
          <p>{cycle.description}</p>
        </div>

        <div className="detail-grid">
          <section className="detail-panel">
            <h2>Enfoques del ciclo</h2>
            <div className="bullet-list">
              {cycle.focusAreas.map((item) => (
                <article key={item}>{item}</article>
              ))}
            </div>
          </section>

          <section className="detail-panel">
            <h2>Resultados esperados</h2>
            <div className="bullet-list">
              {cycle.outcomes.map((item) => (
                <article key={item}>{item}</article>
              ))}
            </div>
          </section>
        </div>

        <section className="related-section">
          <div className="section-heading">
            <span className="eyebrow">Proyectos vinculados</span>
            <h2>Trabajos relacionados con {cycle.title}</h2>
          </div>

          <div className="related-grid">
            {relatedProjects.map((project) => (
              <article key={project.slug} className="related-card">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/proyectos/${project.slug}`} className="project-link">
                  Ver detalle
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default CyclePage;
