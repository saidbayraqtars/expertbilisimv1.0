import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTop';
import Home from './pages/Home';
import Kurumsal from './pages/Kurumsal';
import Urunler from './pages/Urunler';
import UrunDetay from './pages/UrunDetay';
import Hizmetler from './pages/Hizmetler';
import Iletisim from './pages/Iletisim';

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

function App() {
  // Scroll reveal: IntersectionObserver for visibility, MutationObserver to
  // pick up elements added after route changes.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (!el.classList.contains('active')) io.observe(el);
      });
    };

    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/urunler/:slug" element={<UrunDetay />} />
          <Route path="/hizmetler" element={<Hizmetler />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
