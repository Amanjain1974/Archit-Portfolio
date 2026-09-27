import React from 'react';
import { profileInfo } from '../data';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Photo Section */}
        <div className="aspect-[3/4] bg-gray-200 relative flex flex-col items-center justify-center overflow-hidden">
          <img src="/profile.jpg" alt="Archit Gupta" className="w-full h-full object-cover" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block';}}/>
          <span className="hidden text-gray-400 text-xs font-bold tracking-widest uppercase">Photo</span>
        </div>
        
        {/* About Info Section */}
        <div className="flex flex-col justify-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 uppercase">About Me</h1>
          
          <p className="text-gray-600 font-light leading-relaxed mb-12 max-w-md">
            {profileInfo.bio}
          </p>
          
          <hr className="border-gray-300 mb-10" />

          <div className="mb-10">
            <h3 className="text-xs font-bold text-accent mb-6 tracking-widest uppercase">Education</h3>
            
            <div className="mb-6">
              <h4 className="text-gray-700 font-medium mb-1">Bachelor of Architecture — Poornima University</h4>
              <p className="text-gray-500 font-light text-sm">Present</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-gray-700 font-medium mb-1">Higher Secondary Education — Vidya Mandir Cooperative School</h4>
              <p className="text-gray-500 font-light text-sm">2021 - 2023</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-accent mb-6 tracking-widest uppercase">Experience</h3>
            
            <div className="mb-6">
              <h4 className="text-gray-700 font-medium mb-1">Student Collaborator — WRI INDIA</h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed max-w-md mt-2">
                Contributed to Site Execution and Tactical Urbanism initiatives, actively participating in project discussions and idea development. Gained practical exposure and on-ground implementation.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-700 font-medium mb-1">Dainik Bhaskar</h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed max-w-md mt-2">
                Contributed to urban infrastructure Redevelopment initiatives, with specific involvement in the Ajmeri Pulia Flyover, Jaipur. Gained practical exposure to site planning, infrastructure coordination, project development, and on-ground execution.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
