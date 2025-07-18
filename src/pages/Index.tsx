
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Classes from '../components/Classes';
import Schedule from '../components/Schedule';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Classes />
      <Schedule />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
