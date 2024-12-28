import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const quizQuestions = [
  {
    question: "What is the primary purpose of a balance sheet?",
    options: [
      "To show a company's revenue over time",
      "To display a snapshot of a company's financial position at a specific point in time",
      "To calculate the company's profit margin",
      "To predict future cash flows"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT considered a liquid asset?",
    options: [
      "Cash",
      "Marketable securities",
      "Accounts receivable",
      "Real estate"
    ],
    correctAnswer: 3
  },
  {
    question: "What does ROI stand for in finance?",
    options: [
      "Return on Investment",
      "Rate of Inflation",
      "Risk of Insolvency",
      "Ratio of Income"
    ],
    correctAnswer: 0
  },
  {
    question: "Which financial statement shows a company's revenues and expenses over a period of time?",
    options: [
      "Balance Sheet",
      "Cash Flow Statement",
      "Income Statement",
      "Statement of Retained Earnings"
    ],
    correctAnswer: 2
  },
  {
    question: "What is diversification in investment?",
    options: [
      "Investing all your money in one high-performing stock",
      "Spreading investments across various financial instruments to reduce risk",
      "Frequently buying and selling stocks",
      "Investing only in government bonds"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the formula for calculating net profit?",
    options: [
      "Revenue - Cost of Goods Sold",
      "Revenue - Total Expenses",
      "Revenue - Operating Expenses",
      "Revenue - Taxes"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the term for the original cost of an asset minus accumulated depreciation?",
    options: [
      "Fair market value",
      "Book value",
      "Salvage value",
      "Net realizable value"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is an example of a fixed expense?",
    options: [
      "Utility bills",
      "Employee wages",
      "Rent or lease payments",
      "Raw material costs"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the main goal of a monetary policy?",
    options: [
      "To control inflation and stabilize the currency",
      "To increase government spending",
      "To create employment opportunities",
      "To regulate international trade"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of a financial audit?",
    options: [
      "To provide investment advice",
      "To ensure compliance with tax laws",
      "To assess the accuracy of financial statements",
      "To predict future financial performance"
    ],
    correctAnswer: 2
  },
  {
    question: "What does EPS stand for in finance?",
    options: [
      "Earnings Per Share",
      "Equity Performance Score",
      "Economic Profit Summary",
      "Enterprise Profit System"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following describes a bull market?",
    options: [
      "A market experiencing a steady decline in prices",
      "A market with stable prices",
      "A market experiencing rising prices and investor optimism",
      "A market with high volatility and no clear direction"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the time value of money principle?",
    options: [
      "Money today is worth the same as money in the future",
      "Money today is worth less than money in the future",
      "Money today is worth more than money in the future due to earning potential",
      "Money today and in the future have no financial significance"
    ],
    correctAnswer: 2
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">

<section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 relative z-10 mt-12"  
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-6">Financial Literacy Quiz</h1>
    <p className="text-xl mb-8 max-w-3xl">
    Test your knowledge of finance and investment concepts.
    </p>
  </motion.div>
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
</section> 

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl mb-2 text-indigo-600 font-semibold">
                  {quizCompleted ? "Quiz Completed!" : `Question ${currentQuestion + 1} of ${quizQuestions.length}`}
                </h2>
                <p className="mb-4 text-gray-700">
                  {quizCompleted ? "Here's your result:" : "Select the best answer:"}
                </p>
                <AnimatePresence mode="wait">
                  {quizCompleted ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="text-3xl font-bold text-center mb-4 text-green-600">
                        Your Score: {score} / {quizQuestions.length}
                      </p>
                      <p className="text-center text-gray-600">
                        {score === quizQuestions.length
                          ? "Excellent! You're a financial expert!"
                          : score >= quizQuestions.length / 2
                          ? "Good job! You have a solid understanding of finance."
                          : "Keep learning! There's room for improvement."}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="text-lg mb-4 text-gray-800">{quizQuestions[currentQuestion].question}</p>
                      <div className="space-y-4">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id={`option-${index}`}
                              name="answer"
                              value={index}
                              checked={selectedAnswer === index}
                              onChange={() => handleAnswerSelection(index)}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`option-${index}`} className="text-lg text-gray-700">{option}</label>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex justify-end p-6">
                {quizCompleted ? (
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
                  >
                    Restart Quiz
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className={`px-6 py-2 rounded-md shadow-md focus:outline-none ${
                      selectedAnswer === null
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
