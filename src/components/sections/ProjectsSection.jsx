import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

function ProjectsSection({ projects }) {
  return (
    <section id="proyectos" className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio academico"
          title="Proyectos que marcan la diferencia."
          description="Explora una selección de proyectos desarrollados por nuestros estudiantes, donde aplican sus conocimientos para crear soluciones tecnológicas con impacto real."
          centered
        />

        <div className="featured-projects">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="project-feature"
              style={{ '--accent-block': project.accent }}
            >
              <div className="project-brand-panel">
                <span className="project-brand-mark">{project.shortLabel}</span>
                <small>{project.category}</small>
              </div>

              <div className="project-copy-panel">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-meta-lines">
                  <span>{project.roleLine}</span>
                  <span>{project.teamLine}</span>
                  <span>{project.cycleLine}</span>
                </div>

                <div className="tag-row">
                  {project.technologies.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                    >
                      Ver Proyecto
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link to={`/proyectos/${project.slug}`} className="project-link">
                      Ver ficha completa
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;