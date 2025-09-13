import React from 'react';
import { TrendingUp, Heart, Star, Award, Users, Trophy, Sparkles } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const successStories = [
    {
      condition: 'Diabetes Reversal',
      patients: '50+',
      successRate: '95%',
      description: 'Patients achieved normal blood sugar levels',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      condition: 'Thyroid Recovery',
      patients: '90+',
      successRate: '92%',
      description: 'Normalized thyroid function naturally',
      icon: Heart,
      color: 'bg-purple-500'
    },
    {
      condition: 'PCOS Management',
      patients: '80+',
      successRate: '98%',
      description: 'Hormonal balance and symptom relief',
      icon: Star,
      color: 'bg-pink-500'
    },
    {
      condition: 'Digestive Health',
      patients: '70+',
      successRate: '96%',
      description: 'Complete gut health restoration',
      icon: Award,
      color: 'bg-green-500'
    },
    {
      condition: 'Autoimmune Conditions',
      patients: '30+',
      successRate: '85%',
      description: 'Significant symptom improvement',
      icon: Trophy,
      color: 'bg-orange-500'
    },
    {
      condition: 'Chronic Fatigue',
      patients: '40+',
      successRate: '90%',
      description: 'Energy levels fully restored',
      icon: TrendingUp,
      color: 'bg-teal-500'
    }
  ];

  const resultsDifferent = [
    {
      title: 'Medication-Free Recovery',
      description: '70% of patients reduced or eliminated medications',
      icon: Heart,
      color: 'bg-green-100'
    },
    {
      title: 'Sustainable Results',
      description: '95% maintain improvements after 2+ years',
      icon: TrendingUp,
      color: 'bg-green-100'
    },
    {
      title: 'Quality of Life',
      description: '98% report significant life quality improvement',
      icon: Star,
      color: 'bg-green-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl xl:max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">Proven Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real patients - see how functional medicine transforms lives
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="text-center space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${story.color} text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                  <story.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-green-800">{story.condition}</h3>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">{story.patients}</div>
                    <div className="text-sm text-gray-500">Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700">{story.successRate}</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{story.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What Makes Our Results Different */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">
              What Makes Our Results Different
            </h3>
            <p className="text-lg text-gray-600">
              Long-term, sustainable health improvements that last
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resultsDifferent.map((result, index) => (
              <div key={index} className="text-center space-y-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${result.color} rounded-full mb-4`}>
                  <result.icon size={32} className="text-green-700" />
                </div>
                <h4 className="text-xl font-bold text-green-800">{result.title}</h4>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-700 to-emerald-700 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-green-100 mb-6 text-lg">
              Join hundreds of patients who have transformed their health through our integrative medicine approach
            </p>
            <a
              href="https://wa.me/918123908621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-green-700 px-8 py-3 rounded-full hover:bg-green-50 transition-all duration-200 font-semibold hover:scale-105"
            >
              <span>Start Your Healing Journey</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;