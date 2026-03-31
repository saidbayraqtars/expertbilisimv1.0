import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Solutions.css';
import { FaChevronRight } from 'react-icons/fa';

const categories = ['Tümü', ...new Set(products.map(p => p.category))];

const Solutions = ({ showAll = false, limit = 6 }) => {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filtered = activeCategory === 'Tümü'
    ? products
    : products.filter(p => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, limit);

  return (
    <section id="cozumler" className="solutions section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Çözümlerimiz</span>
          <h2>Sektörel Çözümler <span className="text-accent">Üretiyoruz</span></h2>
          <p>İşimizin merkezinde sizin varlığınız ve ihtiyaçlarınız bulunuyor. Çalışmalarımızın odak noktasında sizin memnuniyetiniz var.</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="solutions-tabs reveal">
          {categories.map(cat => (
            <button
              key={cat}
              className={`solutions-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="solutions-grid">
          {displayed.map((product, index) => (
            <Link
              to={`/urunler/${product.id}`}
              className={`solution-card reveal delay-${index % 3}`}
              key={product.id}
            >
              <div className="solution-card-img" style={{ background: product.gradient }}>
                <span className="solution-card-category">{product.category}</span>
                <h3 className="solution-card-title">{product.name}</h3>
              </div>
              <div className="solution-card-body">
                <p>{product.shortDescription}</p>
                <span className="btn-link">
                  Detaylı İncele <FaChevronRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="solutions-more reveal">
            <Link to="/urunler" className="btn btn-outline-dark btn-lg btn-pill">
              Tüm Ürünleri Gör <FaChevronRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Solutions;
