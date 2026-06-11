import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { productIcons } from '../data/productIcons';
import PageBanner from '../components/PageBanner';
import CTA from '../components/CTA';
import './pages.css';
import '../components/Solutions.css';
import {
  FaArrowLeft, FaArrowRight, FaCheckCircle, FaHeadset,
} from 'react-icons/fa';

const UrunDetay = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return (
      <>
        <PageBanner title="Ürün Bulunamadı" breadcrumb="Ürünler" />
        <div className="container section notfound">
          <h2>Aradığınız ürün sistemimizde mevcut değil.</h2>
          <Link to="/urunler" className="btn btn-brand">Ürünlere Dön</Link>
        </div>
      </>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aSame = a.category === product.category ? 0 : 1;
      const bSame = b.category === product.category ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, 3);

  return (
    <>
      <PageBanner
        title={product.name}
        breadcrumb={product.category}
        subtitle={product.shortDescription}
      />

      <section className="section">
        <div className="container">
          <Link to="/urunler" className="link-arrow pd-back">
            <FaArrowLeft /> Tüm Ürünler
          </Link>

          <div className="pd-layout">
            <div className="pd-content reveal">
              <h2 style={{ marginTop: 0 }}>Ürün Hakkında</h2>
              <p>{product.fullDescription}</p>

              <h2>Öne Çıkan Özellikler</h2>
              <div className="pd-features">
                {product.features.map((f) => (
                  <div className="pd-feature" key={f}>
                    <FaCheckCircle /> {f}
                  </div>
                ))}
              </div>
            </div>

            <aside className="pd-aside reveal delay-1">
              <div className="pd-card" style={{ '--pd-accent': product.accent }}>
                <div
                  className="pd-card__icon"
                  style={{ background: `${product.accent}26`, color: product.accent }}
                >
                  {productIcons[product.icon]}
                </div>
                <span className="pd-card__cat">{product.category}</span>
                <h3>{product.name}</h3>
                <p>İşletmenize uygunluğunu birlikte değerlendirelim, size özel teklif hazırlayalım.</p>
                <div className="pd-card__actions">
                  <Link to="/iletisim" className="btn btn-brand">
                    Demo Talep Et <FaArrowRight />
                  </Link>
                  <Link to="/iletisim" className="btn btn-ghost">
                    Fiyat Teklifi Al
                  </Link>
                </div>
              </div>

              <div className="pd-support">
                <FaHeadset />
                <div>
                  <strong>Kurulum + eğitim + 7/24 destek</strong>
                  <small>Tüm Vega ürünlerinde Expert Bilişim güvencesi</small>
                </div>
              </div>
            </aside>
          </div>

          <div className="pd-related">
            <h2>İlginizi Çekebilecek Diğer Ürünler</h2>
            <div className="pd-related__grid">
              {related.map((p, i) => (
                <Link
                  to={`/urunler/${p.id}`}
                  className={`product-card reveal delay-${i}`}
                  key={p.id}
                  style={{ '--accent': p.accent }}
                >
                  <div className="product-card__top">
                    <span className="product-card__icon">{productIcons[p.icon]}</span>
                    <span className="product-card__cat">{p.category}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.shortDescription}</p>
                  <div className="product-card__foot">
                    <span className="product-card__count">{p.features.length} temel özellik</span>
                    <span className="product-card__go">İncele <FaArrowRight /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default UrunDetay;
