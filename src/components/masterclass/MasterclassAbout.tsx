
import React from 'react';
import { Check, Users, BrainCircuit, Rocket } from 'lucide-react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const MasterclassAbout = () => {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Para quién es */}
            <Card className="bg-gray-50 border-none">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-labora-red/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-labora-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-labora-dark">Para quién es</h3>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-labora-red shrink-0 mt-1" />
                    <span>Emprendedores que quieren construir productos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-labora-red shrink-0 mt-1" />
                    <span>Personas que desean vender plataformas a clientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-labora-red shrink-0 mt-1" />
                    <span>Profesionales que buscan más libertad y habilidades nuevas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Qué se van a llevar */}
            <Card className="bg-gray-50 border-none">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-labora-neon/10 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-labora-neon" />
                  </div>
                  <h3 className="text-xl font-semibold text-labora-dark">Qué te vas a llevar</h3>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-labora-neon shrink-0 mt-1" />
                    <span>Crear una aplicación desde cero, sin escribir una línea de código</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-labora-neon shrink-0 mt-1" />
                    <span>Entender cómo usar IA en tus productos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-labora-neon shrink-0 mt-1" />
                    <span>Tener una app funcional al final de la clase</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassAbout;
