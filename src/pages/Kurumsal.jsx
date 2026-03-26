import Features from '../components/Features';

const Kurumsal = () => {
  return (
    <div className="page-container" style={{ padding: '40px 0', minHeight: '60vh' }}>
      <div className="container">
        <div className="section-header reveal">
          <h2>Hakkımızda</h2>
          <p>Vega Yazılım Samsun Bölge Temsilcisi Olarak Teknolojiyi İşinize Entegre Ediyoruz.</p>
        </div>
        <div className="content-block reveal" style={{ maxWidth: '800px', margin: '0 auto 40px auto', fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '20px' }}>
            Expert Bilişim olarak bilişim sektöründeki köklü geçmişimizle, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir çözüm ortağı olma vizyonuyla hareket ediyoruz. 
            Vega Yazılım'ın bölgedeki en güçlü temsilcilerinden biri olarak, muhasebe, restoran, perakende ve e-dönüşüm süreçlerinde işletmelere uçtan uca destek sağlamaktayız.
          </p>
          <p>
            Müşteri memnuniyetini merkeze alan hizmet anlayışımızla; satış öncesi analiz, kurulum, eğitim ve satış sonrası 7/24 kesintisiz teknik destek sunarak 
            işletmelerin rekabet gücünü artırıyoruz. Amacımız, en son yazılım teknolojilerini erişilebilir kılarak sürdürülebilir büyümenize katkıda bulunmaktır.
          </p>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Kurumsal;
