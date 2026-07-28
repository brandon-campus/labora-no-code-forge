-- MIGRACIÓN PARA TABLA LEAD MAGNETS (CLASES DINÁMICAS)
-- Ejecutar este script en el SQL Editor de Supabase

CREATE TABLE IF NOT EXISTS public.lead_magnets (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    tag_text TEXT NOT NULL,
    title_main TEXT NOT NULL,
    title_highlight TEXT NOT NULL,
    description TEXT NOT NULL,
    video_url TEXT NOT NULL,
    step1_title TEXT NOT NULL,
    step1_bullet1 TEXT NOT NULL,
    step1_bullet2 TEXT NOT NULL,
    theme_color_primary TEXT DEFAULT 'labora-neon',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security
ALTER TABLE public.lead_magnets ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad (RLS)

-- 1. Permitir acceso público de solo lectura (cualquiera puede ver las landings)
CREATE POLICY "Permitir lectura publica de lead_magnets"
ON public.lead_magnets
FOR SELECT
TO public
USING (true);

-- 2. Permitir acceso total (CRUD) a usuarios autenticados (asumiendo que los admin están logueados)
CREATE POLICY "Permitir full access a autenticados en lead_magnets"
ON public.lead_magnets
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Insertar datos de prueba basados en Clase Gratuita IA (opcional)
INSERT INTO public.lead_magnets (slug, tag_text, title_main, title_highlight, description, video_url, step1_title, step1_bullet1, step1_bullet2, theme_color_primary)
VALUES (
    'demo-ia',
    'Clase Exclusiva de TikTok',
    'Cómo Crear Productos con IA',
    'Ciclo Completo',
    'Sin registros ni rodeos. Aprende el framework exacto que usamos para lanzar productos digitales en tiempo récord.',
    'https://www.tella.tv/video/creacion-de-productos-con-ia-4p5u/embed',
    'Clase Gratuita: Validación y Prototipado',
    'Valida ideas con IA sin costo',
    'Prototipa rápido tu solución',
    'labora-neon'
) ON CONFLICT (slug) DO NOTHING;
