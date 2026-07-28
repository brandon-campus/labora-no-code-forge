import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { supabase } from '@/lib/supabaseClient';
import { LayoutDashboard, Users, Video, LogOut, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLayout() {
  const { user, loading } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-labora-neon" />
      </div>
    );
  }

  if (!user) return null; // handled by useAdminAuth redirect

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Hub', path: '/admin', icon: LayoutDashboard },
    { name: 'Cohortes', path: '/admin/cohortes', icon: Users },
    { name: 'Leads', path: '/admin/leads', icon: Users },
    { name: 'Clases', path: '/admin/clases', icon: Video },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/admin" className="flex items-center gap-2">
            <span className="font-black text-xl text-labora-neon tracking-tight">LABORA</span>
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Admin</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1 bg-gray-800 rounded-lg p-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-gray-700 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="h-6 w-px bg-gray-700 mx-2 hidden sm:block"></div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400 hidden md:block">{user.email}</span>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-400 hover:text-white hover:bg-gray-800">
                <LogOut className="w-4 h-4 mr-2" />
                Salir
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-labora-neon/5 rounded-full blur-[120px]"></div>
        </div>
        
        <Outlet />
      </main>
    </div>
  );
}
