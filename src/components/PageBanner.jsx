import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './PageBanner.css';

const PageBanner = ({ title, breadcrumb }) => {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <Link to="/">Ana Sayfa</Link>
          <FaChevronRight style={{ fontSize: '0.7rem' }} />
          <span>{breadcrumb || title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
