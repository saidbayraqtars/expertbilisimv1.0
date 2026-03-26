import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaChevronRight } from 'react-icons/fa';

const Urunler = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="section-header reveal">
          <h2>Vega Yazılım <span className="text-accent">Ürünlerimiz</span></h2>
          <p>Her sektöre, her ölçeğe uygun kurumsal çözümlerimizi detaylı olarak inceleyin.</p>
        </div>
        
        <div className="solutions-grid">
          {products.map((product, index) => (
            <div className={`solution-card reveal delay-${index % 3}`} key={product.id}>
              {/* Note: since we don't have separate class gradients for all, we fallback to bg-vega-win */}
              <div className={`solution-img bg-${product.id} bg-vega-win`}></div>
              <div className="solution-content">
                <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
                  {product.category}
                </span>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <Link to={`/urunler/${product.id}`} className="btn-link">
                  Ürünü İncele <FaChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Urunler;
