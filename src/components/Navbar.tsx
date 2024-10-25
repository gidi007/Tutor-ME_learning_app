import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">TutorME</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
            <a href="#methodology" className="text-gray-700 hover:text-indigo-600 transition">Methodology</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Success Stories</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
              Join Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
            <a href="#methodology" className="block px-3 py-2 text-gray-700">Methodology</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700">Success Stories</a>
            <button className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-full">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}