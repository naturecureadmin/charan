import React from 'react';
import { Dna, Wind, Target, Apple, Activity, Sparkles } from 'lucide-react';
import { services } from '../data/content';

interface ServicesProps {
  onServiceClick: (service: any) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const iconMap = {
    dna: Dna,
    wind: Wind,
    target: Target,
    apple: Apple,
    activity: Activity
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 max-w-4xl xl:max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive integrative healthcare solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer border border-gray-100 hover:border-green-200 relative overflow-hidden"
                onClick={() => onServiceClick(service)}
              >
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-700 rounded-3xl group-hover:bg-green-700 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-lg">
                    {IconComponent && <IconComponent size={32} />}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-green-800 group-hover:text-green-700 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-green-700 text-white py-4 px-6 rounded-full hover:bg-green-800 transition-all duration-200 font-semibold group-hover:scale-105">
                    Learn More
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Expanding Our Offerings */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Coming Soon</span>
          </div>
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Expanding Our Offerings
          </h3>
          <p className="text-xl text-gray-600">
            More wellness solutions coming your way
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Wellness Products */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl text-center relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <i className="fas fa-shopping-bag text-4xl"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Wellness Products</h4>
              <p className="text-blue-100 mb-6">Premium supplements and health products</p>
              <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                Coming Soon
              </span>
            </div>
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transform rotate-12 scale-110 animate-pulse"></div>
          </div>

          {/* Health Education */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl text-center relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <i className="fas fa-graduation-cap text-4xl"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Health Education</h4>
              <p className="text-purple-100 mb-6">Courses on integrative medicine and wellness</p>
              <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                Coming Soon
              </span>
            </div>
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transform rotate-12 scale-110 animate-pulse"></div>
          </div>

          {/* Online Webinars */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-3xl text-center relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <i className="fas fa-video text-4xl"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Online Webinars</h4>
              <p className="text-orange-100 mb-6">Interactive health and wellness sessions</p>
              <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                Coming Soon
              </span>
            </div>
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl transform rotate-12 scale-110 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;