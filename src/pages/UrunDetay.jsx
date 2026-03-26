import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const UrunDetay = () => {
  const { slug } = useParams();
  const product = products.find(p => p.id === slug);

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Ürün Bulunamadı</h2>
        <p>Aradığınız ürün sistemimizde mevcut değil.</p>
        <Link to="/urunler" className="btn btn-primary" style={{ marginTop: '20px' }}>Ürünlere Dön</Link>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ padding: '40px 0' }}>
      <div className="container">
        <Link to="/urunler" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', color: 'var(--color-text-light)', fontWeight: '500' }}>
          <FaArrowLeft /> Tüm Ürünler
        </Link>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
          <div className="product-image reveal" style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)', height: '400px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
             <h2 style={{ color: 'white', fontSize: '2.5rem', textAlign: 'center', padding: '20px' }}>{product.name}</h2>
          </div>
          
          <div className="product-info reveal delay-1" style={{ flex: '1 1 500px' }}>
            <span style={{ display: 'inline-block', padding: '5px 12px', background: 'var(--color-bg-light)', color: 'var(--color-accent)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '15px' }}>
              {product.category}
            </span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-heading)' }}>{product.name}</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
              {product.fullDescription}
            </p>
            
            <h3 style={{ marginBottom: '1rem' }}>Öne Çıkan Özellikler</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
              {product.features.map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid var(--color-border)' }}>
                  <FaCheckCircle color="var(--color-accent)" /> 
                  <span style={{ color: 'var(--color-heading)', fontWeight: '500' }}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/iletisim" className="btn btn-primary btn-lg">Bilgi & Teklif Al</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrunDetay;
