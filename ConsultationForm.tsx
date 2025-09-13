import React, { useState } from 'react';
import { MessageCircle, Send, User, Phone, FileText } from 'lucide-react';
import type { ConsultationForm as ConsultationFormType } from '../types';

interface ConsultationFormProps {
  onSubmit: (data: ConsultationFormType) => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ConsultationFormType>({
    name: '',
    gender: '',
    mobile: '',
    healthConcern: ''
  });

  const [errors, setErrors] = useState<Partial<ConsultationFormType>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ConsultationFormType]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ConsultationFormType> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      newErrors.mobile = 'Please enter a valid Indian mobile number';
    }

    if (!formData.healthConcern.trim()) {
      newErrors.healthConcern = 'Please describe your health concern';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-700 rounded-full mb-4">
          <MessageCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Book Your Consultation</h3>
        <p className="text-gray-600">
          Take the first step towards better health. Dr. Nanjeshgowda will personally review your case.
        </p>
      </div>

      {/* Consultation Fee */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 text-center">
        <h4 className="text-lg font-semibold text-green-800 mb-2">Consultation Fee: ₹500</h4>
        <p className="text-green-700 text-sm">
          Comprehensive health assessment and personalized treatment plan
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
            <User size={16} className="mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Gender Field */}
        <div>
          <label className="block text-sm font-semibold text-green-800 mb-2">
            Gender *
          </label>
          <div className="flex space-x-6">
            {['male', 'female', 'other'].map((gender) => (
              <label key={gender} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700 capitalize">{gender}</span>
              </label>
            ))}
          </div>
          {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
        </div>

        {/* Mobile Field */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
            <Phone size={16} className="mr-2" />
            Mobile Number *
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 ${
              errors.mobile ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
        </div>

        {/* Health Concern Field */}
        <div>
          <label htmlFor="healthConcern" className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
            <FileText size={16} className="mr-2" />
            Health Concern *
          </label>
          <textarea
            id="healthConcern"
            name="healthConcern"
            rows={4}
            value={formData.healthConcern}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200 resize-vertical ${
              errors.healthConcern ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please describe your health concern in detail..."
          />
          {errors.healthConcern && <p className="mt-1 text-sm text-red-600">{errors.healthConcern}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-4 px-6 rounded-xl hover:bg-green-800 transition-all duration-200 font-semibold flex items-center justify-center space-x-3 hover:scale-105"
        >
          <MessageCircle size={20} />
          <span>Send via WhatsApp</span>
          <Send size={16} />
        </button>

        {/* Benefits */}
        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
          <h4 className="font-semibold text-green-800 mb-3">What to Expect:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span>Comprehensive consultation (30-45 minutes)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span>Personalized health assessment</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span>Treatment recommendations</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span>Response within 24 hours</span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to be contacted via WhatsApp for consultation scheduling. 
          Your information is kept confidential and secure.
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;