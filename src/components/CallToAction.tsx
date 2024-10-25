import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-indigo-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Begin Your Journey to Academic Excellence
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto">
          Join a select community of ambitious learners and experience education reimagined.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition group">
            <span>Schedule Consultation</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 transition">
            View Programs
          </button>
        </div>
      </div>
    </section>
  );
}