import PageBanner from '../components/PageBanner';
import { FaLaptopCode, FaChalkboardTeacher, FaHeadset, FaSearch, FaPaintBrush, FaServer } from 'react-icons/fa';

const services = [
  { icon: <FaSearch />, title: 'İhtiyaç Analizi', desc: 'İşletmenizin ihtiyaçlarını detaylı analiz ederek en uygun Vega yazılım çözümünü belirliyoruz.', color: '#007aff' },
  { icon: <FaLaptopCode />, title: 'Kurulum & Entegrasyon', desc: 'Yazılım kurulumu, veri aktarımı ve mevcut sistemlerinizle entegrasyonu profesyonel ekibimizle gerçekleştiriyoruz.', color: '#11998e' },
  { icon: <FaChalkboardTeacher />, title: 'Eğitim Hizmetleri', desc: 'Çalışanlarınıza yönelik kapsamlı eğitim programlarıyla yazılım kullanımını en kısa sürede öğrenmenizi sağlıyoruz.', color: '#F2994A' },
  { icon: <FaHeadset />, title: '7/24 Teknik Destek', desc: 'Uzman teknik ekibimiz sorunlarınıza anında çözüm üretir. Uzak bağlantı ve yerinde destek ile her zaman yanınızdayız.', color: '#C00D0D' },
  { icon: <FaPaintBrush />, title: 'Web Tasarım', desc: 'Kurumsal web sitenizi modern ve etkileyici tasarımlarla oluşturuyor, dijital varlığınızı güçlendiriyoruz.', color: '#8E2DE2' },
  { icon: <FaServer />, title: 'IT Danışmanlık', desc: 'Bilgi teknolojileri altyapınızın kurulumu, yönetimi ve optimizasyonu konusunda profesyonel danışmanlık hizmeti veriyoruz.', color: '#0a2558' },
];

const Hizmetler = () => {
  return (
    <>
      <PageBanner title="Hizmetlerimiz" breadcrumb="Hizmetler" />

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">360° Destek</span>
            <h2>Size Özel <span className="text-accent">Hizmetlerimiz</span></h2>
            <p>İşinizin her köşesine dokunan kapsamlı bilişim, teknoloji ve yazılım danışmanlık hizmetleri.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <div className={`feature-card reveal delay-${i % 3}`} key={i} style={{ textAlign: 'left', padding: '2.5rem' }}>
                <div className="icon-wrapper" style={{
                  margin: '0 0 1.25rem 0',
                  background: `${s.color}15`,
                  color: s.color
                }}>
                  {s.icon}
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hizmetler;
