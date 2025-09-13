import React from 'react';
import { Search, Target, Zap, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

const TreatmentApproach: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Comprehensive Assessment',
      description: 'Detailed health history, advanced lab testing, and root cause analysis',
      features: ['Complete health evaluation', 'Advanced diagnostic testing', 'Lifestyle assessment']
    },
    {
      icon: Target,
      title: 'Personalized Protocol',
      description: 'Custom treatment plan designed specifically for your unique health profile',
      features: ['Individualized treatment', 'Targeted interventions', 'Holistic approach']
    },
    {
      icon: Zap,
      title: 'Active Treatment',
      description: 'Implementation of integrative therapies and lifestyle modifications',
      features: ['Natural therapies', 'Nutritional support', 'Lifestyle coaching']
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Optimization',
      description: 'Regular monitoring and protocol adjustments for optimal results',
      features: ['Progress tracking', 'Protocol refinement', 'Long-term support']
    }
  ];

  const principles = [
    'Treat the person, not just the disease',
    'Address root causes, not symptoms',
    'Use the least invasive interventions first',
    'Integrate the best of all healing traditions',
    'Focus on prevention and wellness',
    'Create a therapeutic partnership'
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-600 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl xl:max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 px-4">
            Our Treatment Approach
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A systematic, science-based approach to healing that addresses your unique health needs
          </p>
        </div>

        {/* Treatment Steps */}
        <div className="mb-16 md:mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-green-200 to-emerald-200 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                )}

                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative z-10 border border-gray-100 group">
                  {/* Icon and Step Number */}
                  <div className="text-center mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-700 to-emerald-700 text-white rounded-3xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <step.icon size={28} className="md:w-8 md:h-8" />
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3 md:mb-4">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3 md:mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-center text-sm md:text-base">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
                        <CheckCircle size={14} className="md:w-4 md:h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-50 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4">
                Our Core Principles
              </h3>
              <p className="text-base md:text-lg text-gray-600">
                The fundamental beliefs that guide every aspect of our care
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-200 border border-green-100 hover:border-green-200 hover:shadow-md group"
                >
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-green-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;