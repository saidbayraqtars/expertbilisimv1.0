import './Features.css';
import { FaShieldAlt, FaChartLine, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="kurumsal" className="features section">
      <div className="container">
        <div className="section-header">
          <h2>Neden <span className="text-accent">Expert Bilişim?</span></h2>
          <p>Vega Yazılım'ın gücü ile Expert Bilişim'in saha tecrübesinin birleştiği nokta.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card reveal">
            <div className="icon-wrapper"><FaShieldAlt /></div>
            <h3>Bilgi Güvenliği</h3>
            <p>Müşteri verileriniz en üst düzey güvenlik standartlarıyla korunur. İş sürekliliğiniz garanti altındadır.</p>
          </div>
          
          <div className="feature-card reveal delay-1">
            <div className="icon-wrapper"><FaChartLine /></div>
            <h3>Sürekli İyileştirme</h3>
            <p>Gelişen teknolojiye hızla adapte olan yazılımlarımızla işletmenizin verimliliğini sürekli artırıyoruz.</p>
          </div>
          
          <div className="feature-card reveal delay-2">
            <div className="icon-wrapper"><FaHeadset /></div>
            <h3>7/24 Teknik Destek</h3>
            <p>Samsun merkezli uzman ve dinamik kadromuzla, karşılaştığınız her sorunda anında yanınızdayız.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
