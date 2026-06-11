import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import './pages.css';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp,
} from 'react-icons/fa';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

const subjectLabels = {
  demo: 'Demo Talebi',
  destek: 'Destek Talebi',
  teklif: 'Fiyat Teklifi',
  diger: 'Diğer',
};

const WHATSAPP_NUMBER = '905461914055';

const Iletisim = () => {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form içeriğini WhatsApp mesajına çevirip wa.me üzerinden gönderir.
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Merhaba, web sitesi üzerinden ulaşıyorum.',
      `Ad Soyad: ${formData.name}`,
      `E-posta: ${formData.email}`,
      formData.phone ? `Telefon: ${formData.phone}` : '',
      `Konu: ${subjectLabels[formData.subject] || formData.subject}`,
      '',
      formData.message,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener,noreferrer'
    );
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
                  <p>Liman Mah. Göremen Sok. No:1<br />İlkadım / Samsun</p>
                </div>
              </div>
              <div className="contact-card reveal delay-1">
                <div className="contact-card__icon"><FaPhoneAlt /></div>
                <div>
                  <h4>Telefon</h4>
                  <p>
                    <a href="tel:+905461914055">0546 191 40 55</a>
                  </p>
                </div>
              </div>
              <div className="contact-card reveal delay-2">
                <div className="contact-card__icon"><FaEnvelope /></div>
                <div>
                  <h4>E-Posta</h4>
                  <p><a href="mailto:hakan@expertbilisim.com.tr">hakan@expertbilisim.com.tr</a></p>
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
              <p>Formu doldurun, mesajınız WhatsApp üzerinden bize ulaşsın.</p>

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
                <FaWhatsapp /> WhatsApp ile Gönder
              </button>
            </form>
          </div>

          <div className="contact-map reveal">
            <iframe
              title="Expert Bilişim Konum"
              src="https://www.google.com/maps?q=Liman+Mahallesi+G%C3%B6remen+Sokak+No:1+%C4%B0lkad%C4%B1m+Samsun&output=embed"
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
