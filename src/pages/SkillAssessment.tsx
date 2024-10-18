import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const SkillAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Mock assessment questions
  const questions = [
    {
      question: "What is the output of console.log(typeof [])?",
      options: ["array", "object", "undefined", "null"],
      correctAnswer: 1
    },
    {
      question: "Which method is used to add an element to the end of an array?",
      options: ["push()", "pop()", "unshift()", "shift()"],
      correctAnswer: 0
    },
    {
      question: "What does the 'use strict' directive do in JavaScript?",
      options: ["Enables strict typing", "Enforces stricter parsing and error handling", "Disables all warnings", "Enables new ES6 features"],
      correctAnswer: 1
    }
  ];

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>
        <p className="text-xl mb-4">You scored {score} out of {questions.length}</p>
        <div className="mb-6">
          {score === questions.length ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="mr-2" />
              Excellent! You've mastered this skill.
            </div>
          ) : (
            <div className="flex items-center text-yellow-600">
              <XCircle className="mr-2" />
              Good effort! There's room for improvement.
            </div>
          )}
        </div>
        <button
          onClick={restartAssessment}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Retake Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">JavaScript Skill Assessment</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">{questions[currentQuestion].question}</p>
      </div>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="w-full text-left p-3 border rounded hover:bg-gray-100 transition duration-300"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-4 text-gray-600">
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
};

export default SkillAssessment;