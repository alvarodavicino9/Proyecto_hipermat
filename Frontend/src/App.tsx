import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import ScrollTopButton from './components/ui/ScrollTopButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    // Trackear vista de página en Google Analytics al navegar (SPA: no hay recarga real)
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-19QK5T38E0', { page_path: pathname });
    }
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          {/* Redirect de /catalogo por si quedaron links viejos indexados; se recreará cuando haya productos reales */}
          <Route path="/catalogo"  element={<Navigate to="/" replace />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros"  element={<AboutPage />} />
          <Route path="/contacto"  element={<ContactPage />} />
          <Route path="*"          element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollTopButton />
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
