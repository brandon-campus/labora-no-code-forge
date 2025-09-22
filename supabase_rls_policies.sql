-- Políticas RLS para Labora AI Campus
-- Estas políticas permiten que los estudiantes vean a otros miembros de su cohorte

-- 1. Política para la tabla 'profiles'
-- Los usuarios pueden ver su propio perfil y los perfiles de otros usuarios de la misma cohorte
DROP POLICY IF EXISTS "Users can view own profile and cohort members" ON profiles;
CREATE POLICY "Users can view own profile and cohort members" ON profiles
  FOR SELECT
  USING (
    auth.uid() = id OR 
    cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
  );

-- Los usuarios pueden actualizar solo su propio perfil
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Los usuarios pueden insertar solo su propio perfil
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 2. Política para la tabla 'community_activities'
-- Los usuarios pueden ver todas las actividades de su cohorte
DROP POLICY IF EXISTS "Users can view cohort activities" ON community_activities;
CREATE POLICY "Users can view cohort activities" ON community_activities
  FOR SELECT
  USING (
    user_id IN (
      SELECT id FROM profiles 
      WHERE cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
    )
  );

-- Los usuarios pueden crear actividades
DROP POLICY IF EXISTS "Users can create activities" ON community_activities;
CREATE POLICY "Users can create activities" ON community_activities
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 3. Política para la tabla 'progreso_modulo'
-- Los usuarios pueden ver el progreso de otros miembros de su cohorte (solo para estadísticas)
DROP POLICY IF EXISTS "Users can view cohort progress" ON progreso_modulo;
CREATE POLICY "Users can view cohort progress" ON progreso_modulo
  FOR SELECT
  USING (
    user_id IN (
      SELECT id FROM profiles 
      WHERE cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
    )
  );

-- Los usuarios pueden actualizar solo su propio progreso
DROP POLICY IF EXISTS "Users can update own progress" ON progreso_modulo;
CREATE POLICY "Users can update own progress" ON progreso_modulo
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 4. Política para la tabla 'modulos'
-- Los usuarios pueden ver los módulos de su cohorte
DROP POLICY IF EXISTS "Users can view cohort modules" ON modulos;
CREATE POLICY "Users can view cohort modules" ON modulos
  FOR SELECT
  USING (
    cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
  );

-- Asegurar que RLS esté habilitado en todas las tablas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE progreso_modulo ENABLE ROW LEVEL SECURITY;
ALTER TABLE modulos ENABLE ROW LEVEL SECURITY;

