
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-earth-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Leaf className="text-white" size={20} />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-forest-600 transition-colors">EnableEarth</span>
              <div className="text-xs text-gray-500 font-medium">Clean Air • Climate Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-forest-500 transition-colors font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-forest-500 transition-colors font-medium relative group"
            >
              Our Solution
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-forest-500 transition-colors font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-forest-500 transition-colors font-medium relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#news" 
              className="text-gray-700 hover:text-forest-500 transition-colors font-medium relative group"
            >
              Impact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-forest-600 hover:bg-forest-50 font-medium"
            >
              Learn More
            </Button>
            <Button 
              className="bg-gradient-to-r from-forest-500 to-earth-500 hover:from-forest-600 hover:to-earth-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4 mt-6">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-forest-500 transition-colors font-medium py-2 px-4 rounded-xl hover:bg-forest-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-forest-500 transition-colors font-medium py-2 px-4 rounded-xl hover:bg-forest-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Solution
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-forest-500 transition-colors font-medium py-2 px-4 rounded-xl hover:bg-forest-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-forest-500 transition-colors font-medium py-2 px-4 rounded-xl hover:bg-forest-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#news" 
                className="text-gray-700 hover:text-forest-500 transition-colors font-medium py-2 px-4 rounded-xl hover:bg-forest-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </a>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-forest-600 hover:bg-forest-50 justify-start font-medium"
                >
                  Learn More
                </Button>
                <Button 
                  className="bg-gradient-to-r from-forest-500 to-earth-500 hover:from-forest-600 hover:to-earth-600 text-white justify-start font-semibold rounded-xl"
                >
                  Partner With Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
