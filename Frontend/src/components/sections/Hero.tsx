import { ArrowRight, Truck, Star, Shield, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { contactInfo } from '../../data';

import './Hero.css';

const WA_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      {/* ── HERO PRINCIPAL ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge"><Star size={12} fill="currentColor" />Mejoramos cualquier presupuesto</div>
            <h1 className="hero-title">
              <span className="hero-title-main">HIPERMAT</span>
              <span className="hero-title-accent">MATERIALES DE CONSTRUCCIÓN</span>
              <span className="hero-title-sub">Mayorista y minorista · Rosario</span>
            </h1>
            <p className="hero-slogan">"Proveemos tu obra, desde el primer ladrillo"</p>
            <p className="hero-desc">
              Cementos, ladrillos, griferías, adhesivos y más de 500 productos.
              Atención personalizada y los mejores precios garantizados.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary hero-cta" onClick={() => navigate('/contacto')}>
                Contactanos <ArrowRight size={18} />
              </button>
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hero-cta-wa">
                {WA_ICON} Pedí cotización
              </a>
            </div>
            <div className="hero-features">
              <div className="hero-feature"><Truck size={18} /><span>Envíos y descargas a Rosario</span></div>
              <div className="hero-feature"><Shield size={18} /><span>Garantía en todos los productos</span></div>
              <div className="hero-feature"><Package size={18} /><span>Mayorista y minorista sin mínimo</span></div>
            </div>
          </div>

          {/* Fotos: cartel + camión, y depósito */}
          <div className="hero-visual">
            <div className="hero-main-photo-wrap">
              <img
                src="/images/foto1.jpg"
                alt="Hipermat - camión y cartel en Rosario"
                className="hero-main-photo"
              />
              <div className="hero-photo-badge">
                <span>+40 años en el rubro</span>
              </div>
            </div>

            <div className="hero-secondary-photo-wrap">
              <img
                src="/images/foto2.jpg"
                alt="Depósito Hipermat en Rosario"
                className="hero-secondary-photo"
              />
            </div>

            {/* Stats debajo de las fotos */}
            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <span className="hero-stat-num">+500</span>
                <span className="hero-stat-lbl">Productos</span>
              </div>
              <div className="hero-stat-div" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">Mayorista</span>
                <span className="hero-stat-lbl">Y minorista</span>
              </div>
              <div className="hero-stat-div" />
              <div className="hero-stat-item">
                <span className="hero-stat-num">Envíos</span>
                <span className="hero-stat-lbl">Y descargas</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stripe" />
      </section>

      {/* ── SECCIÓN EMPRESA: fotos reales ── */}
      <section className="empresa-section">
        <div className="container">
          <div className="empresa-header">
            <span className="section-eyebrow">Conocé Hipermat</span>
            <h2 className="section-title empresa-title">
              TU CORRALÓN DE <span style={{color:'var(--red)'}}>CONFIANZA</span>
            </h2>
            <p className="empresa-subtitle">
              Más de 40 años abasteciendo obras en Rosario y zona.
              Flota propia de camiones con hidrogrúa para entrega y descarga.
            </p>
          </div>

          <div className="empresa-gallery-2x2">
            <div className="empresa-photo">
              <img src="/images/foto1.jpg" alt="Flota de camiones Hipermat" />
              <div className="empresa-photo-overlay"><span>Flota propia de camiones</span></div>
            </div>
            <div className="empresa-photo">
              <img src="/images/foto2.jpg" alt="Depósito Hipermat" />
              <div className="empresa-photo-overlay"><span>Amplio depósito en Rosario</span></div>
            </div>
            <div className="empresa-photo">
              <img src="/images/foto3.jpg" alt="Servicio de descarga" />
              <div className="empresa-photo-overlay"><span>Servicio de descarga incluido</span></div>
            </div>
            <div className="empresa-photo">
              <img src="/images/foto4.jpg" alt="Venta mayorista y minorista" />
              <div className="empresa-photo-overlay"><span>Mayoristas y minoristas</span></div>
            </div>
          </div>

          {/* Valores */}
          <div className="empresa-valores">
            {[
              { icon: '🏗️', title: 'Todo en un lugar', desc: 'Cementos, ladrillos, adhesivos, griferías y más de 500 productos disponibles.' },
              { icon: '🚛', title: 'Envíos con hidrogrúa', desc: 'Flota propia de camiones con descarga incluida a toda Rosario y zona.' },
              { icon: '💬', title: 'Asesoramiento real', desc: 'Empleados con experiencia en el rubro te ayudan a elegir el material correcto.' },
              { icon: '💰', title: 'Mejor precio', desc: 'Precios competitivos, mayorista y minorista. Pedí tu cotización sin compromiso.' },
            ].map((v, i) => (
              <div key={i} className="empresa-valor">
                <span className="empresa-valor-icon">{v.icon}</span>
                <h4 className="empresa-valor-title">{v.title}</h4>
                <p className="empresa-valor-desc">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="empresa-cta-row">
            <button className="btn-primary" onClick={() => navigate('/contacto')}>
              Contactanos <ArrowRight size={16} />
            </button>
            <a href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola Hipermat! Quiero hacer una consulta.')}`}
               target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {WA_ICON} Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
