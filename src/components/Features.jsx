import './Features.css';
import {
  FaShieldAlt, FaChartLine, FaHeadset, FaRocket, FaCogs, FaUsers, FaCheck,
} from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features section section-tint">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Neden Expert Bilişim?</span>
          <h2>Yazılımı kurmakla bitmez,<br />işletmenizle birlikte yaşatırız</h2>
          <p>
            Vega Yazılım'ın ürün gücünü Expert Bilişim'in saha tecrübesiyle birleştiriyoruz.
            1994'ten beri süren Vega birikimi, bölgenizde uçtan uca hizmetle buluşuyor.
          </p>
        </div>

        <div className="bento">
          {/* Big card: support */}
          <article className="bento__card bento__card--wide bento__card--dark reveal">
            <div className="bento__icon"><FaHeadset /></div>
            <h3>7/24 Kesintisiz Teknik Destek</h3>
            <p>
              Uzak bağlantı ve yerinde müdahale ile sorununuz büyümeden çözülür.
              Kasanız durmaz, satışınız beklemez.
            </p>
            <ul className="bento__list">
              <li><FaCheck /> Uzak masaüstü ile anında bağlantı</li>
              <li><FaCheck /> Yerinde servis ve donanım desteği</li>
              <li><FaCheck /> Sürüm güncellemeleri ve bakım</li>
            </ul>
          </article>

          <article className="bento__card reveal delay-1">
            <div className="bento__icon"><FaRocket /></div>
            <h3>Hızlı Kurulum</h3>
            <p>Analizden canlıya geçişe kadar planlı, kesintisiz devreye alma süreci.</p>
          </article>

          <article className="bento__card reveal delay-2">
            <div className="bento__icon"><FaCogs /></div>
            <h3>Tam Entegrasyon</h3>
            <p>Yazar kasa, terazi, banka ve pazaryeri entegrasyonları tek elden.</p>
          </article>

          <article className="bento__card reveal delay-1">
            <div className="bento__icon"><FaShieldAlt /></div>
            <h3>Veri Güvenliği</h3>
            <p>Otomatik yedekleme ve yüksek güvenlik standartlarıyla veriniz koruma altında.</p>
          </article>

          <article className="bento__card reveal delay-2">
            <div className="bento__icon"><FaUsers /></div>
            <h3>Uzman Kadro</h3>
            <p>Sertifikalı ekibimizle kurulum, eğitim ve danışmanlık tek noktadan.</p>
          </article>

          <article className="bento__card bento__card--wide bento__card--amber reveal delay-3">
            <div className="bento__icon"><FaChartLine /></div>
            <h3>Karar Destekleyen Raporlama</h3>
            <p>
              Satış, stok ve finans verileriniz yöneticiye özel ekranlarda.
              Sezgiyle değil, veriyle yönetin.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
