import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="iletisim" className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <a href="/" className="logo footer-logo">
            <span className="logo-text text-white">Expert<span className="logo-accent">Bilişim</span></span>
          </a>
          <p>Vega Yazılım Samsun Bölge Temsilcisi olarak bölgedeki işletmelere kurumsal muhasebe, ERP ve restoran çözümleri sunuyoruz.</p>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Kurumsal</h3>
          <ul>
            <li><a href="#kurumsal">Hakkımızda</a></li>
            <li><a href="#">Vizyon & Misyon</a></li>
            <li><a href="#">Referanslar</a></li>
            <li><a href="#">İnsan Kaynakları</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h3>Çözümlerimiz</h3>
          <ul>
            <li><a href="#">Vega Win ERP</a></li>
            <li><a href="#">Arctos Hızlı Satış</a></li>
            <li><a href="#">Şefim Restoran</a></li>
            <li><a href="#">e-Dönüşüm Merkezi</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>İletişim</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> <span>Samsun Merkez, Türkiye</span></li>
            <li><FaPhoneAlt /> <span>0 850 XXX XX XX</span></li>
            <li><FaEnvelope /> <span>info@expertbilisim.com.tr</span></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Expert Bilişim - Vega Yazılım Samsun Bölge Temsilciliği. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
