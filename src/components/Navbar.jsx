import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">Expert<span className="logo-accent">Bilişim</span></span>
          <span className="logo-sub">Vega Yazılım Samsun Bölge Temsilciliği</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/kurumsal">Kurumsal</Link>
          <Link to="/urunler">Ürünlerimiz</Link>
          <Link to="/hizmetler">Hizmetler</Link>
          <Link to="/iletisim" className="btn btn-primary">Bize Ulaşın</Link>
        </nav>
        <div className="mobile-menu-btn" onClick={() => alert('Mobil menü açılacak. (Preview)')}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
