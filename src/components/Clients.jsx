import './Clients.css';

const clients = [
  'Vega Yazılım', 'Arctos', 'ShopStar', 'Vepos', 'Vega IK',
  'Vega B2B', 'Cloud9', 'Vega Smart', 'Şefim', 'Vega One'
];

const Clients = () => {
  return (
    <section className="clients section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Güçlü İş Ortaklıkları</span>
          <h2>Çalıştığımız <span className="text-accent">Markalar</span></h2>
          <p>Vega Yazılım ürün ailesi ile işletmelere güç katıyoruz.</p>
        </div>
        <div className="clients-track">
          <div className="clients-slide">
            {[...clients, ...clients].map((client, index) => (
              <div className="client-item" key={index}>
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
