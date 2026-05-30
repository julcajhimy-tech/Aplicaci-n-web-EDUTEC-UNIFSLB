import { academicHighlights } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
const lineasDeValorImage = "/images/stock/Lineas_de_valor.png";

function AcademicFocusSection() {
  return (
    <section className="section section-band">
      <div className="container">
        <div className="focus-heading-layout">
          <SectionHeading
            eyebrow="Lineas de valor"
            title="Formando creadores de tecnología para el mañana."
            description="Nuestra metodología se centra en la práctica constante y el desarrollo de proyectos reales, preparando a los estudiantes para los desafíos tecnológicos del futuro y fomentando la innovación con impacto regional."
          />
          <div className="focus-heading-image">
            <img
              src={lineasDeValorImage}
              alt="Estudiantes colaborando en un proyecto"
            />
          </div>
        </div>

        <div className="focus-grid">
          {academicHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="focus-item">
                <div className="focus-icon">
                  <Icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AcademicFocusSection;