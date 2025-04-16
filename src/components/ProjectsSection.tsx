import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 