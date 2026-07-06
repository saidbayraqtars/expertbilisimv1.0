import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';
import { products } from '../data/products';
import { productIcons } from '../data/productIcons';
import {
  FaBars, FaTimes, FaChevronDown, FaArrowRight,
  FaPhoneAlt, FaInstagram, FaLinkedinIn, FaFacebookF,
} from 'react-icons/fa';

const NAV_PRODUCT_IDS = ['vega-win-erp', 'arctos', 'sefim', 'e-donusum', 'vega-smart', 'vega-cloud9'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const closeMenus = () => {
    setMobileOpen(false);
    setMegaOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const megaProducts = NAV_PRODUCT_IDS
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="container-wide nav__inner">
          <Link to="/" className="nav__logo" aria-label="Expert Bilişim ana sayfa">
            <Logo tagline />
          </Link>

          <nav className="nav__links" aria-label="Ana menü">
            <NavLink to="/" end>Ana Sayfa</NavLink>
            <NavLink to="/kurumsal">Kurumsal</NavLink>

            <div
              className="nav__mega-wrap"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <NavLink to="/urunler" className={location.pathname.startsWith('/urunler') ? 'active' : ''}>
                Ürünler <FaChevronDown className="nav__chevron" />
              </NavLink>

              <div className={`mega ${megaOpen ? 'mega--open' : ''}`} onClick={closeMenus}>
                <div className="mega__grid">
                  {megaProducts.map((p) => (
                    <Link to={`/urunler/${p.id}`} className="mega__item" key={p.id}>
                      <span className="mega__icon" style={{ color: p.accent, background: `${p.accent}14` }}>
                        {productIcons[p.icon]}
                      </span>
                      <span>
                        <strong>{p.name}</strong>
                        <small>{p.category}</small>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mega__footer">
                  <span>12 üründen oluşan Vega ailesinin tamamını inceleyin</span>
                  <Link to="/urunler" className="link-arrow">
                    Tüm Ürünler <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/hizmetler">Hizmetler</NavLink>
            <NavLink to="/iletisim">İletişim</NavLink>
          </nav>

          <div className="nav__actions">
            <a href="tel:+905461914055" className="nav__phone">
              <FaPhoneAlt />
              <span>0546 191 40 55</span>
            </a>
            <Link to="/iletisim" className="btn btn-brand btn-sm">Demo Talep Et</Link>
          </div>

          <button
            className="nav__burger"
            onClick={() => setMobileOpen(true)}
            aria-label="Menüyü aç"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`drawer-backdrop ${mobileOpen ? 'drawer-backdrop--show' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside className={`drawer ${mobileOpen ? 'drawer--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="drawer__head">
          <Logo />
          <button onClick={() => setMobileOpen(false)} aria-label="Menüyü kapat"><FaTimes /></button>
        </div>

        <nav
          className="drawer__nav"
          onClick={(e) => {
            if (e.target.closest('a')) closeMenus();
          }}
        >
          <NavLink to="/" end>Ana Sayfa</NavLink>
          <NavLink to="/kurumsal">Kurumsal</NavLink>

          <button
            className="drawer__expand"
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            aria-expanded={mobileProductsOpen}
          >
            Ürünler <FaChevronDown className={mobileProductsOpen ? 'rot' : ''} />
          </button>
          <div className={`drawer__sub ${mobileProductsOpen ? 'drawer__sub--open' : ''}`}>
            {megaProducts.map((p) => (
              <Link to={`/urunler/${p.id}`} key={p.id}>{p.name}</Link>
            ))}
            <Link to="/urunler" className="drawer__sub-all">Tüm Ürünler →</Link>
          </div>

          <NavLink to="/hizmetler">Hizmetler</NavLink>
          <NavLink to="/iletisim">İletişim</NavLink>
        </nav>

        <div className="drawer__foot">
          <Link to="/iletisim" className="btn btn-brand" style={{ width: '100%' }} onClick={closeMenus}>Demo Talep Et</Link>
          <a href="tel:+905461914055" className="drawer__phone"><FaPhoneAlt /> 0546 191 40 55</a>
          <div className="drawer__social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
