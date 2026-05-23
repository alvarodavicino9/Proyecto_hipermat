import Catalog from '../components/sections/Catalog';
import SEO from '../components/ui/SEO';
import { Product } from '../types';

interface Props { onAddToCart: (p: Product, qty: number) => void; }

export default function CatalogPage({ onAddToCart }: Props) {
  return (
    <div className="page-wrapper">
      <SEO
        title="Catálogo de Materiales"
        description="Catálogo completo de materiales de construcción en Hipermat Rosario. Cementos Holcim y Loma Negra, ladrillos, adhesivos Klaukol y Weber, griferías Peirano y Vasser, membranas y más."
        path="/catalogo"
      />
      <Catalog onAddToCart={onAddToCart} />
    </div>
  );
}
