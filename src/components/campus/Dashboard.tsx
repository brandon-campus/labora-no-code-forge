import React from 'react';
import { Calendar, BookOpen, Upload, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Dashboard() {
  const completedModules = 3;
  const totalModules = 8;
  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-labora-red to-labora-red/80 rounded-xl p-6 md:p-8 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          ¡Bienvenido de vuelta, Juan! 👋
        </h1>
        <p className="text-white/90 text-lg">
          Estás haciendo un gran progreso en tu viaje de IA y No-Code
        </p>
      </div>

      {/* Progress Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-labora-neon" />
            Progreso del Bootcamp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Módulos completados</span>
              <span className="text-white font-medium">{completedModules}/{totalModules}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-gray-400 text-sm">
              {Math.round(progressPercentage)}% completado • ¡Sigue así!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Class */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-labora-neon" />
            Próxima Clase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold mb-1">
                Módulo 4: Automatizaciones
              </h3>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="mr-1 h-4 w-4" />
                Jueves 9 de Enero • 7:00 PM
              </div>
            </div>
            <Button className="bg-labora-neon text-labora-dark hover:bg-labora-neon/90 font-medium">
              Unirse a la Clase
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900 border-gray-800 hover:border-labora-red/50 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-labora-neon mb-3" />
            <h3 className="text-white font-semibold mb-2">Ver Módulo Actual</h3>
            <p className="text-gray-400 text-sm mb-4">
              Continúa con el módulo en progreso
            </p>
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
              Ir al Módulo
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 hover:border-labora-red/50 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <Upload className="mx-auto h-8 w-8 text-labora-neon mb-3" />
            <h3 className="text-white font-semibold mb-2">Subir Avance</h3>
            <p className="text-gray-400 text-sm mb-4">
              Comparte el progreso de tu proyecto
            </p>
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
              Subir Archivo
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 hover:border-labora-red/50 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="mx-auto h-8 w-8 text-labora-neon mb-3" />
            <h3 className="text-white font-semibold mb-2">Ir a Comunidad</h3>
            <p className="text-gray-400 text-sm mb-4">
              Conecta con otros estudiantes
            </p>
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
              Ver Comunidad
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Actividad Reciente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="text-white text-sm">Módulo 3 completado</p>
                <p className="text-gray-400 text-xs">Hace 2 días</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Upload className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <div>
                <p className="text-white text-sm">Proyecto actualizado: "App de Gestión"</p>
                <p className="text-gray-400 text-xs">Hace 3 días</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-purple-500 flex-shrink-0" />
              <div>
                <p className="text-white text-sm">Comentario en la comunidad</p>
                <p className="text-gray-400 text-xs">Hace 5 días</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}