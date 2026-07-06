import './Logo.css';

/**
 * Expert Bilişim marka logosu.
 * Sunumsal bileşen — bağlantı gerektiğinde çağıran taraf <Link> ile sarar.
 * Bar renkleri sabittir (her zemin üzerinde okunur); yazı `currentColor`
 * kullanır, böylece navbar/footer/drawer bağlamına göre renk alır.
 */
const Logo = ({ tagline = false, className = '' }) => (
  <span className={`logo ${className}`.trim()}>
    <svg
      className="logo__mark"
      viewBox="0 0 40 40"
      role="img"
      aria-label="Expert Bilişim"
      focusable="false"
    >
      <polygon points="8,7 16,7 10,33 2,33" fill="#22de86" />
      <polygon points="19,7 27,7 21,33 13,33" fill="#12bfc0" />
      <polygon points="30,7 38,7 32,33 24,33" fill="#0c9dd8" />
    </svg>
    <span className="logo__word">
      <strong>EXPERT</strong>
      <span className="logo__sub">BİLİŞİM</span>
      {tagline && <small>Vega Yazılım Bölge Temsilcisi</small>}
    </span>
  </span>
);

export default Logo;
