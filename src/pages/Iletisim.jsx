import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Iletisim = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <PageBanner title="İletişim" breadcrumb="Bize Ulaşın" />

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Bize Yazın</span>
            <h2>İletişime <span className="text-accent">Geçin</span></h2>
            <p>Sorularınız, projeleriniz veya teklif almak için bizimle hemen iletişime geçebilirsiniz.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Contact Info Cards */}
            <div>
              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="feature-card reveal" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
                  <div className="icon-wrapper" style={{ margin: 0, width: '52px', height: '52px', minWidth: '52px', fontSize: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.05rem' }}>Adres</h4>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Samsun Merkez, Türkiye</p>
                  </div>
                </div>

                <div className="feature-card reveal delay-1" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
                  <div className="icon-wrapper" style={{ margin: 0, width: '52px', height: '52px', minWidth: '52px', fontSize: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.05rem' }}>Telefon</h4>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>0 850 XXX XX XX<br />0 362 XXX XX XX</p>
                  </div>
                </div>

                <div className="feature-card reveal delay-2" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
                  <div className="icon-wrapper" style={{ margin: 0, width: '52px', height: '52px', minWidth: '52px', fontSize: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.05rem' }}>E-Posta</h4>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>info@expertbilisim.com.tr</p>
                  </div>
                </div>

                <div className="feature-card reveal delay-3" style={{ padding: '1.75rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', textAlign: 'left' }}>
                  <div className="icon-wrapper" style={{ margin: 0, width: '52px', height: '52px', minWidth: '52px', fontSize: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <FaClock />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.05rem' }}>Çalışma Saatleri</h4>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Pzt-Cuma: 09:00-18:00<br />Cumartesi: 09:00-15:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal delay-1">
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'white',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                  İletişim Formu
                </h3>

                {submitted && (
                  <div style={{
                    background: '#d4edda',
                    color: '#155724',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>
                    ✓ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ad Soyad"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={inputStyle}
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
                  style={{ ...inputStyle, resize: 'vertical', marginBottom: '1.5rem' }}
                />

                <button type="submit" className="btn btn-primary btn-lg btn-pill" style={{ width: '100%' }}>
                  <FaPaperPlane /> Mesaj Gönder
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="reveal" style={{ marginTop: '4rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <iframe
              title="Expert Bilişim Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95968.46858974498!2d36.2455!3d41.2867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088611b55ef1b3d%3A0x6a91f6aa6fa63a2!2sSamsun%2C%20Turkey!5e0!3m2!1str!2str!4v1711880000000"
              width="100%"
              height="400"
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

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  transition: 'border-color 0.2s ease',
  outline: 'none',
  background: 'var(--color-bg-alt)',
  color: 'var(--color-text)',
};

export default Iletisim;
