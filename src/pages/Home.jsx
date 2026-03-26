import Hero from '../components/Hero';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* We keep a preview of solutions on home, but actual full list is in /urunler */}
      <Solutions />
      <CTA />
    </>
  );
};

export default Home;
