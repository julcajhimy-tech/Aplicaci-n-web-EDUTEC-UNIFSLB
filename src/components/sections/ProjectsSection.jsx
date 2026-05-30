import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionHeading from '../ui/SectionHeading';

import 'swiper/css';
import 'swiper/css/navigation';

function ProjectCard({ project }) {
  const isLinkActive = project.url && project.url !== '#';

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{project.title}</h3>
        <p className="mb-4 flex-1 text-gray-600">{project.description}</p>
        {isLinkActive ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Ver Detalles &rarr;
          </a>
        ) : (
          <span className="font-semibold text-gray-400">Próximamente...</span>
        )}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="h-48 w-full bg-gray-300" />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 h-6 w-3/4 rounded bg-gray-300" />
        <div className="mb-4 flex-1 space-y-2">
          <div className="h-4 rounded bg-gray-300" />
          <div className="h-4 w-5/6 rounded bg-gray-300" />
        </div>
        <div className="h-5 w-28 rounded bg-gray-300" />
      </div>
    </div>
  );
}

function ProjectsSection({ projects, isLoading }) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = useMemo(
    () => ['Todos', ...new Set(projects.map((p) => p.category))],
    [projects],
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') {
      return projects;
    }
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="proyectos" className="section section-light">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio academico"
          title="Proyectos que marcan la diferencia."
          description="Explora una selección de proyectos desarrollados por nuestros estudiantes, donde aplican sus conocimientos para crear soluciones tecnológicas con impacto real."
          centered
        />

        <div className="gallery-toolbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-filter ${activeCategory === category ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="gallery-carousel mt-8"
        >
          {isLoading
            ? [...Array(3)].map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonCard />
                </SwiperSlide>
              ))
            : filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsSection;