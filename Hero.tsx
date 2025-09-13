import React from 'react';
import { Calendar, Heart, Star } from 'lucide-react';

interface HeroProps {
  onConsultationClick: () => void;
  onStoryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsultationClick, onStoryClick }) => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-emerald-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-400 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-teal-400 rounded-full blur-lg animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-emerald-300 rounded-full blur-xl animate-pulse delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center min-h-[calc(100vh-8rem)] flex flex-col justify-center">
          {/* Hero Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight px-2">
                Transform Your Health with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 relative">
                  Functional Medicine
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-lg -z-10"></div>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4 backdrop-blur-sm bg-white/50 rounded-2xl py-4 md:py-6 shadow-sm">
                Experience the power of integrative healthcare that addresses root causes, not just symptoms. 
                Discover personalized healing protocols that restore your body's natural balance.
              </p>
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <button
                onClick={onConsultationClick}
                className="group relative bg-gradient-to-r from-green-700 to-emerald-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full hover:from-green-800 hover:to-emerald-800 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-base md:text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar size={20} className="md:w-6 md:h-6 relative z-10" />
                <span className="relative z-10">Book Consultation</span>
              </button>
              <button
                onClick={onStoryClick}
                className="group relative border-2 border-green-700 text-green-700 bg-white/80 backdrop-blur-sm px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-base md:text-lg"
              >
                <Heart size={20} className="md:w-6 md:h-6" />
                <span>Our Story</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">400+ Patients Healed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">98% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Star size={16} className="text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">4+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;