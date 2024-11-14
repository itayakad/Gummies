import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';

function Quiz() {
  const navigate = useNavigate();

  // State for loading questions from CSV, tracking answers, etc.
  const [questions, setQuestions] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [solutionCounts, setSolutionCounts] = useState({}); // Track solution counts

  useEffect(() => {
    console.log("Attempting to load CSV file...");
    Papa.parse('/questions.csv', {
      download: true,
      header: true,
      complete: (result) => {
        console.log("CSV file loaded:", result.data); // Check CSV data
        const parsedQuestions = parseQuestions(result.data);
        console.log("Parsed Questions:", parsedQuestions); // Check parsed questions
        setQuestions(parsedQuestions);
      },
      error: (error) => {
        console.error("Error loading CSV file:", error);
      }
    });    
  }, []);

  // Parse questions from CSV data
  // Parse questions from CSV data
  const parseQuestions = (data) => {
    const parsedQuestions = [];
    let currentQuestion = null;
    let currentAnswers = {}; // Dictionary for answers and their solutions
    let options = []; // Array to store the answer options for each question
  
    data.forEach((row) => {
      if (row.Question) {
        // If we have a question and accumulated answers, save them
        if (currentQuestion) {
          parsedQuestions.push({ ...currentQuestion, answers: currentAnswers, options });
        }
  
        // Start a new question object
        currentQuestion = {
          text: row.Question,
          name: row.Question
        };
  
        // Reset answer dictionary and options for the new question
        currentAnswers = {};
        options = [];
      }
  
      // Add each answer and its solutions, and also to the options array
      if (row.Answer) {
        currentAnswers[row.Answer] = [
          row["Solution 1"],
          row["Solution 2"],
          row["Solution 3"],
          row["Solution 4"],
          row["Solution 5"]
        ].filter(Boolean); // Remove any empty solutions
  
        options.push(row.Answer); // Add to options for dropdown
      }
    });
  
    // Push the last question and its answers/options into parsedQuestions
    if (currentQuestion) {
      parsedQuestions.push({ ...currentQuestion, answers: currentAnswers, options });
    }
  
    return parsedQuestions;
  };
  

  // Start the quiz
  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  // Update solution counts
  const updateSolutionCounts = (solutions) => {
    const updatedCounts = { ...solutionCounts };

    solutions.forEach((solution) => {
      if (solution) { // Ensure solution is not empty
        if (updatedCounts[solution]) {
          updatedCounts[solution] += 1;
        } else {
          updatedCounts[solution] = 1;
        }
      }
    });

    setSolutionCounts(updatedCounts);
    console.log("Updated Solution Counts:", updatedCounts); // Log updated solution counts for debugging
  };

// Handle question submission
const handleNextQuestion = (e) => {
  e.preventDefault();

  // Retrieve the current question object
  const currentQuestion = questions[currentQuestionIndex];
  console.log("Current Question:", currentQuestion);

  // Retrieve the user’s answer
  const userAnswer = answers[currentQuestion.name];
  console.log("User Answer:", userAnswer);

  // Retrieve the solutions based on the user's answer from the answer dictionary
  const solutions = currentQuestion.answers[userAnswer];
  console.log("Solutions for Selected Answer:", solutions);

  // Update the solution counts if solutions were found
  if (solutions) {
    updateSolutionCounts(solutions);
  } else {
    console.error("No solutions found for user answer:", userAnswer);
  }

  // Move to the next question or complete the quiz
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else {
    setQuizCompleted(true);
  }
};


  
  // Handle "See Results" button
  const handleSeeResults = () => {
    console.log("Final solution counts:", solutionCounts);
    navigate("/recommendations", { state: { solutionCounts } });
  };

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      {/* Start Screen */}
      {!isQuizStarted ? (
        <div className="start-screen">
          <h2>Welcome to the Health Quiz!</h2>
          <p>
            This quiz will ask you a few questions to understand your health
            needs and preferences. Based on your responses, we’ll provide
            tailored recommendations for your daily gummies.
          </p>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : !quizCompleted && currentQuestion ? (
        <div className="question-screen">
          <h2>Health Quiz</h2>
          <p>{currentQuestion?.text}</p>

          <form onSubmit={handleNextQuestion}>
            {currentQuestion?.options && (
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
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="completion-screen">
          <h2>Thank you for completing the quiz!</h2>
          <p>We’ve collected your responses and tailored recommendations for you.</p>
          <button onClick={handleSeeResults}>See Results</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
