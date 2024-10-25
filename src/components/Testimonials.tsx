import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexandra Richardson',
    role: 'Parent & Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'The personalized approach and elite tutoring have transformed my daughter\'s academic journey. The results speak for themselves.',
    institution: 'Child attending Stanford'
  },
  {
    name: 'Jonathan Chen',
    role: 'Student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    content: 'The AI-driven learning paths and exceptional mentors helped me achieve perfect scores in advanced mathematics and physics.',
    institution: 'Accepted to MIT'
  },
  {
    name: 'Victoria Hughes',
    role: 'Education Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    content: 'A revolutionary platform that truly understands the needs of ambitious students. The results consistently exceed expectations.',
    institution: 'Former Oxford Fellow'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Excellence Speaks
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our approach has transformed educational journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 relative group hover:transform hover:scale-105 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-indigo-400 opacity-50" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-indigo-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
              <div className="text-sm text-indigo-400 font-semibold">
                {testimonial.institution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}