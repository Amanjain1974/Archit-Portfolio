import React from 'react';
import { achievements } from '../data';

const Achievements = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Achievements</h1>
        <p className="text-gray-600 font-light mb-16">Awards, certifications, competition wins, publications</p>

        <div className="flex flex-col">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-16 py-8 border-b border-gray-300">
              <div className="w-24 text-accent font-bold">
                {item.year}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 font-light text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
