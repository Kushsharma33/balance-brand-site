
import { useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/732fd980-5da7-40c1-8fa0-8582473bb192.png" 
              alt="VEDYO Logo" 
              className="h-8 w-auto"
            />
            <div className="text-xl font-medium text-foreground">
              VEDYO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium">
            Book Class
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-border pt-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-full font-medium">
                Book Class
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
