
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ whatsappText = "¡Hola Labora! Quiero obtener más información sobre el bootcamp de IA y No Code" }: { whatsappText?: string }) => {
  return (
    <a 
      href={`https://wa.me/5491138142899?text=${encodeURIComponent(whatsappText)}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-[#128C7E] transition-colors duration-300 ease-in-out"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
