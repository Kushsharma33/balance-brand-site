
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light text-sage-800 leading-tight">
              Find Your
            </h1>
            <h1 className="text-5xl md:text-7xl font-light text-sage-600 leading-tight">
              Inner Balance
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Transform your mind, body, and spirit through mindful movement and energy.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="px-8 py-4 bg-sage-500 hover:bg-sage-600 text-white rounded-full text-lg font-medium"
            >
              Start Practicing
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 border-2 border-sage-300 text-sage-700 hover:bg-sage-50 rounded-full text-lg font-medium"
            >
              View Schedule
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-16 text-sage-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-light">500+</span>
              <span>Students</span>
            </div>
            <div className="w-1 h-1 bg-sage-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-light">6</span>
              <span>Instructors</span>
            </div>
            <div className="w-1 h-1 bg-sage-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-light">5</span>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
