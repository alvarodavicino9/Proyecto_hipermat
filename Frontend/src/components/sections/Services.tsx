import { Truck, MessageCircle, Users, DollarSign, Package, Shield } from 'lucide-react';
import { contactInfo } from '../../data';
import './Services.css';

const services = [
  {
    icon: <Truck size={32} />,
    title: 'Envíos y Descargas',
    desc: 'Realizamos envíos a toda Rosario y zona. Servicio de descarga de material incluido. Coordinamos el horario que más te convenga.',
    color: 'blue',
  },
  {
    icon: <MessageCircle size={32} />,
    title: 'Asesoramiento por WhatsApp',
    desc: 'Nuestros empleados capacitados te ayudan a elegir el material correcto para tu obra. Consultá sin compromiso.',
    color: 'red',
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Cotizaciones y Presupuestos',
    desc: 'Te hacemos la cotización de tu obra al instante. El mejor precio de Rosario garantizado, por mayor y menor.',
    color: 'blue',
  },
  {
    icon: <Users size={32} />,
    title: 'Atención Personalizada',
    desc: 'Cada pedido es atendido por empleados con años de experiencia en el rubro. Te asesoramos de la mejor manera.',
    color: 'red',
  },
  {
    icon: <Package size={32} />,
    title: 'Venta por Mayor y Menor',
    desc: 'Vendemos desde una bolsa de cemento hasta proyectos completos de construcción. Sin mínimo de compra.',
    color: 'blue',
  },
  {
    icon: <Shield size={32} />,
    title: 'Garantía de Calidad',
    desc: 'Solo trabajamos con marcas líderes del mercado. Todos los productos tienen garantía y respaldo de fábrica.',
    color: 'red',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-eyebrow">Lo que ofrecemos</span>
          <h2 className="section-title">
            NUESTROS <span className="title-red">SERVICIOS</span>
          </h2>
          <p className="services-subtitle">
            Más que una ferretería — somos tu socio en la construcción.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card service-card--${s.color}`}>
              <div className={`service-icon service-icon--${s.color}`}>
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="services-banner">
          <div className="services-banner-content">
            <h3 className="services-banner-title">
              ¿NECESITÁS UN PRESUPUESTO?
            </h3>
            <p className="services-banner-text">
              Envianos la lista de materiales y te respondemos al instante con el mejor precio.
            </p>
          </div>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola! Necesito un presupuesto para materiales de construcción.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="services-banner-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir presupuesto ahora
          </a>
        </div>
      </div>
    </section>
  );
}
