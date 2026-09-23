import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data';
import { Play } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/work" />;
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 uppercase">{project.title}</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-300 pb-8">
          <div>
            <h4 className="text-xs font-bold text-accent mb-1 tracking-widest uppercase">Category</h4>
            <p className="text-gray-600">{project.category}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-accent mb-1 tracking-widest uppercase">Year</h4>
            <p className="text-gray-600">{project.year}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-accent mb-1 tracking-widest uppercase">Tools</h4>
            <p className="text-gray-600">{project.tools}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-accent mb-1 tracking-widest uppercase">Duration</h4>
            <p className="text-gray-600">{project.duration}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="aspect-[4/3] bg-gray-300 relative group overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <span className="text-white text-xs font-bold tracking-widest uppercase opacity-70">Project Image</span>
          </div>
        </div>
        <div className="aspect-[4/3] bg-gradient-to-br from-heroStart to-heroEnd relative flex flex-col items-center justify-center group cursor-pointer">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg transition-transform group-hover:scale-110">
            <Play className="w-6 h-6 text-heroStart ml-1" />
          </div>
          <span className="text-white text-xs font-bold tracking-widest uppercase">Related Video</span>
        </div>
      </div>

      {project.plans && project.plans.length > 0 && (
        <div>
          <h3 className="text-sm font-bold tracking-widest mb-6 uppercase">Technical Plans / Documentation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.plans.map(plan => (
              <div key={plan.id} className="aspect-[4/3] bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                 <span className="text-gray-400 text-xs font-medium tracking-widest uppercase">{plan.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
