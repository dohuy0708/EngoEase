import React from 'react';

export default function CategoryCard({ 
  title, 
  image, 
  learned, 
  total, 
  setView, 
  setSelectedCategory 
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-4 space-y-2">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <img 
        src={image} 
        alt={title} 
        className="w-48 h-36 object-cover rounded-md"
      />
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <svg className="w-4 h-4 text-main" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>Learned: {learned}/{total}</span>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 text-main border border-main rounded-md hover:bg-cyan-50">
            Quiz
          </button>
          <button 
            onClick={() => {
              setView('wordList');
              setSelectedCategory(title);
            }}
            className="flex-1 px-4 py-2 text-white bg-main rounded-md hover:bg-cyan-600"
          >
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}