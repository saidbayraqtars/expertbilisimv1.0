import PageBanner from '../components/PageBanner';
import Solutions from '../components/Solutions';

const Urunler = () => {
  return (
    <>
      <PageBanner title="Ürünlerimiz" breadcrumb="Vega Yazılım Ürünleri" />
      <Solutions showAll={true} />
    </>
  );
};

export default Urunler;
