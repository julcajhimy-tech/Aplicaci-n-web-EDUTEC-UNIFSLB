import { missionVisionCards } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';

function MissionVisionSection() {
  return (
    <section id="mision" className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow="Identidad institucional"
          title="Declaración de Misión y Visión."
          description="Presentamos los principios fundamentales que rigen nuestra labor académica, nuestro compromiso con la calidad y nuestra contribución al desarrollo tecnológico y educativo."
          centered
        />

        <div className="mission-grid">
          {missionVisionCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className={`info-card tone-${card.tone}`}>
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;