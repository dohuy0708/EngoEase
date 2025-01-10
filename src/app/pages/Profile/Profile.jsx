import React from 'react';
import { Flame } from 'lucide-react';

const LearningProfile = () => {
  // Mock data
  const streakDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const activeStreak = 3; // First 3 days are active
  
  const dailyGoals = [
    { label: 'Số từ đã học', current: 6, total: 10 },
    { label: 'Bài đã làm', current: 8, total: 10 },
    { label: 'Video đã xem', current: 4, total: 10 },
  ];

  const achievements = [
    { icon: '🔥', label: 'Days streak', value: '12' },
    { icon: '📚', label: 'Từ vựng', value: '123' },
    { icon: '📖', label: 'Bài ngữ pháp', value: '5' },
    { icon: '✅', label: 'Bài test', value: '8' },
  ];

  return (
    <div className="w-[946px] mx-auto p-6 space-y-6 bg-white">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="/flower.png"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-gray-100"
          />
          <div className="absolute -bottom-1 -right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
            🇻🇳
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">Huy Hoàng</h1>
          <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
            Level: A1
          </div>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 grid grid-cols-7 gap-2">
            {streakDays.map((day, index) => (
              <div key={day} className="text-center">
                {index < activeStreak ? (
                  <div className="mb-1">
                    <Flame className="w-6 h-6 text-orange-500 mx-auto" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 mb-1 mx-auto" />
                )}
                <span className="text-xs text-gray-500">{day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2 ml-4 px-4 border-l border-gray-200">
            <span className="text-2xl font-bold text-orange-500">12</span>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Day</span>
              <span className="text-sm text-gray-500">Streak</span>
            </div>
            <Flame className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Daily Goals */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Mục tiêu hôm nay</h2>
        <div className="bg-white rounded-lg shadow p-4 space-y-4">
          {dailyGoals.map((goal) => (
            <div key={goal.label} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{goal.label}</span>
                <span className="text-gray-500">
                  {goal.current}/{goal.total}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 rounded-full transition-all duration-300"
                  style={{ width: `${(goal.current / goal.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Thành tích</h2>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.label}
              className="bg-white rounded-lg shadow p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{achievement.icon}</span>
              <div>
                <div className="font-semibold text-xl">{achievement.value}</div>
                <div className="text-sm text-gray-500">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningProfile;