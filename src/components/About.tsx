
import { Button } from './ui/button';

const About = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground leading-tight">
              Hi, I'm Sarah
            </h2>
            <p className="text-2xl text-primary font-light">Your Wellness Guide</p>
          </div>
          
          {/* Video Container */}
          <div className="relative max-w-3xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-3xl overflow-hidden soft-shadow">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Meet Your Wellness Guide - Sarah"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* About Text */}
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl text-foreground leading-relaxed font-light">
              With over 8 years of dedicated practice and 5 years of teaching experience, 
              I believe wellness goes beyond physical fitness—it's about creating harmony 
              between mind, body, and spirit.
            </p>
            <p className="text-xl text-foreground leading-relaxed font-light">
              My approach combines ancient wisdom with modern techniques, helping students 
              discover their unique path to balance and inner peace. I'm certified in multiple 
              yoga disciplines and trained in mindfulness meditation.
            </p>
          </div>
          
          {/* CTA Button */}
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 rounded-full text-lg font-medium soft-shadow hover:shadow-lg transition-all duration-300"
          >
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
