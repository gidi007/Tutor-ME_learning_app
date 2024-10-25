import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Layout, 
  BookOpen, 
  Calendar, 
  Users, 
  BarChart, 
  Settings,
  LogOut
} from 'lucide-react';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: Layout },
  { name: 'Courses', href: '/dashboard/courses', icon: BookOpen },
  { name: 'Schedule', href: '/dashboard/schedule', icon: Calendar },
  { name: 'Tutors', href: '/dashboard/tutors', icon: Users },
  { name: 'Progress', href: '/dashboard/progress', icon: BarChart },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">TutorME</span>
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user?.profileImage}
                    alt={user?.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">{user?.name}</p>
                    <p className="text-xs font-medium text-gray-500">{user?.role}</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="ml-auto flex items-center justify-center h-8 w-8 rounded-full text-gray-400 hover:text-gray-500"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}