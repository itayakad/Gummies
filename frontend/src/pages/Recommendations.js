import React from 'react';

function Recommendations() {
  return (
    <div className="recommendations">
      <h2>Your Personalized Recommendations</h2>
      <p>Based on your quiz results, here are the recommended supplements for you:</p>
      <ul>
        <li>Vitamin D - Supports immune function and bone health</li>
        <li>Omega-3 - Helps reduce inflammation and supports heart health</li>
        <li>Magnesium - Aids in muscle function and relaxation</li>
      </ul>
      <p>Check back here after completing the quiz to see more recommendations!</p>
    </div>
  );
}

export default Recommendations;
