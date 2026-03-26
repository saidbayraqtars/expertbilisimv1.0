import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Kurumsal from './pages/Kurumsal';
import Urunler from './pages/Urunler';
import UrunDetay from './pages/UrunDetay';
import Hizmetler from './pages/Hizmetler';
import Iletisim from './pages/Iletisim';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <main style={{ minHeight: '80vh', paddingTop: isHome ? '0' : '100px' }}>
      {children}
    </main>
  );
};

function App() {
  // Global scroll reveal logic setup for page changes
  useEffect(() => {
    const revealFunction = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 50; // trigger sooner in multi-page

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealFunction);
    revealFunction(); // manual trigger
    
    // observe DOM changes to trigger reveal automatically on route changes
    const observer = new MutationObserver(revealFunction);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', revealFunction);
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/urunler/:slug" element={<UrunDetay />} />
          <Route path="/hizmetler" element={<Hizmetler />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
