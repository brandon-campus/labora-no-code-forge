
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Calendar, MessageSquare, Rocket, Users } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-gradient-to-br from-labora-purple/10 to-labora-blue/10 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Únete al <span className="gradient-text">bootcamp</span> y crea tu proyecto
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Completa el formulario y nos pondremos en contacto contigo para darte toda la información sobre nuestro programa.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-labora-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Duración</h3>
                  <p className="text-gray-600">Programa intensivo de 12 semanas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-labora-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Metodología</h3>
                  <p className="text-gray-600">Aprendizaje basado en un proyecto real</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-labora-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Acompañamiento</h3>
                  <p className="text-gray-600">Entrenadores especializados en IA y No-Code</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-5 w-5 text-labora-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Resultado</h3>
                  <p className="text-gray-600">Tu producto terminado y listo para lanzar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Inscríbete ahora</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Tu apellido" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+1 234 567 890" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="projectIdea">Cuéntanos sobre tu idea o proyecto (opcional)</Label>
                <Textarea id="projectIdea" placeholder="Describe brevemente tu idea..." className="h-24" />
              </div>
              
              <Button className="w-full bg-labora-purple hover:bg-labora-purple/90 px-8 py-6 text-base">
                Reservar mi lugar
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                También puedes contactarnos directamente a <a href="mailto:info@labora.tech" className="text-labora-purple hover:underline">info@labora.tech</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
