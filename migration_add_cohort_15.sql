-- MIGRACIÓN: Creación de Cohorte 15
-- Este script clona los módulos de la cohorte 13 para la nueva cohorte 15.
-- Ejecutar en el SQL Editor de Supabase.

-- 1. Clonar módulos de la cohorte 13 a la 15
INSERT INTO modulos (titulo, descripcion, video_url, orden, cohorte)
SELECT 
    titulo, 
    descripcion, 
    video_url, 
    orden, 
    '15' as cohorte
FROM modulos 
WHERE cohorte = '13';

-- 2. Verificación
SELECT cohorte, count(*) as cantidad_modulos 
FROM modulos 
WHERE cohorte IN ('13', '15') 
GROUP BY cohorte;

-- NOTA IMPORTANTE PARA EL USUARIO:
-- Para agregar alumnos a esta cohorte, debes editar la columna 'cohorte' 
-- en la tabla 'profiles' para cada usuario, asignándoles el valor '15'.
