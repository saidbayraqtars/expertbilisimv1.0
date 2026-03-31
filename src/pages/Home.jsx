import Hero from '../components/Hero';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import CTA from '../components/CTA';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Solutions limit={6} />
      <CTA />
      <Clients />
    </>
  );
};

export default Home;
