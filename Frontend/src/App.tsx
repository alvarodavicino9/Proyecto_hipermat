import { useCart } from './hooks/useCart';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Catalog from './components/sections/Catalog';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Cart from './components/ui/Cart';
import './index.css';

export default function App() {
  const cart = useCart();

  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar cartCount={cart.totalItems} onCartOpen={() => cart.setIsOpen(true)} />

      <main>
        <Hero onCatalogClick={scrollToCatalog} />
        <Catalog onAddToCart={cart.addItem} />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />

      <Cart
        isOpen={cart.isOpen}
        items={cart.items}
        onClose={() => cart.setIsOpen(false)}
        onRemove={cart.removeItem}
        onUpdateQty={cart.updateQuantity}
        onUpdateNotes={cart.updateNotes}
        onClear={cart.clearCart}
        onSend={cart.sendToWhatsApp}
        totalItems={cart.totalItems}
      />
    </>
  );
}
