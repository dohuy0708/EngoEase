import { ArrowLeftIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const mockWords = [
  {
    id: 1,
    word: 'squirrel',
    pronunciation: '/skwɪrəl/',
    translation: 'sóc',
    image: '/animal.png',
    example: 'The squirrel is collecting nuts for winter.',
    explanation: 'A small animal with a long furry tail that lives in trees and eats nuts.',
    status: 'new',
  },
  // Thêm các từ khác vào đây
];

export default function LearningView({ category, onBack }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learningProgress, setLearningProgress] = useState({
    new: 10,
    learning: 2,
    known: 2,
  });

  const currentWord = mockWords[currentWordIndex];

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleStopLearning = () => {
    onBack();
  };

  const playPronunciation = () => {
    console.log('Playing pronunciation');
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-main">{category}</h1>
        <button
          onClick={onBack}
          className="text-main text-2xl hover:text-cyan-600 flex items-center"
        >
          <ArrowLeftIcon className="h-5 mr-2 font-medium" />
          Other topic
        </button>
      </div>

      {/* Flashcard */}
      <div
        className="mb-8 cursor-pointer perspective-1000 flex justify-center"
        onClick={handleCardClick}
      >
        <div
          className={`relative transform-style-3d transition-transform duration-500 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ width: '946px', height: '480px' }} // Chiều rộng và chiều cao cố định
        >
          {/* Front of card */}
          <div
            className={`absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex flex-col ${
              isFlipped ? 'hidden' : 'block'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-red-200 text-red-600 px-3 py-1 rounded-full text-sm">
                New
              </span>
              <img
                src={currentWord.image}
                alt={currentWord.word}
                className="w-80 h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">{currentWord.word}</h2>
              <div className="flex flex-col  items-center justify-center space-y-2">
                <span className="text-gray-600">{currentWord.pronunciation}</span>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playPronunciation();
                  }}
                  className="text-main hover:text-cyan-600"
                >
                  <SpeakerWaveIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
           
            <button className=" py-2 px-14 align-middle text-white border mt-4 bg-main border-main rounded-lg hover:bg-cyan-600 self-center">
              Press to see explanation and example
            </button>
          </div>

          {/* Back of card */}
          <div
            className={`absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center ${
              isFlipped ? 'block' : 'hidden'
            } backface-hidden rotate-y-180`}
          >
           <div className="text-center">
  <h3 className="text-xl font-bold mb-4">{currentWord.translation}</h3>
  <div className="mb-4">
    <h4 className="font-semibold mb-2">Explanation:</h4>
    <p className="text-gray-600">{currentWord.explanation}</p>
  </div>
  <div>
    <h4 className="font-semibold mb-2">Example:</h4>
    <p className="text-gray-600">{currentWord.example}</p>
  </div>

  {/* 3 nút lựa chọn */}
  <div className="mt-10 absolute bottom-10 left-1/2 right-1/2 flex justify-center space-x-4">
    <button
      className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
    >
      Learning
    </button>
    <button
      className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Known
    </button>
    <button
      className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
    >
      Mark
    </button>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between max-w-[946px] mx-auto">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            <span>{learningProgress.new} New</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
            <span>{learningProgress.learning} Learning</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <span>{learningProgress.known} Known</span>
          </div>
        </div>
        <div className="flex space-x-4">
        <button
          onClick={handleStopLearning}
          className="px-4 py-2 bg-main text-white rounded-md hover:bg-cyan-600"
        >
          Stop learning
        </button>
        <button
          
          className="px-10 py-2 bg-main text-white rounded-md hover:bg-cyan-600"
        >
          Next
        </button>
        </div>
      </div>
    </div>
  );
}
