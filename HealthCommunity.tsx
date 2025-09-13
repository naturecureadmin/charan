import React from 'react';
import { MessageCircle, Users, Bell, Sparkles } from 'lucide-react';

const HealthCommunity: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 max-w-4xl xl:max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Health Community</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">Join Our Health Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get daily wellness tips and exclusive health insights directly on WhatsApp
          </p>
        </div>

        {/* Main Community Card - Reduced height and removed Daily Tips section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-6 md:p-8 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-white/5 rounded-full blur-lg"></div>

            <div className="relative z-10 space-y-6">
              {/* WhatsApp Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <MessageCircle size={28} />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Daksha Health Tips</h3>
                <p className="text-green-100 text-lg mb-2">WhatsApp Channel</p>
              </div>

              {/* Stats */}
              <div className="flex justify-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Users size={18} />
                  <span className="font-semibold text-sm">1000+ Subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bell size={18} />
                  <span className="font-semibold text-sm">Daily Updates</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://whatsapp.com/channel/0029Va92lrr2ZjCwE4qPR51p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-green-700 px-6 py-3 rounded-full hover:bg-green-50 transition-all duration-200 font-semibold hover:scale-105 shadow-lg"
              >
                <MessageCircle size={18} />
                <span>Join WhatsApp Channel</span>
              </a>

              <p className="text-green-100 text-xs mt-3">
                Free to join • No spam • Expert content only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCommunity;