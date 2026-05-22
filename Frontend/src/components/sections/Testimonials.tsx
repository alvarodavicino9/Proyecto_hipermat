import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Testimonials.css';

const testimonios = [
  {
    nombre: 'Martín González',
    cargo: 'Constructor independiente',
    texto: 'Hace años que les compro para todas mis obras. El precio es imbatible y el servicio de entrega con hidrogrúa me facilita muchísimo el trabajo. Siempre a tiempo y sin vueltas.',
    estrellas: 5,
    inicial: 'M',
  },
  {
    nombre: 'Laura Fernández',
    cargo: 'Propietaria - Obra propia',
    texto: 'Estaba haciendo mi casa y no sabía nada de materiales. Me asesoraron por WhatsApp en todo momento, me recomendaron qué comprar y en qué cantidad. Excelente atención.',
    estrellas: 5,
    inicial: 'L',
  },
  {
    nombre: 'Roberto Sánchez',
    cargo: 'Empresa constructora',
    texto: 'Compramos al por mayor para varios proyectos. La relación calidad-precio es muy buena, siempre tienen stock y la logística funciona perfecto. Muy recomendables.',
    estrellas: 5,
    inicial: 'R',
  },
  {
    nombre: 'Diego Peralta',
    cargo: 'Plomero - Cliente frecuente',
    texto: 'Para griferías y sanitarios siempre vengo a Hipermat. Tienen todas las marcas, los precios son los mejores de Rosario y el trato es muy bueno.',
    estrellas: 5,
    inicial: 'D',
  },
];

const colores = ['#1a4fa0', '#d42a2a', '#0f3070', '#a81f1f'];

export default function Testimonials() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <div className={`testimonials-header anim-fade-up ${visible ? 'anim-visible' : ''}`}>
          <span className="section-eyebrow">Lo que dicen nuestros clientes</span>
          <h2 className="section-title">
            OPINIONES <span className="title-red">REALES</span>
          </h2>
          <p className="testimonials-subtitle">
            La confianza de nuestros clientes es nuestro mayor logro.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className={`testimonio-card anim-fade-up ${visible ? 'anim-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="testimonio-quote">
                <Quote size={28} />
              </div>
              <div className="testimonio-stars">
                {Array.from({ length: t.estrellas }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="testimonio-texto">"{t.texto}"</p>
              <div className="testimonio-autor">
                <div
                  className="testimonio-avatar"
                  style={{ background: colores[i % colores.length] }}
                >
                  {t.inicial}
                </div>
                <div>
                  <span className="testimonio-nombre">{t.nombre}</span>
                  <span className="testimonio-cargo">{t.cargo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className={`rating-summary anim-fade-up ${visible ? 'anim-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <div className="rating-num">5.0</div>
          <div className="rating-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
            <span className="rating-label">Calificación promedio de nuestros clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
