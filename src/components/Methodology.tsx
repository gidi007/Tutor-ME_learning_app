import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Assessment',
    description: 'Comprehensive evaluation of learning style, goals, and current proficiency levels.'
  },
  {
    number: '02',
    title: 'Customization',
    description: 'AI-driven creation of personalized curriculum and learning pathways.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Expert-guided execution of tailored educational programs.'
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous refinement based on performance analytics and feedback.'
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Sophisticated Approach
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A meticulously crafted methodology combining advanced analytics with personalized attention.
            </p>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start">
                  <span className="flex-shrink-0 text-2xl font-bold text-indigo-600 mr-4">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition group">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Educational Excellence"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-[2px]"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-indigo-600 mb-1">94%</div>
              <div className="text-gray-600">Achievement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}