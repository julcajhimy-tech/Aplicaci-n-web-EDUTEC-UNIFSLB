import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoUni from '../../assets/logo_Uni.png';
import heroVideo from '../../assets/Video_portada.mp4';
import CpuAnimation from '../ui/CpuAnimation';
import { homeHero } from '../../data/siteContent';function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Reducido para mayor fluidez y menor distracción
    }
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-bg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-main-layout">
          <div className="hero-text-column">
            <h1>{homeHero.title}</h1>
            <p className="hero-copy">{homeHero.description}</p>

            <div className="hero-actions">
              <a href="/#proyectos" className="button">
                Ver trabajos destacados
              </a>
              <Link to="/ciclos/vi" className="button button-secondary">
                Explorar VI ciclo
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-metrics">
              {homeHero.metrics.map((metric) => (
                <article key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="hero-animation-column">
            <div className="hero-brand">
              <span>{homeHero.kicker}</span>
            </div>
            <CpuAnimation />
          </div>
        </div>

        <button
          type="button"
          className="hero-scroll"
          onClick={() => document.getElementById('mision')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Ir a la siguiente seccion"
        >
          <ChevronDown size={22} />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;