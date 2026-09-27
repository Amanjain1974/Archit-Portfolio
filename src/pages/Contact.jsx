import React from 'react';
import { profileInfo } from '../data';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 uppercase text-center">Get in touch</h1>
      
      <a href={`mailto:${profileInfo.email}`} className="text-xl md:text-2xl text-accent hover:opacity-80 transition-opacity mb-8">
        {profileInfo.email}
      </a>
      
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 font-light mb-8">
        <a href={`tel:${profileInfo.phone}`} className="hover:text-foreground transition-colors">{profileInfo.phone}</a>
        <span>·</span>
        <a href={`https://${profileInfo.website}`} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">{profileInfo.website}</a>
        <span>·</span>
        <span className="text-gray-400">{profileInfo.location}</span>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 font-light">
        <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        <span>·</span>
        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
        <span>·</span>
        <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
