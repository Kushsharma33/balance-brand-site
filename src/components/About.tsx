
const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=800"
                  alt="Yoga Instructor"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-sage-200 rounded-3xl -z-10"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="text-coral-400 text-sm uppercase tracking-wider">About Me</div>
              <h2 className="text-4xl md:text-5xl font-light text-sage-800 leading-tight">
                Hi, I'm Sarah
                <span className="block text-coral-400">Your Wellness Guide</span>
              </h2>
              
              {/* Video Introduction Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-sage-100">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎥</span>
                  <h3 className="text-xl font-light text-sage-800">Meet Your Instructor</h3>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-md mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Meet Ankit Sharma - Your Yoga Instructor"
                    className="w-full h-48 md:h-56"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                <p className="text-sage-600 text-sm italic text-center mb-4">
                  "Namaste, I'm Ankit Sharma, a certified yoga teacher with 5+ years experience. 
                  I help people like you find balance and strength through mindful yoga practices..."
                </p>
                
                <div className="text-center">
                  <button 
                    className="bg-coral-400 hover:bg-coral-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md"
                    onClick={() => window.open('https://forms.gle/YOUR_GOOGLE_FORM_LINK', '_blank')}
                  >
                    Book a Session
                  </button>
                </div>
              </div>
              
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

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="font-medium text-sage-800 mb-2">Certifications</h4>
                  <ul className="text-sage-600 space-y-1">
                    <li>• 200hr RYT Certified</li>
                    <li>• Meditation Teacher</li>
                    <li>• Wellness Coach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sage-800 mb-2">Specialties</h4>
                  <ul className="text-sage-600 space-y-1">
                    <li>• Vinyasa Flow</li>
                    <li>• Restorative Yoga</li>
                    <li>• Mindfulness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
