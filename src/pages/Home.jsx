import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Home = () => {
  const selectedProjects = projects.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen w-full bg-gradient-to-br from-heroStart to-heroEnd flex flex-col justify-end p-6 md:p-12 lg:p-20 text-white relative">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">YOUR NAME</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">Tagline / Field of Work</p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm opacity-70">
          <div className="w-2 h-2 bg-white rounded-sm"></div>
          <span>SCROLL</span>
        </div>
      </section>

      {/* Selected Projects Strip */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-background text-foreground">
        <h2 className="text-sm font-bold tracking-widest mb-8 uppercase">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedProjects.map((project) => (
            <Link to={`/work/${project.id}`} key={project.id} className="block group">
              <div className="aspect-[4/3] bg-gray-300 w-full mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
