import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaChevronDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';

  const productCategories = [
    { title: 'ERP & Muhasebe', items: [{ name: 'Vega Win ERP', to: '/urunler/vega-win-erp' }, { name: 'Vega Smart', to: '/urunler/vega-smart' }] },
    { title: 'Perakende', items: [{ name: 'Arctos Hızlı Satış', to: '/urunler/arctos' }, { name: 'Vepos', to: '/urunler/vepos' }, { name: 'Shopstar', to: '/urunler/shopstar' }] },
    { title: 'Restoran', items: [{ name: 'Şefim Restoran', to: '/urunler/sefim' }] },
    { title: 'E-Dönüşüm', items: [{ name: 'e-Dönüşüm Çözümleri', to: '/urunler/e-donusum' }] },
    { title: 'İnsan Kaynakları', items: [{ name: 'Vega IK', to: '/urunler/vega-ik' }] },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`top-bar ${scrolled || !isHome ? 'hidden' : ''}`}>
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span>📍 Samsun, Türkiye</span>
            <span>📞 0 850 XXX XX XX</span>
          </div>
          <div className="top-bar-right">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <span className="logo-text">Expert<span className="logo-accent">Bilişim</span></span>
            <span className="logo-sub">Vega Yazılım Samsun Bölge Temsilciliği</span>
          </Link>

          <nav className="nav-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Ana Sayfa</Link>
            <Link to="/kurumsal" className={location.pathname === '/kurumsal' ? 'active' : ''}>Kurumsal</Link>
            
            <div
              className="nav-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link to="/urunler" className={location.pathname.startsWith('/urunler') ? 'active' : ''}>
                Ürünlerimiz <FaChevronDown className="dropdown-arrow" />
              </Link>
              <div className={`mega-menu ${dropdownOpen ? 'open' : ''}`}>
                <div className="mega-menu-inner">
                  {productCategories.map((cat) => (
                    <div className="mega-menu-col" key={cat.title}>
                      <h4>{cat.title}</h4>
                      {cat.items.map((item) => (
                        <Link to={item.to} key={item.name}>{item.name}</Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mega-menu-footer">
                  <Link to="/urunler" className="btn-link">Tüm Ürünleri Gör →</Link>
                </div>
              </div>
            </div>

            <Link to="/hizmetler" className={location.pathname === '/hizmetler' ? 'active' : ''}>Hizmetler</Link>
          </nav>

          <div className="nav-actions">
            <Link to="/iletisim" className="btn btn-red">Demo Talebi</Link>
            <Link to="/iletisim" className="btn btn-outline-dark btn-pill nav-support-btn">Destek Talebi</Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="logo-text" style={{ color: 'var(--color-primary)' }}>Expert<span className="logo-accent">Bilişim</span></span>
          <button onClick={() => setMobileOpen(false)} aria-label="Menüyü kapat"><FaTimes /></button>
        </div>
        <nav className="mobile-nav">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/kurumsal">Kurumsal</Link>
          <Link to="/urunler">Ürünlerimiz</Link>
          <Link to="/hizmetler">Hizmetler</Link>
          <Link to="/iletisim">İletişim</Link>
          <div className="mobile-nav-actions">
            <Link to="/iletisim" className="btn btn-red btn-lg" style={{ width: '100%' }}>Demo Talebi</Link>
            <Link to="/iletisim" className="btn btn-outline-dark btn-lg" style={{ width: '100%' }}>Destek Talebi</Link>
          </div>
        </nav>
        <div className="mobile-nav-footer">
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
          <p>📞 0 850 XXX XX XX</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
