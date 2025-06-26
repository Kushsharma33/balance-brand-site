
const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-coral-400 text-sm uppercase tracking-wider mb-4">About Me</div>
            <h2 className="text-4xl md:text-5xl font-light text-sage-800 leading-tight mb-8">
              Hi, I'm Sarah
              <span className="block text-coral-400">Your Wellness Guide</span>
            </h2>
          </div>

          {/* Video Introduction Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-light text-sage-800 flex items-center justify-center gap-2">
                <span className="text-2xl">🎥</span>
                Meet Your Instructor
              </h3>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 max-w-3xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/abc123XYZ"
                title="Meet Your Yoga Instructor"
                className="w-full h-64 md:h-80 lg:h-96"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="text-center">
              <button 
                className="bg-coral-400 hover:bg-coral-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md inline-flex items-center gap-2"
                onClick={() => window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank')}
              >
                <span>👉</span>
                Book a Session
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-4 text-sage-600 text-lg leading-relaxed">
              <p>
                For over 5 years, I've been passionate about helping people discover the 
                transformative power of yoga and mindful movement. My journey began during 
                a challenging period in my life when I found solace and strength on the mat.
              </p>
              <p>
                I believe that wellness isn't just about physical fitness—it's about creating 
                harmony between mind, body, and spirit. Through my classes, I guide students 
                to find their own unique path to balance and inner peace.
              </p>
              <p>
                Certified in Hatha, Vinyasa, and Restorative Yoga, I bring a holistic approach 
                to every session, combining ancient wisdom with modern wellness practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="bg-sage-50 rounded-2xl p-6">
                <h4 className="font-medium text-sage-800 mb-3 text-center">Certifications</h4>
                <ul className="text-sage-600 space-y-2 text-center">
                  <li>• 200hr RYT Certified</li>
                  <li>• Meditation Teacher</li>
                  <li>• Wellness Coach</li>
                </ul>
              </div>
              <div className="bg-sage-50 rounded-2xl p-6">
                <h4 className="font-medium text-sage-800 mb-3 text-center">Specialties</h4>
                <ul className="text-sage-600 space-y-2 text-center">
                  <li>• Vinyasa Flow</li>
                  <li>• Restorative Yoga</li>
                  <li>• Mindfulness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
