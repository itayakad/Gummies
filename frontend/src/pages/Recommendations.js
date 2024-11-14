import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RecommendationsChart from './RecommendationsChart'; // Import the chart component

function Recommendations() {
  const location = useLocation();
  const { solutionCounts } = location.state || {};
  const [sortedRecommendations, setSortedRecommendations] = useState([]);

  useEffect(() => {
    if (solutionCounts) {
      const totalCount = Object.values(solutionCounts).reduce((sum, count) => sum + count, 0);
      const sorted = Object.entries(solutionCounts)
        .map(([solution, count]) => ({
          solution, // Name of the solution
          count, // Count of occurrences
          percentage: ((count / totalCount) * 100).toFixed(2) // Calculate percentage
        }))
        .sort((a, b) => b.count - a.count); // Sort by count in descending order
      setSortedRecommendations(sorted); // Update state with sorted recommendations
    }
  }, [solutionCounts]);

  return (
    <div className="recommendations">
      <h2>Your Supplement Recommendations</h2>
      {sortedRecommendations.length > 0 ? (
        <RecommendationsChart data={sortedRecommendations} />
      ) : (
        <p>No data available. Please complete the quiz.</p>
      )}
    </div>
  );
}

export default Recommendations;
