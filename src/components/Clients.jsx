import './Clients.css';

const brands = [
  'Vega Yazılım', 'Arctos', 'ShopStar', 'Vepos', 'Şefim',
  'Vega B2B', 'Cloud9', 'Vega Smart', 'Vega İK', 'Vega Cube',
];

// Slim brand marquee shown right under the hero.
const Clients = () => {
  return (
    <section className="brands" aria-label="Vega ürün ailesi">
      <div className="container brands__inner">
        <span className="brands__label">Vega ürün ailesi ile</span>
        <div className="brands__track">
          <div className="brands__slide">
            {[...brands, ...brands].map((b, i) => (
              <span className="brands__item" key={i}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
