import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Col 1: Company Info */}
        <div className="footer-about">
          <Link to="/" className="logo footer-logo">
            <span className="logo-text text-white">Expert<span className="logo-accent">Bilişim</span></span>
          </Link>
          <p>
            Vega Yazılım Samsun Bölge Temsilcisi olarak bölgedeki işletmelere kurumsal muhasebe, ERP, perakende ve restoran yazılım çözümleri sunuyoruz.
          </p>
          <div className="footer-hours">
            <div className="footer-hour-item">
              <FaClock />
              <span>Pzt - Cuma: 09:00 - 18:00</span>
            </div>
            <div className="footer-hour-item">
              <FaClock />
              <span>Cumartesi: 09:00 - 15:00</span>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-links">
          <h3>Hızlı Bağlantılar</h3>
          <ul>
            <li><Link to="/kurumsal">Hakkımızda</Link></li>
            <li><Link to="/urunler">Ürünlerimiz</Link></li>
            <li><Link to="/hizmetler">Hizmetlerimiz</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div className="footer-contact-col">
          <h3>İletişim Bilgileri</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt />
              <span>Samsun Merkez,<br />Türkiye</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>0 850 XXX XX XX</span>
            </li>
            <li>
              <FaEnvelope />
              <span>info@expertbilisim.com.tr</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Demo & Support */}
        <div className="footer-cta-col">
          <h3>Demo & Destek Talep</h3>
          <p>
            İşletmenizin ihtiyacı olan VEGA yazılımı ile sizi tanıştıralım. Size en yakın iş ortağı olarak gerekli sunumları yapalım.
          </p>
          <div className="footer-cta-buttons">
            <Link to="/iletisim" className="btn btn-red btn-pill footer-btn">
              <FaArrowRight /> Demo Talebi
            </Link>
            <Link to="/iletisim" className="btn btn-outline btn-pill footer-btn">
              Destek Talebi
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-bottom-left">
            <Link to="/" className="footer-bottom-logo">
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}>
                Expert<span style={{ color: 'var(--color-accent)' }}>Bilişim</span>
              </span>
            </Link>
          </div>
          <p>© 2026 Expert Bilişim - Vega Yazılım Samsun Bölge Temsilciliği. Tüm Hakları Saklıdır.</p>
          <div className="footer-social">
            <span>Bizi Takip Edin</span>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
