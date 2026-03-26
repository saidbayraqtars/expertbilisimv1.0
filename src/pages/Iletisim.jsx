import CTA from '../components/CTA';

const Iletisim = () => {
  return (
    <div style={{ padding: '40px 0' }}>
      <div className="container">
        <div className="section-header reveal">
          <h2>İletişime <span className="text-accent">Geçin</span></h2>
          <p>Sorularınız, projeleriniz veya teklif almak için bizimle hemen iletişime geçebilirsiniz.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="feature-card reveal" style={{ padding: '2rem' }}>
            <h3>Lokasyon</h3>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Samsun Merkez<br/>
              Türkiye
            </p>
          </div>
          <div className="feature-card reveal delay-1" style={{ padding: '2rem' }}>
            <h3>Telefon</h3>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              0 850 XXX XX XX<br/>
              0 362 XXX XX XX
            </p>
          </div>
          <div className="feature-card reveal delay-2" style={{ padding: '2rem' }}>
            <h3>E-Posta & Web</h3>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              info@expertbilisim.com.tr<br/>
              www.expertbilisim.com.tr
            </p>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Iletisim;
