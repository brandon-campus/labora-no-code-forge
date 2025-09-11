import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export interface CommunityMember {
  id: string;
  full_name: string;
  role?: string;
  proyecto_actual?: string;
  avatar_url?: string;
  cohorte: string;
  progress: number;
}

export interface CommunityActivity {
  id: string;
  user_name: string;
  action_type: string;
  description: string;
  related_content?: string;
  created_at: string;
}

export const useCommunity = () => {
  const [members, setMembers] = useState<CommunityMember[]>([]);
  const [activities, setActivities] = useState<CommunityActivity[]>([]);
  const [currentUserCohort, setCurrentUserCohort] = useState<string>('13');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCommunityData = async () => {
    try {
      setLoading(true);
      
      // Obtener usuario actual
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Usuario no autenticado');
      }

      // Obtener cohorte del usuario actual
      const { data: userProfile } = await supabase
        .from('profiles')
        .select('cohorte')
        .eq('id', user.id)
        .single();

      const userCohort = userProfile?.cohorte || '13';
      setCurrentUserCohort(userCohort);

      // Obtener miembros de la misma cohorte
      const { data: cohortMembers, error: membersError } = await supabase
        .from('profiles')
        .select(`
          id,
          full_name,
          role,
          proyecto_actual,
          avatar_url,
          cohorte
        `)
        .eq('cohorte', userCohort)
        .order('full_name');

      if (membersError) throw membersError;

      // Calcular progreso de cada miembro basado en módulos completados
      const membersWithProgress = await Promise.all(
        (cohortMembers || []).map(async (member) => {
          const { data: progressData } = await supabase
            .from('progreso_modulo')
            .select('completado')
            .eq('user_id', member.id)
            .eq('completado', true);

          return {
            ...member,
            progress: progressData?.length || 0
          };
        })
      );

      setMembers(membersWithProgress);

      // Obtener actividades recientes de la cohorte con join manual
      const { data: recentActivities, error: activitiesError } = await supabase
        .from('community_activities')
        .select(`
          id,
          action_type,
          description,
          related_content,
          created_at,
          user_id
        `)
        .order('created_at', { ascending: false })
        .limit(20);

      if (activitiesError) throw activitiesError;

      // Obtener información de usuarios para las actividades
      const userIds = [...new Set((recentActivities || []).map(a => a.user_id))];
      const { data: users } = await supabase
        .from('profiles')
        .select('id, full_name')
        .in('id', userIds);

      const usersMap = new Map(users?.map(u => [u.id, u.full_name]) || []);

      // Formatear actividades
      const formattedActivities = (recentActivities || []).map(activity => ({
        id: activity.id,
        user_name: usersMap.get(activity.user_id) || 'Usuario desconocido',
        action_type: activity.action_type,
        description: activity.description,
        related_content: activity.related_content,
        created_at: activity.created_at
      }));

      setActivities(formattedActivities);
      
    } catch (err: any) {
      console.error('Error fetching community data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createActivity = async (actionType: string, description: string, relatedContent?: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuario no autenticado');

      const { error } = await supabase
        .from('community_activities')
        .insert({
          user_id: user.id,
          action_type: actionType,
          description: description,
          related_content: relatedContent
        });

      if (error) throw error;

      // Refrescar actividades después de crear una nueva
      await fetchCommunityData();
      
    } catch (err: any) {
      console.error('Error creating activity:', err);
      setError(err.message);
    }
  };

  const shareProject = async (projectName: string) => {
    await createActivity('project_shared', 'compartió su proyecto', projectName);
  };

  const shareAchievement = async (achievement: string) => {
    await createActivity('achievement_shared', 'celebró un logro', achievement);
  };

  const updateProfile = async (updates: Partial<CommunityMember>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuario no autenticado');

      const { error } = await supabase
        .from('profiles')
        .update({
          role: updates.role,
          proyecto_actual: updates.proyecto_actual,
          avatar_url: updates.avatar_url,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) throw error;

      // Refrescar datos después de actualizar
      await fetchCommunityData();
      
    } catch (err: any) {
      console.error('Error updating profile:', err);
      setError(err.message);
    }
  };

  const getAvatarFallback = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    
    if (diffInMinutes < 5) return 'Hace unos minutos';
    if (diffInMinutes < 60) return `Hace ${diffInMinutes} minutos`;
    if (diffInHours < 24) return `Hace ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
    if (diffInDays < 7) return `Hace ${diffInDays} ${diffInDays === 1 ? 'día' : 'días'}`;
    
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'short',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const getActionDescription = (activity: CommunityActivity) => {
    switch (activity.action_type) {
      case 'module_completed':
        return `completó el módulo "${activity.related_content}"`;
      case 'project_shared':
        return `compartió su proyecto "${activity.related_content}"`;
      case 'achievement_shared':
        return `celebró: ${activity.related_content}`;
      case 'comment_made':
        return `comentó en "${activity.related_content}"`;
      default:
        return activity.description;
    }
  };

  useEffect(() => {
    fetchCommunityData();
  }, []);

  return {
    members,
    activities,
    currentUserCohort,
    loading,
    error,
    createActivity,
    shareProject,
    shareAchievement,
    updateProfile,
    getAvatarFallback,
    formatTimeAgo,
    getActionDescription,
    refetch: fetchCommunityData
  };
};