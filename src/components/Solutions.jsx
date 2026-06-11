import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { productIcons } from '../data/productIcons';
import './Solutions.css';
import { FaArrowRight } from 'react-icons/fa';

const Solutions = ({ showAll = false, limit = 6 }) => {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filtered = activeCategory === 'Tümü'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, limit);

  return (
    <section className="solutions section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">Ürünlerimiz</span>
          <h2>Her sektöre uygun <span className="text-grad">Vega çözümü</span></h2>
          <p>
            Marketten restorana, üretimden saha satışına — işletmenizin ölçeğine ve
            sektörüne göre doğru yazılımı birlikte seçelim.
          </p>
        </div>

        <div className="solutions__tabs reveal" role="tablist" aria-label="Ürün kategorileri">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`solutions__tab ${activeCategory === cat ? 'solutions__tab--on' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="solutions__grid">
          {displayed.map((p, i) => (
            <Link
              to={`/urunler/${p.id}`}
              className={`product-card reveal delay-${i % 3}`}
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
                <span className="product-card__go">
                  İncele <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="solutions__more reveal">
            <Link to="/urunler" className="btn btn-outline btn-lg">
              Tüm Ürünleri Gör <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Solutions;
