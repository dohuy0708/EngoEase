import React, { useState } from "react";
import CategoryGrid from "./partials/CategoryGrid";
import WordLearningView from "./partials/WordLearningView ";
import LearningView from "./partials/LearningView";
import './vocab.css'
import QuizView from "./partials/QuizView";
export default function Vocabulary() {
  const [activeTab, setActiveTab] = useState("Common");
  const [view, setView] = useState('grid'); // 'grid' hoặc 'learning'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = {
    Common: [
        {
          id: 1,
          title: 'Animals',
          image: '/animal.png',
          learned: 10,
          total: 20
        },
        {
          id: 2,
          title: 'Flowers',
          image: '/flower.png',
          learned: 10,
          total: 20
        },
        {
          id: 3,
          title: 'Foods',
          image: '/food.png',
          learned: 10,
          total: 20
        },
        {
          id: 4,
          title: 'Technology',
          image: '/technology.png',
          learned: 10,
          total: 20
        },
        {
          id: 5,
          title: 'Music',
          image: '/music.png',
          learned: 10,
          total: 20
        },
        {
          id: 6,
          title: 'Health',
          image: '/health.png',
          learned: 10,
          total: 20
        },
        {
          id: 7,
          title: 'Sports',
          image: '/sport.png',
          learned: 10,
          total: 20
        },
        {
          id: 8,
          title: 'Family',
          image: '/family.png',
          learned: 10,
          total: 20
        }
    ],
    IELTS: [
      { id: 3, title: 'Academic Words', image: '/academic.png', learned: 15, total: 30 },
      { id: 4, title: 'Writing Topics', image: '/writing.png', learned: 5, total: 20 },
    ],
    TOEIC: [
      { id: 5, title: 'Business', image: '/business.png', learned: 8, total: 25 },
      { id: 6, title: 'Office', image: '/office.png', learned: 12, total: 20 },
    ],
    "My Vocabulary": [
      { id: 7, title: 'Favorites', image: '/favorites.png', learned: 20, total: 25 },
      { id: 8, title: 'Reviewed', image: '/reviewed.png', learned: 18, total: 20 },
    ],
  };
  return (
    <div className="min-h-screen mx-auto w-bigcard">
      {view === 'grid' ? (
        <>
          <div className="flex fix mb-6 mt-2">
            {Object.keys(categories).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mx-4 py-2 text-2xl font-medium relative ${
                  activeTab === tab
                    ? "text-main after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-main"
                    : "text-[#2D3436] hover:text-main"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <CategoryGrid 
            categories={categories[activeTab]} 
            setView={setView} 
            setSelectedCategory={setSelectedCategory}
          />
        </>
      ) : view === 'wordList' ? (
        <WordLearningView 
          category={selectedCategory}
          onBack={() => setView('grid')}
          onStartLearning={() => setView('learning')}
          onStartQuiz={() => setView('quiz')}
        />
      ):view === 'learning' ? (
        <LearningView
        category={selectedCategory}
          onBack={() => setView('wordList')}
        />
      ): (
        <QuizView
          onBack={() => setView('wordList')}
        />)}
    </div>
  );
}