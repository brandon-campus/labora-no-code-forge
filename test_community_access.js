// Script de prueba para verificar el acceso a la comunidad
// Ejecutar en la consola del navegador cuando estés logueado

async function testCommunityAccess() {
  console.log('🧪 Probando acceso a la comunidad...');
  
  try {
    // 1. Verificar que podemos obtener nuestro perfil
    const { data: { user } } = await supabase.auth.getUser();
    console.log('✅ Usuario autenticado:', user?.email);
    
    // 2. Obtener nuestra cohorte
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('cohorte')
      .eq('id', user.id)
      .single();
    
    if (profileError) {
      console.error('❌ Error obteniendo perfil:', profileError);
      return;
    }
    
    console.log('✅ Cohorte del usuario:', profile.cohorte);
    
    // 3. Intentar obtener miembros de la cohorte
    const { data: members, error: membersError } = await supabase
      .from('profiles')
      .select(`
        id,
        full_name,
        role,
        proyecto_actual,
        avatar_url,
        cohorte
      `)
      .eq('cohorte', profile.cohorte)
      .order('full_name');
    
    if (membersError) {
      console.error('❌ Error obteniendo miembros:', membersError);
      return;
    }
    
    console.log('✅ Miembros de la cohorte encontrados:', members.length);
    console.log('📋 Lista de miembros:', members.map(m => m.full_name));
    
    // 4. Intentar obtener actividades de la comunidad
    const { data: activities, error: activitiesError } = await supabase
      .from('community_activities')
      .select(`
        id,
        action_type,
        description,
        created_at,
        user_id
      `)
      .order('created_at', { ascending: false })
      .limit(5);
    
    if (activitiesError) {
      console.error('❌ Error obteniendo actividades:', activitiesError);
      return;
    }
    
    console.log('✅ Actividades encontradas:', activities.length);
    console.log('📋 Actividades recientes:', activities.map(a => ({
      tipo: a.action_type,
      descripcion: a.description,
      fecha: new Date(a.created_at).toLocaleString()
    })));
    
    // 5. Intentar obtener progreso de la cohorte
    const { data: progress, error: progressError } = await supabase
      .from('progreso_modulo')
      .select(`
        user_id,
        modulo_id,
        completado
      `)
      .eq('completado', true);
    
    if (progressError) {
      console.error('❌ Error obteniendo progreso:', progressError);
      return;
    }
    
    console.log('✅ Progreso encontrado:', progress.length, 'módulos completados');
    
    console.log('🎉 ¡Todas las pruebas pasaron! La comunidad debería funcionar correctamente.');
    
  } catch (error) {
    console.error('❌ Error general:', error);
  }
}

// Ejecutar la prueba
testCommunityAccess();

