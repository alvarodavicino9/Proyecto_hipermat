import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import SEO from '../components/ui/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Materiales de Construcción en Rosario"
        description="Hipermat Rosario — Corralón de materiales de construcción. Cementos, ladrillos, griferías y más de 500 productos. Venta mayorista y minorista. Envíos con hidrogrúa. El mejor precio garantizado."
        path="/"
      />
      <Hero />
      <Testimonials />
    </>
  );
}
