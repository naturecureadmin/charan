import React from 'react';
import { UserCheck, Award, Clock, Users, Star, Shield, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '400+', label: 'Patients Treated' },
    { icon: Award, number: '98%', label: 'Success Rate' },
    { icon: Clock, number: '4+', label: 'Years Experience' }
  ];

  const credentials = [
    { icon: Award, text: 'BNYS - Bachelor of Naturopathy & Yogic Sciences' },
    { icon: Star, text: 'MD - Doctor of Medicine' },
    { icon: Shield, text: 'FCRSW - Fellowship in Clinical Research' },
    { icon: Award, text: 'FAMS - Fellowship in Advanced Medical Statistics' },
    { icon: Shield, text: 'Certified Ozone Therapy Practitioner' }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl xl:max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Meet Our Healer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-6 md:mb-8">Dr. Nanjeshgowda H L</h2>
          
          {/* Doctor Image - Updated with new image */}
          <div className="relative inline-block mb-6 md:mb-8">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl mx-auto relative border-4 md:border-8 border-green-100">
              <img 
                src="/Dr. Nanjeshgowda_HL copy.jpg" 
                alt="Dr. Nanjeshgowda H L" 
                className="w-full h-full object-cover"
              />
              
              {/* Enhanced Animated rings */}
              <div className="absolute inset-0 border-2 md:border-4 border-white/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 md:inset-8 border-1 md:border-2 border-white/40 rounded-full animate-ping"></div>
              <div className="absolute inset-8 md:inset-12 border-1 border-green-300/50 rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse flex items-center justify-center shadow-lg">
              <Award size={20} className="md:w-6 md:h-6 text-white" />
            </div>
            <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-bounce flex items-center justify-center shadow-lg">
              <Star size={24} className="md:w-8 md:h-8 text-white" />
            </div>
            <div className="absolute top-1/4 -left-4 md:-left-6 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-green-300 to-green-400 rounded-full animate-pulse delay-2000 shadow-md"></div>
            <div className="absolute bottom-1/4 -right-4 md:-right-6 w-6 h-6 md:w-10 md:h-10 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full animate-pulse delay-3000 shadow-md"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            BNYS, MD, FCRSW, FAMS - Functional Medicine Expert
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Description */}
          <div className="text-center">
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              With specialized training in integrative medicine and functional healthcare, Dr. Nanjeshgowda H L is a pioneering practitioner who combines evidence-based modern medical science with time-tested natural healing methods. His patient-centered approach has transformed hundreds of lives, making him one of Mysore's most trusted functional medicine experts.
            </p>
          </div>

          {/* Enhanced Credentials */}
          <div className="space-y-4">
            <h3 className="font-semibold text-green-800 text-lg text-center">Professional Qualifications</h3>
            <div className="grid gap-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 md:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-200 border border-green-100 hover:border-green-200 hover:shadow-md">
                  <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <credential.icon size={16} />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base font-medium">{credential.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-200 hover:scale-105 transform border border-green-100 hover:border-green-200 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-700 to-emerald-700 text-white rounded-full mb-3 md:mb-4 shadow-lg">
                  <stat.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-green-800">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Specialization */}
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-6 md:p-8 rounded-2xl border border-green-200 shadow-lg">
            <h3 className="font-semibold text-green-800 mb-4 flex items-center justify-center text-lg">
              <Shield size={20} className="mr-3" />
              Areas of Expertise
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
              Functional Medicine, Integrative Healthcare, Disease Remission Protocols, Ozone Therapy, 
              Advanced Medical Acupuncture, and Personalized Nutrition Therapy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;