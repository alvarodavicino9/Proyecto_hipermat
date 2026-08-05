import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import SEO from '../components/ui/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Hipermat Materiales para la Construcción"
        description="Hipermat Rosario — Corralón de materiales de construcción. Cementos, ladrillos, griferías y más de 500 productos. Venta mayorista y minorista. Envíos con hidrogrúa. El mejor precio garantizado."
        path="/"
        appendSuffix={false}
      />
      <Hero />
      <Testimonials />
    </>
  );
}
