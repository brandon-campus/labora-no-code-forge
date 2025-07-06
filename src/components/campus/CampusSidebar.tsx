import React from 'react';
import { 
  Home, 
  BookOpen, 
  Briefcase, 
  Users, 
  User, 
  HelpCircle
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
}

const menuItems = [
  { id: 'dashboard' as CampusSection, title: 'Dashboard', icon: Home },
  { id: 'modules' as CampusSection, title: 'Módulos', icon: BookOpen },
  { id: 'project' as CampusSection, title: 'Mi Proyecto', icon: Briefcase },
  { id: 'community' as CampusSection, title: 'Comunidad', icon: Users },
  { id: 'profile' as CampusSection, title: 'Mi Perfil', icon: User },
  { id: 'support' as CampusSection, title: 'Soporte', icon: HelpCircle },
];

export function CampusSidebar({ activeSection, onSectionChange }: CampusSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"}>
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent className="bg-gray-900 border-r border-gray-800">
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
    </Sidebar>
  );
}