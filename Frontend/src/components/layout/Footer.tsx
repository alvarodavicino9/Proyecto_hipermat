import { Instagram, MapPin, Clock, Phone, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { contactInfo, categories } from '../../data';
import './Footer.css';

const WA_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/catalogo', label: 'Catálogo' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* CTA strip */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div>
            <h3 className="footer-cta-title">¿LISTO PARA TU PRÓXIMO PROYECTO?</h3>
            <p className="footer-cta-sub">Cotización sin compromiso — respondemos al instante.</p>
          </div>
          <div className="footer-cta-btns">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola! Necesito un presupuesto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn footer-cta-btn--wa"
            >
              {WA_SVG} Pedir presupuesto
            </a>
            <button className="footer-cta-btn footer-cta-btn--cat" onClick={() => navigate('/catalogo')}>
              Ver catálogo →
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <button className="footer-logo" onClick={() => navigate('/')}>
              <img src="/images/logo_nuevo.png" alt="Hipermat Logo" style={{ height: '40px', objectFit: 'contain' }} />
            </button>
            <p className="footer-tagline">Otro trato.</p>
            <p className="footer-desc">
              Corralón de materiales de construcción en Rosario. Venta por mayor y menor.
              Más de 20 años en el rubro.
            </p>
            <div className="footer-socials">
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="footer-social footer-social--ig" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-social footer-social--wa" aria-label="WhatsApp">
                {WA_SVG}
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links">
              {navLinks.map(l => (
                <li key={l.path}>
                  <button className="footer-link" onClick={() => navigate(l.path)}>{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías */}
          <div className="footer-col">
            <h4 className="footer-col-title">Categorías</h4>
            <ul className="footer-links">
              {categories.slice(0, 6).map(cat => (
                <li key={cat.id}>
                  <button className="footer-link" onClick={() => navigate('/catalogo')}>
                    {cat.icon} {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={14} />
                <span>Juan José Paso 6082, Rosario, Santa Fe</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={14} />
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  +54 9 341 468-0227
                </a>
              </li>
              <li className="footer-contact-item">
                <Clock size={14} />
                <div>
                  <p>{contactInfo.hours.weekdays}</p>
                  <p>{contactInfo.hours.saturday}</p>
                </div>
              </li>
              <li className="footer-contact-item">
                <Instagram size={14} />
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                  @hipermat_rosario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Hipermat Rosario. Todos los derechos reservados.</p>
          <p className="footer-credit">
            Hecho con <Heart size={12} fill="currentColor" /> para Hipermat 🏗️
          </p>
        </div>
      </div>
    </footer>
  );
}
