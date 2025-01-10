import React from "react";
import { useNavigate } from "react-router-dom";

const chapters = [
  {
    title: "Chương 1: Giới thiệu",
    progress: 75,
    lessons: [
      { id: 1, name: "Hello!", description: "Learn greetings for meeting", completed: true },
      { id: 2, name: "Introduce yourself", description: "Say your name", completed: false },
      { id: 3, name: "Asking how somebody is", description: "Learn how to ask about other people's feeling", completed: false },
      { id: 4, name: "Checkpoint", description: "Test your skills to access the next chapter", completed: false },
    ],
  },
  {
    title: "Chương 2: Chào hỏi",
    progress: 50,
    lessons: [
      { id: 5, name: "Say how you are!", description: "Talk about how you feel", completed: true },
      { id: 6, name: "Referring to a person", description: "Learn the singular pronouns 'I' and 'you'", completed: true },
      { id: 7, name: "Asking how somebody is", description: "Learn how to ask about other people's feeling", completed: false },
      { id: 8, name: "Checkpoint", description: "Test your skills to access the next chapter", completed: false },
    ],
  },
];

const Home = () => {
  const nav = useNavigate()
  const handleLessonClick = (lessonId) => {
   nav('/lesson')
  };

  return (
    <div className="min-h-screen mx-auto w-bigcard px-16">
      <h1 className="text-2xl font-bold text-main my-4 ">Lộ trình học</h1>
      <div className="rounded-lg shadow px-10 py-4 border border-gray-300">

      {chapters.map((chapter, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">{chapter.title}</h2>
          <div className="w-full bg-gray-300 rounded-full h-2 my-4">
            <div
              className="bg-main h-2 rounded-full"
              style={{ width: `${chapter.progress}%` }}
            ></div>
          </div>
          <div className="space-y-4">
            {chapter.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                  lesson.completed ? "bg-green-100 border-green-400" : "bg-gray-100 border-gray-300"
                }`}
                onClick={() => handleLessonClick(lesson.id)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700">{lesson.name}</h3>
                    <p className="text-sm text-gray-500">{lesson.description}</p>
                  </div>
                </div>
                {lesson.completed && (
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
      </div>
  );
};

export default Home;
