import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    tag: 'ERP & Muhasebe',
    title: 'İşletmenizin',
    highlight: 'Dijital Gücü',
    subtitle: 'Vega Yazılım Samsun Bölge Temsilcisi Expert Bilişim olarak; yenilikçi, güvenilir ve sürdürülebilir kurumsal yazılım çözümleriyle yanınızdayız.',
    cta: 'Çözümleri İncele',
    ctaLink: '/urunler',
    gradient: 'linear-gradient(135deg, #0c4a3e 0%, #0e5c4c 40%, #137a63 100%)',
  },
  {
    tag: 'Perakende Çözümleri',
    title: 'Satış Noktalarınızda',
    highlight: 'Tam Kontrol',
    subtitle: 'Arctos ve ShopStar ile market, mağaza ve perakende noktalarınızda hız, güven ve verimlilik sağlayın.',
    cta: 'Arctos\'u Keşfet',
    ctaLink: '/urunler/arctos',
    gradient: 'linear-gradient(135deg, #0e5c4c 0%, #1a9e7e 100%)',
  },
  {
    tag: 'Restoran Otomasyonu',
    title: 'Restoran ve Kafenizde',
    highlight: 'Dijital Dönüşüm',
    subtitle: 'Şefim Restoran Otomasyonu ile sipariş, mutfak, kurye ve ödeme süreçlerinizi modernleştirin.',
    cta: 'Şefim\'i İncele',
    ctaLink: '/urunler/sefim',
    gradient: 'linear-gradient(135deg, #08322a 0%, #0c4a3e 60%, #1a9e7e 100%)',
  },
  {
    tag: 'E-Dönüşüm',
    title: 'e-Fatura & e-Defter ile',
    highlight: 'Yasal Uyum',
    subtitle: 'GİB onaylı e-Dönüşüm çözümlerimizle kağıt masraflarından kurtulun ve dijital dünyaya adım atın.',
    cta: 'e-Dönüşüm\'e Geç',
    ctaLink: '/urunler/e-donusum',
    gradient: 'linear-gradient(135deg, #137a63 0%, #08322a 100%)',
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToSlide = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? 'active' : ''}`}
          style={{ background: slide.gradient }}
        >
          {/* Decorative shapes */}
          <div className="hero-deco hero-deco-1"></div>
          <div className="hero-deco hero-deco-2"></div>
          <div className="hero-deco hero-deco-3"></div>
        </div>
      ))}

      <div className="container hero-content-wrapper">
        <div className="hero-content" key={current}>
          <span className="hero-tag">{slides[current].tag}</span>
          <h1 className="hero-title">
            {slides[current].title} <span>{slides[current].highlight}</span>
          </h1>
          <p className="hero-subtitle">{slides[current].subtitle}</p>
          <div className="hero-buttons">
            <Link to={slides[current].ctaLink} className="btn btn-primary btn-lg btn-pill">
              {slides[current].cta} <FaArrowRight />
            </Link>
            <Link to="/iletisim" className="btn btn-outline btn-lg btn-pill">
              Bize Ulaşın
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-text">Yıllık Tecrübe</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-text">Mutlu Müşteri</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">350+</span>
            <span className="stat-text">Bayi Ağı</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">%100</span>
            <span className="stat-text">Destek Çözümü</span>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button className="hero-arrow hero-arrow-left" onClick={prevSlide} aria-label="Önceki">
        <FaChevronLeft />
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={nextSlide} aria-label="Sonraki">
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
