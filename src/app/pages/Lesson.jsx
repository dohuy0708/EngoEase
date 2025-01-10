import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const lessonSteps = [
  {
    type: "video",
    content: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Thay bằng URL video thực tế
      caption: "Dylan gets a little confused when he meets Emily and Anna.",
    },
  },
  {
    type: "question",
    content: {
      question: "How would you greet someone you've just met?",
      answers: ["Hello!", "Goodbye!", "See you later!"],
      correctAnswer: 0,
    },
  },
];

const Lesson = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const nav = useNavigate();

  const handleNext = () => {
    if (currentStep < lessonSteps.length) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsCorrect(null);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerClick = (index) => {
    if (!isAnswered) {
      setSelectedAnswer(index);
      const { correctAnswer } = lessonSteps[currentStep].content;
      setIsAnswered(true);
      setIsCorrect(index === correctAnswer);
    }
  };

  const renderStepContent = (step) => {
    if (currentStep >= lessonSteps.length) {
      return (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎉 Chúc mừng bạn đã hoàn thành bài học! 🎉
          </h2>
          <button
            onClick={() => nav("/")}
            className="mt-4 px-6 py-2 bg-main text-white rounded-lg hover:bg-main/90"
          >
            Học bài khác
          </button>
        </div>
      );
    }

    const { type, content } = step;

    switch (type) {
      case "video":
        return (
          <div className="flex flex-col items-center justify-center">
            <video
              className="w-3/4 rounded-lg shadow-md mb-4"
              controls
              src={content.videoUrl}
            ></video>
            <p className="text-gray-500 italic">{content.caption}</p>
          </div>
        );
      case "question":
        return (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-gray-700 mb-4">{content.question}</h2>
            <div className="space-y-2">
              {content.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full py-2 px-4 rounded-lg border 
                  ${
                    isAnswered
                      ? index === content.correctAnswer
                        ? "bg-green-100 text-green-700 border-green-500"
                        : selectedAnswer === index
                        ? "bg-red-100 text-red-700 border-red-500"
                        : "bg-gray-100"
                      : "hover:bg-main hover:text-white bg-gray-100 text-gray-700 border-gray-300"
                  }`}
                  disabled={isAnswered}
                >
                  {answer}
                </button>
              ))}
            </div>
            {isAnswered && (
              <p
                className={`mt-4 text-lg font-semibold ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrect ? "Correct!" : "Wrong answer!"}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-[946px] mx-auto px-4 py-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-main">Sơ cấp A1</h1>
        <button
          onClick={() => nav("/")}
          className="text-main text-2xl hover:text-cyan-600 flex items-center"
        >
          <ArrowLeftIcon className="h-5 mr-2 font-medium" />
          Bài khác
        </button>
      </div>
      <div className="flex-grow flex items-center">
        <div className="w-full min-h-[360px]">
          {currentStep < lessonSteps.length
            ? renderStepContent(lessonSteps[currentStep])
            : renderStepContent({})}
        </div>
      </div>
      {currentStep < lessonSteps.length && (
        <div className="flex justify-between">
          <button
            className={`py-2 px-6 bg-gray-200 text-gray-700 rounded-lg ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
            }`}
            disabled={currentStep === 0}
            onClick={handlePrevious}
          >
            Quay lại
          </button>
          <button
            className={`py-2 px-6 bg-main text-white rounded-lg ${
              currentStep === lessonSteps.length - 1 && isAnswered
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-main/90"
            }`}
            disabled={currentStep === lessonSteps.length - 1 && !isAnswered}
            onClick={handleNext}
          >
            Tiếp tục
          </button>
        </div>
      )}
    </div>
  );
};

export default Lesson;
