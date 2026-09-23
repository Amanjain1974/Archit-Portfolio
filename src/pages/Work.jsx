import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Work = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Projects</h1>
        <p className="text-gray-600 font-light">Click any project to view details, video walkthrough & technical plans</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, idx) => {
          // Stagger the grid slightly on desktop, as seen in the design where project 3 & 6 are on the right and taller maybe?
          // The design just shows a 2 column grid where some items are offset or different heights. 
          // We'll use a simple masonry-like or staggered margin for the second column.
          const isEven = idx % 2 === 1;
          return (
            <Link to={`/work/${project.id}`} key={project.id} className={`block group ${isEven ? 'md:mt-24' : ''}`}>
              <div className="aspect-[4/3] bg-gray-300 w-full mb-4 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">{project.title.toUpperCase()}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
