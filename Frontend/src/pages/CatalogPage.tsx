import Catalog from '../components/sections/Catalog';
import { Product } from '../types';
interface Props { onAddToCart: (p: Product, qty: number) => void; }
export default function CatalogPage({ onAddToCart }: Props) {
  return <div className="page-wrapper"><Catalog onAddToCart={onAddToCart} /></div>;
}
