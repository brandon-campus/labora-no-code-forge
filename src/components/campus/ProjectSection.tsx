import React, { useState } from 'react';
import { CheckCircle, MessageSquare, Edit3, Save, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const projectPhases = [
  { id: 1, title: "Idea validada", description: "Define y valida tu idea de producto", completed: true },
  { id: 2, title: "Prototipo hecho", description: "Crea un prototipo funcional", completed: true },
  { id: 3, title: "App funcional", description: "Desarrolla la aplicación completa", completed: false },
  { id: 4, title: "Lanzamiento", description: "Publica y promociona tu producto", completed: false }
];

export function ProjectSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [projectTitle, setProjectTitle] = useState("App de Gestión de Tareas para Freelancers");
  const [projectDescription, setProjectDescription] = useState(
    "Una aplicación web que ayuda a freelancers a organizar sus proyectos, clientes y facturación. Incluye seguimiento de tiempo, generación de reportes y dashboard de ingresos."
  );
  const [notes, setNotes] = useState(
    "Próximos pasos:\n- Implementar sistema de notificaciones\n- Integrar pasarela de pagos\n- Optimizar para móviles"
  );

  const completedPhases = projectPhases.filter(phase => phase.completed).length;
  const progressPercentage = (completedPhases / projectPhases.length) * 100;

  const handleSave = () => {
    setIsEditing(false);
    // Aquí iría la lógica para guardar los datos
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Mi Proyecto
        </h1>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Guardar
            </>
          ) : (
            <>
              <Edit3 className="mr-2 h-4 w-4" />
              Editar
            </>
          )}
        </Button>
      </div>

      {/* Project Overview */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Información del Proyecto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isEditing ? (
            <>
              <div>
                <Label htmlFor="title" className="text-gray-300">Título del Proyecto</Label>
                <Input
                  id="title"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                />
              </div>
              <div>
                <Label htmlFor="description" className="text-gray-300">Descripción</Label>
                <Textarea
                  id="description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                />
              </div>
              <Button onClick={handleSave} className="bg-labora-neon text-labora-dark hover:bg-labora-neon/90">
                Guardar Cambios
              </Button>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-white">{projectTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{projectDescription}</p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Progress by Phases */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Progreso por Fases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">Fases completadas</span>
              <span className="text-white font-medium">{completedPhases}/{projectPhases.length}</span>
            </div>
            <Progress value={progressPercentage} className="h-3 mb-6" />
            
            <div className="space-y-4">
              {projectPhases.map((phase) => (
                <div
                  key={phase.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg border ${
                    phase.completed
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-gray-800 border-gray-700'
                  }`}
                >
                  <div className="flex-shrink-0">
                    {phase.completed ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <div className="h-6 w-6 rounded-full border-2 border-gray-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${phase.completed ? 'text-green-400' : 'text-white'}`}>
                      {phase.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{phase.description}</p>
                  </div>
                  {!phase.completed && (
                    <Button
                      size="sm"
                      className="bg-labora-red hover:bg-labora-red/90"
                    >
                      Marcar Completo
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Section */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-labora-neon" />
            Feedback del Entrenador
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-labora-red rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-medium">Mauricio - Entrenador</span>
                    <span className="text-gray-400 text-xs">Hace 2 días</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Excelente progreso en el prototipo! Te sugiero enfocarte en la UX del dashboard
                    y considerar implementar filtros avanzados para mejorar la usabilidad.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-labora-neon text-labora-dark hover:bg-labora-neon/90">
              Solicitar Nuevo Feedback
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notes and Follow-up */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Notas y Seguimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="Escribe tus notas, ideas y próximos pasos aquí..."
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                size="sm"
                className="bg-labora-red hover:bg-labora-red/90"
              >
                Guardar Notas
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Upload className="mr-2 h-4 w-4" />
                Subir Archivo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}