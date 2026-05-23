import About from '../components/sections/About';
import SEO from '../components/ui/SEO';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <SEO
        title="Quiénes Somos"
        description="Hipermat es un corralón en Rosario con más de 20 años de experiencia. Juan José Paso 6082. Atención personalizada, empleados capacitados y el mejor precio de Rosario."
        path="/nosotros"
      />
      <About />
    </div>
  );
}
