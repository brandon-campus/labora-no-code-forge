
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5491178519054?text=%C2%A1Hola%20Labora!%20Quiero%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20bootcamp%20de%20IA%20y%20No%20Code" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-colors duration-300 ease-in-out"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
