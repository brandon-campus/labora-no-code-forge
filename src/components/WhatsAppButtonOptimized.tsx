import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButtonOptimized = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 10 segundos para no distraer inmediatamente
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa el bootcamp de AI Builder. ¿Podrían darme más información?");
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button - Minimalista */}
      <div className="fixed bottom-4 right-4 z-50">
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Chatear por WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        ) : (
          <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 p-4 max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-semibold text-sm">¿Necesitas ayuda?</h4>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <p className="text-gray-300 text-xs mb-3 leading-relaxed">
              Chatea con nosotros y te responderemos en minutos.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Chatear por WhatsApp
            </button>
          </div>
        )}
      </div>

      {/* Overlay para cerrar al hacer clic fuera */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-40"
          onClick={handleClose}
        />
      )}
    </>
  );
};

export default WhatsAppButtonOptimized; 