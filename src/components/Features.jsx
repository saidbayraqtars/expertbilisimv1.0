import './Features.css';
import { FaShieldAlt, FaChartLine, FaHeadset, FaRocket, FaCogs, FaUsers } from 'react-icons/fa';

const features = [
  { icon: <FaRocket />, title: 'Yenilikçi Teknoloji', desc: 'Sektörün öncüsü teknolojilerle iş süreçlerinizi optimize edin ve rekabette öne geçin.' },
  { icon: <FaCogs />, title: 'Esnek & Ölçeklenebilir', desc: 'Siz işinizi büyütün, yazılımlarımız her zaman işinize uyum sağlayacaktır.' },
  { icon: <FaShieldAlt />, title: 'Güçlü Bilgi Güvenliği', desc: 'Verileriniz bizimle güvende, yüksek bilgi güvenliği standartlarında koruma sağlıyoruz.' },
  { icon: <FaUsers />, title: 'Uzman Kadro & Deneyim', desc: 'Alanında uzman ekibimizle her zaman yanınızdayız, işletmenize değer katmak istiyoruz.' },
  { icon: <FaHeadset />, title: 'Müşteri Odaklı Çözümler', desc: 'Her müşterimiz özeldir. İhtiyaçlarınıza özel çözümler için titizlikle çalışıyoruz.' },
  { icon: <FaChartLine />, title: 'İleri Düzey Raporlama', desc: 'Stratejik raporlarınız hazır. Verilerin gücüyle işinizi daha iyi yönetin.' },
];

const Features = () => {
  return (
    <section id="kurumsal" className="features section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Neden Biz?</span>
          <h2>İşinizin Geleceğini <span className="text-accent">Yönlendirin</span></h2>
          <p>Vega Yazılım'ın gücü ile Expert Bilişim'in saha tecrübesinin birleştiği nokta. 1994'ten beri Türkiye'nin her bölgesinde işletmelere güç katıyoruz.</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className={`feature-card reveal delay-${i % 3}`} key={i}>
              <div className="icon-wrapper">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="features-stats reveal">
          <div className="fs-item">
            <span className="fs-number">20+</span>
            <span className="fs-label">Yıllık Deneyim</span>
          </div>
          <div className="fs-item">
            <span className="fs-number">500+</span>
            <span className="fs-label">Mutlu Müşteri</span>
          </div>
          <div className="fs-item">
            <span className="fs-number">350+</span>
            <span className="fs-label">Bayi Ağı</span>
          </div>
          <div className="fs-item">
            <span className="fs-number">7/24</span>
            <span className="fs-label">Teknik Destek</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
