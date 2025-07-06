import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-950 text-gray-200 pt-16 pb-8 border-t border-labora-neon/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-labora-neon">Labora</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Semillero de proyectos tecnológicos en Latinoamérica
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-labora-neon hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-labora-neon hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/labora.ar/" target="_blank" rel="noopener noreferrer" className="text-labora-neon hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/brandon-candia-edtech/" target="_blank" rel="noopener noreferrer" className="text-labora-neon hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-labora-neon transition-colors">Inicio</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-labora-neon transition-colors">Beneficios</a></li>
              <li><a href="#proceso" className="text-gray-400 hover:text-labora-neon transition-colors">Proceso</a></li>
              <li><a href="#testimonios" className="text-gray-400 hover:text-labora-neon transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-labora-neon transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Herramientas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-labora-neon transition-colors">Lovable</a></li>
              <li><a href="#" className="text-gray-400 hover:text-labora-neon transition-colors">Cursor AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-labora-neon transition-colors">Supabase</a></li>
              <li><a href="#" className="text-gray-400 hover:text-labora-neon transition-colors">n8n</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="text-gray-400 not-italic">
              <p>Ciudad Autónoma de Buenos Aires</p>
              <p className="mt-2"><a href="mailto:info@labora.tech" className="hover:text-labora-neon transition-colors">info@labora.tech</a></p>
              <p className="mt-2"><a href="tel:+525512345678" className="hover:text-labora-neon transition-colors">+52 55 1234 5678</a></p>
            </address>
            <form className="mt-6 flex flex-col gap-2 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-labora-neon/10">
              <label htmlFor="newsletter" className="text-gray-200 text-sm">Suscríbete a nuestro newsletter</label>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Tu email"
                  className="rounded-l-md px-3 py-2 w-full text-gray-900 focus:outline-none"
                  required
                />
                <button type="submit" className="bg-labora-neon text-gray-900 px-4 py-2 rounded-r-md hover:bg-labora-neon/80 transition-colors font-semibold shadow-neon-glow">Suscribirme</button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Labora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;