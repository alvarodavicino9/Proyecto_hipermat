import { CheckCircle, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMagnetic } from '../../hooks/useInteractions';
import SmartImage from '../ui/SmartImage';
import './About.css';

const values = [
  'Atención personalizada en cada pedido',
  'Empleados capacitados con experiencia en el rubro',
  'Los mejores precios de Rosario garantizados',
  'Venta mayorista y minorista',
  'Envíos y descargas a Rosario, Funes y alrededores',
  'Asesoramiento profesional sin compromiso',
];

export default function About() {
  const left  = useScrollAnimation();
  const right = useScrollAnimation();
  const stats = useScrollAnimation();
  const igMagnetic = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="nosotros" className="about">
      <div className="container about-grid">
        {/* Left */}
        <div
          ref={left.ref}
          className={`about-text anim-fade-left-3d ${left.visible ? 'anim-visible-3d' : ''}`}
        >
          <span className="section-eyebrow">Quiénes somos</span>
          <h2 className="section-title about-title">
            HIPERMAT<br />
            <span className="about-tagline-text">OTRO TRATO.</span>
          </h2>
          <p className="about-desc">
            Somos un corralón de materiales de construcción ubicado en Rosario,
            Santa Fe. Nos especializamos en la venta mayorista y minorista, atendiendo tanto a
            particulares como a empresas constructoras.
          </p>
          <p className="about-desc">
            Nuestro diferencial es el trato: cada cliente es atendido de forma personalizada
            por empleados con años de experiencia, capacitados para asesorarte en la elección
            correcta de materiales para tu proyecto.
          </p>
          <ul className="about-values">
            {values.map((v, i) => (
              <li key={i} className="about-value">
                <CheckCircle size={17} className="value-check" />
                <span>{v}</span>
              </li>
            ))}
          </ul>

          {/* Foto real del depósito con tilt 3D sutil */}
          <div className="about-photo-wrap">
            <SmartImage
              src="/images/foto1.jpg"
              alt="Camión Hipermat ingresando al depósito en Rosario"
              className="about-photo"
              width={1024}
              height={768}
            />
          </div>

          <a
            ref={igMagnetic}
            data-magnetic
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="about-instagram"
          >
            <Instagram size={20} />
            Seguinos en Instagram
            <span className="about-ig-handle">@hipermat_rosario</span>
          </a>
        </div>

        {/* Right */}
        <div
          ref={right.ref}
          className={`about-cards anim-fade-right-3d ${right.visible ? 'anim-visible-3d' : ''}`}
        >
          <div className="about-card about-card--blue about-card--tilt">
            <div className="about-card-icon about-card-icon--blue"><MapPin size={22} /></div>
            <div>
              <h4 className="about-card-title">Ubicación</h4>
              <p className="about-card-text">Juan José Paso 6082</p>
              <p className="about-card-text">S2000 Rosario, Santa Fe</p>
              <a
                href="https://maps.google.com/?q=Juan+José+Paso+6082+Rosario+Santa+Fe"
                target="_blank"
                rel="noopener noreferrer"
                className="about-card-link"
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>

          <div className="about-card about-card--red about-card--tilt">
            <div className="about-card-icon about-card-icon--red"><Clock size={22} /></div>
            <div>
              <h4 className="about-card-title">Horarios</h4>
              <p className="about-card-text">{contactInfo.hours.weekdays}</p>
              <p className="about-card-text">{contactInfo.hours.saturday}</p>
              <p className="about-card-text about-card-closed">{contactInfo.hours.sunday}</p>
            </div>
          </div>

          <div className="about-card about-card--wa about-card--tilt">
            <div className="about-card-icon about-card-icon--wa"><MessageCircle size={22} /></div>
            <div>
              <h4 className="about-card-title">WhatsApp</h4>
              <p className="about-card-text">+54 9 341 468-0227</p>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="about-card-link"
              >
                Enviarnos un mensaje →
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={stats.ref}
            className={`about-stats anim-scale ${stats.visible ? 'anim-visible' : ''}`}
          >
            <div className="about-stat">
              <span className="about-stat-num">+500</span>
              <span className="about-stat-label">Productos</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="about-stat-num">Mayor</span>
              <span className="about-stat-label">Y menor</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="about-stat-num">100%</span>
              <span className="about-stat-label">Garantía</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
