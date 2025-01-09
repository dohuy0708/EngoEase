// File: src/app/pages/Vocabulary/partials/QuizView/index.jsx
import React, { useState } from 'react';
import TypeQuestion from './TypeQuestion';
import MatchingQuestion from './MatchingQuestion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const mockQuizData = [
  {
    id: 1,
    type: 'type',
    word: 'squirrel',
    image: '/squirrel.jpg',
    hint: 'a small animal covered in fur with a long tail. Squirrels climb trees and feed on nuts and seeds.',
    answer: 'squirrel'
  },
  {
    id: 2,
    type: 'matching',
    pairs: [
      { id: 1, word: 'squirrel', meaning: 'con sóc' },
      { id: 2, word: 'rabbit', meaning: 'con thỏ' },
      { id: 3, word: 'deer', meaning: 'con hươu' },
    ]
  },
  // Thêm các câu hỏi khác...
];

export default function QuizView({ onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = mockQuizData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / mockQuizData.length) * 100;

  const handleAnswer = (answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < mockQuizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className=" p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
             <h1 className="text-2xl font-semibold text-main">Animals</h1>
             <button
               onClick={onBack}
               className="text-main text-2xl hover:text-cyan-600 flex items-center"
             >
               <ArrowLeftIcon className="h-5 mr-2 font-medium" />
               Other topic
             </button>
           </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div 
          className="h-full bg-main rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-lg  h-[450px] p-6 mb-8">
        {currentQuestion.type === 'type' ? (
          <TypeQuestion
            question={currentQuestion}
            userAnswer={userAnswers[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        ) : (
          <MatchingQuestion
            pairs={currentQuestion.pairs}
            onAnswer={handleAnswer}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          className={`px-4 py-2 text-main border border-main rounded-md hover:bg-cyan-50 
            ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-main text-white rounded-md hover:bg-cyan-600"
          disabled={!userAnswers[currentQuestionIndex]}
        >
          {currentQuestionIndex === mockQuizData.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
