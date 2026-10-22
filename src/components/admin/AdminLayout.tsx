import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { CalendarDays, ExternalLink, LayoutDashboard, Loader2, LogOut, Video } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { supabase } from '@/lib/supabaseClient';
import { SitePage } from '@/components/site/primitives';

const navItems = [
  { name: 'Inicio', path: '/admin', icon: LayoutDashboard },
  { name: 'Cohorte', path: '/admin/cohortes', icon: CalendarDays },
  { name: 'Clases', path: '/admin/clases', icon: Video },
];

export default function AdminLayout() {
  const { user, loading } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <SitePage>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary-container" />
        </div>
      </SitePage>
    );
  }

  if (!user) return null; // useAdminAuth redirige al login

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const isActive = (path: string) => (path === '/admin' ? location.pathname === '/admin' : location.pathname.startsWith(path));

  return (
    <SitePage>
      <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin h-16 flex items-center justify-between gap-space-md">
          <Link to="/admin" className="flex items-center gap-space-sm shrink-0">
            <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-7 w-auto object-contain" />
            <span className="text-badge-caps uppercase text-on-surface-variant border border-white/10 rounded-full px-2 py-0.5">Admin</span>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-container-low border border-white/[0.07] rounded-full p-1">
            {navItems.map(({ name, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-space-md py-1.5 rounded-full text-label-md transition-colors ${
                  isActive(path) ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <Icon className="w-4 h-4" /> {name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-space-sm">
            <a href="/" target="_blank" rel="noreferrer" className="hidden lg:inline-flex items-center gap-1.5 text-label-sm text-on-surface-variant hover:text-on-surface">
              Ver sitio <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="hidden lg:block w-px h-5 bg-white/10" />
            <span className="hidden lg:block text-body-sm text-on-surface-variant max-w-[200px] truncate">{user.email}</span>
            <button type="button" onClick={handleLogout} className="inline-flex items-center gap-1.5 text-label-sm text-on-surface-variant hover:text-on-surface rounded-full px-space-sm py-1.5 hover:bg-surface-container-high transition-colors">
              <LogOut className="w-4 h-4" /> <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin pt-space-lg pb-28 md:pb-space-xl">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-primary-container/10 to-transparent blur-3xl -z-10" />
        <Outlet />
      </main>

      {/* Navegación inferior en mobile (al alcance del pulgar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-xl border-t border-white/10 grid grid-cols-3">
        {navItems.map(({ name, path, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 py-2.5 text-label-sm transition-colors ${isActive(path) ? 'text-on-surface' : 'text-on-surface-variant'}`}
          >
            <span className={`w-10 h-7 rounded-full flex items-center justify-center ${isActive(path) ? 'bg-primary-container/20 text-primary' : ''}`}>
              <Icon className="w-5 h-5" />
            </span>
            {name}
          </Link>
        ))}
      </nav>
    </SitePage>
  );
}
