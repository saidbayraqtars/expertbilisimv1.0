import './Process.css';
import { FaSearch, FaLaptopCode, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch />,
    title: 'İhtiyaç Analizi',
    desc: 'İşletmenizi yerinde dinliyor, süreçlerinize en uygun Vega çözümünü birlikte belirliyoruz.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Kurulum & Entegrasyon',
    desc: 'Veri aktarımı, cihaz ve banka entegrasyonlarıyla sistemi kesintisiz devreye alıyoruz.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Ekip Eğitimi',
    desc: 'Çalışanlarınız yazılımı etkin kullanana kadar uygulamalı eğitimlerle yanınızdayız.',
  },
  {
    icon: <FaHeadset />,
    title: 'Sürekli Destek',
    desc: 'Canlıya geçiş sonrası 7/24 teknik destek ve düzenli güncellemelerle süreklilik sağlıyoruz.',
  },
];

const Process = () => {
  return (
    <section className="process section section-dark">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Nasıl Çalışıyoruz?</span>
          <h2>Dört adımda sorunsuz geçiş</h2>
          <p>
            Yazılım değişimi risk değil, planlı bir süreçtir. Kanıtlanmış yöntemimizle
            işletmenizi durdurmadan dijitalleştiriyoruz.
          </p>
        </div>

        <ol className="process__grid">
          {steps.map((s, i) => (
            <li className={`process__step reveal delay-${i}`} key={s.title}>
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="process__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
