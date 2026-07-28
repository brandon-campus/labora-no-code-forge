CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.cohortes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    numero INTEGER NOT NULL,
    estado TEXT CHECK (estado IN ('activa', 'cerrada')) NOT NULL,
    fecha_inicio TEXT,
    semanas_duracion TEXT,
    horario TEXT,
    plazas_totales INTEGER,
    fecha_bienvenida TEXT,
    promocion_texto_banner TEXT,
    promocion_texto_badge TEXT,
    promocion_vigencia_hasta DATE,
    precios_regionales JSONB,
    temario JSONB,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_by TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS only_one_active_cohorte ON public.cohortes (estado) WHERE estado = 'activa';
