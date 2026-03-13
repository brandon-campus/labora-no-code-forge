-- MIGRACIÓN: Agregar Rol de Administrador y Permisos
-- Ejecutar en el SQL Editor de Supabase

-- 1. Agregar columna 'role' a la tabla profiles si no existe
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'role') THEN
        ALTER TABLE profiles ADD COLUMN role text NOT NULL DEFAULT 'student';
    END IF;
END $$;

-- 2. Asegurar que RLS esté habilitado
ALTER TABLE modulos ENABLE ROW LEVEL SECURITY;

-- 3. Crear política para que los admins puedan gestionar módulos (CRUD completo)
DROP POLICY IF EXISTS "Admins can manage modules" ON modulos;

CREATE POLICY "Admins can manage modules" ON modulos
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- 4. Crear política para que los admins puedan ver todos los perfiles (para gestión futura)
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- INSTRUCCIONES POSTERIORES:
-- Después de correr esto, debes ir a la tabla 'profiles' y cambiar tu 'role' a 'admin' manualmente.
