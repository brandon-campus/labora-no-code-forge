import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { CampusSidebar } from "@/components/campus/CampusSidebar";
import { CampusHeader } from "@/components/campus/CampusHeader";
import { Dashboard } from "@/components/campus/Dashboard";
import { ModulesSection } from "@/components/campus/ModulesSection";
import { ProjectSection } from "@/components/campus/ProjectSection";
import { CommunitySection } from "@/components/campus/CommunitySection";
import { ProfileSection } from "@/components/campus/ProfileSection";
import { SupportSection } from "@/components/campus/SupportSection";
import LoginRegister from '@/components/campus/LoginRegister';
import { supabase, ensureProfile } from "@/lib/supabaseClient";
import { useEffect } from "react";

export type CampusSection = 'dashboard' | 'modules' | 'project' | 'community' | 'profile' | 'support';

const Campus = () => {
  const [activeSection, setActiveSection] = useState<CampusSection>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Persistencia de sesión
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setIsAuthenticated(!!data.user);
    });
    // Escuchar cambios de sesión
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session?.user);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'modules':
        return <ModulesSection />;
      case 'project':
        return <ProjectSection />;
      case 'community':
        return <CommunitySection />;
      case 'profile':
        return <ProfileSection />;
      case 'support':
        return <SupportSection />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <LoginRegister onAuth={async () => {
      const { data } = await supabase.auth.getUser();
      await ensureProfile(data.user);
      setIsAuthenticated(true);
    }} />;
  }

  return (
    <div className="min-h-screen bg-labora-dark">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CampusSidebar 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            onLogout={async () => {
              await supabase.auth.signOut();
              setIsAuthenticated(false);
            }}
          />
          <div className="flex-1 flex flex-col">
            <CampusHeader />
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              {activeSection === 'dashboard' ? (
                <Dashboard onNavigate={section => {
                  if (section === 'modules') setActiveSection('modules');
                  else if (section === 'project') setActiveSection('project');
                  else if (section === 'community') setActiveSection('community');
                  else if (section === 'support') setActiveSection('support');
                  else if (section === 'profile') setActiveSection('profile');
                }} />
              ) : renderContent()}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Campus;