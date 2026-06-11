import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import Process from '../components/Process';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Solutions limit={6} />
      <Process />
      <CTA />
    </>
  );
};

export default Home;
