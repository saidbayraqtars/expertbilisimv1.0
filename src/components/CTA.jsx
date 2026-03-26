import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="cta-bg-shape"></div>
      <div className="container cta-container reveal">
        <div className="cta-content">
          <h2>İşletmenizi Geleceğe Taşıyın</h2>
          <p>Uzman ekibimizle tanışın, işletmenizin ihtiyaçlerine en uygun yazılım çözümlerini birlikte belirleyelim.</p>
        </div>
        <div className="cta-action">
          <a href="#iletisim" className="btn btn-light btn-lg">Hemen İletişime Geçin</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
