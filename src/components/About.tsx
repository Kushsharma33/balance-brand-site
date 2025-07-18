import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-cream-100 text-cream-700 rounded-full text-sm font-medium tracking-wide">
                    ABOUT INSTRUCTOR
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-light leading-tight text-foreground">
                  Meet Ankit
                  <span className="block text-sage-600 mt-2">Your Wellness Guide</span>
                </h2>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    With over 5 years of dedicated practice and teaching, I believe wellness 
                    goes beyond physical fitness—it's about creating harmony between mind, 
                    body, and spirit.
                  </p>
                  <p>
                    My approach combines ancient wisdom with modern techniques, helping 
                    students discover their unique path to balance and inner peace.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Certifications</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 200hr RYT Certified</li>
                    <li>• Meditation Teacher</li>
                    <li>• Wellness Coach</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Specialties</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Vinyasa Flow</li>
                    <li>• Restorative Yoga</li>
                    <li>• Mindfulness</li>
                  </ul>
                </div>
              </div>
              
              <Button 
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                onClick={() => window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank')}
              >
                Book a Session
              </Button>
            </div>
            
            {/* Video Section */}
            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-sage-100 to-cream-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/abc123XYZ"
                  title="Meet Your Yoga Instructor"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground">
                  Watch my personal journey and teaching philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
