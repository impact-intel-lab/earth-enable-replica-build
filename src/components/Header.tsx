
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-forest-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EE</span>
            </div>
            <span className="text-xl font-bold text-gray-900">EnableEarth</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-forest-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-forest-500 transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-forest-500 transition-colors">Services</a>
            <a href="#products" className="text-gray-700 hover:text-forest-500 transition-colors">Products</a>
            <a href="#news" className="text-gray-700 hover:text-forest-500 transition-colors">News</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">Login</Button>
            <Button className="bg-forest-500 hover:bg-forest-600 text-white">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-700 hover:text-forest-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-forest-500 transition-colors">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-forest-500 transition-colors">Services</a>
              <a href="#products" className="text-gray-700 hover:text-forest-500 transition-colors">Products</a>
              <a href="#news" className="text-gray-700 hover:text-forest-500 transition-colors">News</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-700 justify-start">Login</Button>
                <Button className="bg-forest-500 hover:bg-forest-600 text-white justify-start">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
