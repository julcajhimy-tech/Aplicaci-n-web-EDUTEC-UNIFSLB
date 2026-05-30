import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logoUni from "../../assets/logo_Uni.png";
const logoUni = "/images/stock/logo-web.png";
import { mainNavigation } from '../../data/siteContent';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img
            src={logoUni}
            alt="Logo UNIFSLB"
            className="brand-logo"
          />
          <span>
            <small>Escuela de Educacion Tecnologica</small>
          </span>
        </Link>

        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} aria-label="Navegacion principal">
          {mainNavigation.map((item) => {
            const isActive = item.href.startsWith('/')
              ? location.pathname === item.href
              : location.pathname === '/' && location.hash === item.href;
            const resolvedHref =
              item.href.startsWith('#') && location.pathname !== '/' ? `/${item.href}` : item.href;

            return (
              <a
                key={item.href}
                href={resolvedHref}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Header;