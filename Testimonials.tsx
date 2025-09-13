import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Patient images mapping
  const patientImages = {
    'Padmapriya Belthangadi': '/1000233604.jpg',
    'Samskruthi Jain': '/1000233556 copy.jpg',
    'Chaya Sunil': '/1000233505 copy.jpg',
    'Sunil Kumar': '/1000233498.jpg',
    'Nikhil Jain C S': '/1000233495.jpg'
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];
  const currentPatientImage = patientImages[currentTestimonial.name as keyof typeof patientImages];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Patient Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of healing and transformation from our patients
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-green-700 text-white p-4 rounded-full">
                <Quote size={24} />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="pt-8 space-y-8">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic text-center">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center justify-center space-y-4">
                {currentPatientImage ? (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={currentPatientImage}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {currentTestimonial.initials}
                  </div>
                )}
                <div className="text-center">
                  <h4 className="font-semibold text-green-800 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-500">{currentTestimonial.condition}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-green-50 transition-colors duration-200"
            >
              <ChevronLeft size={24} className="text-green-700" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-green-50 transition-colors duration-200"
            >
              <ChevronRight size={24} className="text-green-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-green-700 w-8' 
                    : 'bg-gray-300 hover:bg-green-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-green-50 px-8 py-4 rounded-full border border-green-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <img src="/1000233604.jpg" alt="Patient" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <img src="/1000233556 copy.jpg" alt="Patient" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <img src="/1000233505 copy.jpg" alt="Patient" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <img src="/1000233498.jpg" alt="Patient" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                <img src="/1000233495.jpg" alt="Patient" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-green-800">
              <span className="font-semibold">Join 400+</span> satisfied patients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;