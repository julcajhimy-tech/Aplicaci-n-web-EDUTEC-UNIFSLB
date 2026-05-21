import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

function GallerySection({ items }) {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = useMemo(
    () => ['Todas', ...new Set(items.map((item) => item.category))],
    [items],
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Todas') {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const selectedItem = selectedIndex === null ? null : filteredItems[selectedIndex];

  const openLightbox = (itemIndex) => setSelectedIndex(itemIndex);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === 0 ? filteredItems.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === filteredItems.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <section id="galeria" className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Vida academica"
          title="Galeria de actividades"
          description="Nueva galeria pensada para escalar mas alla de 10 imagenes, con filtros, carga progresiva y vista ampliada para fotos de eventos y proyectos."
          centered
        />

        <div className="gallery-toolbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-filter ${activeCategory === category ? 'is-active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(8);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-masonry">
          {visibleItems.map((item, index) => (
            <button
              key={`${item.title}-${item.image}`}
              type="button"
              className="gallery-tile"
              onClick={() => openLightbox(index)}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <span>{item.category}</span>
                <p>{item.title}</p>
              </div>
            </button>
          ))}
        </div>

        {visibleCount < filteredItems.length ? (
          <div className="gallery-actions">
            <button
              type="button"
              className="button button-outline"
              onClick={() => setVisibleCount((count) => count + 4)}
            >
              Ver mas imagenes
            </button>
          </div>
        ) : null}
      </div>

      {selectedItem ? (
        <div className="lightbox-backdrop" onClick={closeLightbox} role="presentation">
          <div className="lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar">
              <X size={18} />
            </button>
            <button type="button" className="lightbox-nav left" onClick={showPrevious} aria-label="Anterior">
              <ChevronLeft size={20} />
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} className="lightbox-image" />
            <button type="button" className="lightbox-nav right" onClick={showNext} aria-label="Siguiente">
              <ChevronRight size={20} />
            </button>
            <div className="lightbox-caption">
              <span>{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default GallerySection;
