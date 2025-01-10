import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const lessonContent = {
  1: {
    title: "Adjectives",
    theory: "Adjectives are words that describe or modify nouns and pronouns. Examples: beautiful, large, happy.",
  },
  2: {
    title: "Adverbs",
    theory:
      "Adverbs modify verbs, adjectives, or other adverbs. They provide information about place, time, frequency, and manner. Examples: quickly, very, often.",
  },
  3: {
    title: "Verbs: Present",
    theory:
      "The present tense describes actions happening now or regularly. Examples: He runs every morning. She is studying English.",
  },
  4: {
    title: "Verbs: Past",
    theory:
      "The past tense describes actions that happened in the past. Examples: I walked to school yesterday. They were watching TV last night.",
  },
  5: {
    title: "Verbs: Future",
    theory:
      "The future tense describes actions that will happen. Examples: She will visit Paris next month. We are going to watch a movie tonight.",
  },
  6: {
    title: "Verbs: Conditional",
    theory:
      "Conditional verbs describe actions that depend on a condition. Examples: If it rains, we will stay home. She would travel if she had time.",
  },
};

const LessonDetail = ({id,onBack,toPractice}) => {

  const lesson = lessonContent[id];

  return (
      <div className=" px-6">
      <div className="flex items-center justify-between mb-6">
             <h1 className="text-2xl font-semibold text-main">{lesson.title}</h1>
             <button
               onClick={onBack}
               className="text-main text-2xl hover:text-cyan-600 flex items-center"
             >
               <ArrowLeftIcon className="h-5 mr-2 font-medium" />
               Bài khác
             </button>
           </div>

      <div className="bg-white rounded-lg shadow-lg  min-h-[450px] p-6 mb-8">
        <img src="/grammarEx.png"/>
      <p className="text-gray-700 mb-6">{lesson.theory}</p>
      </div>
      <div className="text-right"
      >

      <button
        className="py-2 px-6 bg-main  text-white rounded-lg hover:bg-main/70"
        onClick={toPractice}
        >
        Luyện tập
      </button>
        </div>
    </div>
  );
};

export default LessonDetail;
