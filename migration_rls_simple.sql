-- MIGRACIÓN SIMPLE PARA RLS - Labora AI Campus
-- Ejecutar este script en el SQL Editor de Supabase

-- Paso 1: Eliminar políticas existentes (si las hay)
DROP POLICY IF EXISTS "Users can view own profile and cohort members" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view cohort activities" ON community_activities;
DROP POLICY IF EXISTS "Users can create activities" ON community_activities;
DROP POLICY IF EXISTS "Users can view cohort progress" ON progreso_modulo;
DROP POLICY IF EXISTS "Users can update own progress" ON progreso_modulo;
DROP POLICY IF EXISTS "Users can view cohort modules" ON modulos;

-- Paso 2: Crear nuevas políticas

-- PROFILES: Ver propio perfil y miembros de la cohorte
CREATE POLICY "profiles_select_cohort" ON profiles
  FOR SELECT
  USING (
    auth.uid() = id OR 
    cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
  );

-- PROFILES: Actualizar solo propio perfil
CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- PROFILES: Insertar solo propio perfil
CREATE POLICY "profiles_insert_own" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- COMMUNITY_ACTIVITIES: Ver actividades de la cohorte
CREATE POLICY "community_activities_select_cohort" ON community_activities
  FOR SELECT
  USING (
    user_id IN (
      SELECT id FROM profiles 
      WHERE cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
    )
  );

-- COMMUNITY_ACTIVITIES: Crear actividades
CREATE POLICY "community_activities_insert_own" ON community_activities
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- PROGRESO_MODULO: Ver progreso de la cohorte
CREATE POLICY "progreso_modulo_select_cohort" ON progreso_modulo
  FOR SELECT
  USING (
    user_id IN (
      SELECT id FROM profiles 
      WHERE cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
    )
  );

-- PROGRESO_MODULO: Actualizar solo propio progreso
CREATE POLICY "progreso_modulo_update_own" ON progreso_modulo
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- MODULOS: Ver módulos de la cohorte
CREATE POLICY "modulos_select_cohort" ON modulos
  FOR SELECT
  USING (
    cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
  );

-- Paso 3: Asegurar que RLS esté habilitado
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE progreso_modulo ENABLE ROW LEVEL SECURITY;
ALTER TABLE modulos ENABLE ROW LEVEL SECURITY;

-- Paso 4: Verificar que las políticas se crearon correctamente
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE schemaname = 'public' 
  AND tablename IN ('profiles', 'community_activities', 'progreso_modulo', 'modulos')
ORDER BY tablename, policyname;

