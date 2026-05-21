import SectionHeading from '../ui/SectionHeading';

function PortfolioCard({ portfolio }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      {portfolio.image && (
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          {portfolio.title}
        </h3>
        <p className="mb-4 flex-1 text-gray-600">{portfolio.description}</p>
        <a
          href={portfolio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 hover:text-blue-800"
        >
          Ver Portafolio &rarr;
        </a>
      </div>
    </div>
  );
}

function GroupPortfoliosSection({ portfolios }) {
  return (
    <section id="portafolios" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Trabajos Colaborativos"
          title="Portafolios Grupales"
          description="Explora los proyectos y portafolios desarrollados por nuestros estudiantes de forma colaborativa."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GroupPortfoliosSection;