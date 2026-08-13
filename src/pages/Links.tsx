import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Globe, MessageCircle } from 'lucide-react';

const Links = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-labora-neon/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-labora-red/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md mx-auto flex flex-col items-center relative z-10 animate-fade-in-up">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-labora-neon shadow-[0_0_20px_rgba(205,255,100,0.3)] mb-6">
          <img 
            src="/DSC05880.jpg" 
            alt="Brandon Candia" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <h1 className="text-2xl font-black text-white mb-2 text-center">Brandon Candia</h1>
        <p className="text-gray-300 text-center mb-8 px-4 font-medium text-sm">
          AI Developer en Ditobanx and Founder of Labora Academy
        </p>

        {/* Links Container */}
        <div className="w-full flex flex-col gap-4 mb-10">
          <Link 
            to="/bootcamp-2" 
            className="group relative flex flex-col items-center justify-center p-5 bg-gradient-to-b from-gray-800 to-black backdrop-blur-md border-2 border-labora-neon rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(205,255,100,0.25)] hover:shadow-[0_0_30px_rgba(205,255,100,0.4)] hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-labora-neon/5 group-hover:bg-labora-neon/10 transition-colors duration-500"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-labora-neon/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-labora-neon/30 transition-all"></div>
            <span className="font-black text-xl text-white text-center relative z-10 flex items-center gap-2">
              🚀 Bootcamp de IA y No Code
            </span>
            <span className="text-black bg-labora-neon px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase relative z-10 mt-3 shadow-[0_0_10px_rgba(205,255,100,0.5)]">
              Próxima edición: 05 de Septiembre
            </span>
          </Link>

          <Link 
            to="/clase-gratuita-ia" 
            className="group relative flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl hover:border-labora-neon transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(205,255,100,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/0 via-labora-neon/5 to-labora-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <span className="font-bold text-lg text-white text-center relative z-10">
              Clase gratuita de IA y No Code
            </span>
          </Link>

          <a 
            href="https://wa.me/5491138142899?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20las%20asesor%C3%ADas%201:1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl hover:border-labora-neon transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(205,255,100,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/0 via-labora-neon/5 to-labora-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <span className="font-bold text-lg text-white text-center relative z-10">
              Asesorías 1:1
            </span>
          </a>

          <a 
            href="https://wa.me/5491138142899"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-4 bg-[#c1ff72] hover:bg-[#b0ff4a] rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(193,255,114,0.2)] hover:shadow-[0_0_30px_rgba(193,255,114,0.4)] overflow-hidden"
          >
            <MessageCircle className="w-5 h-5 text-black mr-2" />
            <span className="font-bold text-lg text-black text-center relative z-10">
              Hablar por WhatsApp
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-auto pt-8">
          <a 
            href="https://www.instagram.com/labora.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-900/60 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-labora-neon transition-all hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@labora.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-900/60 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-labora-neon transition-all hover:scale-110"
          >
            {/* TikTok Icon using SVG as lucide-react doesn't have it built-in natively always */}
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.65-2.22 2.15-5.36 3.01-8.31 2.38-2.9-.6-5.2-2.73-6.1-5.56-.91-2.85-.31-6.1 1.76-8.39 2.06-2.27 5.17-3.4 8.2-2.86v4.11c-1.46-.22-3.02.04-4.22.95-1.19.9-1.9 2.37-1.96 3.88-.06 1.49.52 2.98 1.54 4.09 1.05 1.13 2.63 1.7 4.19 1.57 1.54-.12 2.99-.95 3.86-2.2 1.01-1.45 1.25-3.32 1.22-5.07-.04-6.07-.03-12.14-.03-18.2z" />
            </svg>
          </a>
          <Link 
            to="/"
            className="w-12 h-12 rounded-full bg-gray-900/60 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-labora-neon transition-all hover:scale-110"
          >
            <Globe className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Links;
