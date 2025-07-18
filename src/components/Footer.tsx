
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/732fd980-5da7-40c1-8fa0-8582473bb192.png" 
                alt="VEDYO Logo" 
                className="h-8 w-auto"
              />
              <div className="text-3xl font-bold">VEDYO</div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Your sanctuary for mindful movement, inner peace, and holistic wellness. 
              Join our community and discover the transformative power of yoga.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors">
                <span className="text-sm">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center hover:bg-background/30 transition-colors">
                <span className="text-sm">yt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-background/80 hover:text-background transition-colors">About</a>
              <a href="#classes" className="block text-background/80 hover:text-background transition-colors">Classes</a>
              <a href="#schedule" className="block text-background/80 hover:text-background transition-colors">Schedule</a>
              <a href="#pricing" className="block text-background/80 hover:text-background transition-colors">Pricing</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-background/80">
              <p>📧 hello@vedyo.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Wellness Way<br />Peaceful City, PC 12345</p>
            </div>
          </div>
        </div>

        {/* Studio Hours */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Studio Hours</h4>
              <div className="space-y-2 text-background/80">
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
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-background/80 mb-4">Stay updated with classes, workshops, and wellness tips</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-background/20 text-background placeholder-background/60 focus:outline-none focus:bg-background/30"
                />
                <button className="bg-secondary hover:bg-secondary/90 px-6 py-2 rounded-r-full transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} VEDYO Yoga Studio. All rights reserved.</p>
          <p className="mt-2">Designed with 💚 for wellness and peace</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
