import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../constants';
import ProjectCard from './ProjectCard';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ProjectsListProps {
  onWatchPreview: (url: string) => void;
}

export default function ProjectsList({ onWatchPreview }: ProjectsListProps) {
  return (
    <section id="projects" className="py-0 overflow-hidden bg-[#151927]">
      <motion.div 
        className="flex flex-col w-full"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onWatchPreview={onWatchPreview} 
          />
        ))}
      </motion.div>
    </section>
  );
}
