
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Classes from '../components/Classes';
import Schedule from '../components/Schedule';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Classes />
      <Schedule />
      <Pricing />
      <Testimonials />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
