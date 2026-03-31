import { Link } from 'react-router-dom';
import './CTA.css';
import { FaArrowRight, FaLifeRing } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="cta-bg-shape"></div>
      <div className="cta-bg-shape-2"></div>
      <div className="container cta-container reveal">
        <div className="cta-content">
          <span className="cta-label">Birlikte Büyüyelim</span>
          <h2>İşletmenizi Geleceğe Taşıyın</h2>
          <p>Uzman ekibimizle tanışın, işletmenizin ihtiyaçlerine en uygun yazılım çözümlerini birlikte belirleyelim.</p>
        </div>
        <div className="cta-actions">
          <Link to="/iletisim" className="btn btn-light btn-lg btn-pill">
            <FaArrowRight /> Demo Talebi
          </Link>
          <Link to="/iletisim" className="btn btn-outline btn-lg btn-pill">
            <FaLifeRing /> Destek Talebi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
