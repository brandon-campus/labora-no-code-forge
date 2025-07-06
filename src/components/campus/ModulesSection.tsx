import React, { useState } from 'react';
import { CheckCircle, Clock, Play, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const modules = [
  {
    id: 1,
    title: "Introducción al mundo IA",
    description: "Fundamentos de Inteligencia Artificial, herramientas y aplicaciones prácticas",
    status: "completed",
    videoUrl: "https://example.com/video1",
    materials: ["Guía de IA.pdf", "Herramientas recomendadas.md"],
    assignment: "Ensayo sobre el futuro de la IA"
  },
  {
    id: 2,
    title: "Introducción al mundo No-Code",
    description: "Plataformas No-Code, ventajas y casos de uso empresariales",
    status: "completed",
    videoUrl: "https://example.com/video2",
    materials: ["Manual No-Code.pdf", "Comparativa de plataformas.xlsx"],
    assignment: "Crear primera app simple"
  },
  {
    id: 3,
    title: "Integraciones y APIs",
    description: "Conectar diferentes servicios y plataformas mediante APIs",
    status: "completed",
    videoUrl: "https://example.com/video3",
    materials: ["Guía de APIs.pdf", "Ejemplos de integración.zip"],
    assignment: "Integrar 2 servicios diferentes"
  },
  {
    id: 4,
    title: "Automatizaciones",
    description: "Crear flujos automatizados para optimizar procesos",
    status: "current",
    videoUrl: "https://example.com/video4",
    materials: ["Zapier Advanced.pdf", "Make scenarios.json"],
    assignment: "Automatización personal"
  },
  {
    id: 5,
    title: "Bases de datos: Supabase",
    description: "Gestión de datos, autenticación y funciones en tiempo real",
    status: "locked",
    videoUrl: "",
    materials: [],
    assignment: "Base de datos para proyecto"
  },
  {
    id: 6,
    title: "Dashboards y Visualización",
    description: "Crear dashboards interactivos y visualizaciones de datos",
    status: "locked",
    videoUrl: "",
    materials: [],
    assignment: "Dashboard del proyecto"
  },
  {
    id: 7,
    title: "Control de Flujo y Manejo de Errores",
    description: "Optimización y debugging de aplicaciones No-Code",
    status: "locked",
    videoUrl: "",
    materials: [],
    assignment: "Optimización completa"
  },
  {
    id: 8,
    title: "Lanzamiento de Producto",
    description: "Estrategias de lanzamiento, marketing y monetización",
    status: "locked",
    videoUrl: "",
    materials: [],
    assignment: "Plan de lanzamiento"
  }
];

export function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const completedCount = modules.filter(m => m.status === 'completed').length;
  const progressPercentage = (completedCount / modules.length) * 100;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'current':
        return <Play className="h-5 w-5 text-labora-neon" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completado</Badge>;
      case 'current':
        return <Badge className="bg-labora-neon/20 text-labora-neon border-labora-neon/30">En Progreso</Badge>;
      default:
        return <Badge variant="secondary" className="bg-gray-700 text-gray-300">Bloqueado</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Módulos del Bootcamp
        </h1>
        <div className="text-right">
          <p className="text-gray-300 text-sm">Progreso General</p>
          <p className="text-white font-bold">{completedCount}/8 Módulos</p>
        </div>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <Progress value={progressPercentage} className="h-3 mb-2" />
          <p className="text-gray-400 text-sm">
            {Math.round(progressPercentage)}% del bootcamp completado
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {modules.map((module) => (
          <Card 
            key={module.id} 
            className={`bg-gray-900 border-gray-800 transition-all hover:border-gray-700 ${
              selectedModule === module.id ? 'border-labora-red' : ''
            }`}
          >
            <CardHeader 
              className="cursor-pointer"
              onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(module.status)}
                  <div>
                    <CardTitle className="text-white text-lg">
                      Módulo {module.id}: {module.title}
                    </CardTitle>
                    <p className="text-gray-400 text-sm mt-1">
                      {module.description}
                    </p>
                  </div>
                </div>
                {getStatusBadge(module.status)}
              </div>
            </CardHeader>

            {selectedModule === module.id && (
              <CardContent className="pt-0">
                <div className="border-t border-gray-800 pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Video Section */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Play className="mr-2 h-4 w-4" />
                        Video de la Clase
                      </h4>
                      {module.status !== 'locked' ? (
                        <div className="bg-gray-800 rounded-lg p-8 text-center">
                          <Play className="mx-auto h-12 w-12 text-labora-neon mb-3" />
                          <p className="text-gray-300 mb-4">Video disponible</p>
                          <Button className="bg-labora-red hover:bg-labora-red/90">
                            Ver Video
                          </Button>
                        </div>
                      ) : (
                        <div className="bg-gray-800 rounded-lg p-8 text-center">
                          <Clock className="mx-auto h-12 w-12 text-gray-500 mb-3" />
                          <p className="text-gray-400">Video se desbloqueará pronto</p>
                        </div>
                      )}
                    </div>

                    {/* Materials and Assignment */}
                    <div className="space-y-6">
                      {/* Materials */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          Material de Lectura
                        </h4>
                        {module.materials.length > 0 ? (
                          <div className="space-y-2">
                            {module.materials.map((material, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                                <span className="text-gray-300 text-sm">{material}</span>
                                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                                  Descargar
                                </Button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-400 text-sm">Material no disponible aún</p>
                        )}
                      </div>

                      {/* Assignment */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <Upload className="mr-2 h-4 w-4" />
                          Entregable
                        </h4>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-300 text-sm mb-3">{module.assignment}</p>
                          {module.status !== 'locked' && (
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                                Subir Archivo
                              </Button>
                              {module.status === 'completed' && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                                  ✓ Entregado
                                </Button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mark as Complete */}
                  {module.status === 'current' && (
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <Button className="bg-labora-neon text-labora-dark hover:bg-labora-neon/90 font-medium">
                        Marcar como Completado
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}