
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 wellness-gradient">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-serif font-light text-foreground leading-tight tracking-wide">
              Find Your
            </h1>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-primary leading-tight tracking-wide">
              Inner Balance
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Transform your mind, body, and spirit through mindful movement and energy.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Practicing
            </Button>
            <Button 
              size="lg"
              className="px-10 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Schedule
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-20 text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif font-light text-primary">500+</span>
              <span className="font-light">Students</span>
            </div>
            <div className="w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif font-light text-primary">6</span>
              <span className="font-light">Instructors</span>
            </div>
            <div className="w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-serif font-light text-primary">5</span>
              <span className="font-light">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
