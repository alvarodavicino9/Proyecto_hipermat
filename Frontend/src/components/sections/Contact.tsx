import { MapPin, Clock, Phone, Instagram, Mail } from 'lucide-react';
import { useState } from 'react';
import { contactInfo } from '../../data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMagnetic, useRipple } from '../../hooks/useInteractions';
import './Contact.css';

const WA_SVG = (size = 20) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Contact() {
  const header = useScrollAnimation();
  const form   = useScrollAnimation();
  const info   = useScrollAnimation();
  const waMagnetic = useMagnetic<HTMLAnchorElement>();
  const igMagnetic = useMagnetic<HTMLAnchorElement>();
  const ripple = useRipple();

  const [fields, setFields] = useState({ nombre: '', telefono: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Hipermat!\n\n*Nombre:* ${fields.nombre}\n*Teléfono:* ${fields.telefono}\n*Mensaje:* ${fields.mensaje}`;
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setFields({ nombre: '', telefono: '', mensaje: '' }); }, 3000);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">

        {/* Header */}
        <div
          ref={header.ref}
          className={`contact-header anim-fade-up-3d ${header.visible ? 'anim-visible-3d' : ''}`}
        >
          <span className="section-eyebrow">Estamos para ayudarte</span>
          <h2 className="section-title contact-title">CONTACTO</h2>
          <p className="contact-subtitle">
            Escribinos, visitanos o mandanos tu consulta. Respondemos al instante.
          </p>
        </div>

        <div className="contact-grid">

          {/* Formulario → WhatsApp */}
          <div
            ref={form.ref}
            className={`contact-form-wrap anim-fade-left-3d ${form.visible ? 'anim-visible-3d' : ''}`}
          >
            <div className="contact-form-header">
              <h3 className="contact-form-title">Envianos tu consulta</h3>
              <p className="contact-form-sub">Completá el formulario y te respondemos por WhatsApp.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Nombre *</label>
                <input
                  className="form-input"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  value={fields.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Teléfono</label>
                <input
                  className="form-input"
                  type="tel"
                  name="telefono"
                  placeholder="Ej: 341 123-4567"
                  value={fields.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Mensaje *</label>
                <textarea
                  className="form-input form-textarea"
                  name="mensaje"
                  placeholder="¿En qué podemos ayudarte? Describí los materiales que necesitás..."
                  value={fields.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              <button className={`form-submit ${sent ? 'form-submit--sent' : ''}`} type="submit">
                {sent ? (
                  <>✓ Enviado — abriendo WhatsApp...</>
                ) : (
                  <>{WA_SVG(18)} Enviar por WhatsApp</>
                )}
              </button>
            </form>

            {/* Quick links */}
            <div className="contact-quick">
              <a ref={waMagnetic} data-magnetic data-ripple-host onClick={ripple} href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="quick-link quick-link--wa">
                {WA_SVG(16)} Chat directo
              </a>
              <a ref={igMagnetic} data-magnetic href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="quick-link quick-link--ig">
                <Instagram size={16} /> Instagram
              </a>
            </div>
          </div>

          {/* Info + Mapa */}
          <div
            ref={info.ref}
            className={`contact-info-wrap anim-fade-right-3d ${info.visible ? 'anim-visible-3d' : ''}`}
          >
            {/* Info blocks */}
            <div className="contact-info-blocks">
              <div className="contact-block">
                <div className="contact-block-icon"><MapPin size={20} /></div>
                <div>
                  <h4 className="contact-block-title">Dirección</h4>
                  <p>Juan José Paso 6082, Rosario, Santa Fe</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Juan+José+Paso+6082+Rosario+Santa+Fe+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-block-link"
                  >
                    Abrir en Maps →
                  </a>
                </div>
              </div>
              <div className="contact-block">
                <div className="contact-block-icon contact-block-icon--red"><Clock size={20} /></div>
                <div>
                  <h4 className="contact-block-title">Horarios</h4>
                  <p>{contactInfo.hours.weekdays}</p>
                  <p>{contactInfo.hours.saturday}</p>
                  <p className="contact-closed">{contactInfo.hours.sunday}</p>
                </div>
              </div>
              <div className="contact-block">
                <div className="contact-block-icon"><Mail size={20} /></div>
                <div>
                  <h4 className="contact-block-title">Email</h4>
                  <a href="mailto:hipermatrosario@gmail.com" className="contact-block-link-plain">
                    hipermatrosario@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-block">
                <div className="contact-block-icon"><Phone size={20} /></div>
                <div>
                  <h4 className="contact-block-title">Teléfono</h4>
                  <p>+54 9 341 468-0227</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="contact-map-wrap">
              <iframe
                title="Hipermat Rosario"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.122876699495!2d-60.72387492394648!3d-32.994752873571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aba414935555%3A0x4b5c6d7e8f9a0b1c!2sJuan%20Jos%C3%A9%20Paso%206082%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1716000000000!5m2!1ses!2sar"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Juan+José+Paso+6082+Rosario+Santa+Fe"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-cta"
              >
                <MapPin size={16} /> Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
