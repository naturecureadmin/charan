import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'md' }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Full Screen Modal */}
      <div className="fixed inset-0 bg-white overflow-y-auto">
        {/* Header with Logo */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col items-center space-y-4 flex-1">
              <img 
                src="/DAKSHA__1_-removebg-preview copy copy.png" 
                alt="Daksha Logo" 
                className="h-12 w-auto"
              />
              <h2 className="text-2xl font-bold text-green-800 text-center">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 absolute top-6 right-6"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;