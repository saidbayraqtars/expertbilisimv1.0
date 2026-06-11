import { Link } from 'react-router-dom';
import './Hero.css';
import {
  FaArrowRight, FaCheckCircle, FaChartLine, FaCashRegister,
  FaUtensils, FaFileInvoiceDollar, FaHeadset,
} from 'react-icons/fa';

const pills = [
  { icon: <FaChartLine />, label: 'ERP & Muhasebe', to: '/urunler/vega-win-erp' },
  { icon: <FaCashRegister />, label: 'Perakende', to: '/urunler/arctos' },
  { icon: <FaUtensils />, label: 'Restoran', to: '/urunler/sefim' },
  { icon: <FaFileInvoiceDollar />, label: 'e-Dönüşüm', to: '/urunler/e-donusum' },
];

const stats = [
  { value: '20+', label: 'Yıllık Tecrübe' },
  { value: '500+', label: 'Mutlu Müşteri' },
  { value: '12', label: 'Vega Ürünü' },
  { value: '7/24', label: 'Teknik Destek' },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--brand" />
        <div className="hero__glow hero__glow--amber" />
        <div className="hero__grid" />
      </div>

      <div className="container-wide hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <FaCheckCircle /> Vega Yazılım Yetkili Bölge Temsilcisi — Samsun
          </span>

          <h1 className="hero__title">
            İşletmenizin <span className="text-grad">dijital omurgasını</span> birlikte kuralım
          </h1>

          <p className="hero__sub">
            ERP, muhasebe, perakende, restoran ve e-dönüşüm çözümlerini tek çatı altında sunuyoruz.
            Kurulumdan eğitime, entegrasyondan 7/24 desteğe kadar her adımda yanınızdayız.
          </p>

          <div className="hero__cta">
            <Link to="/iletisim" className="btn btn-brand btn-lg">
              Ücretsiz Demo Talep Et <FaArrowRight />
            </Link>
            <Link to="/urunler" className="btn btn-ghost btn-lg">
              Ürünleri İncele
            </Link>
          </div>

          <div className="hero__pills">
            {pills.map((p) => (
              <Link to={p.to} className="hero__pill" key={p.label}>
                {p.icon} {p.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CSS-built dashboard mockup */}
        <div className="hero__visual" aria-hidden="true">
          <div className="mock">
            <div className="mock__head">
              <span className="mock__dot" />
              <span className="mock__dot" />
              <span className="mock__dot" />
              <span className="mock__title">Vega Win ERP — Genel Bakış</span>
            </div>
            <div className="mock__body">
              <div className="mock__kpis">
                <div className="mock__kpi">
                  <small>Günlük Satış</small>
                  <strong>₺184.250</strong>
                  <em className="up">▲ %12,4</em>
                </div>
                <div className="mock__kpi">
                  <small>Açık Sipariş</small>
                  <strong>327</strong>
                  <em className="up">▲ %4,1</em>
                </div>
                <div className="mock__kpi">
                  <small>Stok Değeri</small>
                  <strong>₺2,4M</strong>
                  <em>—</em>
                </div>
              </div>
              <div className="mock__chart">
                <div className="mock__bars">
                  {[42, 58, 38, 72, 55, 84, 64, 92, 70, 100, 78, 88].map((h, i) => (
                    <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }} />
                  ))}
                </div>
                <div className="mock__chart-foot">
                  <span>Oca</span><span>Şub</span><span>Mar</span><span>Nis</span>
                  <span>May</span><span>Haz</span>
                </div>
              </div>
              <div className="mock__rows">
                <div className="mock__row">
                  <span className="mock__row-ic" style={{ background: 'rgba(28,178,133,.15)', color: '#36d6a4' }}>₺</span>
                  <span className="mock__row-bar" style={{ width: '72%' }} />
                </div>
                <div className="mock__row">
                  <span className="mock__row-ic" style={{ background: 'rgba(232,155,14,.15)', color: '#f6b23a' }}>%</span>
                  <span className="mock__row-bar" style={{ width: '54%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="hero__float hero__float--invoice">
            <FaFileInvoiceDollar />
            <div>
              <strong>e-Fatura gönderildi</strong>
              <small>GİB onayı alındı · az önce</small>
            </div>
          </div>

          <div className="hero__float hero__float--support">
            <FaHeadset />
            <div>
              <strong>Destek hattı aktif</strong>
              <small>Ortalama yanıt: 3 dk</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide">
        <div className="hero__stats">
          {stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
