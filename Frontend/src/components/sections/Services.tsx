import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMagnetic, useRipple } from '../../hooks/useInteractions';
import { Truck, MessageCircle, Users, DollarSign, Package, Shield, MapPin, Clock, CheckCircle, Phone } from 'lucide-react';
import { contactInfo } from '../../data';
import './Services.css';

const WA = (size = 20) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const services = [
  { icon: <Truck size={30} />, title: 'Envíos y Descargas', desc: 'Flota propia de camiones con hidrogrúa. Entrega y descarga del material en toda Rosario y zona.', color: 'blue' },
  { icon: <MessageCircle size={30} />, title: 'Asesoramiento', desc: 'Consultá por WhatsApp sin compromiso. Nuestros empleados con experiencia te guían en la elección correcta.', color: 'red' },
  { icon: <DollarSign size={30} />, title: 'Cotizaciones', desc: 'Te hacemos el presupuesto de tu obra al instante. Mejoramos cualquier presupuesto.', color: 'blue' },
  { icon: <Users size={30} />, title: 'Atención personalizada', desc: 'Cada pedido es atendido individualmente. No sos un número, sos un cliente.', color: 'red' },
  { icon: <Package size={30} />, title: 'Mayorista y minorista', desc: 'Desde una bolsa de cemento hasta proyectos completos.', color: 'blue' },
  { icon: <Shield size={30} />, title: 'Calidad garantizada', desc: 'Solo trabajamos con marcas líderes del mercado con garantía de fábrica.', color: 'red' },
];

const pasos = [
  { num: '01', title: 'Hacé tu pedido', desc: 'Escribinos por WhatsApp con tu lista de materiales o contanos qué necesitás para tu obra.' },
  { num: '02', title: 'Te cotizamos', desc: 'Te respondemos con precio y disponibilidad en el menor tiempo posible.' },
  { num: '03', title: 'Confirmás', desc: 'Confirmás el pedido y coordinamos el día y horario de entrega que más te convenga.' },
  { num: '04', title: 'Entregamos', desc: 'Nuestro camión llega a tu obra con hidrogrúa para la descarga. Rápido y sin complicaciones.' },
];

const zonas = [
  { nombre: 'Rosario', tiempo: '24 hs', icono: '🟢' },
  { nombre: 'Funes', tiempo: '24 hs', icono: '🟢' },
  { nombre: 'Alrededores', tiempo: '24 hs', icono: '🟢' },
];


export default function Services() {
  const svcAnim  = useScrollAnimation();
  const procAnim = useScrollAnimation();
  const envAnim  = useScrollAnimation();
  const pedidoMagnetic = useMagnetic<HTMLAnchorElement>();
  const zonaMagnetic = useMagnetic<HTMLAnchorElement>();
  const presupuestoMagnetic = useMagnetic<HTMLAnchorElement>();
  const ripple = useRipple();
  const waPresupuesto = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola! Necesito un presupuesto para materiales para la construcción.')}`;

  return (
    <div>
      {/* ── SERVICIOS PRINCIPALES ── */}
      <section className="services">
        <div className="container">
          <div ref={svcAnim.ref} className={`services-header anim-fade-up-3d ${svcAnim.visible ? "anim-visible-3d" : ""}`}>
            <span className="section-eyebrow">Lo que ofrecemos</span>
            <h2 className="section-title">NUESTROS <span className="title-red">SERVICIOS</span></h2>
            <p className="services-subtitle">Más que un corralón — somos tu socio en la construcción.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className={`service-card service-card--${s.color} service-card--tilt`}>
                <div className={`service-icon service-icon--${s.color}`}>{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO DE PEDIDO ── */}
      <section className="proceso-section">
        <div className="container">
          <div ref={procAnim.ref} className={`proceso-header anim-fade-up-3d ${procAnim.visible ? "anim-visible-3d" : ""}`}>
            <span className="section-eyebrow">Simple y rápido</span>
            <h2 className="section-title">¿CÓMO <span className="title-red">FUNCIONA?</span></h2>
            <p className="proceso-subtitle">De tu pedido a tu obra en 4 pasos.</p>
          </div>

          <div className="proceso-steps">
            {pasos.map((paso, i) => (
              <div key={i} className="proceso-step">
                <div className="paso-num">{paso.num}</div>
                <div className="paso-connector" />
                <div className="paso-content">
                  <h3 className="paso-title">{paso.title}</h3>
                  <p className="paso-desc">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="proceso-cta">
            <a ref={pedidoMagnetic} data-magnetic data-ripple-host onClick={ripple} href={waPresupuesto} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {WA(18)} Hacer pedido ahora
            </a>
          </div>
        </div>
      </section>

      {/* ── ENVÍOS: ZONAS Y MAPA ── */}
      <section className="envios-section">
        <div className="container">
          <div ref={envAnim.ref} className={`envios-header anim-fade-up-3d ${envAnim.visible ? "anim-visible-3d" : ""}`}>
            <span className="section-eyebrow">Cobertura de envíos</span>
            <h2 className="section-title">ZONAS DE <span className="title-red">ENTREGA</span></h2>
          </div>

          <div className="envios-grid">
            {/* Info izquierda */}
            <div className="envios-info">
              <div className="envios-destacado">
                <Truck size={28} className="envios-truck-icon" />
                <div>
                  <h3>Flota propia con hidrogrúa</h3>
                  <p>Descarga en el lugar exacto donde necesitás. Sin pasos extras, sin complicaciones.</p>
                </div>
              </div>

              <div className="zonas-list">
                <h4 className="zonas-title">Zonas de cobertura</h4>
                {zonas.map((z, i) => (
                  <div key={i} className="zona-item">
                    <span className="zona-icono">{z.icono}</span>
                    <span className="zona-nombre">{z.nombre}</span>
                    <span className="zona-tiempo">{z.tiempo}</span>
                  </div>
                ))}
              </div>

              <div className="envios-condiciones">
                <h4 className="condiciones-title">Condiciones de envío</h4>
                {[
                  'El costo de envío se informa al confirmar el pedido según zona y volumen',
                  'Coordinamos el envío hablando por WhatsApp o teléfono',
                ].map((c, i) => (
                  <div key={i} className="condicion-item">
                    <CheckCircle size={15} className="condicion-check" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <a
                ref={zonaMagnetic}
                data-magnetic
                data-ripple-host
                onClick={ripple}
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola! Quiero consultar si hacen envíos a mi zona.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="envios-wa-btn"
              >
                {WA(18)} Consultá tu zona
              </a>
            </div>

            {/* Mapa + datos del local */}
            <div className="envios-mapa-col">
              <div className="mapa-wrap">
                <iframe
                  title="Hipermat Rosario"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.122876699495!2d-60.72387492394648!3d-32.994752873571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aba414935555%3A0x4b5c6d7e8f9a0b1c!2sJuan%20Jos%C3%A9%20Paso%206082%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1716000000000!5m2!1ses!2sar"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '8px 8px 0 0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="mapa-info">
                  <div className="mapa-dato">
                    <MapPin size={16} className="mapa-icon" />
                    <div>
                      <strong>Dirección</strong>
                      <span>Juan José Paso 6082, Rosario, Santa Fe</span>
                    </div>
                  </div>
                  <div className="mapa-dato">
                    <Clock size={16} className="mapa-icon" />
                    <div>
                      <strong>Horarios</strong>
                      <span>Lun–Vie 8–16 · Sáb 8–12</span>
                    </div>
                  </div>
                  <div className="mapa-dato">
                    <Phone size={16} className="mapa-icon" />
                    <div>
                      <strong>Teléfono</strong>
                      <span>+54 9 341 468-0227</span>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Juan+José+Paso+6082+Rosario+Santa+Fe+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mapa-link"
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER PRESUPUESTO ── */}
      <section className="presupuesto-banner">
        <div className="container presupuesto-inner">
          <div>
            <h3 className="presupuesto-title">¿NECESITÁS UN PRESUPUESTO?</h3>
            <p className="presupuesto-sub">Envianos la lista y te respondemos al instante con el mejor precio.</p>
          </div>
          <a ref={presupuestoMagnetic} data-magnetic data-ripple-host onClick={ripple} href={waPresupuesto} target="_blank" rel="noopener noreferrer" className="presupuesto-btn">
            {WA(22)} Pedir presupuesto ahora
          </a>
        </div>
      </section>
    </div>
  );
}
