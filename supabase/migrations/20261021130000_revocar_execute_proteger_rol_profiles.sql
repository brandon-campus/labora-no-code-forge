-- La función del trigger no necesita ser invocable por RPC desde la API
revoke execute on function public.proteger_rol_profiles() from public, anon, authenticated;
