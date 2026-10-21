-- =========================================================
-- 1) Eliminar tablas que ya no se usan en labora.ar
--    (respaldo completo en el esquema "respaldo")
-- =========================================================
drop table if exists public.progreso_modulo;
drop table if exists public.community_activities;
drop table if exists public.modulos;
drop table if exists public.perfiles_curso_on_demand;
drop table if exists public.lecciones_curso_on_demand;
drop table if exists public.leads;
drop table if exists public.aplicaciones_bootcamp;

-- =========================================================
-- 2) Helper: ¿el usuario logueado es admin?
-- =========================================================
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

-- =========================================================
-- 3) Cerrar la escalada a admin en profiles
--    Nadie puede asignarse ni cambiarse el rol desde la app.
--    Solo un admin, o el SQL Editor / service role (sin auth.uid()).
-- =========================================================
create or replace function public.proteger_rol_profiles()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    return new;  -- SQL Editor, service role, procesos del servidor
  end if;

  if tg_op = 'INSERT' and new.role is not null and not public.is_admin() then
    raise exception 'No autorizado a asignar rol';
  end if;

  if tg_op = 'UPDATE' and new.role is distinct from old.role and not public.is_admin() then
    raise exception 'No autorizado a cambiar el rol';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_proteger_rol_profiles on public.profiles;
create trigger trg_proteger_rol_profiles
  before insert or update on public.profiles
  for each row execute function public.proteger_rol_profiles();

-- La política de update debe validar también la fila resultante
drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- =========================================================
-- 4) cohortes: lectura pública, edición solo admin
-- =========================================================
alter table public.cohortes enable row level security;

drop policy if exists "cohortes lectura publica" on public.cohortes;
create policy "cohortes lectura publica" on public.cohortes
  for select using (true);

drop policy if exists "cohortes admin" on public.cohortes;
create policy "cohortes admin" on public.cohortes
  for all using (public.is_admin()) with check (public.is_admin());

-- =========================================================
-- 5) lead_magnets: lectura pública, edición solo admin
--    (antes cualquier usuario logueado podía editar/borrar)
-- =========================================================
drop policy if exists "Permitir full access a autenticados en lead_magnets" on public.lead_magnets;

drop policy if exists "lead_magnets admin" on public.lead_magnets;
create policy "lead_magnets admin" on public.lead_magnets
  for all using (public.is_admin()) with check (public.is_admin());
-- Se mantiene "Permitir lectura publica de lead_magnets" (select para todos)

-- =========================================================
-- 6) Eliminar las cuentas externas
-- =========================================================
delete from public.profiles
where id in (
  select id from auth.users
  where email like '%@%.oastify.com'
     or email = 'test_hacker_auditoria@yopmail.com'
);

delete from auth.users
where email like '%@%.oastify.com'
   or email = 'test_hacker_auditoria@yopmail.com';
