import PageBanner from '../components/PageBanner';
import Features from '../components/Features';
import CTA from '../components/CTA';
import './pages.css';
import { FaEye, FaBullseye, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const ticks = [
  'Satış öncesi yerinde analiz',
  'Planlı kurulum ve veri aktarımı',
  'Uygulamalı kullanıcı eğitimi',
  '7/24 kesintisiz teknik destek',
];

const values = [
  {
    icon: <FaEye />,
    title: 'Vizyonumuz',
    desc: 'Samsun ve çevre illerde dijital dönüşümün öncüsü olarak işletmelerin teknolojiyle güçlenmesine liderlik etmek.',
  },
  {
    icon: <FaBullseye />,
    title: 'Misyonumuz',
    desc: 'Her ölçekteki işletmeye erişilebilir, güvenilir ve yenilikçi yazılım çözümleri sunarak iş süreçlerini optimize etmek.',
  },
  {
    icon: <FaHandshake />,
    title: 'Değerlerimiz',
    desc: 'Müşteri odaklılık, sürekli gelişim, şeffaflık ve iş ortaklığı ruhuyla hareket ederek güven inşa etmek.',
  },
];

const Kurumsal = () => {
  return (
    <>
      <PageBanner
        title="Kurumsal"
        breadcrumb="Hakkımızda"
        subtitle="Bilişim sektöründeki köklü geçmişimizle işletmelerin dijital dönüşümünde güvenilir çözüm ortağıyız."
      />

      <section className="section">
        <div className="container">
          <div className="story">
            <div className="story__text reveal-left">
              <span className="eyebrow">Biz Kimiz?</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 22 }}>
                Vega Yazılım Samsun <span className="text-grad">Bölge Temsilcisi</span>
              </h2>
              <p>
                Expert Bilişim olarak bilişim sektöründeki köklü geçmişimizle, işletmelerin dijital
                dönüşüm süreçlerinde güvenilir bir çözüm ortağı olma vizyonuyla hareket ediyoruz.
                Vega Yazılım'ın bölgedeki en güçlü temsilcilerinden biri olarak muhasebe, restoran,
                perakende ve e-dönüşüm süreçlerinde işletmelere uçtan uca destek sağlıyoruz.
              </p>
              <p>
                Müşteri memnuniyetini merkeze alan hizmet anlayışımızla satış öncesi analizden
                satış sonrası kesintisiz desteğe kadar her adımda işletmelerin rekabet gücünü
                artırıyoruz.
              </p>
              <ul className="story__ticks">
                {ticks.map((t) => (
                  <li key={t}><FaCheckCircle /> {t}</li>
                ))}
              </ul>
            </div>

            <div className="story__visual reveal-right">
              <div className="story__panel">
                <h3>Rakamlarla Expert Bilişim</h3>
                <div className="story__metrics">
                  <div className="story__metric">
                    <strong>20+</strong>
                    <span>Yıllık sektör tecrübesi</span>
                  </div>
                  <div className="story__metric">
                    <strong>500+</strong>
                    <span>Aktif müşteri</span>
                  </div>
                  <div className="story__metric">
                    <strong>12</strong>
                    <span>Vega ürün ailesi</span>
                  </div>
                  <div className="story__metric">
                    <strong>7/24</strong>
                    <span>Teknik destek hattı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Yol Haritamız</span>
            <h2>Bizi biz yapan ilkeler</h2>
          </div>
          <div className="value-grid">
            {values.map((v, i) => (
              <article className={`value-card reveal delay-${i}`} key={v.title}>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <CTA />
    </>
  );
};

export default Kurumsal;
