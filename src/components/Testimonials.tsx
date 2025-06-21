
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Emma Chen',
      role: 'Marketing Manager',
      content: "Sarah's classes have transformed not just my flexibility, but my entire approach to stress management. The mindfulness techniques I've learned carry into every aspect of my life.",
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Software Developer',
      content: "As someone who sits all day, I was skeptical about yoga. But Sarah's approach made it accessible and genuinely healing for my back pain. I'm a convert!",
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150',
      rating: 5
    },
    {
      id: 3,
      name: 'Lisa Thompson',
      role: 'New Mom',
      content: "The prenatal and postnatal classes were a lifesaver. Sarah created such a supportive environment for new mothers. I felt strong and peaceful throughout my pregnancy.",
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=150&h=150',
      rating: 5
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Entrepreneur',
      content: "I've tried many studios, but the sense of community here is unmatched. Sarah doesn't just teach poses; she teaches a way of living with intention and balance.",
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-coral-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-coral-400 text-sm uppercase tracking-wider mb-4">Testimonials</div>
            <h2 className="text-4xl md:text-5xl font-light text-sage-800 mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-sage-600">
              Real stories from our yoga community
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-sage-700 font-light leading-relaxed mb-8">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-sage-200"
                />
                <div className="text-left">
                  <div className="font-medium text-sage-800">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sage-500">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-sage-400 scale-125' 
                      : 'bg-sage-200 hover:bg-sage-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-light text-sage-800 mb-2">500+</div>
              <div className="text-sage-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-sage-800 mb-2">5000+</div>
              <div className="text-sage-600">Classes Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-sage-800 mb-2">5 Years</div>
              <div className="text-sage-600">Of Teaching</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
