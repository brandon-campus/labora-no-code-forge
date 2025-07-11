import React from 'react';
import { 
  Home, 
  BookOpen, 
  Briefcase, 
  Users, 
  User, 
  HelpCircle,
  LogOut,
  Menu,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { CampusSection } from '@/pages/Campus';

interface CampusSidebarProps {
  activeSection: CampusSection;
  onSectionChange: (section: CampusSection) => void;
  onLogout?: () => void;
}

const menuItems = [
  { id: 'dashboard' as CampusSection, title: 'Dashboard', icon: Home },
  { id: 'modules' as CampusSection, title: 'Módulos', icon: BookOpen },
  { id: 'project' as CampusSection, title: 'Mi Proyecto', icon: Briefcase },
  { id: 'community' as CampusSection, title: 'Comunidad', icon: Users },
  { id: 'profile' as CampusSection, title: 'Mi Perfil', icon: User },
  { id: 'support' as CampusSection, title: 'Soporte', icon: HelpCircle },
];

export function CampusSidebar({ activeSection, onSectionChange, onLogout }: CampusSidebarProps) {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"}>
      {/* Botón flotante siempre visible */}
      <button
        className={`fixed top-4 z-50 bg-gray-900/80 border border-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-800 transition-all ${collapsed ? 'left-4' : 'left-60'}`}
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
        onClick={toggleSidebar}
        aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      >
        {collapsed ? <ChevronRight className="h-5 w-5 text-labora-neon" /> : <ChevronLeft className="h-5 w-5 text-labora-neon" />}
      </button>
      <div className="flex flex-col h-screen bg-gray-900 border-r border-gray-800 relative">
        <SidebarContent className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-labora-neon rounded-lg flex items-center justify-center">
              <span className="text-labora-dark font-bold text-sm">L</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-white font-bold text-lg">Labora AI</h1>
                <p className="text-gray-400 text-xs">Campus Virtual</p>
              </div>
            )}
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider">
            Navegación
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full justify-start ${
                      activeSection === item.id
                        ? 'bg-labora-red text-white hover:bg-labora-red/90'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
        <div className="p-4 border-t border-gray-800 mt-0">
          <button
            onClick={onLogout}
            className="flex items-center w-full text-left text-gray-400 hover:text-labora-red transition-colors py-2"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </Sidebar>
  );
}