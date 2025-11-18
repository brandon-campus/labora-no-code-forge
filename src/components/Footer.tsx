import React, { useState } from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from '@/components/ui/sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor ingresa tu email');
      return;
    }

    setIsSubmitting(true);

    try {
      // Guardar en Supabase (asumiendo que existe una tabla 'newsletter' o 'suscripciones')
      const { error } = await supabase.from('newsletter').insert({
        email: email,
        created_at: new Date().toISOString()
      });

      if (error) {
        // Si la tabla no existe o hay error, intentar con otra tabla común
        console.error('Error al suscribirse:', error);
        toast.error('Hubo un error. Intenta de nuevo más tarde.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setEmail('');
      toast.success('¡Te has suscrito exitosamente!');
      
      // Resetear después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error inesperado:', error);
      toast.error('Hubo un error inesperado. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-200 pt-16 pb-8 border-t border-labora-neon/10">
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
              <a 
                href="https://instagram.com/labora.ar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-labora-neon hover:text-white transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/brandon-candia-edtech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-labora-neon hover:text-white transition-colors"
                aria-label="Síguenos en LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5491138142899?text=Hola%20Labora%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-labora-neon hover:text-white transition-colors"
                aria-label="Contáctanos por WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-labora-neon transition-colors">Inicio</a></li>
              <li><a href="/bootcamp" className="text-gray-400 hover:text-labora-neon transition-colors">Bootcamp</a></li>
              <li><a href="/campus" className="text-gray-400 hover:text-labora-neon transition-colors">Campus</a></li>
              <li><a href="/hackatones" className="text-gray-400 hover:text-labora-neon transition-colors">Hackatones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Herramientas</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Lovable</span></li>
              <li><span className="text-gray-400">Cursor AI</span></li>
              <li><span className="text-gray-400">Supabase</span></li>
              <li><span className="text-gray-400">n8n</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="text-gray-400 not-italic">
              <p>Ciudad Autónoma de Buenos Aires</p>
              <p className="mt-2">
                <a href="mailto:info@labora.tech" className="hover:text-labora-neon transition-colors">
                  info@labora.tech
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+5491138142899" className="hover:text-labora-neon transition-colors">
                  +54 9 11 3814-2899
                </a>
              </p>
            </address>
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-2 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-labora-neon/10">
              <label htmlFor="newsletter" className="text-gray-200 text-sm">
                Suscríbete a nuestro newsletter
              </label>
              {isSubmitted ? (
                <div className="text-labora-neon text-sm font-semibold">
                  ¡Gracias por suscribirte! 🎉
                </div>
              ) : (
                <div className="flex">
                  <input
                    type="email"
                    id="newsletter"
                    placeholder="Tu email"
                    className="rounded-l-md px-3 py-2 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-labora-neon"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-labora-neon text-gray-900 px-4 py-2 rounded-r-md hover:bg-labora-neon/80 transition-colors font-semibold shadow-neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '...' : 'Suscribirme'}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Labora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;