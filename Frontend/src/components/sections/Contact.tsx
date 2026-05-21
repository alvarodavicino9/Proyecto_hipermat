import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { contactInfo } from '../../data';
import './Contact.css';

export default function Contact() {
  const waMessage = encodeURIComponent('Hola Hipermat! Quiero hacer una consulta sobre materiales.');

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-eyebrow">Estamos para ayudarte</span>
          <h2 className="section-title contact-title">
            CONTACTO
          </h2>
          <p className="contact-subtitle">
            Contactanos por WhatsApp, visitanos en nuestro local o seguinos en Instagram.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <div className="contact-block">
              <MapPin size={24} className="contact-icon contact-icon--blue" />
              <div>
                <h4 className="contact-label">Dirección</h4>
                <p className="contact-value">Juan José Paso 6082</p>
                <p className="contact-value">S2000 Rosario, Santa Fe</p>
                <a
                  href="https://maps.google.com/?q=Juan+José+Paso+6082+Rosario+Santa+Fe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  📍 Abrir en Google Maps
                </a>
              </div>
            </div>

            <div className="contact-block">
              <Clock size={24} className="contact-icon contact-icon--red" />
              <div>
                <h4 className="contact-label">Horarios de atención</h4>
                <p className="contact-value">{contactInfo.hours.weekdays}</p>
                <p className="contact-value">{contactInfo.hours.saturday}</p>
                <p className="contact-value contact-closed">{contactInfo.hours.sunday}</p>
              </div>
            </div>

            <div className="contact-block">
              <Phone size={24} className="contact-icon contact-icon--blue" />
              <div>
                <h4 className="contact-label">Teléfono / WhatsApp</h4>
                <p className="contact-value">+54 9 341 468-0227</p>
              </div>
            </div>

            <div className="contact-block">
              <Instagram size={24} className="contact-icon contact-icon--red" />
              <div>
                <h4 className="contact-label">Instagram</h4>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-ig"
                >
                  @hipermat_rosario
                </a>
              </div>
            </div>
          </div>

          {/* CTA cards */}
          <div className="contact-ctas">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-card contact-cta-card--wa"
            >
              <div className="cta-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="cta-card-text">
                <h3>Escribinos por WhatsApp</h3>
                <p>Respondemos al instante. Asesoramiento y cotizaciones gratis.</p>
              </div>
              <span className="cta-card-arrow">→</span>
            </a>

            <a
              href="https://wa.me/c/5493414680227"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-card contact-cta-card--catalog"
            >
              <div className="cta-card-icon">📦</div>
              <div className="cta-card-text">
                <h3>Ver catálogo en WhatsApp</h3>
                <p>Accedé al catálogo completo con fotos y precios actualizados.</p>
              </div>
              <span className="cta-card-arrow">→</span>
            </a>

            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-card contact-cta-card--ig"
            >
              <div className="cta-card-icon">
                <Instagram size={36} />
              </div>
              <div className="cta-card-text">
                <h3>Seguinos en Instagram</h3>
                <p>Ofertas, novedades y tips de construcción todos los días.</p>
              </div>
              <span className="cta-card-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </section>
  );
}
