import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from './hooks/useCart';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Cart from './components/ui/Cart';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return null;
}

function AppContent() {
  const cart = useCart();
  return (
    <>
      <ScrollToTop />
      <Navbar cartCount={cart.totalItems} onCartOpen={() => cart.setIsOpen(true)} />
      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/catalogo"  element={<CatalogPage onAddToCart={cart.addItem} />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros"  element={<AboutPage />} />
          <Route path="/contacto"  element={<ContactPage />} />
        </Routes>
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
      <WhatsAppFloat />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
