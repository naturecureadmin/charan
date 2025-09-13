import { useState, useCallback } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  const openModal = useCallback((content?: any) => {
    setModalContent(content);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'auto';
  }, []);

  return {
    isOpen,
    modalContent,
    openModal,
    closeModal
  };
};