import React from 'react';

function Quiz() {
  return (
    <div className="quiz">
      <h2>Health Quiz</h2>
      <p>Answer the following questions to help us understand your health needs.</p>
      <p><strong>Question 1:</strong> What is your age?</p>
      <input type="number" placeholder="Enter your age" />
      <p><strong>Question 2:</strong> Do you have any specific health concerns?</p>
      <input type="text" placeholder="e.g., diabetes, hypertension" />
      <button>Submit Quiz</button>
    </div>
  );
}

export default Quiz;
