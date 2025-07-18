
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path d="M24.5 20.5C23.8333 21.1667 22.5 22.5 20.5 22.5C18.5 22.5 16.5 21.5 14.5 19.5C12.5 17.5 11.5 15.5 11.5 13.5C11.5 11.5 12.8333 10.1667 13.5 9.5C14.1667 8.83333 15.5 8.5 16.5 8.5C17.5 8.5 18.8333 8.83333 19.5 9.5C20.1667 10.1667 21.5 11.5 21.5 13.5C21.5 15.5 20.5 17.5 18.5 19.5C16.5 21.5 14.5 22.5 12.5 22.5C10.5 22.5 9.16667 21.1667 8.5 20.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
