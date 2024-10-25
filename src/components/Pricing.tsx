import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Advanced',
    description: 'Personalized learning for ambitious students',
    price: '2,499',
    features: [
      'AI-Driven Learning Assessment',
      'Personalized Study Plans',
      'Weekly One-on-One Sessions',
      'Progress Analytics Dashboard',
      'Access to Digital Resources',
      'Email Support'
    ]
  },
  {
    name: 'Elite',
    description: 'Comprehensive excellence program',
    price: '4,999',
    featured: true,
    features: [
      'Everything in Advanced, plus:',
      'Daily One-on-One Sessions',
      'Ivy League Mentor Network',
      'Custom Curriculum Design',
      'College Application Support',
      '24/7 Priority Support'
    ]
  },
  {
    name: 'Bespoke',
    description: 'Ultimate personalized experience',
    price: 'Custom',
    features: [
      'Everything in Elite, plus:',
      'Multiple Subject Coverage',
      'Global Mentor Selection',
      'Family Education Concierge',
      'International Learning Plans',
      'Lifetime Portfolio Building'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment in Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the program that aligns with your educational aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl ${
                tier.featured
                  ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 ring-opacity-50'
                  : 'bg-gray-50 text-gray-900'
              } p-8 shadow-lg hover:transform hover:scale-105 transition-all duration-300`}
            >
              {tier.featured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-indigo-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className={tier.featured ? 'text-indigo-200' : 'text-gray-600'}>
                  {tier.description}
                </p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className={`${tier.featured ? 'text-indigo-200' : 'text-gray-600'} ml-2`}>
                  /month
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={`h-6 w-6 ${tier.featured ? 'text-indigo-200' : 'text-indigo-600'} mr-2`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-full text-center font-semibold ${
                  tier.featured
                    ? 'bg-white text-indigo-600 hover:bg-gray-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}