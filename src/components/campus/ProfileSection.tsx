import React, { useState } from 'react';
import { User, Award, ExternalLink, Edit3, Save, Linkedin, Globe, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Juan Estudiante",
    email: "juan.estudiante@email.com",
    cohort: "Cohorte #12",
    project: "App de Gestión de Tareas para Freelancers",
    bio: "Emprendedor apasionado por la tecnología y la automatización. Buscando crear soluciones que simplifiquen la vida de otros freelancers.",
    linkedin: "https://linkedin.com/in/juan-estudiante",
    website: "https://juan-estudiante.com",
    github: "https://github.com/juan-estudiante"
  });

  const completedModules = 3;
  const totalModules = 8;
  const progressPercentage = (completedModules / totalModules) * 100;
  const isCertificateUnlocked = completedModules >= totalModules;

  const achievements = [
    { title: "Primer Módulo", description: "Completaste tu primer módulo", unlocked: true },
    { title: "Integrador", description: "Creaste tu primera integración API", unlocked: true },
    { title: "Constructor", description: "Desarrollaste tu primer prototipo", unlocked: true },
    { title: "Colaborador", description: "Ayudaste a un compañero", unlocked: false },
    { title: "Innovador", description: "Propusiste una solución creativa", unlocked: false },
    { title: "Graduado", description: "Completaste el bootcamp", unlocked: false }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Aquí iría la lógica para guardar los datos
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Mi Perfil
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
              Editar Perfil
            </>
          )}
        </Button>
      </div>

      {/* Profile Information */}
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" />
                <AvatarFallback className="bg-labora-neon text-labora-dark text-2xl font-bold">
                  JE
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div className="flex-1 space-y-4">
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Nombre</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project" className="text-gray-300">Proyecto</Label>
                    <Input
                      id="project"
                      value={profile.project}
                      onChange={(e) => setProfile({...profile, project: e.target.value})}
                      className="bg-gray-800 border-gray-700 text-white mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="bio" className="text-gray-300">Biografía</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      rows={3}
                      className="bg-gray-800 border-gray-700 text-white mt-1"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
                    <p className="text-gray-400">{profile.email}</p>
                    <Badge className="bg-labora-neon/20 text-labora-neon border-labora-neon/30 mt-2">
                      {profile.cohort}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Proyecto Actual</h3>
                    <p className="text-gray-300">{profile.project}</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Biografía</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{profile.bio}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Enlaces Sociales</CardTitle>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="linkedin" className="text-gray-300">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={profile.linkedin}
                  onChange={(e) => setProfile({...profile, linkedin: e.target.value})}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                />
              </div>
              <div>
                <Label htmlFor="website" className="text-gray-300">Sitio Web</Label>
                <Input
                  id="website"
                  value={profile.website}
                  onChange={(e) => setProfile({...profile, website: e.target.value})}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                />
              </div>
              <div>
                <Label htmlFor="github" className="text-gray-300">GitHub</Label>
                <Input
                  id="github"
                  value={profile.github}
                  onChange={(e) => setProfile({...profile, github: e.target.value})}
                  className="bg-gray-800 border-gray-700 text-white mt-1"
                />
              </div>
              <Button onClick={handleSave} className="bg-labora-neon text-labora-dark hover:bg-labora-neon/90">
                Guardar Enlaces
              </Button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={() => window.open(profile.linkedin, '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={() => window.open(profile.website, '_blank')}
              >
                <Globe className="mr-2 h-4 w-4" />
                Sitio Web
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={() => window.open(profile.github, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Progress */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Progreso del Bootcamp</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Módulos completados</span>
              <span className="text-white font-medium">{completedModules}/{totalModules}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-gray-400 text-sm">
              {Math.round(progressPercentage)}% del bootcamp completado
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Certificate */}
      <Card className={`bg-gray-900 border-gray-800 ${isCertificateUnlocked ? 'border-labora-neon' : ''}`}>
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Award className="mr-2 h-5 w-5 text-labora-neon" />
            Certificado
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isCertificateUnlocked ? (
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-labora-neon to-labora-neon/80 rounded-lg p-6">
                <Award className="mx-auto h-16 w-16 text-labora-dark mb-4" />
                <h3 className="text-labora-dark text-xl font-bold">¡Felicitaciones!</h3>
                <p className="text-labora-dark/80">Has completado el Bootcamp de Labora AI</p>
              </div>
              <Button className="bg-labora-red hover:bg-labora-red/90">
                Descargar Certificado
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-gray-800 rounded-lg p-6">
                <Award className="mx-auto h-16 w-16 text-gray-500 mb-4" />
                <h3 className="text-gray-400 text-xl font-bold">Certificado Bloqueado</h3>
                <p className="text-gray-500">Completa todos los módulos para desbloquear tu certificado</p>
              </div>
              <p className="text-gray-400 text-sm">
                Te faltan {totalModules - completedModules} módulos por completar
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Logros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 border ${
                  achievement.unlocked
                    ? 'bg-labora-neon/10 border-labora-neon/30'
                    : 'bg-gray-800 border-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Award 
                    className={`h-8 w-8 ${
                      achievement.unlocked ? 'text-labora-neon' : 'text-gray-500'
                    }`} 
                  />
                  <div>
                    <h4 className={`font-semibold ${
                      achievement.unlocked ? 'text-labora-neon' : 'text-gray-400'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}