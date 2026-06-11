import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight,
} from 'react-icons/fa';

const productLinks = [
  { name: 'Vega Win ERP', to: '/urunler/vega-win-erp' },
  { name: 'Arctos Hızlı Satış', to: '/urunler/arctos' },
  { name: 'Şefim Restoran', to: '/urunler/sefim' },
  { name: 'e-Dönüşüm Çözümleri', to: '/urunler/e-donusum' },
  { name: 'Vega Smart', to: '/urunler/vega-smart' },
  { name: 'Vega Cloud9', to: '/urunler/vega-cloud9' },
];

const companyLinks = [
  { name: 'Kurumsal', to: '/kurumsal' },
  { name: 'Ürünlerimiz', to: '/urunler' },
  { name: 'Hizmetlerimiz', to: '/hizmetler' },
  { name: 'İletişim', to: '/iletisim' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-mark">EB</span>
            <span className="footer__logo-text">Expert<em>Bilişim</em></span>
          </Link>
          <p>
            Vega Yazılım Samsun Bölge Temsilcisi. ERP, muhasebe, perakende, restoran ve
            e-dönüşüm çözümlerinde kurulumdan desteğe uçtan uca hizmet.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Ürünler">
          <h4>Ürünler</h4>
          <ul>
            {productLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Kurumsal">
          <h4>Kurumsal</h4>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.name}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer__col footer__contact">
          <h4>İletişim</h4>
          <ul>
            <li><FaMapMarkerAlt /> <span>Liman Mah. Göremen Sok. No:1, İlkadım / Samsun</span></li>
            <li><FaPhoneAlt /> <a href="tel:+905461914055">0546 191 40 55</a></li>
            <li><FaEnvelope /> <a href="mailto:hakan@expertbilisim.com.tr">hakan@expertbilisim.com.tr</a></li>
            <li><FaClock /> <span>Hafta içi 09:00–18:00 · Cmt 09:00–15:00</span></li>
          </ul>
          <Link to="/iletisim" className="btn btn-brand btn-sm footer__cta">
            Demo Talep Et <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Expert Bilişim — Vega Yazılım Samsun Bölge Temsilciliği. Tüm hakları saklıdır.</p>
          <p className="footer__note">7/24 teknik destek hattımız hizmetinizde.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
