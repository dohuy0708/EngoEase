import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';


// Mock data for the words
const wordsList = [
  { id: 1, word: 'ant', pronunciation: '/ænt/', translation: 'kiến', status: 'new' },
  { id: 2, word: 'bear', pronunciation: '/beər/', translation: 'gấu', status: 'learning' },
  { id: 3, word: 'cat', pronunciation: '/kæt/', translation: 'mèo', status: 'known' },
  { id: 4, word: 'dog', pronunciation: '/dɒɡ/', translation: 'chó', status: 'new' },
  { id: 5, word: 'elephant', pronunciation: '/ˈelɪfənt/', translation: 'voi', status: 'marked' },
  { id: 6, word: 'fox', pronunciation: '/fɒks/', translation: 'cáo', status: 'learning' },
];

const WordLearningView = ({ category = "Animals", onBack ,onStartLearning,onStartQuiz}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', count: 20, background: 'bg-cyan-100',color: 'text-main' },
    { id: 'new', label: 'New', count: 10, background: 'bg-red-100',color: 'text-new' },
    { id: 'learning', label: 'Learning', count: 7, background: 'bg-yellow-100',color: 'text-learning' },
    { id: 'known', label: 'Known', count: 3, background: 'bg-green-100',color: 'text-known' },
    { id: 'marked', label: 'Marked', count: 6, background: 'bg-pink-100',color: 'text-pink-600' },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-main">{category}</h1>
          <button 
            onClick={onBack}
            className="text-main text-2xl hover:text-cyan-600 flex items-center"
          >
      <ArrowLeftIcon className='h-5 mr-2 font-medium'/>
            Other topic
          </button>
      </div>

      <div className="mb-6  rounded-lg shadow">
        <h2 className="text-xl text-main font-medium m-4 pt-2">Word list</h2>
        <div className="flex space-x-4 justify-around mb-6">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`${
                activeFilter === filter.id ? filter.background : 'bg-gray-100 text-gray-600' 
              } ${filter.color} px-10 py-4 w-[156px] h-[84px] rounded-lg flex flex-col items-center transition-colors text-lg font-semibold`}
            >
              <span>{filter.label}</span>
              <span className="font-medium">{filter.count}</span>
            </button>
          ))}
        </div>

        <div className="bg-white">
          {wordsList.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-center py-4 px-6 ${
                index !== wordsList.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex-1">{item.word}</div>
              <div className="flex-1 text-gray-500">{item.pronunciation}</div>
              <div className="flex-1">{item.translation}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-24">
        <button className="px-16 py-2 text-main border border-main rounded-md hover:bg-cyan-50"
        onClick={onStartQuiz}>
          Quiz
        </button>
        <button className="px-16 py-2 text-white bg-main rounded-md hover:bg-cyan-600"
          onClick={() => onStartLearning()}>
          Learn
        </button>
      </div>
    </div>
  );
};

export default WordLearningView;