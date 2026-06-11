import { Link } from 'react-router-dom';
import './CTA.css';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__panel reveal-scale">
          <div className="cta__glow" aria-hidden="true" />
          <div className="cta__content">
            <span className="eyebrow">Birlikte Başlayalım</span>
            <h2>İşletmeniz için doğru yazılımı 30 dakikada belirleyelim</h2>
            <p>
              Ücretsiz demo randevusu alın; ekibimiz işletmenizi dinlesin,
              size özel çözümü ve yol haritasını net biçimde sunsun.
            </p>
          </div>
          <div className="cta__actions">
            <Link to="/iletisim" className="btn btn-amber btn-lg">
              Ücretsiz Demo Talep Et <FaArrowRight />
            </Link>
            <a href="tel:+905461914055" className="btn btn-ghost btn-lg">
              <FaPhoneAlt /> 0546 191 40 55
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
