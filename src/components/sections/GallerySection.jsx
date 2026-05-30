import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SectionHeading from '../ui/SectionHeading';

import 'swiper/css';
import 'swiper/css/navigation';

function GallerySection({ items, isLoading }) {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedItem, setSelectedItem] = useState(null);

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

  const openLightbox = (item) => setSelectedItem(item);
  const closeLightbox = () => setSelectedItem(null);

  const showPrevious = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.image === selectedItem.image);
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedItem(filteredItems[newIndex]);
  };

  const showNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.image === selectedItem.image);
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedItem(filteredItems[newIndex]);
  };

  if (isLoading) {
    return (
      <section id="galeria" className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Vida academica"
            title="Galeria de actividades"
            centered
          />
          <div className="gallery-toolbar">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-9 w-24 rounded-md bg-gray-300" />
            ))}
          </div>
          <div className="h-48 w-full bg-gray-300 rounded-lg mt-8" />
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Vida academica"
          title="Galeria de actividades"
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
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 },
          }}
          className="gallery-carousel mt-8"
        >
          {filteredItems.map((item) => (
            <SwiperSlide key={`${item.title}-${item.image}`}>
              <button
                type="button"
                className="gallery-tile"
                onClick={() => openLightbox(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <span>{item.category}</span>
                  <p>{item.title}</p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
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