import PageBanner from '../components/PageBanner';
import Features from '../components/Features';
import { FaEye, FaBullseye, FaHandshake } from 'react-icons/fa';

const Kurumsal = () => {
  return (
    <>
      <PageBanner title="Kurumsal" breadcrumb="Hakkımızda" />

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Biz Kimiz?</span>
            <h2>Vega Yazılım Samsun <span className="text-accent">Bölge Temsilcisi</span></h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto 60px', fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.8' }} className="reveal">
            <p style={{ marginBottom: '20px' }}>
              Expert Bilişim olarak bilişim sektöründeki köklü geçmişimizle, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir çözüm ortağı olma vizyonuyla hareket ediyoruz.
              Vega Yazılım'ın bölgedeki en güçlü temsilcilerinden biri olarak, muhasebe, restoran, perakende ve e-dönüşüm süreçlerinde işletmelere uçtan uca destek sağlamaktayız.
            </p>
            <p>
              Müşteri memnuniyetini merkeze alan hizmet anlayışımızla; satış öncesi analiz, kurulum, eğitim ve satış sonrası 7/24 kesintisiz teknik destek sunarak
              işletmelerin rekabet gücünü artırıyoruz. Amacımız, en son yazılım teknolojilerini erişilebilir kılarak sürdürülebilir büyümenize katkıda bulunmaktır.
            </p>
          </div>

          {/* Vision / Mission / Values */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '60px' }}>
            <div className="feature-card reveal" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div className="icon-wrapper" style={{ margin: '0 0 1.25rem 0' }}>
                <FaEye />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Vizyonumuz</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                Samsun ve çevre illerde dijital dönüşümün öncüsü olarak işletmelerin teknoloji ile güçlenmesine liderlik etmek.
              </p>
            </div>
            <div className="feature-card reveal delay-1" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div className="icon-wrapper" style={{ margin: '0 0 1.25rem 0' }}>
                <FaBullseye />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Misyonumuz</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                Her ölçekteki işletmeye erişilebilir, güvenilir ve yenilikçi yazılım çözümleri sunarak iş süreçlerini optimize etmek.
              </p>
            </div>
            <div className="feature-card reveal delay-2" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div className="icon-wrapper" style={{ margin: '0 0 1.25rem 0' }}>
                <FaHandshake />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>Değerlerimiz</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                Müşteri odaklılık, sürekli gelişim, şeffaflık ve iş ortaklığı ruhuyla hareket ederek güven inşa ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Features />
    </>
  );
};

export default Kurumsal;
