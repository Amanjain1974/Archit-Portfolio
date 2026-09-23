import React from 'react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-background flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 uppercase text-center">Get in touch</h1>
      
      <a href="mailto:youremail@email.com" className="text-xl md:text-2xl text-accent hover:opacity-80 transition-opacity mb-8">
        youremail@email.com
      </a>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 font-light">
        <a href="#" className="hover:text-foreground transition-colors">Phone</a>
        <span>·</span>
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
