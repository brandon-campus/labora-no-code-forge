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

export type CampusSection = 'dashboard' | 'modules' | 'project' | 'community' | 'profile' | 'support';

const Campus = () => {
  const [activeSection, setActiveSection] = useState<CampusSection>('dashboard');

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

  return (
    <div className="min-h-screen bg-labora-dark">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CampusSidebar 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          
          <div className="flex-1 flex flex-col">
            <CampusHeader />
            
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              {renderContent()}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Campus;