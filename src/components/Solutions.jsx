import './Solutions.css';
import { FaChevronRight } from 'react-icons/fa';

const Solutions = () => {
  return (
    <section id="cozumler" className="solutions section bg-light">
      <div className="container">
        <div className="section-header">
          <h2>Kurumsal <span className="text-accent">Çözümlerimiz</span></h2>
          <p>İşletmenizin her departmanı için tasarlanmış profesyonel Vega Yazılım ürünleri.</p>
        </div>
        
        <div className="solutions-grid">
          {/* Solution 1 */}
          <div className="solution-card reveal">
            <div className="solution-img bg-vega-win"></div>
            <div className="solution-content">
              <h3>Vega Win ERP</h3>
              <p>Ön muhasebe, genel muhasebe, üretim, sipariş ve depo yönetimini tek bir platformda birleştiren ileri düzey ERP çözümü.</p>
              <a href="#" className="btn-link">Detaylı İncele <FaChevronRight /></a>
            </div>
          </div>
          
          {/* Solution 2 */}
          <div className="solution-card reveal">
            <div className="solution-img bg-arctos"></div>
            <div className="solution-content">
              <h3>Arctos Hızlı Satış</h3>
              <p>Market, mağaza ve perakende noktalarında hız, güven ve tam kontrol sağlayan yeni nesil satış otomasyonu.</p>
              <a href="#" className="btn-link">Detaylı İncele <FaChevronRight /></a>
            </div>
          </div>
          
          {/* Solution 3 */}
          <div className="solution-card reveal">
            <div className="solution-img bg-chef"></div>
            <div className="solution-content">
              <h3>Şefim Restoran</h3>
              <p>Kafe, restoran ve yemek sektörüne özel adisyon, paket servis, karekod menü ve mutfak yönetimi programı.</p>
              <a href="#" className="btn-link">Detaylı İncele <FaChevronRight /></a>
            </div>
          </div>
          
          {/* Solution 4 */}
          <div className="solution-card reveal">
            <div className="solution-img bg-e-transform"></div>
            <div className="solution-content">
              <h3>e-Dönüşüm Hizmetleri</h3>
              <p>e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter çözümleriyle dijital dönüşümünüzü hızlı ve yasal güvenceyle tamamlayın.</p>
              <a href="#" className="btn-link">Detaylı İncele <FaChevronRight /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
