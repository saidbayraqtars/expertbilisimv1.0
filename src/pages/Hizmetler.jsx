import PageBanner from '../components/PageBanner';
import Process from '../components/Process';
import CTA from '../components/CTA';
import './pages.css';
import {
  FaLaptopCode, FaChalkboardTeacher, FaHeadset,
  FaSearch, FaPaintBrush, FaServer,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch />,
    color: '#128a68',
    title: 'İhtiyaç Analizi',
    desc: 'İşletmenizin ihtiyaçlarını detaylı analiz ederek en uygun Vega yazılım çözümünü belirliyoruz.',
  },
  {
    icon: <FaLaptopCode />,
    color: '#1cb285',
    title: 'Kurulum & Entegrasyon',
    desc: 'Yazılım kurulumu, veri aktarımı ve mevcut sistemlerinizle entegrasyonu profesyonel ekibimizle gerçekleştiriyoruz.',
  },
  {
    icon: <FaChalkboardTeacher />,
    color: '#e89b0e',
    title: 'Eğitim Hizmetleri',
    desc: 'Çalışanlarınıza yönelik kapsamlı eğitim programlarıyla yazılım kullanımını en kısa sürede öğrenmenizi sağlıyoruz.',
  },
  {
    icon: <FaHeadset />,
    color: '#f43f5e',
    title: '7/24 Teknik Destek',
    desc: 'Uzman teknik ekibimiz sorunlarınıza anında çözüm üretir. Uzak bağlantı ve yerinde destek ile her zaman yanınızdayız.',
  },
  {
    icon: <FaPaintBrush />,
    color: '#8b5cf6',
    title: 'Web Tasarım',
    desc: 'Kurumsal web sitenizi modern ve etkileyici tasarımlarla oluşturuyor, dijital varlığınızı güçlendiriyoruz.',
  },
  {
    icon: <FaServer />,
    color: '#3b82f6',
    title: 'IT Danışmanlık',
    desc: 'Bilgi teknolojileri altyapınızın kurulumu, yönetimi ve optimizasyonu konusunda profesyonel danışmanlık veriyoruz.',
  },
];

const Hizmetler = () => {
  return (
    <>
      <PageBanner
        title="Hizmetlerimiz"
        breadcrumb="Hizmetler"
        subtitle="Analizden kuruluma, eğitimden 7/24 desteğe — işinizin her köşesine dokunan 360° bilişim hizmeti."
      />

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">360° Destek</span>
            <h2>Size özel <span className="text-grad">hizmetlerimiz</span></h2>
            <p>Yazılımı satmakla yetinmiyoruz; işletmenizde sorunsuz çalışmasını garanti ediyoruz.</p>
          </div>

          <div className="value-grid services-grid">
            {services.map((s, i) => (
              <article className={`value-card reveal delay-${i % 3}`} key={s.title}>
                <div
                  className="value-card__icon"
                  style={{ background: `${s.color}14`, color: s.color }}
                >
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
};

export default Hizmetler;
