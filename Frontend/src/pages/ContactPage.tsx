import Contact from '../components/sections/Contact';
import SEO from '../components/ui/SEO';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <SEO
        title="Contacto"
        description="Contactá a Hipermat Rosario por WhatsApp, email o visitanos en Juan José Paso 6082. Lunes a viernes 8-16, sábados 8-12. Respondemos al instante."
        path="/contacto"
      />
      <Contact />
    </div>
  );
}
