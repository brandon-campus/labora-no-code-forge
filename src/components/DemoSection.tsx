
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
            Mira lo que <span className="text-labora-red">podrás crear</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nuestros estudiantes desarrollan aplicaciones y plataformas reales utilizando herramientas de IA y No-Code.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl animate-fade-in-up">
          <div className="aspect-video relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
              alt="Demo de proyecto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
              <div className="w-20 h-20 bg-labora-red/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-white fill-white" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6">
            <h3 className="text-xl font-semibold mb-2 text-labora-dark">Plataforma de gestión de proyectos</h3>
            <p className="text-gray-600 mb-4">Aplicación web creada por estudiantes usando Lovable y Supabase, sin escribir código.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-labora-neon text-labora-dark rounded-full text-sm">Lovable</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Supabase</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">No-Code</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">IA</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#contacto">
            <Button className="bg-labora-red hover:bg-labora-red/90 px-8 py-6 text-base">
              ¡Quiero crear mi aplicación!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
