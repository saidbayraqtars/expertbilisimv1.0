import PageBanner from '../components/PageBanner';
import Solutions from '../components/Solutions';
import CTA from '../components/CTA';

const Urunler = () => {
  return (
    <>
      <PageBanner
        title="Ürünlerimiz"
        breadcrumb="Vega Yazılım Ürünleri"
        subtitle="12 üründen oluşan Vega ailesi: ERP'den restorana, e-dönüşümden saha satışına her ihtiyaca bir çözüm."
      />
      <Solutions showAll={true} />
      <CTA />
    </>
  );
};

export default Urunler;
