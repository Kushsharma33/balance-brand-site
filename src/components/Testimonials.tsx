
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
    <section className="py-24 px-6 wellness-gradient">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground leading-tight">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Real stories from our wellness community
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {videoTestimonials.map((testimonial, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-video bg-card rounded-3xl overflow-hidden gentle-shadow group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-background/95 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <div className="w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                <p className="text-muted-foreground text-sm font-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-card rounded-3xl soft-shadow p-12 md:p-16 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl text-accent">★</span>
              ))}
            </div>
          </div>
          
          <blockquote className="text-2xl md:text-3xl text-card-foreground font-serif font-light leading-relaxed mb-10 italic">
            "Sarah's classes have transformed not just my flexibility, but my entire approach to stress management. The mindfulness techniques I've learned carry into every aspect of my life."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
              alt="Emma Chen"
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
            <div className="text-left">
              <div className="font-medium text-card-foreground text-lg">Emma Chen</div>
              <div className="text-muted-foreground font-light">Marketing Manager</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
