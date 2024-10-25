import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614029951470-ef9eb9952569')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center">
        <Sparkles className="h-12 w-12 text-indigo-400 mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="block">Cultivating Excellence</span>
          <span className="block text-indigo-400">Through Personalized Education</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10">
          Experience a revolutionary approach to education where artificial intelligence meets exceptional tutoring, creating uniquely tailored learning journeys.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition transform hover:scale-105">
            Begin Your Journey
          </button>
          <button className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition transform hover:scale-105 backdrop-blur-sm">
            Explore Methodology
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            ['Harvard', 'Mentors'],
            ['Oxford', 'Educators'],
            ['MIT', 'Curriculum'],
            ['Stanford', 'Research']
          ].map(([institution, type]) => (
            <div key={institution} className="text-center">
              <div className="text-white/90 font-light">{type}</div>
              <div className="text-indigo-400 font-semibold">{institution}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}