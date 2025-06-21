
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage-200 rounded-full opacity-50 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-coral-200 rounded-full opacity-60 animate-gentle-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cream-200 rounded-full opacity-40 animate-float delay-1000"></div>

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-sage-800 mb-6 leading-tight">
            Find Your
            <span className="block wellness-gradient bg-clip-text text-transparent">
              Inner Balance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your mind, body, and spirit through mindful movement and ancient wisdom. 
            Join our community of wellness seekers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-sage-400 text-sage-600 hover:bg-sage-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              View Schedule
            </Button>
          </div>
          
          <div className="mt-16 text-sage-500">
            <p className="text-sm uppercase tracking-wider mb-4">Trusted by 500+ Students</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-light text-sage-700">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-sage-700">20+</div>
                <div className="text-sm">Classes Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-sage-700">500+</div>
                <div className="text-sm">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
