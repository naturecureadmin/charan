import React, { useState } from 'react';
import { useModal } from './hooks/useModal';
import { services } from './data/content';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { ConsultationForm as ConsultationFormType } from './types';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import TreatmentApproach from './components/TreatmentApproach';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import HealthCommunity from './components/HealthCommunity';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ConsultationForm from './components/ConsultationForm';
import BackToTop from './components/BackToTop';

function App() {
  const consultationModal = useModal();
  const storyModal = useModal();
  const serviceModal = useModal();
  const [openServiceFAQ, setOpenServiceFAQ] = useState<string | null>(null);

  const handleConsultationSubmit = (data: ConsultationFormType) => {
    // Create WhatsApp message
    const message = `*New Consultation Request*%0A%0A*Name:* ${encodeURIComponent(data.name)}%0A*Gender:* ${encodeURIComponent(data.gender)}%0A*Mobile:* ${encodeURIComponent(data.mobile)}%0A*Health Concern:* ${encodeURIComponent(data.healthConcern)}%0A%0APlease contact me to schedule a consultation.`;
    
    const whatsappNumber = '918123908621';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    consultationModal.closeModal();
    
    // Show success message
    alert('Your consultation request has been sent via WhatsApp. We will contact you soon!');
  };

  const handleServiceClick = (service: any) => {
    serviceModal.openModal(service);
    setOpenServiceFAQ(null); // Reset FAQ state when opening new service
  };

  const openConsultationFromService = () => {
    serviceModal.closeModal();
    consultationModal.openModal();
  };

  const toggleServiceFAQ = (index: string) => {
    setOpenServiceFAQ(openServiceFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onConsultationClick={consultationModal.openModal} />

      {/* Hero Section */}
      <Hero 
        onConsultationClick={consultationModal.openModal}
        onStoryClick={storyModal.openModal}
      />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services onServiceClick={handleServiceClick} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Treatment Approach Section */}
      <TreatmentApproach />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Health Community Section */}
      <HealthCommunity />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Consultation Modal */}
      <Modal
        isOpen={consultationModal.isOpen}
        onClose={consultationModal.closeModal}
        title="Book Consultation"
        size="lg"
      >
        <ConsultationForm onSubmit={handleConsultationSubmit} />
      </Modal>

      {/* Our Story Modal */}
      <Modal
        isOpen={storyModal.isOpen}
        onClose={storyModal.closeModal}
        title="Our Story"
        size="lg"
      >
        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-700 rounded-full mb-4">
              <span className="text-2xl">🌿</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-green-800 mb-4">The Journey of Healing</h3>
          <p className="mb-6 text-gray-600 leading-relaxed">
            Daksha Integrative Health was born from a vision to bridge the gap between modern medical science and ancient healing wisdom. Founded by Dr. Nanjeshgowda H L, our clinic represents years of dedication to understanding the human body as a complete, interconnected system.
          </p>
          
          <h3 className="text-xl font-semibold text-green-800 mb-4">Our Philosophy</h3>
          <p className="mb-6 text-gray-600 leading-relaxed">
            We believe that true healing comes from addressing the root causes of illness, not just managing symptoms. Our integrative approach combines the precision of modern diagnostics with the holistic wisdom of traditional healing practices.
          </p>
          
          <h3 className="text-xl font-semibold text-green-800 mb-4">Our Mission</h3>
          <p className="mb-6 text-gray-600 leading-relaxed">
            To provide personalized, comprehensive healthcare that empowers individuals to achieve optimal health and vitality. We are committed to being Mysore's leading center for integrative medicine, setting new standards in holistic healthcare.
          </p>
          
          <h3 className="text-xl font-semibold text-green-800 mb-4">Why Choose Us?</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Evidence-based integrative treatments</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Personalized care plans for each patient</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>4+ years of specialized clinical experience</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Proven track record with 400+ patients</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Comprehensive approach to wellness</span>
            </li>
          </ul>
        </div>
      </Modal>

      {/* Service Detail Modal */}
      <Modal
        isOpen={serviceModal.isOpen}
        onClose={serviceModal.closeModal}
        title={serviceModal.modalContent?.details?.title || 'Service Details'}
        size="xl"
      >
        {serviceModal.modalContent && (
          <div className="space-y-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: serviceModal.modalContent.details.content }}
            />
            
            {/* Service FAQs */}
            {serviceModal.modalContent.details.faqs && (
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {serviceModal.modalContent.details.faqs.map((faq: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-xl border border-gray-200">
                      <button
                        onClick={() => toggleServiceFAQ(`${serviceModal.modalContent.id}-${index}`)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-green-50 rounded-xl transition-colors duration-200"
                      >
                        <h4 className="font-semibold text-green-800 pr-4">
                          {faq.question}
                        </h4>
                        <div className="flex-shrink-0">
                          {openServiceFAQ === `${serviceModal.modalContent.id}-${index}` ? (
                            <ChevronUp size={20} className="text-green-700" />
                          ) : (
                            <ChevronDown size={20} className="text-green-700" />
                          )}
                        </div>
                      </button>
                      
                      {openServiceFAQ === `${serviceModal.modalContent.id}-${index}` && (
                        <div className="px-6 pb-4">
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
              </div>
            )}
            
            <div className="flex justify-center pt-6 border-t">
              <button
                onClick={openConsultationFromService}
                className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-all duration-200 font-semibold hover:scale-105 flex items-center space-x-2"
              >
                <span>Book Consultation Now</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;