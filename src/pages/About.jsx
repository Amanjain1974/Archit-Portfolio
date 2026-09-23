import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Photo Section */}
        <div className="aspect-[3/4] bg-gradient-to-br from-heroStart to-heroEnd relative flex flex-col items-center justify-center">
          <span className="text-white text-xs font-bold tracking-widest uppercase">Photo</span>
        </div>
        
        {/* About Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 uppercase">About Me</h1>
          
          <p className="text-gray-600 font-light leading-relaxed mb-12 max-w-md">
            A short introduction about who you are, your background, interests and what drives your work — 3 to 4 lines is enough.
          </p>
          
          <hr className="border-gray-300 mb-10" />

          <div>
            <h3 className="text-xs font-bold text-accent mb-6 tracking-widest uppercase">Education</h3>
            
            <div className="mb-6">
              <h4 className="text-gray-700 font-medium mb-1">Degree / Course — Institution, Year</h4>
              <p className="text-gray-500 font-light text-sm">School — Year</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
