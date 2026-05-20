import { ArrowRight, Truck, Star, Shield } from 'lucide-react';
import { contactInfo } from '../../data';
import './Hero.css';

interface HeroProps {
  onCatalogClick: () => void;
}

export default function Hero({ onCatalogClick }: HeroProps) {
  return (
    <section id="inicio" className="hero">
      {/* Background pattern */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-gradient" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <Star size={12} fill="currentColor" />
            El mejor precio de Rosario
          </div>

          <h1 className="hero-title">
            <span className="hero-title-main">
              MATERIALES DE
            </span>
            <span className="hero-title-accent">
              CONSTRUCCIÓN
            </span>
            <span className="hero-title-sub">
              Por mayor y menor
            </span>
          </h1>

          <p className="hero-desc">
            Más de años de experiencia en el rubro. Atención personalizada,
            asesoramiento profesional y los mejores precios de Rosario.
            Envíos y descarga incluidos.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary hero-cta" onClick={onCatalogClick}>
              Ver catálogo
              <ArrowRight size={18} />
            </button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-wa"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pedí cotización
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <Truck size={18} />
              <span>Envíos a Rosario y zona</span>
            </div>
            <div className="hero-feature">
              <Shield size={18} />
              <span>Garantía en todos los productos</span>
            </div>
            <div className="hero-feature">
              <Star size={18} />
              <span>Atención personalizada</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card--main">
            <div className="hero-stat-grid">
              <div className="hero-stat">
                <span className="stat-num">+50</span>
                <span className="stat-label">Marcas líderes</span>
              </div>
              <div className="hero-stat">
                <span className="stat-num">+500</span>
                <span className="stat-label">Productos</span>
              </div>
              <div className="hero-stat">
                <span className="stat-num">Mayor</span>
                <span className="stat-label">y menor</span>
              </div>
              <div className="hero-stat hero-stat--accent">
                <span className="stat-num">💬</span>
                <span className="stat-label">Asesoramiento gratis</span>
              </div>
            </div>
          </div>

          <div className="hero-card hero-card--categories">
            <p className="hero-card-label">Categorías principales</p>
            <div className="hero-cats">
              {['Cemento y Cal', 'Cerámicos', 'Hierro', 'Ladrillos', 'Pinturas', 'Sanitarios', 'Electricidad', 'Herramientas'].map(cat => (
                <span key={cat} className="hero-cat-tag">{cat}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stripe */}
      <div className="hero-stripe" />
    </section>
  );
}
