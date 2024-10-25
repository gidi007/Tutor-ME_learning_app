import React from 'react';
import { Brain, Target, Video, Calendar, LineChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Proprietary algorithms craft personalized learning paths adapted to individual cognitive patterns.'
  },
  {
    icon: Target,
    title: 'Precision Education',
    description: 'Targeted instruction methodologies designed to accelerate mastery of complex subjects.'
  },
  {
    icon: Video,
    title: 'Private Sessions',
    description: 'One-on-one virtual instruction with distinguished educators from prestigious institutions.'
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Seamless scheduling system adapting to your global lifestyle and commitments.'
  },
  {
    icon: LineChart,
    title: 'Progress Analytics',
    description: 'Advanced metrics and detailed insights tracking developmental milestones.'
  },
  {
    icon: Shield,
    title: 'Curated Excellence',
    description: 'Rigorous vetting process ensuring only exceptional educators join our network.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Redefining Educational Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with time-honored educational principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}