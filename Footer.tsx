import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Dr. Nanjeshgowda', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ];

  const services = [
    'Functional Medicine',
    'Ozone Therapy',
    'Medical Acupuncture',
    'Diet Consultation',
    'Disease Remission'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl xl:max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6 text-center">
            <div>
              <img 
                src="/DAKSHA__1_-removebg-preview copy copy.png" 
                alt="Daksha Logo" 
                className="h-10 md:h-12 w-auto mb-4 mx-auto filter brightness-0 invert"
              />
              <p className="text-green-100 leading-relaxed text-sm md:text-base">
                Mysore's premier integrative health clinic dedicated to your complete wellness journey through functional medicine.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3 text-sm md:text-base">Follow Us</h4>
              <div className="flex space-x-3 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 md:w-10 md:h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <social.icon size={16} className="md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
            <nav className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-green-100 hover:text-white transition-colors duration-200 hover:translate-x-1 text-sm md:text-base w-full mx-auto"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Our Services</h3>
            <nav className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="block text-green-100 hover:text-white transition-colors duration-200 hover:translate-x-1 text-sm md:text-base w-full mx-auto"
                >
                  {service}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Info</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3 justify-center">
                <MapPin size={18} className="md:w-5 md:h-5 text-green-300 mt-1 flex-shrink-0" />
                <p className="text-green-100 text-sm md:text-base">Mysore, Karnataka, India</p>
              </div>
              
              <div className="flex items-center space-x-3 justify-center">
                <Phone size={18} className="md:w-5 md:h-5 text-green-300 flex-shrink-0" />
                <a href="tel:+918123908621" className="text-green-100 hover:text-white transition-colors text-sm md:text-base">
                  +91 8123908621
                </a>
              </div>
              
              <div className="flex items-center space-x-3 justify-center">
                <Mail size={18} className="md:w-5 md:h-5 text-green-300 flex-shrink-0" />
                <a href="mailto:dakshaintegrative@gmail.com" className="text-green-100 hover:text-white transition-colors text-sm md:text-base">
                  dakshaintegrative@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-4 md:mt-6">
              <a
                href="https://wa.me/918123908621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-200 hover:scale-105 justify-center font-semibold text-sm md:text-base"
              >
                <MessageCircle size={18} className="md:w-5 md:h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-center md:text-left text-sm md:text-base">
              © {currentYear} Daksha Integrative Health. All rights reserved.
            </p>
            <p className="text-green-200 text-center md:text-right text-sm md:text-base">
              Mysore's Leading Integrative Medicine Clinic
            </p>
          </div>

          {/* Additional Footer Section */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-green-700/50 text-center space-y-3 md:space-y-4">
            <p className="text-green-200 text-xs md:text-sm">Crafted with wisdom by</p>
            <div className="flex justify-center">
              <img 
                src="/Doctor_NatureCure copy.png" 
                alt="Dr. NatureCure Logo" 
                className="h-10 w-auto opacity-80"
              />
            </div>
            <p className="text-green-300 text-xs md:text-sm font-medium">
              Designed with passion by Dr. Shashank M C
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;