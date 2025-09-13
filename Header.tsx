import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onConsultationClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onConsultationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-green-100' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/DAKSHA__1_-removebg-preview copy copy.png" 
              alt="Daksha Logo" 
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-green-700 font-medium transition-all duration-200 relative group text-sm xl:text-base py-2 px-1"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-700 to-emerald-700 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Enhanced CTA Button - Desktop */}
          <button
            onClick={onConsultationClick}
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-green-700 to-emerald-700 text-white px-6 py-3 xl:px-8 xl:py-3 rounded-full hover:from-green-800 hover:to-emerald-800 transition-all duration-200 hover:shadow-lg hover:scale-105 font-semibold text-sm xl:text-base"
          >
            <span>Book Consultation</span>
          </button>

          {/* Enhanced Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-green-700 hover:bg-green-50 rounded-xl transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200 text-left py-3 px-4 hover:bg-green-50 rounded-xl text-base"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onConsultationClick();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-green-700 to-emerald-700 text-white px-6 py-3 rounded-xl hover:from-green-800 hover:to-emerald-800 transition-all duration-200 text-center mt-4 font-semibold mx-4"
              >
                Book Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;