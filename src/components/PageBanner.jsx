import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './PageBanner.css';

const PageBanner = ({ title, breadcrumb, subtitle }) => {
  return (
    <section className="banner">
      <div className="banner__bg" aria-hidden="true">
        <div className="banner__glow" />
        <div className="banner__grid" />
      </div>
      <div className="container banner__inner">
        <nav className="banner__crumb" aria-label="Sayfa konumu">
          <Link to="/">Ana Sayfa</Link>
          <FaChevronRight />
          <span>{breadcrumb || title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p className="banner__sub">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;
