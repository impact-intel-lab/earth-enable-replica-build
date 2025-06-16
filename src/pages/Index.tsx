
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import Solutions from '@/components/Solutions';
import News from '@/components/News';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Technology />
      <Solutions />
      <News />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
