import React, { useEffect, useState, useRef } from 'react';
import { Bell, Settings, ChevronDown, LogOut, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { supabase } from '@/lib/supabaseClient';

export function CampusHeader() {
  const [profile, setProfile] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: authData } = await supabase.auth.getUser();
      setUser(authData.user);
      const { data: prof } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authData.user.id)
        .single();
      setProfile(prof);
    };
    fetchProfile();
  }, []);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const fullName = profile?.full_name || user?.email || 'Alumno';
  const cohort = profile?.cohorte || '';
  const photoUrl = profile?.photo_url || '';
  const initials = fullName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-white text-xl md:text-2xl font-bold">
            Campus Virtual
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <Settings className="h-5 w-5" />
          </Button>

          <div className="relative" ref={menuRef}>
            <button
              className="flex items-center gap-2 focus:outline-none group"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Avatar className="h-9 w-9 border-2 border-labora-neon">
                <AvatarImage src={photoUrl} />
                <AvatarFallback className="bg-labora-neon text-labora-dark text-sm font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-white text-sm font-semibold leading-tight">¡Hola, {fullName.split(' ')[0]}!</p>
                <p className="text-gray-400 text-xs">Cohorte #{cohort}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-labora-neon group-hover:rotate-180 transition-transform" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg z-50 animate-fade-in-up">
                <button
                  className="w-full flex items-center gap-2 px-4 py-3 text-gray-200 hover:bg-gray-800"
                  onClick={() => { window.location.hash = '#profile'; setMenuOpen(false); }}
                >
                  <UserIcon className="h-4 w-4" /> Mi Perfil
                </button>
                <button
                  className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-gray-800"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" /> Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}