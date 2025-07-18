
import { Button } from './ui/button';

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-sage-800">
              Hi, I'm Sarah
            </h2>
            <p className="text-xl text-sage-600">Your Wellness Guide</p>
          </div>
          
          {/* Video Container */}
          <div className="relative max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-sage-100 to-cream-100 rounded-3xl overflow-hidden shadow-xl">
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
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-sage-700 leading-relaxed">
              With over 8 years of dedicated practice and 5 years of teaching experience, 
              I believe wellness goes beyond physical fitness—it's about creating harmony 
              between mind, body, and spirit.
            </p>
            <p className="text-lg text-sage-700 leading-relaxed">
              My approach combines ancient wisdom with modern techniques, helping students 
              discover their unique path to balance and inner peace. I'm certified in multiple 
              yoga disciplines and trained in mindfulness meditation.
            </p>
          </div>
          
          {/* CTA Button */}
          <Button 
            className="bg-peach-400 hover:bg-peach-500 text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
