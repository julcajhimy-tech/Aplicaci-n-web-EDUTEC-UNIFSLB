
import { BookOpen, Code, Rocket } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

function ResourceCard({ image, icon, title, description, url }) {
  const isLinkActive = url && url !== '#';

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      <div className="flex flex-1 flex-col items-center p-6 text-center">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
        {icon && (
          <div className="p-3 mb-4 bg-blue-100 text-blue-600 rounded-full inline-block">
            {icon}
          </div>
        )}
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-6 flex-1 text-gray-600">{description}</p>
        {isLinkActive ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Explorar &rarr;
          </a>
        ) : (
          <span className="font-semibold text-gray-400">Próximamente...</span>
        )}
      </div>
    </div>
  );
}

function GroupPortfoliosSection() {
  const resources = [
    {
      image: '/images/stock/banner_eduteca.png',
      title: 'Tecnoteca Intercultural',
      description: 'Un sitio interactivo con recursos que fusionan tecnología y saberes ancestrales.',
      url: 'https://grupo5block.my.canva.site/tecnotecaintercultural',
    },
    {
      icon: <Rocket size={28} />,
      title: 'Proyectos Estudiantiles',
      description: 'Explora los trabajos innovadores que fusionan tecnología y saberes ancestrales.',
      url: '#',
    },
    {
      icon: <Code size={28} />,
      title: 'Herramientas Digitales',
      description: 'Aplicaciones y software desarrollados para apoyar el aprendizaje y la gestión educativa.',
      url: '#',
    },
  ];

  return (
    <section id="portafolios" className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Recursos Digitales"
          title="Eduteca"
          description="Un espacio de encuentro donde la tecnología y el conocimiento ancestral se fusionan para crear recursos educativos innovadores."
          centered
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GroupPortfoliosSection;