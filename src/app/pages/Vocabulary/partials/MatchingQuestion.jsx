import React, { useState } from 'react';

export default function MatchingQuestion({ pairs, onAnswer }) {
  const [selectedWord, setSelectedWord] = useState(null);
  const [matches, setMatches] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);

  const handleWordClick = (word) => {
    if (selectedWord === null) {
      setSelectedWord(word);
    } else {
      // Check if the selected pair matches
      const isCorrect = pairs.some(
        (pair) =>
          (pair.word === selectedWord && pair.meaning === word) ||
          (pair.meaning === selectedWord && pair.word === word)
      );

      if (isCorrect) {
        setMatches((prev) => [...prev, selectedWord, word]);
        onAnswer(matches.length / 2 + 1);
      } else {
        setWrongPair([selectedWord, word]); // Temporarily mark the wrong pair
        setTimeout(() => setWrongPair(null), 2000); // Reset after 2 seconds
      }

      setSelectedWord(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        {pairs.map((pair) => (
          <button
            key={`word-${pair.id}`}
            onClick={() => handleWordClick(pair.word)}
            disabled={matches.includes(pair.word)}
            className={`w-full p-3 rounded-md border text-center ${
              matches.includes(pair.word)
                ? "bg-green-200 border-green-500"
                : wrongPair && wrongPair.includes(pair.word)
                ? "bg-red-200 border-red-500"
                : selectedWord === pair.word
                ? "bg-cyan-100 border-main"
                : "border-gray-300 hover:border-main"
            }`}
          >
            {pair.word}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {pairs.map((pair) => (
          <button
            key={`meaning-${pair.id}`}
            onClick={() => handleWordClick(pair.meaning)}
            disabled={matches.includes(pair.meaning)}
            className={`w-full p-3 rounded-md border text-center ${
              matches.includes(pair.meaning)
                ? "bg-green-200 border-green-500"
                : wrongPair && wrongPair.includes(pair.meaning)
                ? "bg-red-200 border-red-500"
                : selectedWord === pair.meaning
                ? "bg-cyan-100 border-main"
                : "border-gray-300 hover:border-main"
            }`}
          >
            {pair.meaning}
          </button>
        ))}
      </div>
    </div>
  );
}
