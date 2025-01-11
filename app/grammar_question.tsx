import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, Alert } from 'react-native';
import { Bar } from 'react-native-progress'; // Import thư viện react-native-progress

const { width } = Dimensions.get('window');

const GrammarQuestion: React.FC = () => {
  const [progress, setProgress] = useState(0.25); // Tiến trình bắt đầu ở 25%
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Trạng thái đúng/sai
  const [currentQuestion, setCurrentQuestion] = useState(0); // Câu hỏi hiện tại
  const [correctCount, setCorrectCount] = useState(0); // Đếm số câu trả lời đúng

  const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin'],
      correct: 'Paris',
    },
    {
      question: 'What is 2 + 2?',
      answers: ['3', '4', '5', '6'],
      correct: '4',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correct: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      answers: ['Elephant', 'Whale', 'Shark', 'Giraffe'],
      correct: 'Whale',
    },
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const isAnswerCorrect = answer === questions[currentQuestion].correct;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setCorrectCount(correctCount + 1); // Tăng số đáp án đúng nếu đúng
    }
  };

  const handleSkip = () => {
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const nextIndex = currentQuestion + 1;
      setCurrentQuestion(nextIndex);
      setProgress((nextIndex + 1) / questions.length); // Cập nhật tiến trình
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      Alert.alert(
        'Quiz Completed',
        `You answered ${correctCount} out of ${questions.length} questions correctly!`,
        [{ text: 'OK', onPress: () => router.push('/grammar_courses') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f58084" barStyle="light-content" />

      {/* Thanh tiến trình */}
      <Bar progress={progress} color="#49BBBD" width={width * 0.8} style={styles.progressBar} />

      {/* Hiển thị số đáp án đúng */}
      <Text style={styles.correctCount}>
        Correct Answers: {correctCount}/{questions.length}
      </Text>

      {/* Nội dung câu hỏi */}
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>

      {/* Đáp án */}
      <View style={styles.answersContainer}>
        {questions[currentQuestion].answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.answerButton,
              selectedAnswer === answer && (isCorrect ? styles.correctAnswer : styles.wrongAnswer),
              selectedAnswer !== answer &&
                answer === questions[currentQuestion].correct &&
                selectedAnswer !== null &&
                styles.correctAnswer, // Đánh dấu đáp án đúng khi chọn sai
            ]}
            onPress={() => handleAnswer(answer)}
            disabled={selectedAnswer !== null} // Không cho chọn lại nếu đã chọn
          >
            <Text style={styles.answerText}>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Nút điều khiển */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        {selectedAnswer && (
          <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  progressBar: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  correctCount: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#49BBBD',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#345c74',
  },
  answersContainer: {
    marginTop: 20,
  },
  answerButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  correctAnswer: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  wrongAnswer: {
    backgroundColor: '#f44336',
    borderColor: '#f44336',
  },
  answerText: {
    textAlign: 'center',
    color: '#345c74',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  skipButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#49BBBD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GrammarQuestion;
