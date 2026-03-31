import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaArrowLeft, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const UrunDetay = () => {
  const { slug } = useParams();
  const product = products.find(p => p.id === slug);

  if (!product) {
    return (
      <>
        <PageBanner title="Ürün Bulunamadı" />
        <div className="container section" style={{ textAlign: 'center' }}>
          <h2>Aradığınız ürün sistemimizde mevcut değil.</h2>
          <Link to="/urunler" className="btn btn-primary btn-pill" style={{ marginTop: '20px' }}>Ürünlere Dön</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner title={product.name} breadcrumb={product.category} />

      <section className="section">
        <div className="container">
          <Link to="/urunler" className="btn-link" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
            <FaArrowLeft /> Tüm Ürünler
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', marginTop: '1rem' }}>
            {/* Product Visual */}
            <div className="reveal" style={{
              flex: '1 1 400px',
              background: product.gradient,
              minHeight: '400px',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              <span style={{
                padding: '5px 16px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: '600',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>{product.category}</span>
              <h2 style={{ color: 'white', fontSize: '2.75rem', textAlign: 'center', fontWeight: '800' }}>{product.name}</h2>
            </div>

            {/* Product Info */}
            <div className="reveal delay-1" style={{ flex: '1 1 500px' }}>
              <span className="section-label">{product.category}</span>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-heading)', fontWeight: '800' }}>{product.name}</h1>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '2.5rem' }}>
                {product.fullDescription}
              </p>

              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Öne Çıkan Özellikler</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontSize: '1.05rem'
                  }}>
                    <FaCheckCircle style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-heading)', fontWeight: '500' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/iletisim" className="btn btn-primary btn-lg btn-pill">
                  Bilgi & Teklif Al <FaArrowRight />
                </Link>
                <Link to="/iletisim" className="btn btn-outline-dark btn-lg btn-pill">
                  Demo Talebi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UrunDetay;
