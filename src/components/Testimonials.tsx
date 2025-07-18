
const Testimonials = () => {
  const videoTestimonials = [
    {
      name: 'Emma Chen',
      role: 'Marketing Manager',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Developer',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      role: 'New Mom',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 px-6 bg-sage-50/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-sage-800">
            What Our Students Say
          </h2>
          <p className="text-xl text-sage-600">
            Real stories from our wellness community
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-sage-100 to-cream-100 rounded-2xl overflow-hidden">
                <img 
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-8 border-l-sage-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <h4 className="font-medium text-sage-800">{testimonial.name}</h4>
                <p className="text-sage-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-peach-400">★</span>
              ))}
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-sage-700 font-light leading-relaxed mb-8">
            "Sarah's classes have transformed not just my flexibility, but my entire approach to stress management. The mindfulness techniques I've learned carry into every aspect of my life."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
              alt="Emma Chen"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-medium text-sage-800">Emma Chen</div>
              <div className="text-sage-500">Marketing Manager</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
