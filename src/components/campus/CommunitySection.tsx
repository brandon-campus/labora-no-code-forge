import React, { useState } from 'react';
import { Users2, MessageCircle, Share2, ExternalLink, User, Loader2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCommunity } from '@/hooks/useCommunity';

export function CommunitySection() {
  const { 
    members, 
    activities, 
    currentUserCohort, 
    loading, 
    error, 
    shareProject, 
    shareAchievement,
    getAvatarFallback,
    formatTimeAgo,
    getActionDescription,
    refetch
  } = useCommunity();

  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareType, setShareType] = useState<'project' | 'achievement'>('project');
  const [shareContent, setShareContent] = useState('');
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (!shareContent.trim()) return;
    
    setIsSharing(true);
    try {
      if (shareType === 'project') {
        await shareProject(shareContent);
      } else {
        await shareAchievement(shareContent);
      }
      setShareContent('');
      setShareModalOpen(false);
    } catch (err) {
      console.error('Error sharing:', err);
    } finally {
      setIsSharing(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-labora-neon mx-auto mb-4" />
            <p className="text-gray-400">Cargando comunidad...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
            <p className="text-red-400 mb-4">Error al cargar la comunidad: {error}</p>
            <Button 
              onClick={refetch}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reintentar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header mejorado - centrado y más atractivo */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Comunidad <span className="text-labora-neon">Labora</span>
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Conecta, aprende y crece junto a tu cohorte
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Badge className="bg-labora-neon/20 text-labora-neon border-labora-neon/30 px-4 py-2 text-sm font-semibold">
            Cohorte #{currentUserCohort}
          </Badge>
          <Badge variant="secondary" className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-semibold">
            {members.length} estudiantes
          </Badge>
        </div>
      </div>

      <div className="space-y-8">
        {/* WhatsApp Card - Redesigned */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl border border-green-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="p-8">
          <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white text-2xl font-bold">
                    Únete al Grupo de WhatsApp
              </h3>
                </div>
                <p className="text-white/90 mb-6 text-lg">
                  Conecta en tiempo real con tu cohorte, comparte ideas y recibe apoyo instantáneo
              </p>
                <a 
                  href="https://wa.me/5491138142899?text=Hola%20Labora%2C%20quiero%20unirme%20al%20grupo%20de%20WhatsApp%20de%20mi%20cohorte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <Button 
                    className="bg-white text-green-600 hover:bg-white/90 font-bold px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                    <ExternalLink className="mr-3 h-5 w-5" />
                    Abrir WhatsApp
              </Button>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 p-6 rounded-full">
                  <Users2 className="h-20 w-20 text-white/30" />
                </div>
              </div>
            </div>
            </div>
          </div>

        {/* Students Grid - Modernized */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-xl">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Users2 className="mr-3 h-6 w-6 text-labora-neon" />
            Estudiantes de tu Cohorte
            </h2>
            <p className="text-gray-400 mt-2">Conoce a tus compañeros y su progreso</p>
          </div>
          <div className="p-6">
            {members.length === 0 ? (
              <div className="text-center py-12">
                <Users2 className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No hay otros estudiantes en tu cohorte aún</p>
                <p className="text-gray-500 text-sm mt-2">¡Sé el primero en completar tu perfil!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                  <div 
                    key={member.id} 
                    className="bg-gray-800 rounded-xl p-5 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-labora-neon/30 hover:shadow-lg group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-14 w-14 ring-2 ring-labora-neon/20 group-hover:ring-labora-neon/40 transition-all">
                        <AvatarImage src={member.avatar_url || ""} />
                        <AvatarFallback className="bg-labora-neon text-labora-dark font-bold text-lg">
                          {getAvatarFallback(member.full_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-base mb-1 group-hover:text-labora-neon transition-colors">
                          {member.full_name}
                    </h4>
                        {member.role && (
                          <p className="text-labora-neon text-sm font-semibold">{member.role}</p>
                        )}
                        {member.proyecto_actual && (
                          <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                            📱 {member.proyecto_actual}
                          </p>
                        )}
                        
                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400">Progreso</span>
                            <span className="text-xs text-labora-neon font-bold">
                              {member.progress}/8 módulos
                            </span>
                          </div>
                          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-labora-neon to-green-400 h-2 rounded-full transition-all duration-500 group-hover:from-labora-neon group-hover:to-labora-neon"
                              style={{ width: `${Math.min((member.progress / 8) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
            )}
          </div>
        </div>

        {/* Activity Feed - Enhanced */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-xl">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <MessageCircle className="mr-3 h-6 w-6 text-labora-neon" />
              Actividad Reciente
            </h2>
            <p className="text-gray-400 mt-2">Últimas actualizaciones de la comunidad</p>
          </div>
          <div className="p-6">
            {activities.length === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No hay actividad reciente</p>
                <p className="text-gray-500 text-sm mt-2">¡Sé el primero en compartir algo!</p>
              </div>
            ) : (
          <div className="space-y-4">
                {activities.map((activity) => (
                  <div 
                    key={activity.id} 
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-labora-neon/30 hover:bg-gray-800 transition-all duration-300 group"
                  >
                <div className="flex-shrink-0 mt-1">
                      <div className={`p-2 rounded-full ${
                        activity.action_type === 'project_shared' ? 'bg-blue-500/20 text-blue-400' :
                        activity.action_type === 'module_completed' ? 'bg-green-500/20 text-green-400' :
                        activity.action_type === 'achievement_shared' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {activity.action_type === 'project_shared' && <Share2 className="h-4 w-4" />}
                        {activity.action_type === 'module_completed' && <User className="h-4 w-4" />}
                        {activity.action_type === 'achievement_shared' && <MessageCircle className="h-4 w-4" />}
                        {!['project_shared', 'module_completed', 'achievement_shared'].includes(activity.action_type) && <MessageCircle className="h-4 w-4" />}
                      </div>
                </div>
                <div className="flex-1">
                      <p className="text-gray-300">
                        <span className="text-white font-semibold group-hover:text-labora-neon transition-colors">
                          {activity.user_name}
                        </span>
                        {' '}{getActionDescription(activity)}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{formatTimeAgo(activity.created_at)}</p>
                </div>
              </div>
            ))}
          </div>
            )}
          </div>
        </div>

        {/* Share Section - Redesigned */}
        <div className="bg-gradient-to-r from-labora-red to-red-500 rounded-2xl border border-labora-red/30 shadow-xl">
          <div className="p-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-white text-2xl font-bold mb-3">
                Comparte tu Progreso
              </h2>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Celebra tus logros con la comunidad y recibe feedback valioso de tus compañeros
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setShareType('project');
                    setShareModalOpen(true);
                  }}
                  className="bg-white text-labora-red hover:bg-white/90 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Compartir Proyecto
                </Button>
                <Button 
                  onClick={() => {
                    setShareType('achievement');
                    setShareModalOpen(true);
                  }}
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-3 rounded-xl"
                >
                  🏆 Compartir Logro
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {shareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fade-in-up">
            <h3 className="text-xl font-bold text-white mb-4">
              {shareType === 'project' ? '🚀 Compartir Proyecto' : '🏆 Compartir Logro'}
            </h3>
          <div className="space-y-4">
              {shareType === 'project' ? (
                <Input
                  placeholder="Nombre de tu proyecto..."
                  value={shareContent}
                  onChange={(e) => setShareContent(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              ) : (
                <Textarea
                  placeholder="Describe tu logro..."
                  value={shareContent}
                  onChange={(e) => setShareContent(e.target.value)}
                  rows={3}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              )}
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                onClick={handleShare}
                disabled={!shareContent.trim() || isSharing}
                className="flex-1 bg-labora-neon text-gray-900 hover:bg-labora-neon/80"
              >
                {isSharing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Compartiendo...
                  </>
                ) : (
                  'Compartir'
                )}
              </Button>
              <Button 
                onClick={() => {
                  setShareModalOpen(false);
                  setShareContent('');
                }}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}