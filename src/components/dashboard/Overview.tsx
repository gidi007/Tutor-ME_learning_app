import React from 'react';
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Award,
  Calendar,
  Users
} from 'lucide-react';

const stats = [
  { name: 'Active Courses', value: '4', icon: BookOpen, change: '+2', trend: 'up' },
  { name: 'Study Hours', value: '24.5', icon: Clock, change: '+5.2', trend: 'up' },
  { name: 'Progress Rate', value: '94%', icon: TrendingUp, change: '+2.3%', trend: 'up' },
  { name: 'Achievements', value: '12', icon: Award, change: '+3', trend: 'up' },
];

const upcomingSessions = [
  {
    id: 1,
    subject: 'Advanced Calculus',
    tutor: 'Dr. Sarah Chen',
    time: 'Today, 3:00 PM',
    duration: '1h 30m'
  },
  {
    id: 2,
    subject: 'Physics',
    tutor: 'Prof. James Wilson',
    time: 'Tomorrow, 2:00 PM',
    duration: '2h'
  }
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="mt-1 text-sm text-gray-500">
          Track your educational progress and upcoming sessions
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Sessions</h3>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {session.subject}
                    </h4>
                    <p className="text-sm text-gray-500">with {session.tutor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{session.time}</p>
                    <p className="text-sm text-gray-500">{session.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Tutors */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Active Tutors</h3>
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Sarah Chen"
                />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Dr. Sarah Chen</h4>
                  <p className="text-sm text-gray-500">Advanced Mathematics</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Available
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="James Wilson"
                />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">Prof. James Wilson</h4>
                  <p className="text-sm text-gray-500">Physics</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    In Session
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}