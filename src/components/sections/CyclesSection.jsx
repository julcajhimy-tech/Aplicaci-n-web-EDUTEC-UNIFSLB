import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const iconMap = {
  BookOpen: Icons.BookOpen,
  Globe: Icons.Globe,
  BrainCircuit: Icons.BrainCircuit,
  Network: Icons.Network,
};

function CyclesSection({ cycles, isLoading }) {
  if (isLoading) {
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
            {[...Array(4)].map((_, index) => (
              <div key={index} className="cycle-card is-loading">
                <div className="cycle-icon" />
                <div className="h-6 w-24 bg-gray-300 rounded" />
                <div className="h-4 w-32 bg-gray-300 rounded mt-2" />
                <div className="h-12 w-full bg-gray-300 rounded mt-4" />
                <div className="h-4 w-20 bg-gray-300 rounded mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
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
            const Icon = iconMap[cycle.icon] || Icons.HelpCircle;

            return (
              <Link key={cycle.id} className="cycle-card" to={`/ciclo/${cycle.id}`}>
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