-- Script de verificación para las políticas RLS
-- Ejecutar después de aplicar las políticas principales

-- 1. Verificar que un usuario puede ver su propio perfil
SELECT 'Test 1: Usuario ve su propio perfil' as test_name;
SELECT id, full_name, cohorte FROM profiles WHERE id = auth.uid();

-- 2. Verificar que un usuario puede ver otros miembros de su cohorte
SELECT 'Test 2: Usuario ve miembros de su cohorte' as test_name;
SELECT 
  p.id, 
  p.full_name, 
  p.cohorte,
  COUNT(pm.completado) as modulos_completados
FROM profiles p
LEFT JOIN progreso_modulo pm ON p.id = pm.user_id AND pm.completado = true
WHERE p.cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
GROUP BY p.id, p.full_name, p.cohorte
ORDER BY p.full_name;

-- 3. Verificar que un usuario puede ver actividades de su cohorte
SELECT 'Test 3: Usuario ve actividades de su cohorte' as test_name;
SELECT 
  ca.id,
  ca.action_type,
  ca.description,
  ca.created_at,
  p.full_name as user_name
FROM community_activities ca
JOIN profiles p ON ca.user_id = p.id
WHERE p.cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
ORDER BY ca.created_at DESC
LIMIT 10;

-- 4. Verificar que un usuario puede ver módulos de su cohorte
SELECT 'Test 4: Usuario ve módulos de su cohorte' as test_name;
SELECT id, titulo, descripcion, cohorte FROM modulos 
WHERE cohorte = (SELECT cohorte FROM profiles WHERE id = auth.uid())
ORDER BY orden;

-- 5. Verificar que un usuario NO puede ver perfiles de otras cohortes
SELECT 'Test 5: Usuario NO ve perfiles de otras cohortes' as test_name;
SELECT COUNT(*) as perfiles_otras_cohortes
FROM profiles 
WHERE cohorte != (SELECT cohorte FROM profiles WHERE id = auth.uid());

