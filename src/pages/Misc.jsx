import React from 'react';
import { misc } from '../data';

const Misc = () => {
  // We can group all sections to render them dynamically or explicitly.
  const sections = [
    { key: 'sports', data: misc.sports },
    { key: 'volunteering', data: misc.volunteering },
    { key: 'hobbies', data: misc.hobbies },
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Miscellaneous</h1>
        <p className="text-gray-600 font-light">Extracurricular activities, hobbies, side interests</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.key} className="flex flex-col gap-8">
            {section.data.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-300 w-full mb-4 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-bold tracking-widest text-foreground uppercase mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 font-light">{item.subtitle}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Misc;
