
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-cream-50/30"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium tracking-wide">
                    MINDFUL WELLNESS
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-light leading-tight text-foreground">
                  Find Your
                  <span className="block font-normal text-sage-600 mt-2">
                    Inner Balance
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Experience transformative yoga practice designed for modern life. 
                  Join our community of mindful practitioners.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-4 bg-sage-600 hover:bg-sage-700 text-white rounded-full font-medium transition-all duration-300"
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-4 border-sage-300 text-sage-700 hover:bg-sage-50 rounded-full font-medium transition-all duration-300"
                >
                  Explore Classes
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-light text-sage-600">5+</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Years</div>
                    <div className="text-sm font-medium text-foreground">Experience</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-light text-sage-600">500+</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Happy</div>
                    <div className="text-sm font-medium text-foreground">Students</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sage-200 to-cream-200 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-300/20 to-cream-300/20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl">🧘‍♀️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
