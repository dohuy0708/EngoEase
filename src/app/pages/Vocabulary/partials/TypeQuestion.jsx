import React, { useState } from 'react';

export default function TypeQuestion({ question, userAnswer, onAnswer }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.slice(0, question.answer.length); // Giới hạn số ký tự
    setInput(value);
  };

  const handleSubmit = () => {
    if (input.length === question.answer.length) { // Chỉ submit khi đủ ký tự
      onAnswer(input);
    }
  };

  const handleDontKnow = () => {
    setInput(question.answer);
    onAnswer(question.answer);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mt-36 flex flex-col items-center mx-auto">
        <p className="text-gray-600 text-lg text-center">{question.hint}</p>
        <input
  type="text"
  value={input}
  onChange={handleInputChange}
  style={{
    width: `${question.answer.length * 100}px`, // Tính toán độ rộng theo độ dài đáp án
    letterSpacing: '0.5em', // Tạo khoảng cách giữa các chữ
  }}
  className="px-4 py-2 border-b-2 mt-4 border-gray-300 focus:border-main outline-none text-center text-3xl"
  placeholder="Type your answer"
  maxLength={question.answer.length} // Giới hạn số ký tự
/>
<div className="absolute left-0 right-0 -bottom-0.5">
  <div
    className="border-b-2 border-main transition-all duration-300"
    style={{
      width: `${(input.length / question.answer.length) * 100}%`, // Thanh khớp với độ dài nội dung nhập
      maxWidth: `${question.answer.length * 100}px`, // Đảm bảo thanh không vượt quá chiều rộng input
      margin: '0 auto', // Căn giữa thanh
    }}
  />
</div>

      </div>

      <div className="flex mt-12 justify-center space-x-4">
        <button
          onClick={handleDontKnow}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          I don't know
        </button>
        <button
          onClick={handleSubmit}
          disabled={input.length !== question.answer.length} // Vô hiệu hóa khi chưa đủ ký tự
          className={`px-6 py-2 rounded-md text-white ${
            input.length === question.answer.length
              ? 'bg-main hover:bg-cyan-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
