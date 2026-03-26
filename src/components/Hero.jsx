import './Hero.css';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <h1 className="hero-title">İşletmenizin <span>Dijital Yüzü</span> ve Yazılım Gücü</h1>
        <p className="hero-subtitle">Vega Yazılım Samsun Bölge Temsilcisi Expert Bilişim olarak; yenilikçi, güvenilir ve sürdürülebilir kurumsal yazılım çözümleriyle yanınızdayız.</p>
        <div className="hero-buttons">
          <a href="#cozumler" className="btn btn-primary btn-lg">
            Çözümleri İncele <FaArrowRight />
          </a>
          <a href="#kurumsal" className="btn btn-outline btn-lg">
            Hakkımızda <FaInfoCircle />
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-text">Yıllık Tecrübe</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-text">Mutlu Müşteri</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">%100</span>
            <span className="stat-text">Destek Çözümü</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
