import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import CurriculumSection from '@/components/CurriculumSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <CurriculumSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  );
} 