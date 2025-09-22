# 🔐 Configuración de RLS para Labora AI Campus

## Problema
Las políticas RLS actuales no permiten que los estudiantes vean a otros miembros de su cohorte en la sección de Comunidad.

## Solución
Configurar políticas RLS que permitan:
- ✅ Ver perfiles de otros miembros de la misma cohorte
- ✅ Ver actividades de la comunidad de la cohorte
- ✅ Ver progreso de otros miembros (para estadísticas)
- ✅ Ver módulos de la cohorte
- ❌ NO ver datos de otras cohortes

## 📋 Pasos para Aplicar

### 1. Ejecutar Migración en Supabase
1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com/dashboard)
2. Navega a **SQL Editor**
3. Copia y pega el contenido de `migration_rls_simple.sql`
4. Ejecuta el script

### 2. Verificar que Funciona
1. Abre la consola del navegador (F12)
2. Copia y pega el contenido de `test_community_access.js`
3. Ejecuta la función
4. Deberías ver mensajes de éxito ✅

### 3. Probar en la Aplicación
1. Ve a la sección **Comunidad** en el campus
2. Deberías ver:
   - Lista de miembros de tu cohorte
   - Actividades recientes
   - Progreso de otros estudiantes

## 🔍 Políticas Creadas

### `profiles` (Perfiles)
- **Ver**: Propio perfil + miembros de la cohorte
- **Actualizar**: Solo propio perfil
- **Insertar**: Solo propio perfil

### `community_activities` (Actividades)
- **Ver**: Actividades de la cohorte
- **Crear**: Solo propias actividades

### `progreso_modulo` (Progreso)
- **Ver**: Progreso de la cohorte (para estadísticas)
- **Actualizar**: Solo propio progreso

### `modulos` (Módulos)
- **Ver**: Módulos de la cohorte

## 🚨 Si Algo Sale Mal

### Error: "Policy already exists"
```sql
-- Eliminar políticas existentes primero
DROP POLICY IF EXISTS "nombre_de_la_politica" ON nombre_tabla;
```

### Error: "Permission denied"
- Verifica que estés logueado como administrador
- Verifica que RLS esté habilitado en las tablas

### Error: "No data returned"
- Verifica que existan datos en las tablas
- Verifica que los usuarios tengan la misma cohorte

## 📞 Soporte
Si tienes problemas, revisa:
1. Los logs de Supabase en **Logs > Postgres**
2. La consola del navegador para errores
3. Que las tablas tengan datos de prueba

## ✅ Verificación Final
Después de aplicar las políticas, la sección Comunidad debería mostrar:
- [ ] Lista de miembros de la cohorte
- [ ] Actividades recientes
- [ ] Progreso de otros estudiantes
- [ ] Botones de compartir funcionando

