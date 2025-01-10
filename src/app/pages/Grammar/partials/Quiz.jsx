import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "1. I __________ dinner when the phone rang.",
    options: [
      { id: "A", text: "was cooking", correct: true },
      { id: "B", text: "cooked", correct: false },
      { id: "C", text: "was cookied", correct: false },
      { id: "D", text: "had cooked", correct: false },
    ],
  },
  {
    id: 2,
    question: "2. I __________ for the bus for 20 minutes.",
    options: [
      { id: "A", text: "waited", correct: false },
      { id: "B", text: "had waited", correct: true },
      { id: "C", text: "was waiting", correct: false },
      { id: "D", text: "waits", correct: false },
    ],
  },
  {
    id: 3,
    question: "3. By the time we arrived, they __________.",
    options: [
      { id: "A", text: "left", correct: false },
      { id: "B", text: "had left", correct: true },
      { id: "C", text: "were leaving", correct: false },
      { id: "D", text: "leave", correct: false },
    ],
  },
];

const Quiz = ({ title, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (selectedOption) {
      const correct = selectedOption.correct;
      setIsCorrect(correct);
      setShowResult(true);

      setResults((prevResults) => [
        ...prevResults,
        { question: questions[currentQuestion].question, correct },
      ]);

      if (correct) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(null);
  };

  const handleSkipQuestion = () => {
    setResults((prevResults) => [
      ...prevResults,
      { question: questions[currentQuestion].question, correct: false },
    ]);
    handleNextQuestion();
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (currentQuestion === questions.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-6">
        <h1 className="text-3xl font-bold text-main">Quiz Summary</h1>
        <p className="mt-4 text-lg">
          You scored <span className="font-semibold">{score}</span> out of{" "}
          {questions.length}.
        </p>
        <div className="mt-6 w-full max-w-md">
          {results.map((result, index) => (
            <div
              key={index}
              className={`p-4 mb-2 rounded-lg shadow ${
                result.correct
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <p>
                {index + 1}. {result.question}
              </p>
              <p className="text-sm">
                {result.correct ? "Correct" : "Incorrect"}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={onBack}
          className="mt-4 px-6 py-2 bg-main text-white rounded-md hover:bg-main/90"
        >
          Back to Topics
        </button>
      </div>
    );
  }

  return (
    <div className="px-6">
      <div className="flex items-end justify-between mb-6">
        <h1 className="text-2xl font-semibold text-main">{title}</h1>
        <div className="relative h-2 w-[65%] bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-2 bg-main rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <button
          onClick={onBack}
          className="text-main text-2xl hover:text-cyan-600 flex items-center"
        >
          <ArrowLeftIcon className="h-5 mr-2 font-medium" />
          Bài khác
        </button>
      </div>

      <div className="bg-white rounded-lg flex flex-col items-center justify-between shadow-lg mt-4 h-[450px] mb-8 p-6">
        <h1 className="text-lg font-semibold text-center">
          {questions[currentQuestion].question}
        </h1>
        <div className="grid grid-cols-2 gap-4 w-3/4">
          {questions[currentQuestion].options.map((option) => (
            <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className={`p-4 border rounded-lg ${
              selectedOption === option ? "border-main bg-cyan-100" : "hover:border-gray-300"
            } ${
              showResult
                ? option.correct
                  ? "text-green-500 border-green-500 bg-green-100"
                  : selectedOption === option
                  ? "bg-red-100 text-red-500 border-red-500"
                  : ""
                : ""
            }`}
            disabled={showResult}
          >
              {option.id}. {option.text}
            </button>
          ))}
        </div>
        <div className="flex justify-between w-full px-6">
          <button
            onClick={handleSkipQuestion}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Bỏ qua
          </button>
          {showResult ? (
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 bg-main text-white rounded-md"
            >
              Tiếp
            </button>
          ) : (
            <button
              onClick={handleCheckAnswer}
              className={`px-4 py-2 ${
                selectedOption
                  ? "bg-main text-white"
                  : "bg-gray-300 text-gray-700"
              } rounded-md`}
              disabled={!selectedOption}
            >
              Kiểm tra
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
