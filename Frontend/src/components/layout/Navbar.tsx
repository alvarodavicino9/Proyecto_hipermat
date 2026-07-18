import { useState, useEffect } from 'react';
import { Phone, Instagram, Home, Wrench, Building2, Mail, MapPin, Clock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { contactInfo } from '../../data';
import { useMagnetic, useRipple, useDockMagnify } from '../../hooks/useInteractions';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/servicios', label: 'Servicios', icon: Wrench },
  { path: '/nosotros', label: 'Nosotros', icon: Building2 },
  { path: '/contacto', label: 'Contacto', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const dockRef = useDockMagnify<HTMLDivElement>();
  const waMagnetic = useMagnetic<HTMLAnchorElement>();
  const ripple = useRipple();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      setScrolled(y > 60);
      setScrollProgress(Math.min(100, (y / max) * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-item"><Phone size={13} />+54 9 341 468-0227</span>
          <span className="topbar-item"><MapPin size={13} />Juan José Paso 6082, Rosario</span>
          <span className="topbar-item"><Clock size={13} />Lun–Vie 8–16 | Sáb 8–12</span>
          <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="topbar-item topbar-link">
            <Instagram size={13} />@hipermat_rosario
          </a>
        </div>
      </div>

      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar-inner">
          <button className="navbar-logo" onClick={() => handleNav('/')}>
            <img src="/images/logo_nuevo.png" alt="Hipermat Logo" style={{ height: '40px', objectFit: 'contain' }} />
          </button>

          {/* Dock nav estilo macOS (desktop) */}
          <div ref={dockRef} className="navbar-dock">
            {navLinks.map(link => {
              const Icon = link.icon;
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  data-dock-item
                  className={`dock-item ${active ? 'dock-item--active' : ''}`}
                  onClick={() => handleNav(link.path)}
                  aria-label={link.label}
                >
                  <span data-dock-label className="dock-label">{link.label}</span>
                  <Icon size={18} />
                </button>
              );
            })}
          </div>

          <div className="navbar-actions">
            <a
              ref={waMagnetic}
              data-magnetic
              data-ripple-host
              onClick={ripple}
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Consultá
            </a>
          </div>
        </div>

        <div className="navbar-progress" style={{ width: `${scrollProgress}%` }} />
      </header>

      {/* Barra de secciones también en mobile: dock fijo abajo */}
      <nav className="mobile-dock">
        {navLinks.map(link => {
          const Icon = link.icon;
          const active = location.pathname === link.path;
          return (
            <button
              key={link.path}
              className={`mobile-dock-item ${active ? 'mobile-dock-item--active' : ''}`}
              onClick={() => handleNav(link.path)}
              aria-label={link.label}
            >
              <Icon size={20} />
              <span>{link.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
