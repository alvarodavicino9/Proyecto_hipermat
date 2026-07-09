import Services from '../components/sections/Services';
import SEO from '../components/ui/SEO';

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <SEO
        title="Servicios de Envío y Asesoramiento"
        description="Envíos con hidrogrúa a toda Rosario y zona. Asesoramiento por WhatsApp, cotizaciones y presupuestos sin cargo. Venta mayorista y minorista sin mínimo."
        path="/servicios"
      />
      <Services />
    </div>
  );
}
