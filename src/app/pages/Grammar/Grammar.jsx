import React, { useState } from "react";
import LessonDetail from "./partials/LessionDetails";
import Quiz from "./partials/Quiz";

const grammarLessons = [
  {
    id: 1,
    title: "Adjectives",
    description: "Words that describe or modify nouns and pronouns.",
  },
  {
    id: 2,
    title: "Adverbs",
    description:
      "Words and phrases that modify other words, giving information about place, time, frequency, manner, degree, etc.",
  },
  {
    id: 3,
    title: "Verbs: Present",
    description:
      "The use and form of the present tense and some useful verbs in the present.",
  },
  {
    id: 4,
    title: "Verbs: Past",
    description:
      "The use, form, and meaning of past verb structures and some useful verbs in the past.",
  },
  {
    id: 5,
    title: "Verbs: Future",
    description:
      "The use, form, and meaning of future verb structures and some useful verbs in the future.",
  },
  {
    id: 6,
    title: "Verbs: Conditional",
    description:
      "Practice expressing conditions and results in the present and the past.",
  },
];

const Grammar = () => {
  const [view, setView] = useState('grid'); // 'grid', 'learning', 'quiz'
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonClick = (lessonId) => {
    const selected = grammarLessons.find((lesson) => lesson.id === lessonId);
    setSelectedLesson(selected);
    setView('learning');
  };
  return (
    <div className="min-h-screen w-[946px] mx-auto px-4 py-6">

      {view === 'grid' ? (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-main mb-6">Ngữ pháp</h1>
          {grammarLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:bg-main hover:text-white cursor-pointer"
              onClick={() => handleLessonClick(lesson.id)}
            >
              <div>
                <h2 className="text-lg font-semibold">{lesson.title}</h2>
                <p className="text-sm">{lesson.description}</p>
              </div>
              <div className="text-xl">➔</div>
            </div>
          ))}
        </div>
      ) : view === 'learning' ? (
       <LessonDetail id={selectedLesson.id} onBack={()=>setView('grid') } toPractice={()=>setView('quiz')}/>
      ) : (
       <Quiz title={selectedLesson.title} onBack={()=>setView('grid') }/>
      )}
    </div>
  );
};

export default Grammar;
