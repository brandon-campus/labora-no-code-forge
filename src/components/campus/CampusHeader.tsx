import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function CampusHeader() {
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

          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-labora-neon text-labora-dark text-sm font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-white text-sm font-medium">Juan Estudiante</p>
              <p className="text-gray-400 text-xs">Cohorte #12</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}