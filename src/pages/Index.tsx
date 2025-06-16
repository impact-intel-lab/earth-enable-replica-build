
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Problem from '@/components/Problem';
import About from '@/components/About';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import ProjectSpotlight from '@/components/ProjectSpotlight';
import WhyBiocharWorks from '@/components/WhyBiocharWorks';
import Solutions from '@/components/Solutions';
import JoinMovement from '@/components/JoinMovement';
import News from '@/components/News';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Problem />
      <About />
      <Services />
      <Technology />
      <ProjectSpotlight />
      <WhyBiocharWorks />
      <Solutions />
      <JoinMovement />
      <News />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
