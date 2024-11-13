import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const navigate = useNavigate();

  // Define the quiz questions
  const questions = [
    { id: 1, text: "What is your age?", inputType: "number", name: "age" },
    { id: 2, text: "Do you have any specific health concerns?", inputType: "text", name: "healthConcerns" },
    { id: 3, text: "What is your diet preference?", inputType: "select", name: "dietPreference", options: ["Vegan", "Vegetarian", "No Preference"] },
  ];

  // State for current question, answers, and completion status
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Start the quiz
  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  // Handle question submission
  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  // Handle "See Results" button
  const handleSeeResults = () => {
    console.log("Quiz Results:", answers);
    navigate("/recommendations");
  };

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      {/* Start Screen */}
      {!isQuizStarted ? (
        <div className="start-screen">
          <h2>Welcome to the Health Quiz!</h2>
          <p>This quiz will ask you a few questions to understand your health needs and preferences. Based on your responses, we’ll provide tailored recommendations for your daily gummies.</p>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : (
        !quizCompleted ? (
          <div className="question-screen">
            <h2>Health Quiz</h2>
            <p>{currentQuestion.text}</p>

            <form onSubmit={handleNextQuestion}>
              {currentQuestion.inputType === "select" ? (
                <select
                  name={currentQuestion.name}
                  onChange={handleChange}
                  required
                  value={answers[currentQuestion.name] || ""}
                >
                  <option value="">Select an option</option>
                  {currentQuestion.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={currentQuestion.inputType}
                  name={currentQuestion.name}
                  placeholder="Your answer"
                  onChange={handleChange}
                  required
                  value={answers[currentQuestion.name] || ""}
                />
              )}
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="completion-screen">
            <h2>Thank you for completing the quiz!</h2>
            <p>We’ve collected your responses and tailored recommendations for you.</p>
            <button onClick={handleSeeResults}>See Results</button>
          </div>
        )
      )}
    </div>
  );
}

export default Quiz;
