import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

function CyclesSection({ cycles }) {
  return (
    <section id="ciclos" className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Ruta academica"
          title="Ciclos academicos"
          description="Cada ciclo ahora puede crecer como una pagina propia, con cursos, proyectos, galeria y contenido diferenciado."
          centered
        />

        <div className="cycles-grid">
          {cycles.map((cycle) => {
            const Icon = cycle.icon;

            return (
              <Link key={cycle.id} className="cycle-card" to={`/ciclos/${cycle.id}`}>
                <div className="cycle-icon">
                  <Icon size={28} />
                </div>
                <h3>{cycle.title}</h3>
                <p className="cycle-subtitle">{cycle.subtitle}</p>
                <p className="cycle-description">{cycle.description}</p>
                <span className="cycle-status">{cycle.status}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CyclesSection;
