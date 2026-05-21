import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="inner-page">
      <div className="container inner-empty">
        <span className="eyebrow">404</span>
        <h1>La pagina que buscas no existe</h1>
        <p>Puedes volver al inicio y seguir navegando por los ciclos, proyectos y actividades.</p>
        <Link to="/" className="button">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
