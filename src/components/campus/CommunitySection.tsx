import React from 'react';
import { Users2, MessageCircle, Share2, ExternalLink, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const cohortMembers = [
  { name: "Juan Estudiante", role: "Emprendedor", project: "App de Gestión", avatar: "JE", progress: 4 },
  { name: "María González", role: "Designer", project: "Plataforma E-learning", avatar: "MG", progress: 3 },
  { name: "Carlos López", role: "Marketer", project: "CRM para PyMEs", avatar: "CL", progress: 5 },
  { name: "Ana Torres", role: "Consultora", project: "Dashboard de Analytics", avatar: "AT", progress: 4 },
  { name: "Luis Morales", role: "Developer", project: "App de Delivery", avatar: "LM", progress: 3 },
  { name: "Sofia Rivera", role: "Product Manager", project: "Marketplace Local", avatar: "SR", progress: 4 },
  { name: "Diego Herrera", role: "Freelancer", project: "Tool de Productividad", avatar: "DH", progress: 2 },
  { name: "Paula Jiménez", role: "Founder", project: "App de Salud", avatar: "PJ", progress: 6 }
];

const recentActivity = [
  {
    user: "María González",
    action: "compartió su avance",
    project: "Plataforma E-learning",
    time: "Hace 2 horas",
    type: "share"
  },
  {
    user: "Carlos López",
    action: "comentó en",
    project: "App de Gestión de Juan",
    time: "Hace 4 horas",
    type: "comment"
  },
  {
    user: "Ana Torres",
    action: "completó el módulo",
    project: "Integraciones y APIs",
    time: "Hace 6 horas",
    type: "completion"
  }
];

export function CommunitySection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Comunidad
        </h1>
        <div className="flex items-center space-x-2">
          <Badge className="bg-labora-neon/20 text-labora-neon border-labora-neon/30">
            Cohorte #12
          </Badge>
          <Badge variant="secondary" className="bg-gray-700 text-gray-300">
            {cohortMembers.length} estudiantes
          </Badge>
        </div>
      </div>

      {/* Community Access */}
      <Card className="bg-gradient-to-r from-labora-red to-labora-red/80 border-labora-red">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">
                Únete a las Conversaciones
              </h3>
              <p className="text-white/90 mb-4">
                Conecta con tu cohorte en nuestro grupo privado de WhatsApp
              </p>
              <Button 
                className="bg-white text-labora-red hover:bg-white/90 font-medium"
                size="lg"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Abrir Grupo de WhatsApp
              </Button>
            </div>
            <Users2 className="h-20 w-20 text-white/20" />
          </div>
        </CardContent>
      </Card>

      {/* Cohort Members */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users2 className="mr-2 h-5 w-5 text-labora-neon" />
            Estudiantes de tu Cohorte
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cohortMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-labora-neon text-labora-dark font-bold">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm truncate">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-xs">{member.role}</p>
                    <p className="text-gray-300 text-xs mt-1 truncate">
                      {member.project}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs text-gray-400 mr-2">Módulo {member.progress}/8</span>
                      <div className="flex-1 bg-gray-700 rounded-full h-1">
                        <div 
                          className="bg-labora-neon h-1 rounded-full"
                          style={{ width: `${(member.progress / 8) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Actividad Reciente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-800 last:border-b-0">
                <div className="flex-shrink-0 mt-1">
                  {activity.type === 'share' && <Share2 className="h-4 w-4 text-blue-400" />}
                  {activity.type === 'comment' && <MessageCircle className="h-4 w-4 text-green-400" />}
                  {activity.type === 'completion' && <User className="h-4 w-4 text-purple-400" />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-medium">{activity.user}</span>
                    {' '}{activity.action}{' '}
                    <span className="text-labora-neon">{activity.project}</span>
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Share Progress */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Share2 className="mr-2 h-5 w-5 text-labora-neon" />
            Compartir tu Avance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm">
              Comparte tu progreso con la comunidad y recibe feedback de tus compañeros
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="bg-labora-neon text-labora-dark hover:bg-labora-neon/90">
                Compartir Proyecto
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Compartir Logro
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}