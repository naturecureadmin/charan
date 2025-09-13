import React from 'react';
import { Award, Target, Users, Heart, Shield, Clock, Sparkles, Star, CheckCircle } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Credentials",
      description: "BNYS, MD, FCRSW, FAMS qualified practitioner with specialized training",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Root Cause Focus",
      description: "We identify and treat underlying causes, not just symptoms",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Proven Results",
      description: "400+ patients treated with 98% success rate in health improvement",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique health profile",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Safe & Natural",
      description: "Evidence-based natural therapies with minimal side effects",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Comprehensive Support",
      description: "Ongoing monitoring and support throughout your healing journey",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "400+", label: "Patients Healed", icon: Users },
    { number: "98%", label: "Success Rate", icon: Star },
    { number: "4+", label: "Years Experience", icon: Award },
    { number: "15+", label: "Conditions Treated", icon: CheckCircle }
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-600 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl xl:max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 px-4">
            Why Choose Daksha Integrative Health?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience the difference of truly personalized, evidence-based integrative medicine
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} text-white rounded-3xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4 group-hover:text-green-700 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Our Track Record Speaks
              </h3>
              <p className="text-green-100 text-base md:text-lg">
                Trusted by hundreds of patients across Mysore for transformative health outcomes
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-green-100 text-xs md:text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;