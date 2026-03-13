import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Settings,
    LogOut
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';

export default function AdminLayout() {
    const location = useLocation();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/login-curso';
    };

    const menuItems = [
        { title: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
        { title: 'Módulos', icon: BookOpen, path: '/admin/modules' },
        { title: 'Usuarios', icon: Users, path: '/admin/users' },
        { title: 'Configuración', icon: Settings, path: '/admin/settings' },
    ];

    return (
        <div className="flex min-h-screen bg-gray-950">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 border-r border-gray-800 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-800">
                    <h1 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="bg-labora-red p-1 rounded">LMS</span> Admin
                    </h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-labora-neon text-gray-900 font-bold'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        onClick={handleLogout}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Cerrar Sesión
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-10 md:hidden">
                    <h1 className="text-lg font-bold text-white">LMS Admin</h1>
                </header>
                <div className="p-6 md:p-10 max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
