
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/732fd980-5da7-40c1-8fa0-8582473bb192.png" 
                alt="VEDYO Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div className="text-3xl font-serif font-medium">VEDYO</div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-md font-light text-lg">
              Your sanctuary for mindful movement, inner peace, and holistic wellness. 
              Join our community and discover the transformative power of yoga.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <span className="text-sm font-medium">f</span>
              </a>
              <a href="#" className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <span className="text-sm font-medium">ig</span>
              </a>
              <a href="#" className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <span className="text-sm font-medium">yt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-medium mb-6 text-xl">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light">About</a>
              <a href="#classes" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light">Classes</a>
              <a href="#schedule" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light">Schedule</a>
              <a href="#pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-light">Pricing</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-medium mb-6 text-xl">Get in Touch</h4>
            <div className="space-y-3 text-primary-foreground/80 font-light">
              <p>📧 hello@vedyo.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Wellness Way<br />Peaceful City, PC 12345</p>
            </div>
          </div>
        </div>

        {/* Studio Hours */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-serif font-medium mb-6 text-xl">Studio Hours</h4>
              <div className="space-y-3 text-primary-foreground/80 font-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif font-medium mb-6 text-xl">Newsletter</h4>
              <p className="text-primary-foreground/80 mb-6 font-light">Stay updated with classes, workshops, and wellness tips</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-6 py-3 rounded-l-full bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:bg-primary-foreground/30 font-light"
                />
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-r-full transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 font-light">
          <p>&copy; {currentYear} VEDYO Yoga Studio. All rights reserved.</p>
          <p className="mt-2">Designed with 💚 for wellness and peace</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
