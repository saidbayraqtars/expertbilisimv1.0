import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import './pages.css';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,
  FaPaperPlane, FaCheckCircle,
} from 'react-icons/fa';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

const Iletisim = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData(initialForm);
  };

  return (
    <>
      <PageBanner
        title="İletişim"
        breadcrumb="Bize Ulaşın"
        subtitle="Sorularınız, demo ve teklif talepleriniz için bize yazın; aynı gün içinde dönüş yapalım."
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-cards">
              <div className="contact-card reveal">
                <div className="contact-card__icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Adres</h4>
                  <p>Samsun Merkez, Türkiye</p>
                </div>
              </div>
              <div className="contact-card reveal delay-1">
                <div className="contact-card__icon"><FaPhoneAlt /></div>
                <div>
                  <h4>Telefon</h4>
                  <p>
                    <a href="tel:+908500000000">0 850 XXX XX XX</a><br />
                    <a href="tel:+903620000000">0 362 XXX XX XX</a>
                  </p>
                </div>
              </div>
              <div className="contact-card reveal delay-2">
                <div className="contact-card__icon"><FaEnvelope /></div>
                <div>
                  <h4>E-Posta</h4>
                  <p><a href="mailto:info@expertbilisim.com.tr">info@expertbilisim.com.tr</a></p>
                </div>
              </div>
              <div className="contact-card reveal delay-3">
                <div className="contact-card__icon"><FaClock /></div>
                <div>
                  <h4>Çalışma Saatleri</h4>
                  <p>Pzt–Cuma: 09:00–18:00<br />Cumartesi: 09:00–15:00</p>
                </div>
              </div>
            </div>

            <form className="contact-form reveal delay-1" onSubmit={handleSubmit}>
              <h3>Bize Yazın</h3>
              <p>Formu doldurun, ekibimiz en kısa sürede sizinle iletişime geçsin.</p>

              {submitted && (
                <div className="form-success" role="status">
                  <FaCheckCircle /> Mesajınız gönderildi! En kısa sürede dönüş yapacağız.
                </div>
              )}

              <div className="contact-form__row">
                <input
                  type="text"
                  name="name"
                  placeholder="Ad Soyad"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="field"
                />
              </div>

              <div className="contact-form__row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleChange}
                  className="field"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="field"
                >
                  <option value="">Konu Seçin</option>
                  <option value="demo">Demo Talebi</option>
                  <option value="destek">Destek Talebi</option>
                  <option value="teklif">Fiyat Teklifi</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Mesajınız..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="field"
              />

              <button type="submit" className="btn btn-brand btn-lg" style={{ width: '100%' }}>
                <FaPaperPlane /> Mesajı Gönder
              </button>
            </form>
          </div>

          <div className="contact-map reveal">
            <iframe
              title="Expert Bilişim Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95968.46858974498!2d36.2455!3d41.2867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088611b55ef1b3d%3A0x6a91f6aa6fa63a2!2sSamsun%2C%20Turkey!5e0!3m2!1str!2str!4v1711880000000"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Iletisim;
