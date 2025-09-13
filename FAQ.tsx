import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { faqs } from '../data/content';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our integrative medicine services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-50 rounded-2xl border border-gray-200 hover:border-green-200 transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-green-50 rounded-2xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-green-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <ChevronUp size={24} className="text-green-700" />
                  ) : (
                    <ChevronDown size={24} className="text-green-700" />
                  )}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-green-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how integrative medicine can benefit your health journey.
            </p>
            <a
              href="https://wa.me/918123908621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-all duration-200 font-semibold hover:scale-105"
            >
              <span>Contact Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;