import React, { useState } from 'react';
import { HelpCircle, Calendar, MessageSquare, Send, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const faqData = [
  {
    question: "¿Cómo puedo acceder a las grabaciones de las clases?",
    answer: "Las grabaciones están disponibles en cada módulo. Ve a la sección 'Módulos' y selecciona el módulo correspondiente para ver el video de la clase."
  },
  {
    question: "¿Puedo reprogramar una mentoría 1 a 1?",
    answer: "Sí, puedes reprogramar tu mentoría hasta 24 horas antes. Usa el link de Calendly que te enviamos por email o contacta a soporte."
  },
  {
    question: "¿Qué hago si tengo problemas técnicos durante una clase en vivo?",
    answer: "Si tienes problemas técnicos, puedes escribir en el chat de la clase o contactar inmediatamente a nuestro equipo de soporte técnico."
  },
  {
    question: "¿Cuándo recibiré feedback sobre mi proyecto?",
    answer: "El feedback se proporciona dentro de 48-72 horas después de solicitarlo. Puedes solicitarlo desde la sección 'Mi Proyecto'."
  },
  {
    question: "¿El certificado tiene validez oficial?",
    answer: "El certificado de Labora AI es un reconocimiento de habilidades. Es válido para tu portfolio profesional y LinkedIn, aunque no es una certificación oficial universitaria."
  }
];

export function SupportSection() {
  const [contactForm, setContactForm] = useState({
    subject: '',
    category: '',
    message: ''
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', contactForm);
    // Reset form
    setContactForm({ subject: '', category: '', message: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Soporte
        </h1>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-labora-red to-labora-red/80 border-labora-red">
          <CardContent className="p-6 text-center">
            <Calendar className="mx-auto h-12 w-12 text-white mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">
              Mentoría 1 a 1
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              Agenda una sesión personalizada con tu entrenador
            </p>
            <Button 
              className="bg-white text-labora-red hover:bg-white/90 font-medium"
              onClick={() => window.open('https://calendly.com/labora-ai/mentoria', '_blank')}
            >
              Agendar Mentoría
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-labora-neon to-labora-neon/80 border-labora-neon">
          <CardContent className="p-6 text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-labora-dark mb-4" />
            <h3 className="text-labora-dark text-xl font-bold mb-2">
              Chat de Soporte
            </h3>
            <p className="text-labora-dark/80 mb-4 text-sm">
              Obtén ayuda inmediata de nuestro equipo
            </p>
            <Button 
              className="bg-labora-dark text-white hover:bg-labora-dark/90 font-medium"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Iniciar Chat
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-labora-neon" />
            Formulario de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="subject" className="text-gray-300">Asunto</Label>
                <Input
                  id="subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  placeholder="Describe brevemente tu consulta"
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-gray-300">Categoría</Label>
                <Select onValueChange={(value) => setContactForm({...contactForm, category: value})}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-1">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="technical">Problema Técnico</SelectItem>
                    <SelectItem value="content">Contenido del Curso</SelectItem>
                    <SelectItem value="project">Ayuda con Proyecto</SelectItem>
                    <SelectItem value="billing">Facturación</SelectItem>
                    <SelectItem value="general">Consulta General</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
              <Textarea
                id="message"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                placeholder="Describe detalladamente tu consulta o problema"
                rows={6}
                className="bg-gray-800 border-gray-700 text-white mt-1"
                required
              />
            </div>
            
            <Button type="submit" className="bg-labora-red hover:bg-labora-red/90">
              <Send className="mr-2 h-4 w-4" />
              Enviar Mensaje
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <HelpCircle className="mr-2 h-5 w-5 text-labora-neon" />
            Preguntas Frecuentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <Collapsible 
                key={index}
                open={openFaqIndex === index}
                onOpenChange={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-white font-medium">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="text-white font-semibold mb-2">Email de Soporte</h4>
              <p className="text-gray-300 text-sm">soporte@labora.ai</p>
              <p className="text-gray-400 text-xs">Respuesta en 24-48 horas</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">WhatsApp</h4>
              <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              <p className="text-gray-400 text-xs">Lun-Vie 9:00-18:00</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Horario de Clases</h4>
              <p className="text-gray-300 text-sm">Mar, Jue, Sáb</p>
              <p className="text-gray-400 text-xs">19:00-21:00 (GMT-3)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}