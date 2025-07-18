
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
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-neutral-50 to-soft-100">
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
